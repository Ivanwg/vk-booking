import Select, { SingleValue } from 'react-select'
import { IOption, TOptions, borderColor, borderHoverColor, grayColor } from '../constants';


interface IProps {
  options: TOptions;
  defaultValue: IOption | null;
  placeholder?: string;
  func: React.Dispatch<React.SetStateAction<IOption | null>>;
}

const CustomSelect = ({options, defaultValue, placeholder, func}: IProps) => {

  const onChange = (newValue: SingleValue<IOption | null>, func: React.Dispatch<React.SetStateAction<IOption | null>>) => {
    func(newValue);
  }

  const customTheme = (theme: any) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#f3f3f3',
      primary: borderHoverColor
    }
  });

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      borderWidth: '2px',
      borderColor: !state.isFocused ? borderColor : borderHoverColor,
      boxShadow: state.isFocused ? null : null,
      padding: '15px 30px 15px 15px',
      minHeight: '52px',
      cursor: 'pointer',
      '&:hover': {
        borderColor: !state.isFocused ? borderColor : borderHoverColor
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      fontWeight: state.isSelected ? '700' : '400',
      fontSize: '16px',
      lineHeight: '1',
      primary: 'pink'
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      margin: '0',
      color: borderHoverColor,
      fontSize: '16px',
      lineHeight: '1',
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: '0',
    }),
    input: (provided: any) => ({
      ...provided,
      margin: '0',
      height: '1px',
      padding: '0',
      opacity: '0',
      overflow: 'hidden'
    }),
    placeholder: (provided: any) => ({
      ...provided,
      margin: '0',
      padding: '0',
      fontSize: '16px',
      lineHeight: '1',
      color: grayColor
    })
  };

  
  return ( 
    <Select 
      styles={customStyles} 
      defaultValue={defaultValue} 
      value={defaultValue} 
      placeholder={placeholder} 
      options={options} 
      onChange={(newValue) => onChange(newValue, func)} 
      components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
      theme={customTheme}
    />
   );
}
 
export default CustomSelect;