type SelectOption = {
   lable: string
   value: string
}

type SelectProps = {
   options: SelectOption[]
   value?: SelectOption
   onChenge: (value: SelectOption | undefined) => void
}

export function Select({ value, onChenge, options }: SelectProps) {

}