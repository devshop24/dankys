import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { Controller } from 'react-hook-form';
import { info } from '../../theme/colors';

const CheckboxControlled = ({ name, label, rules, control, handleChange, sx, cy }) => (
    <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue=''
        render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormGroup sx={sx}>
                <FormControlLabel
                    value={value}
                    onChange={handleChange ? () => handleChange(onChange, value) : onChange}
                    control={<Checkbox data-cy={cy} checked={Boolean(value)} size="medium" color="primary" sx={{ color: info.main }} />} label={label}
                />
            </FormGroup>
        )}
    />
);

export default CheckboxControlled;