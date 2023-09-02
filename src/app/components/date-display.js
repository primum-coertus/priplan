"use client";
import React, { useState, useEffect } from 'react';

export default function DateDisplay() {
  const [date,setDate] = useState("MONDAY, JANUARY 01");
  const [time,setTime] = useState("00:00");

  useEffect(() => {
    setInterval(() => {
      const fullDate = new Date();
      setDate(printDate(fullDate));
      setTime(printTime(fullDate));
    }, 1000);
  });

  return (
    <div className="w-100 text-4xl">
      <p className="font-bold">{date}</p>
      <p className="">{time}</p>
    </div>
  );
}

function printDate(fullDate) {
	const day = getDaysName(fullDate.getDay());
	const date = getDateFormat(fullDate.getDate());
	const month = getMonthName(fullDate.getMonth());
	
  return `${day.toUpperCase()}, ${month.toUpperCase()} ${date}`;
}

function printTime(fullDate) {
  const hour = getDateFormat(fullDate.getHours());
  const minute = getDateFormat(fullDate.getMinutes());

  return `${hour}:${minute}`;
}

function getDaysName(dayNumber) {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return days[dayNumber];
}

function getDateFormat(dateNumber) {
  if(dateNumber < 10){
		return "0" + dateNumber;
	}else{
		return dateNumber;
	}
}

function getMonthName(monthNumber) {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return months[monthNumber];
}