import "rsuite/dist/rsuite.min.css"; 
import React from "react"; 
import { DatePicker } from "rsuite"; 

function DatePick() { 
	const datepickerStyle = { 
		marginBottom: "25px", 
		marginTop: "10px",
        borderRadius: "10px",
        border: "1px solid #BABABA",
        background: "#EEF1F0",
        color: '#7E7E7E',
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        letterSpacing: '-0.12px',
	}; 

	return ( 
		<div className="App" style={{ 
			display: "flex", alignItems: "center", 
			flexDirection: "row",alignSelf:"flex-end",marginRight:"3vw"
		}}> 
			
			<DatePicker style={datepickerStyle} 
				placeholder="from" size="md" /> 
			<DatePicker style={datepickerStyle} 
				placeholder="to" size="md" /> 
		</div> 
	); 
} 

export default DatePick;
