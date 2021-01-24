
import {primaryColor,primaryColorLight} from "./../app-resources/global"
export const customStyle = {
    menu: base => ({
        ...base,
        marginTop: 0
    }),
    control: (base, state) => ({
        background: '#fff',
        height: 35,
        borderRadius: 12,
        display: 'flex',
        border: state.isFocused ? "2px solid " + primaryColor : "1px solid #c3bdbd8c", //${primaryColor}
        // This line disable the blue border
        boxShadow: state.isFocused ? 0 : 0,
        '&:hover': {
            border: state.isFocused ? "2px solid " + primaryColor : "1px solid " + primaryColorLight
        },
        fontSize: '0.72rem'
    }),
    container: (provided, state) => ({
        ...provided,
        marginTop: 8
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: "0px 8px",
        overflowY: "auto",

    }),
    multiValue: (styles, {data}) => {
        return {
            ...styles,
            borderRadius: 12
        };
    },
    multiValueRemove: (styles, {data}) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: primaryColor,
            color: 'white',
            borderRadius: 12
        },
    }),
}

export const defaultStyles = 
{
    menu: base => ({
        ...base,
        marginTop: 0
    }),
    control: (base, state) => ({
        background: "#fafafa",
        height: 30,
        borderRadius: 25,
        display: 'flex', 
        border: state.isFocused ? "2px solid "+primaryColor : "1px solid #ccc2c2", //${primaryColor}
        // This line disable the blue border
        boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
        border:  state.isFocused ?"2px solid "+primaryColor:"1px solid "+primaryColorLight
    },
    // fontSize: '1rem'
    }),
    container: (provided, state) => ({
        ...provided,
        marginTop: 8
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        overflow: "visible"
    }),
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            fontSize: '0.73rem' 
        }
    },
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isFocused || isSelected ? '#DEEBFF':'#FFFFF',
            color: '#00000'
        };
    }
}