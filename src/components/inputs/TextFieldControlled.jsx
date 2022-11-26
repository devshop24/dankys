import React from 'react';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Controller } from 'react-hook-form';

const TextFieldControlled = ({
    color,
    name,
    currency,
    password,
    label,
    rules,
    variant,
    defaultValue,
    control,
    onEnter,
    className,
    inputProps,
    inputLabelProps,
    placeholder,
    multiline,
    rows,
    sx,
    cy
}) => {
    const handleEnter = (event) => {
        if (event?.key === "Enter" && onEnter) onEnter();
    }

    const renderDollarSign = () => (
        currency ? {
            startAdornment: <InputAdornment position="start" sx={{ '& p': { color: 'info.main' } }}>$</InputAdornment>,
        }
            : {}
    )

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    data-cy={cy}
                    color={color}
                    className={className}
                    variant={variant}
                    type={password ? 'password' : ''}
                    label={label}
                    InputProps={inputProps || renderDollarSign()}
                    InputLabelProps={inputLabelProps}
                    value={value}
                    defaultValue={defaultValue}
                    error={!!error}
                    onChange={onChange}
                    onKeyDown={handleEnter}
                    fullWidth
                    multiline={multiline}
                    rows={rows}
                    sx={sx}
                    placeholder={placeholder}
                />
            )}
        />
    )
}

export default TextFieldControlled;