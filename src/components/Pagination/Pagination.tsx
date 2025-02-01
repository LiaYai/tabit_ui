import React, { useState, useEffect, useRef, useMemo } from 'react';
import clsx from 'clsx';
//import { cva } from 'class-variance-authority';
//import { cn } from '@/lib/utils';

const paginationStyles = {
	'--border-hover': 'hsla(210, 13%, 62%, 0.32)',
	'--border-active': 'hsla(220, 98%, 44%, 1)',
	'--text-disabled': 'hsla(208, 13%, 45%, 1)',
	'--text-active': 'hsla(0, 0%, 100%, 1)',
	'--text-hover': 'hsla(220, 100%, 54%, 1)',
	'--text-focus': 'hsla(220, 98%, 44%, 1)',
	'--background-active': 'hsla(220, 100%, 54%, 1)',
	'--background-hover': 'hsla(220, 100%, 54%, 0.08)',
	'--background-focus': 'hsla(220, 100%, 54%, 0.08)',
} as React.CSSProperties;

/*const paginationVariants = cva(
	'm-[5px] border-[2px] border-transparent focus:outline-none',
	{
		variants: {
			variant: {
				circular: 'rounded-[50%]',
				rounded: 'rounded-[8px]',
			},
			size: {
				large: 'w-[40px] h-[40px] leading-[40px]',
				medium: 'w-[32px] h-[32px] leading-[32px]',
				small: 'w-[26px] h-[26px] leading-[26px]',
			},
		},
	}
);*/

export type PaginationProps = {
	//variant: string;
	//size: 'string';
	rows: number;
	pageList: string | (number | string)[];
	paginationParts: string | string[];
	sidePagination: 'client' | 'server';
	pagination: boolean;
	showExtendedPagination: boolean;
	paginationLoadMore: boolean;
	paginationLoaded: boolean;
	smartDisplay: boolean;
	paginationSuccessivelySize: number;
	paginationVAlign: string;
	data: [];
	paginationPagesBySide: number;
	paginationUseIntermediate: boolean;
	paginationLoop: boolean;
	onlyInfoPagination: boolean;
	resetRows: () => void;
	trigger: (e?: string, t?: number, n?: number) => void;
	initServer: () => void;
	initBody: () => void;
	maintainMetaData: boolean;
};

