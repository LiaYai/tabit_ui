import { Switch } from "@/components/ui/switch";

type SwitchProps = {
  id: string,
  onClick?: () => void,
  checked?: boolean,
  disabled?: boolean
}

const SwitchElement = (props: SwitchProps) => {
  return () => <Switch {...props}/>;
}

export default SwitchElement