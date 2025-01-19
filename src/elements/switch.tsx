import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

type SwitchProps = {
  id?: string,
  onClick?: () => void,
  checked?: boolean,
  disabled?: boolean,
  label?: string
}

const SwitchElement = ({id, label, ...props}: SwitchProps) => {
  return (
    <>
      <Switch id={id} {...props}/>
      {label && <Label htmlFor={id}>{label}</Label>}
    </>
  )
}

export default SwitchElement