export function Pagination({
	//variant,
	//size,
	rows,
	pageList,
	sidePagination,
	pagination,
	showExtendedPagination,
	paginationLoadMore,
	paginationParts,
	paginationLoaded,
	smartDisplay,
	paginationSuccessivelySize,
	paginationVAlign,
	data,
	paginationPagesBySide,
	paginationUseIntermediate,
	paginationLoop,
	onlyInfoPagination,
	resetRows,
	trigger,
	initServer,
	initBody,
	maintainMetaData,
}: PaginationProps) {
	const formatAllRows = () => 'All';
	const formatSRPaginationPageText = (page: number) => `to page ${page}`;
	const formatRecordsPerPage = (count: number) => `${count} rows per page`;
	const formatDetailPagination = (total: string) => `Showing ${total} rows`;
	const formatShowingRows = (
		from: number,
		to: number,
		total: string,
		totalNotFiltered?: number
	) => {
		return totalNotFiltered &&
			totalNotFiltered > 0 &&
			totalNotFiltered > Number(total) //Исправить
			? `Showing ${from} to ${to} of ${total} rows (filtered from ${totalNotFiltered} total rows)`
			: `Showing ${from} to ${to} of ${total} rows`;
	};

	const normalizedPageList = useMemo(() => {
		const list = Array.isArray(pageList)
			? pageList
			: typeof pageList === 'string'
				? pageList
						.replace(/\[|\]| /g, '')
						.toLowerCase()
						.split(',')
				: [];
		return list.map((size) =>
			typeof size === 'string'
				? size.toLowerCase() === formatAllRows().toLowerCase() ||
					['all', 'unlimited'].includes(size.toLowerCase())
					? formatAllRows()
					: Number(size)
				: size
		);
	}, [pageList]);

	const normalizedPaginationParts = useMemo(() => {
		const parts = Array.isArray(paginationParts)
			? paginationParts
			: typeof paginationParts === 'string'
				? paginationParts.replace(/\[|\]| /g, '').split(',')
				: [];
		return parts;
	}, [paginationParts]);

	const [pageNumber, setPageNumber] = useState(1);
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [isAllRowsSelected, setIsAllRowsSelected] = useState(false);
	const [totalNotFiltered, setTotalNotFiltered] = useState(0);
	const [pageSize, setPageSize] = useState(
		isAllRowsSelected ? formatAllRows() : 10
	);
	const [totalRows] = useState(
		sidePagination === 'server' ? data.length : rows
	);

	const paginationRef = useRef<HTMLDivElement>(null);
	const pageListRef = useRef<HTMLDivElement>(null);
	const pagePreRef = useRef<HTMLAnchorElement>(null);
	const pageNextRef = useRef<HTMLAnchorElement>(null);

	const totalPages = useMemo(() => {
		return pageSize === formatAllRows()
			? 0
			: 1 + Math.floor((totalRows - 1) / pageSize);
	}, [totalRows, pageSize]);

	const shouldShowPaginationDetail =
		normalizedPaginationParts.includes('pageInfo') ||
		normalizedPaginationParts.includes('pageInfoShort') ||
		normalizedPaginationParts.includes('pageSize');

	const shouldShowPaginationInfo =
		normalizedPaginationParts.includes('pageInfo') ||
		normalizedPaginationParts.includes('pageInfoShort');

	useEffect(() => {
		if (pageNumber > totalPages) setPageNumber(totalPages);

		if (pageSize === formatAllRows()) {
			setPageSize(totalRows);
			setIsAllRowsSelected(true);
		}

		if (pagination && sidePagination !== 'server')
			setTotalNotFiltered(data.length);

		if (!showExtendedPagination) setTotalNotFiltered(undefined);
	}, [
		pageNumber,
		pageSize,
		totalPages,
		totalRows,
		showExtendedPagination,
		pagination,
		sidePagination,
		data,
	]);

	const paginationInfo = useMemo(() => {
		const total =
			totalRows +
			(sidePagination === 'client' && paginationLoadMore && !paginationLoaded
				? ' +'
				: '');

		return normalizedPaginationParts.includes('pageInfoShort')
			? formatDetailPagination(total)
			: formatShowingRows(
					(pageNumber - 1) * pageSize + 1,
					Math.min(pageNumber * pageSize, totalRows),
					total,
					totalNotFiltered
				);
	}, [
		sidePagination,
		paginationLoadMore,
		paginationLoaded,
		normalizedPaginationParts,
		pageNumber,
		pageSize,
		totalNotFiltered,
		totalRows,
	]);

	const pageNumbers = useMemo(() => {
		let start: number;
		let end: number;

		if (totalPages < paginationSuccessivelySize) {
			start = 1;
			end = totalPages;
		} else {
			start = pageNumber - paginationPagesBySide;
			end = start + 2 * paginationPagesBySide;
		}

		if (pageNumber < paginationSuccessivelySize - 1)
			end = paginationSuccessivelySize;

		if (paginationSuccessivelySize > totalPages - start)
			start = start - (paginationSuccessivelySize - (totalPages - start)) + 1;

		if (start < 1) start = 1;

		if (end > totalPages) end = totalPages;

		const pages: { page: number | string; className: string }[] = [];
		const v = Math.round(paginationPagesBySide / 2);

		if (start > 1) {
			let m = paginationPagesBySide;
			if (m >= start) m = start - 1;
			for (let n = 1; n <= m; n++) pages.push({ page: n, className: '' });
			if (start - 1 === m + 1) {
				const n = start - 1;
				pages.push({ page: n, className: '' });
			} else if (start - 1 > m) {
				if (
					start - 2 * paginationPagesBySide > paginationPagesBySide &&
					paginationUseIntermediate
				) {
					const n = Math.round((start - v) / 2 + v);
					pages.push({ page: n, className: 'page-intermediate' });
				} else
					pages.push({
						page: '...',
						className: 'page-first-separator disabled',
					});
			}
		}

		for (let i = start; i <= end; i++) pages.push({ page: i, className: '' });

		if (totalPages > end) {
			let y = totalPages - (paginationPagesBySide - 1);
			if (end >= y) y = end + 1;
			if (end + 1 === y - 1) {
				const n = end + 1;
				pages.push({ page: n, className: '' });
			} else if (y > end + 1) {
				if (
					totalPages - end > 2 * paginationPagesBySide &&
					paginationUseIntermediate
				) {
					const n = Math.round((totalPages - v - end) / 2 + end);
					pages.push({ page: n, className: 'page-intermediate' });
				} else
					pages.push({
						page: '...',
						className: 'page-last-separator disabled',
					});
			}

			for (let i = y; i <= totalPages; i++)
				pages.push({ page: i, className: '' });
		}

		return pages;
	}, [
		pageNumber,
		totalPages,
		paginationSuccessivelySize,
		paginationPagesBySide,
		paginationUseIntermediate,
	]);

	useEffect(() => {
		const dropupClass = ['bottom', 'both'].includes(paginationVAlign)
			? 'dropup'
			: '';

		if (pageListRef.current) pageListRef.current.classList.add(dropupClass);

		if (totalPages <= 1) {
			const paginationElement =
				paginationRef.current.querySelector('div.pagination');
			if (paginationElement) {
				paginationElement.style.display = 'none';
			}
		}

		if (
			smartDisplay &&
			(normalizedPageList.length < 2 || totalRows <= normalizedPageList[0])
		) {
			const pageListElement = pageListRef.current;
			if (pageListElement) {
				pageListElement.style.display = 'none';
			}
		}

		const paginationElement = paginationRef.current;
		if (paginationElement) {
			//paginationElement.style.display = data.length ? 'block' : 'none';
		}

		if (paginationLoop) {
			if (pageNumber === 1) {
				if (pagePreRef.current)
					pagePreRef.current.classList.toggle('disabled', pageNumber === 1);
			}
			if (pageNumber === totalPages) {
				if (pageNextRef.current)
					pageNextRef.current.classList.toggle(
						'disabled',
						pageNumber === totalPages
					);
			}
		}
	}, [
		pageNumber,
		totalPages,
		paginationVAlign,
		onlyInfoPagination,
		smartDisplay,
		normalizedPageList,
		totalRows,
		data,
		paginationLoop,
		isAllRowsSelected,
		pagination,
	]);

	const updatePagination = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (e && e.currentTarget.classList.contains('disabled')) {
			if (maintainMetaData) resetRows();
			trigger('page-change', pageNumber, pageSize);
		}

		if (
			sidePagination === 'server' ||
			(sidePagination === 'client' &&
				paginationLoadMore &&
				!paginationLoaded &&
				pageNumber === totalPages)
		) {
			initServer();
		} else {
			initBody();
		}
	};

	const onPageListChange = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const text = e.currentTarget.textContent?.trim().toUpperCase();
		const newSize =
			text === formatAllRows().toUpperCase() ? formatAllRows() : Number(text);

		if (newSize) {
			setPageSize(newSize);
			setPageNumber(1);
			setDropdownOpen(false);
			updatePagination(e);
		}
	};

	const onPagePre = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		if (pageNumber === 1) {
			setPageNumber(totalPages);
		} else {
			setPageNumber((prev: number) => prev - 1);
		}
		updatePagination(e);
	};

	const onPageNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		if (pageNumber < totalPages) {
			setPageNumber((prev: number) => prev + 1);
		} else {
			setPageNumber(1);
		}
		updatePagination(e);
	};

	const onPageNumber = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const newPage = Number(e.currentTarget.textContent);

		if (!isNaN(newPage) && newPage !== pageNumber) setPageNumber(newPage);
		updatePagination(e);
	};

	const toggleDropdown = () => setDropdownOpen((prev: boolean) => !prev);

	return (
		<div
			data-testid="Pagination"
			ref={paginationRef}
			className="clearfix"
			style={{ display: pagination ? 'block' : 'none' }}
		>
			{shouldShowPaginationDetail && (
				<div className="float-left mt-[10px] mb-[10px]">
					{shouldShowPaginationInfo && (
						<span className="inline-block leading-[34px] mr-[5px]">
							{paginationInfo}
						</span>
					)}
					<div className="inline-block">
						<div className="relative inline-block align-middle">
							<button
								className="default dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								onClick={toggleDropdown}
							>
								<span className="page-size">
									{isAllRowsSelected ? formatAllRows() : pageSize}
								</span>
								<span className="caret"></span>
							</button>
							<div
								className={clsx('absolute top-full mt-1 z-10 min-w-[206px]', {
									hidden: !isDropdownOpen,
									block: isDropdownOpen,
								})}
							>
								{normalizedPageList.map(
									(size: number | string, index: number) => {
										let isActive: boolean = false;
										if (
											!smartDisplay ||
											index === 0 ||
											normalizedPageList[index - 1] < totalRows ||
											size === formatAllRows()
										) {
											isActive = isAllRowsSelected
												? size === formatAllRows()
												: size === pageSize;
										}
										return (
											<a
												key={size}
												className={clsx(
													'block p-[4px] min-h-[27px] transition-all duration-300 ease-in-out hover:bg-[#b3dcff]',
													{ 'bg-[#b3dcff]': isActive }
												)}
												href="#"
												onClick={onPageListChange}
											>
												{size}
											</a>
										);
									}
								)}
							</div>
						</div>
						{' ' + formatRecordsPerPage(pageSize)}
					</div>
				</div>
			)}

			{normalizedPaginationParts.includes('pageList') && (
				<div
					className="float-right mt-[10px] mb-[10px]"
					style={paginationStyles}
				>
					<ul className="flex m-0 list-none">
						<li
							className={
								clsx('hover:border-[var(--border-hover)]', {
									'pointer-events-none text-[var(--text-disabled)]':
										pageNumber === 1,
								})
								/*cn(
								paginationVariants({ variant, size }), //Тест не пропускает cn т.к. не может найти файл где он лежит. Удалите clsx и замените его на cn
								'hover:border-[var(--border-hover)]',
								{
									'pointer-events-none text-[var(--text-disabled)]':
										pageNumber === 1,
								}
							)*/
							}
						>
							<a
								ref={pagePreRef}
								className="block w-full h-full text-center"
								aria-label="previous page"
								href="#"
								onClick={onPagePre}
							>
								&lsaquo;
							</a>
						</li>

						{pageNumbers.map(
							(
								{
									page,
									className,
								}: { page: number | string; className: string },
								index: number
							) => (
								<li
									key={index}
									className={
										clsx(
											'mx-[5px] hover:border-[var(--border-hover)]',
											`${className}`,
											{
												'bg-[var(--background-active)] border-transparent hover:border-[var(--border-active)] hover:bg-[var(--background-hover)] focus-within:bg-[var(--background-focus)]':
													page === pageNumber,
												'text-[#c8c8c8]': page === 'intermediate',
												'text-[var(--text-disabled)] pointer-events-none cursor-default':
													page === 'disabled',
											}
										)
										/*cn(
										paginationVariants({ variant, size }),
										'mx-[5px] hover:border-[var(--border-hover)]',
										`${className}`,
										{
											'bg-[var(--background-active)] border-transparent hover:border-[var(--border-active)] hover:bg-[var(--background-hover)] focus-within:bg-[var(--background-focus)]':
												page === pageNumber,
											'text-[#c8c8c8]': page === 'intermediate',
											'text-[var(--text-disabled)] pointer-events-none cursor-default':
												page === 'disabled',
										}
									)*/
									}
								>
									<a
										className={`text-[14px] block w-full h-full text-center ${
											page === pageNumber
												? 'text-white hover:text-[var(--text-hover)] focus:text-[var(--text-focus)]'
												: ''
										}`}
										aria-label={formatSRPaginationPageText(page)}
										href="#"
										onClick={
											typeof page === 'number' ? onPageNumber : undefined
										}
									>
										{page}
									</a>
								</li>
							)
						)}

						<li
							className={
								clsx('mx-[5px] hover:border-[var(--border-hover)]', {
									'pointer-events-none text-[var(--text-disabled)]':
										pageNumber === totalPages,
								}) /*cn(
								paginationVariants({ variant, size }),
								'mx-[5px] hover:border-[var(--border-hover)]',
								{
									'pointer-events-none text-[var(--text-disabled)]':
										pageNumber === totalPages,
								}
							)*/
							}
						>
							<a
								ref={pageNextRef}
								className="block w-full h-full text-center"
								aria-label="next page"
								href="#"
								onClick={onPageNext}
							>
								&rsaquo;
							</a>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}
