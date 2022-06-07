// import logo from './logo.svg';
import './Calendar.css';
import React, {useState} from 'react';
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css'
import './Calendar.css'
import { differenceInCalendarDays } from 'date-fns';

const disabledDate = new Date("2022-06-09")

function isSameDay(date1, date2) {
    console.log("date1: " + date1);
    console.log("date2: " + date2);
    return differenceInCalendarDays(date1, date2) === 0;
}

function tileDisabled({date, view}) {
    if (view === 'month') {
        console.log("in month view");
        const day_of_week = date.getDay();
        if (day_of_week === 6) {
            console.log(day_of_week);
            console.log(date.toDateString())
        }
        // if (disabledDate => isSameDay(disabledDate, date)) {
        //     console.log("Found correct day!");
        // }
        return disabledDate => isSameDay(disabledDate, date);
    }
}

function myApp() {
    const [value, setValue] = useState(new Date());
    
    function onChange(nextValue) {
        setValue(nextValue);
    }
    
    return (
        <div className='calendar-header'>
            <h1 className='text-center'>Select Appointment</h1>
            {/* <h1 className='text-center'>Appointment</h1> */}
            <div className="display-center">
                <Calendar 
                    onChange={onChange}
                    value={value}
                    tileDisabled={tileDisabled} 
                />
            </div>
            <p className="text-center">
                <span className='bold'>Selected Date:</span>{' '}
                {value.toDateString()}
            </p>
        </div>
    );
  }
  
  export default myApp;
  