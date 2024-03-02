import React, { useState } from 'react'
import { Deadline } from './Deadline/Deadline'
import { Heading } from './Heading/Heading'
import { Timezone } from './Timezone/Timezone';

export const MainContentContainer = () => {
  
  const [selectedHeading, setSelectedHeading] = useState(null);
  const [deadlineVisible, setDeadlineVisible] = useState(false);
  const [timezoneVisible, setTimezoneVisible] = useState(false);
  const [selectedApp, setSelectedApp] = useState(false)

  const startWen = (wenApp) => () => {
    if (wenApp === selectedHeading) {
      setSelectedHeading(null);
      setDeadlineVisible(false);
      setTimezoneVisible(false);
      setSelectedApp(false);
    } else {
      setSelectedHeading(wenApp);
      if (wenApp === "deadline") {
        setDeadlineVisible(true);
        setTimezoneVisible(false);
        setSelectedApp(true);
      } else if (wenApp === "timezone") {
        setTimezoneVisible(true);
        setDeadlineVisible(false);
        setSelectedApp(true);
      }
    }
  };

  return (
    <article className="main-content-container">
      {(deadlineVisible || !selectedApp) && <Heading text="wen deadline" click={startWen("deadline")} isSelected={selectedHeading === "deadline"}/>}
      {(timezoneVisible || !selectedApp) && <Heading text="wen timezone" click={startWen("timezone")} isSelected={selectedHeading === "timezone"}/>}
      {deadlineVisible && <Deadline app="deadline"/>}
      {timezoneVisible && <Timezone app="timezone"/>}
    </article>
  );
};
