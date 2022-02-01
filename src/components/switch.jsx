import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#07807e',
    '&:hover': {
      backgroundColor: "#07807e33",
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: "#07807e",
  },
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Switches() {
  return (
    <div>
      <GreenSwitch {...label} defaultChecked />
    </div>
  );
}
