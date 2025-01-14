jQuery(document).ready(function () {
	function check_webp_feature(feature, callback) {
		var kTestImages = {
			lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
			lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
			alpha:
				'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
			animation:
				'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
		};
		var img = new Image();
		img.onload = function () {
			var result = img.width > 0 && img.height > 0;
			callback(feature, result);
		};
		img.onerror = function () {
			callback(feature, false);
		};
		img.src = 'data:image/webp;base64,' + kTestImages[feature];
	}
	check_webp_feature('lossy', function (feature, isSupported) {
		if (isSupported) {
			document.querySelector('body').classList.add('webp'); // webp is supported,
			// you can cache the result here if you want
		}
	});

	if (jQuery('.wrap-menu').length) {
		jQuery('.menu-btn').click(function () {
			jQuery(this).parents('.wrap-header').toggleClass('is-open');
			jQuery(this).toggleClass('is-open');
			jQuery('.sidebar').toggleClass('is-open');
			jQuery('body').toggleClass('overlay-menu');
		});
	}

	jQuery('.menu__item:has(ul)').addClass('has-sub-menu');

	jQuery('.menu__item.has-sub-menu > .menu__link').append(
		'<i class="icon-arrowDown"></i>'
	);

	jQuery('.sub-menu').hide();

	jQuery('.menu__item--current .sub-menu').show();

	function setupHover() {
		jQuery('.menu__item')
			.not('.menu__item--current')
			.hover(
				function () {
					var $this = jQuery(this);
					if ($this.hasClass('has-sub-menu')) {
						$this.addClass('is-open');
						$this.find('.sub-menu').stop(true, true).slideDown(300);
					}
				},
				function () {
					var $this = jQuery(this);
					if ($this.hasClass('has-sub-menu')) {
						$this.removeClass('is-open');
						$this.find('.sub-menu').stop(true, true).slideUp(300);
					}
				}
			);
	}

	function setupClick() {
		jQuery('.icon-arrowDown').on('click', function (event) {
			event.preventDefault();
			var $parentItem = jQuery(this).closest('.menu__item');
			if (!$parentItem.hasClass('menu__item--current')) {
				if ($parentItem.hasClass('is-open')) {
					$parentItem.removeClass('is-open');
					$parentItem.find('.sub-menu').stop(true, true).slideUp(300);
				} else {
					$parentItem.addClass('is-open');
					$parentItem.find('.sub-menu').stop(true, true).slideDown(300);
				}
			}
		});
	}

	function toggleMenu() {
		if (jQuery(window).width() < 1100) {
			jQuery('.menu__item').off('mouseenter mouseleave');
			setupClick();
		} else {
			jQuery('.icon-arrowDown').off('click');
			jQuery('.sub-menu').hide();
			jQuery('.menu__item').off('click');
			setupHover();

			jQuery('.menu__item--current .sub-menu').show();
		}
	}

	toggleMenu();

	jQuery(window).resize(function () {
		toggleMenu();
	});

	jQuery('.results-nav__link').on('click', function () {
		var dataTab = jQuery(this).attr('data-tab');

		if (jQuery(this).closest('.results-nav').length > 0) {
			jQuery(this)
				.closest('.results-nav')
				.find('.results-nav__item.is-active')
				.removeClass('is-active');
			jQuery(this).closest('.results-nav__item').addClass('is-active');

			jQuery(this)
				.closest('.results')
				.find('.results-content__tab[data-tab-content=' + dataTab + ']')
				.addClass('is-active')
				.siblings('.results-content__tab')
				.removeClass('is-active');
		} else {
			jQuery(this)
				.closest('.results')
				.find('.results-content__tab[data-tab-content=' + dataTab + ']')
				.addClass('is-active')
				.siblings('.results-content__tab')
				.removeClass('is-active');
		}
	});

	jQuery('.filter-search').on('input', function (e) {
		var searchText = jQuery(this)
			.find('.filter-search__input')
			.val()
			.toLowerCase();

		var $table = jQuery(this).closest('.wrap-manage-table').find('table');

		$table.find('tbody tr').each(function () {
			var rowText = $(this).text().toLowerCase();
			jQuery(this).toggle(rowText.includes(searchText));
		});
	});
	jQuery('.table').bootstrapTable();

	// ============================================

	jQuery('.wrap-selects').each(function () {
		const $tab = jQuery(this);
		const $resultsFilterData = $tab.find('.results-filter-data').hide();

		$tab.find('.wrap-results-filter').each(function () {
			const $wrapper = jQuery(this);
			const $select = $wrapper.find('.select-filter');
			const $resultsFilterSum = $wrapper.find('.results-filter-sum').hide();

			// Начальная инициализация значений из <select>
			initializeSelectedOptions($wrapper, $select);

			$select.find('option').each(function () {
				const value = jQuery(this).val();
				const text = jQuery(this).text();
				const filter = jQuery(this).data('filter');

				// Проверка на наличие элемента в dropdown-menu, чтобы избежать дублирования
				if (
					$wrapper.find(`.dropdown-menu__item[data-value="${value}"]`)
						.length === 0
				) {
					$wrapper.find('.dropdown-menu').append(`
                    <div class="dropdown-menu__item" data-value="${value}" data-filter="${filter}">${text}</div>
                `);
				}
			});

			updateOptionsCount($wrapper);

			$wrapper.find('.custom-select__title').on('click', function () {
				$wrapper.find('.dropdown-menu').parent().toggleClass('show');
			});

			$wrapper
				.find('.dropdown-menu')
				.on('click', '.dropdown-menu__item', function () {
					const value = jQuery(this).data('value');
					const text = jQuery(this).text();
					const filter = jQuery(this).data('filter');
					const isActive = jQuery(this).hasClass('is-active');
					const allItem = $wrapper.find(
						`.dropdown-menu .dropdown-menu__item[data-filter^="all-"]`
					);

					if (!filter.startsWith('all-') && allItem.hasClass('is-active')) {
						allItem.removeClass('is-active');
						removeResultItem($wrapper, allItem.data('value'));
					}

					jQuery(this).toggleClass('is-active');

					if (filter.startsWith('all-')) {
						if (!isActive) {
							$wrapper
								.find('.dropdown-menu .dropdown-menu__item')
								.each(function () {
									if (!jQuery(this).hasClass('is-active')) {
										const itemValue = jQuery(this).data('value');
										const itemText = jQuery(this).text();
										jQuery(this).addClass('is-active');
										addResultItem($wrapper, itemValue, itemText);
									}
								});
						} else {
							$wrapper
								.find('.dropdown-menu .dropdown-menu__item')
								.each(function () {
									if (!jQuery(this).data('filter').startsWith('all-')) {
										jQuery(this).removeClass('is-active');
										removeResultItem($wrapper, jQuery(this).data('value'));
									}
								});
							removeItemsForAllFilter($wrapper, filter);
						}
					} else {
						if (isActive) {
							removeResultItem($wrapper, value);
						} else {
							addResultItem($wrapper, value, text);
						}
					}

					updateSelectStatus($wrapper, value, !isActive);
					updateOptionsCount($wrapper);
				});

			function initializeSelectedOptions($wrapper, $select) {
				$select.find('option:selected').each(function () {
					const value = jQuery(this).val();
					const text = jQuery(this).text();
					const filter = jQuery(this).data('filter');

					// Проверка, существует ли элемент в dropdown-menu
					if (
						$wrapper.find(`.dropdown-menu__item[data-value="${value}"]`)
							.length === 0
					) {
						// Добавление в dropdown-menu
						$wrapper.find('.dropdown-menu').append(`
                        <div class="dropdown-menu__item is-active" data-value="${value}" data-filter="${filter}">${text}</div>
                    `);
					}

					// Добавление в results-filter-data
					addResultItem($wrapper, value, text);
				});
				updateOptionsCount($wrapper);
			}

			function removeItemsForAllFilter($wrapper, filter) {
				$wrapper.find('.results-filter-data__item').each(function () {
					if (jQuery(this).data('filter') === filter) {
						removeResultItem($wrapper, jQuery(this).data('value'));
					}
				});
			}

			function updateOptionsCount($wrapper) {
				const count = $wrapper
					.find('.dropdown-menu__item.is-active')
					.filter(function () {
						return !jQuery(this).data('filter').startsWith('all-');
					}).length;

				$resultsFilterSum.text(count);
				count > 0
					? $resultsFilterSum.css('display', 'inline-flex')
					: $resultsFilterSum.hide();
			}

			function addResultItem($wrapper, value, text) {
				if (
					$tab.find('.results-filter-data').find(`[data-value="${value}"]`)
						.length === 0
				) {
					$tab.find('.results-filter-data').append(`
                    <div class="results-filter-data__item" data-value="${value}">${text}</div>
                `);
					showResetButton($wrapper);
					$resultsFilterData.show();
				}
			}

			function removeResultItem($wrapper, value) {
				$tab.find(`.results-filter-data__item[data-value="${value}"]`).remove();
				updateOptionsCount($wrapper);
				if (
					$tab
						.find('.results-filter-data__item')
						.not('.results-filter-data__item--reset').length === 0
				) {
					$resultsFilterData.hide();
				}
			}

			function updateSelectStatus($wrapper, value, isActive) {
				$wrapper
					.find('.select-filter option[value="' + value + '"]')
					.prop('selected', !isActive);
			}

			function resetSelection($wrapper) {
				$tab
					.find(
						'.results-filter-data__item:not(.results-filter-data__item--reset)'
					)
					.remove();
				$resultsFilterData.hide();
				$wrapper
					.find('.dropdown-menu .dropdown-menu__item')
					.removeClass('is-active');
				updateOptionsCount($wrapper);
			}

			$tab
				.find('.results-filter-data')
				.on('click', '.results-filter-data__item', function () {
					const $item = jQuery(this);
					const itemValue = $item.data('value');
					$item.remove();

					const dropdownItem = $wrapper.find(
						`.dropdown-menu__item[data-value="${itemValue}"]`
					);
					dropdownItem.removeClass('is-active');

					const selectElement = $wrapper.find('.select-filter');
					selectElement
						.find(`option[value="${itemValue}"]`)
						.prop('selected', false);

					const remainingItems = $tab
						.find('.results-filter-data__item')
						.not('.results-filter-data__item--reset');

					if (remainingItems.length === 0) {
						$wrapper
							.find(`.dropdown-menu .dropdown-menu__item[data-filter^="all-"]`)
							.each(function () {
								const allItem = jQuery(this);
								allItem.removeClass('is-active');
								removeResultItem($wrapper, allItem.data('value'));
							});
					} else {
						const currentFilter = dropdownItem.data('filter');

						if (currentFilter) {
							const correspondingAllItem = $wrapper.find(
								`.dropdown-menu .dropdown-menu__item[data-filter^="all"]`
							);
							if (
								correspondingAllItem.length > 0 &&
								correspondingAllItem.hasClass('is-active')
							) {
								correspondingAllItem.removeClass('is-active');
								removeResultItem($wrapper, correspondingAllItem.data('value'));
							}
						}
						updateResetButton($wrapper);
					}

					updateOptionsCount($wrapper);
					if (remainingItems.length === 0) {
						$resultsFilterData.hide();
					} else {
						updateResetButton($wrapper);
					}
				});

			function showResetButton($wrapper) {
				if ($tab.find('.results-filter-data__item--reset').length === 0) {
					$resultsFilterData.append(
						'<div class="results-filter-data__item results-filter-data__item--reset">Сбросить все</div>'
					);
				}
				updateResetButton($wrapper);
			}

			function updateResetButton($wrapper) {
				const $resetButton = $resultsFilterData.find(
					'.results-filter-data__item--reset'
				);
				$resetButton.appendTo($resultsFilterData);
			}

			$tab
				.find('.results-filter-data')
				.on('click', '.results-filter-data__item--reset', function () {
					resetSelection($wrapper);
				});

			function closeDropdown($wrapper) {
				$wrapper.find('.dropdown-menu').removeClass('show');
				$wrapper.find('.custom-select').removeClass('show');
			}

			jQuery(document).on('click', function (e) {
				if (!jQuery(e.target).closest($wrapper).length) {
					closeDropdown($wrapper);
				}
			});
		});
	});

	// =====================================

	jQuery('.select').selectpicker();

	flatpickr('.datepicker', {
		dateFormat: 'd.m.Y',
		locale: 'ru',
	});
	flatpickr('.timepicker', {
		enableTime: true,
		noCalendar: true,
		dateFormat: 'H:i',
		locale: 'ru',
	});

	Fancybox.bind('[data-fancybox]', {
		// Custom options for all galleries
	});

	jQuery(document).on('click', '[data-fancybox-close]', function () {
		Fancybox.close();
	});

	jQuery('.form, .form-tab').each(function () {
		jQuery(this).validate({
			errorClass: 'form__error',
			rules: {
				name: 'required',
				email: {
					required: true,
					email: true,
				},
				phone: 'required',
				msg: 'required',
				password: 'required',
			},
			messages: {
				dep: 'подсказка',
				name: 'подсказка',
				email: {
					required: 'подсказка',
					email: 'Неверная почта, попробуйте еще раз',
				},
				password: {
					required: 'подсказка',
					email: 'Неверный пароль, попробуйте еще раз',
					minlength: jQuery.validator.format('Введите более {0} символов'),
				},
				passwordOld: {
					required: 'подсказка',
					email: 'Введите старый пароль',
					minlength: jQuery.validator.format('Введите более {0} символов'),
				},
				passwordNew: {
					required: 'подсказка',
					email: 'Введите новый пароль',
					minlength: jQuery.validator.format('Введите более {0} символов'),
				},
				tg: 'подсказка',
				phone: 'подсказка',
				leader: 'подсказка',
			},
		});
	});

	if (jQuery('.form__icon--eye').length) {
		const $passwordInputs = jQuery('input[type=password]');
		const $eyes = jQuery('.form__icon--eye');

		if ($passwordInputs.length > 0 && $eyes.length > 0) {
			$eyes.each(function (index) {
				jQuery(this).on('click', function () {
					jQuery(this).toggleClass('is-show');
					const inputType =
						$passwordInputs.eq(index).attr('type') === 'password'
							? 'text'
							: 'password';
					$passwordInputs.eq(index).attr('type', inputType);
				});
			});
		}
	}

	jQuery('.wrap-form-count').each(function () {
		let $this = jQuery(this);
		let totalSeconds = 3 * 60 + 18;

		function startTimer() {
			let timerInterval = setInterval(function () {
				if (totalSeconds <= 0) {
					clearInterval(timerInterval);
					$this.find('.form-count').hide();
					$this.find('.form__link--again').show();
				} else {
					let minutes = Math.floor(totalSeconds / 60);
					let seconds = totalSeconds % 60;

					$this
						.find('.timer')
						.text(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
					totalSeconds--;
				}
			}, 1000);
		}

		startTimer();
	});

	jQuery('.accordion__item').click(function () {
		if (jQuery(this).hasClass('is-active')) {
			jQuery(this).children('.accordion__content').slideUp();
			jQuery(this).removeClass('is-active');
		} else {
			jQuery('.accordion__content').slideUp();
			jQuery('.accordion__item').removeClass('is-active');
			jQuery(this).children('.accordion__content').slideDown();
			jQuery(this).addClass('is-active');
		}
	});

	jQuery('.modal-quiz-step').hide();
	jQuery('.modal-quiz-step--1').show().addClass('is-show');
	jQuery('.btn--next').on('click', function (e) {
		e.preventDefault();

		var currentStep = jQuery(this).closest('.modal-quiz-step');
		var nextStep = currentStep.next('.modal-quiz-step');

		if (nextStep.length) {
			currentStep.hide().removeClass('is-show');
			nextStep.show().addClass('is-show');
		}
	});

	let taskCount = 0;
	jQuery('.btn-show-task').click(function () {
		jQuery(this).hide();
		addTaskBlock(jQuery(this).closest('.form'));
	});
	function addTaskBlock($form) {
		let taskCount = $form.data('task-count') || 0;
		taskCount++;
		$form.data('task-count', taskCount);

		let taskBlock = `
    <div class="form__task">
        <div class="form__title form__title--task">Создать задачу</div>
        <div class="form__item">
            <span class="form__label">Название задачи</span>
            <input type="text" class="form__input" placeholder=" " id="task-name-${taskCount}" name="task-name-${taskCount}" required>
            <label for="task-name-${taskCount}" class="form__placeholder">Напишите название задачи</label>
        </div>
        <div class="form__item">
            <span class="form__label">Описание задачи</span>
            <div class="form__wrap-textarea">
                <textarea class="form__textarea" placeholder="Подробно опишите задачу" maxlength="1000"></textarea>
                <div class="form__file file">
                    <input type="file" class="file__input" id="task-file-${taskCount}" hidden multiple>
                    <label for="task-file-${taskCount}" class="file__label"><i class="icon-attach"></i><span>файл</span></label>
                    <div class="form-file-loaded"></div>
                </div>
            </div>
            <div class="form__count-textarea"><span>0</span> / <span class="max-length">0</span></div>
        </div>
        <div class="form__item">
            <span class="form__label">Выбрать исполнителя</span>
            <div class="wrap-selects wrap-selects--tags">
                <div class="wrap-results-filter">
                    <div class="custom-select">
                        <div class="custom-select__wrap-title">
                            <div class="custom-select__results-filter-data results-filter-data"></div>
                            <div class="custom-select__title">+ Добавить сотрудника</div>
                        </div>
                        <div class="custom-select__dropdown-menu dropdown-menu"></div>
                        <select multiple class="custom-select__list select-filter" style="display:none;">
                            <option data-filter="employee-1" value="Сотрудник 1">Сотрудник 1</option>
                            <option data-filter="employee-2" value="Сотрудник 2">Сотрудник 2</option>
                            <option data-filter="employee-3" value="Сотрудник 3">Сотрудник 3</option>
                            <option data-filter="employee-4" value="Сотрудник 4">Сотрудник 4</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="form__item form__item--left">
            <button class="form__btn add-task" type="button"><span>Добавить ещё одну задачу</span></button>
        </div>
    </div>
    `;

		if ($form.find('.form__tasks').length) {
			$form.find('.form__tasks').append(taskBlock);
		} else {
			$form.append(`<div class="form__tasks"></div>`);
			$form.find('.form__tasks').append(taskBlock);
		}

		initializeSelects($form.find('.form__task').last());
		initializeCharCounter($form.find('.form__task .form__item'));

		$form
			.find('.add-task')
			.last()
			.click(function () {
				addTaskBlock($form);
			});
	}

	function initializeSelects($taskBlock) {
		const $wrap = $taskBlock.find('.wrap-selects');

		$wrap.each(function () {
			const $tab = jQuery(this);
			const $resultsFilterData = $tab.find('.results-filter-data').hide();

			$tab.find('.wrap-results-filter').each(function () {
				const $wrapper = jQuery(this);

				const $select = $wrapper.find('.select-filter');
				const $resultsFilterSum = $wrapper.find('.results-filter-sum').hide();

				$select.find('option').each(function () {
					const value = jQuery(this).val();
					const text = jQuery(this).text();

					$wrapper.find('.dropdown-menu').append(`
                    <div class="dropdown-menu__item" data-value="${value}" data-filter="${$(this).data('filter')}">${text}</div>
                `);
				});

				$wrapper.find('.custom-select__title').on('click', function () {
					$wrapper.find('.dropdown-menu').parent().toggleClass('show');
				});

				$wrapper
					.find('.dropdown-menu')
					.on('click', '.dropdown-menu__item', function () {
						const value = jQuery(this).data('value');
						const text = jQuery(this).text();
						const filter = jQuery(this).data('filter');
						const isActive = jQuery(this).hasClass('is-active');
						const allItem = $wrapper.find(
							'.dropdown-menu .dropdown-menu__item[data-filter^="all-"]'
						);

						if (!filter.startsWith('all-') && allItem.hasClass('is-active')) {
							allItem.removeClass('is-active');
							removeResultItem($wrapper, allItem.data('value'));
						}

						jQuery(this).toggleClass('is-active');

						if (filter.startsWith('all-')) {
							if (!isActive) {
								$wrapper
									.find('.dropdown-menu .dropdown-menu__item')
									.each(function () {
										if (!jQuery(this).hasClass('is-active')) {
											const itemValue = jQuery(this).data('value');
											const itemText = jQuery(this).text();
											jQuery(this).addClass('is-active');
											addResultItem($wrapper, itemValue, itemText);
										}
									});
							} else {
								$wrapper
									.find('.dropdown-menu .dropdown-menu__item')
									.each(function () {
										if (!jQuery(this).data('filter').startsWith('all-')) {
											jQuery(this).removeClass('is-active');
											removeResultItem($wrapper, jQuery(this).data('value'));
										}
									});
								removeItemsForAllFilter($wrapper, filter);
							}
						} else {
							if (isActive) {
								removeResultItem($wrapper, value);
							} else {
								addResultItem($wrapper, value, text);
							}
						}
						updateSelectStatus($wrapper, value, !isActive);
					});

				function removeItemsForAllFilter($wrapper, filter) {
					$wrapper.find('.results-filter-data__item').each(function () {
						if (jQuery(this).data('filter') === filter) {
							removeResultItem($wrapper, jQuery(this).data('value'));
						}
					});
				}

				function addResultItem($wrapper, value, text) {
					if (
						$tab.find('.results-filter-data').find(`[data-value="${value}"]`)
							.length === 0
					) {
						$tab.find('.results-filter-data').append(`
                        <div class="results-filter-data__item" data-value="${value}">${text}</div>
                    `);
						$resultsFilterData.show();
					}
				}

				function removeResultItem($wrapper, value) {
					$tab
						.find(`.results-filter-data__item[data-value="${value}"]`)
						.remove();
					if (
						$tab
							.find('.results-filter-data__item')
							.not('.results-filter-data__item--reset').length === 0
					) {
						$resultsFilterData.hide();
					}
				}

				function updateSelectStatus($wrapper, value, isActive) {
					$wrapper
						.find('.select-filter option[value="' + value + '"]')
						.prop('selected', !isActive);
				}

				function resetSelection($wrapper) {
					$tab
						.find(
							'.results-filter-data__item:not(.results-filter-data__item--reset)'
						)
						.remove();
					$resultsFilterData.hide();
					$wrapper
						.find('.dropdown-menu .dropdown-menu__item')
						.removeClass('is-active');
				}

				$tab
					.find('.results-filter-data')
					.on('click', '.results-filter-data__item', function () {
						const $item = jQuery(this);
						const itemValue = $item.data('value');
						$item.remove();

						const dropdownItem = $wrapper.find(
							`.dropdown-menu__item[data-value="${itemValue}"]`
						);
						dropdownItem.removeClass('is-active');

						const selectElement = $wrapper.find('.select-filter');
						selectElement
							.find(`option[value="${itemValue}"]`)
							.prop('selected', false);

						const remainingItems = $tab
							.find('.results-filter-data__item')
							.not('.results-filter-data__item--reset');

						if (remainingItems.length === 0) {
							$wrapper
								.find(
									`.dropdown-menu .dropdown-menu__item[data-filter^="all-"]`
								)
								.each(function () {
									const allItem = jQuery(this);
									allItem.removeClass('is-active');
									removeResultItem($wrapper, allItem.data('value'));
								});
						} else {
							const currentFilter = dropdownItem.data('filter');

							if (currentFilter) {
								const correspondingAllItem = $wrapper.find(
									`.dropdown-menu .dropdown-menu__item[data-filter^="all"]`
								);
								if (
									correspondingAllItem.length > 0 &&
									correspondingAllItem.hasClass('is-active')
								) {
									correspondingAllItem.removeClass('is-active');
									removeResultItem(
										$wrapper,
										correspondingAllItem.data('value')
									);
								}
							}
						}
					});

				$tab
					.find('.results-filter-data')
					.on('click', '.results-filter-data__item--reset', function () {
						resetSelection($wrapper);
					});

				function closeDropdown($wrapper) {
					$wrapper.find('.dropdown-menu').removeClass('show');
					$wrapper.find('.custom-select').removeClass('show');
				}

				jQuery(document).on('click', function (e) {
					if (!jQuery(e.target).closest($wrapper).length) {
						closeDropdown($wrapper);
					}
				});
			});
		});
	}

	jQuery('.form__item').each(function () {
		const $textarea = jQuery(this).find('.form__textarea');
		const maxLength = $textarea.attr('maxlength');

		jQuery(this).find('.form__count-textarea .max-length').text(maxLength);
	});
	jQuery('.form__textarea').on('input', function () {
		const $textarea = jQuery(this);

		const currentLength = $textarea.val().length;

		$textarea
			.closest('.form__item')
			.find('.form__count-textarea span:first')
			.text(currentLength);
	});
	function initializeCharCounter($item) {
		const $textarea = $item.find('.form__textarea');
		const maxLength = $textarea.attr('maxlength');

		$item.find('.form__count-textarea .max-length').text(maxLength);

		$textarea.on('input', function () {
			const currentLength = jQuery(this).val().length;
			$item.find('.form__count-textarea span:first').text(currentLength);
		});
	}
	jQuery('.form__item').each(function () {
		initializeCharCounter($(this));
	});

	function handleFileSelect($fileInput) {
		const $formFileLoaded = $fileInput
			.closest('.file')
			.find('.form-file-loaded');
		const files = $fileInput[0].files;

		if (files.length > 0) {
			$.each(files, function (index, file) {
				const fileType = file.name.split('.').pop().toLowerCase();

				const $fileItem = jQuery(`
                <div class="form-file-loaded__item ${fileType}">
                    <i class="icon-doc"></i>
                    <span>${fileType}</span>
                </div>
            `);

				$formFileLoaded.append($fileItem);
			});
		}

		updateFormItemClass($fileInput.closest('.form__item'));
	}
	function updateFormItemClass($formItem) {
		const $loadedItems = $formItem.find('.form-file-loaded__item');
		if ($loadedItems.length > 0) {
			$formItem.addClass('is-loaded');
		} else {
			$formItem.removeClass('is-loaded');
		}
	}
	jQuery(document).on('change', '.file__input', function () {
		handleFileSelect($(this));
	});
	jQuery(document).on('click', '.form-file-loaded__item', function () {
		const $formItem = jQuery(this)
			.closest('.form__file')
			.closest('.form__item');
		jQuery(this).remove();
		updateFormItemClass($formItem);

		const $fileInput = $formItem.find('.file__input');
		if ($fileInput[0].files.length > 0) {
			const dataTransfer = new DataTransfer();
			$fileInput[0].files = dataTransfer.files;
		}
	});
	jQuery('.file__input').each(function () {
		handleFileSelect(jQuery(this));
	});

	jQuery('.check-all').on('click', function () {
		const isChecked = jQuery(this).is(':checked');

		jQuery(this)
			.closest('.manage-table')
			.find('.checkbox-table')
			.prop('checked', isChecked);
	});

	jQuery('.add-post__textarea').on('input', function () {
		const $parentBlock = jQuery(this).closest('.add-post');
		const textLength = jQuery(this).val().length;

		$parentBlock
			.find('.wrap-send-actions')
			.css('display', textLength > 0 ? 'block' : 'none');
	});
	jQuery('.btn-poll').on('click', function () {
		const $parentBlock = jQuery(this).closest('.add-post');
		const $wrapPoll = $parentBlock.find('.wrap-poll');
		const $wrapSendActions = $parentBlock.find('.wrap-send-actions');

		jQuery(this).toggleClass('is-active');

		if ($wrapPoll.is(':visible')) {
			$wrapPoll.css('display', 'none');
			$wrapSendActions.css('display', 'none');
		} else {
			$wrapPoll.css('display', 'block');
			$wrapSendActions.css('display', 'block');
		}
	});
	jQuery('.btn-reset').on('click', function () {
		const $parentBlock = jQuery(this).closest('.add-post');
		const $pollSection = $parentBlock.find('.poll__section');
		$pollSection.find('.new-item').remove();

		const $wrapPoll = $parentBlock.find('.wrap-poll');
		if ($wrapPoll.is(':visible')) {
			$wrapPoll.css('display', 'none');
		}
		$parentBlock.find('.wrap-send-actions').css('display', 'none');
		$parentBlock.find('.btn-poll').removeClass('is-active');
	});
	jQuery(document).on('click', '.add-new-poll-item', function () {
		const $pollSection = jQuery(this).closest('.poll__section');
		const $pollItems = $pollSection.find('.poll__item:not(.poll__item--last)');
		const newIndex = $pollItems.length + 1;

		const newPollItem = jQuery(`
        <div class="poll__item new-item">
            <input type="text" class="poll__input" name="poll-var-${newIndex}" placeholder="Вариант ${newIndex}">
            <button type="button" class="remove-new-poll-item" aria-label="Удалить"><i class="icon-close"></i></button>
        </div>
    `);

		$pollSection.find('.poll__item.poll__item--last').before(newPollItem);
	});
	jQuery(document).on('click', '.remove-new-poll-item', function () {
		jQuery(this).closest('.poll__item').remove();
	});
});
