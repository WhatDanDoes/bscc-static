---
title: 'Device Data Point Survey'
layout: 'report.njk'
---

This document sets out to determine what data can be collected by a smartwatch. It provides a survey of common sensors integrated into contemporary devices, the health/fitness-specific data points they monitor, and some examples of determinations made through analyzing this data.

# Common Smartwatch Sensors

Different devices contain different sensors. Common smartwatches will contain some combination of the following:

- Accelerometer
  - Tracks the subject's movement in relation to the surface of the earth.
- Gyroscope
  - Device orientation in 3D space. Detects gestures and wrist movements.
- Magnetometer
  - Direction the subject is facing. A compass.
- Barometric Pressure Sensor
  - Measures the pressure of the earth's atmosphere.
- Altimeter
  - Determines changes in the subject's elevation. E.g., as with climbing or descending stairs.
- Ambient Temperature Sensor
  - Senses the temperature of the subject's environment.
- Skin Temperature Sensor
  - Senses the subject's body temperature.
- Heart Rate Monitor
  - How fast is the subject's heart beating?
- SpO2, Oximetry Sensor
  - Determines the concentration of oxygen in the subject's blood.
- Skin Conductance Sensor
  - Used to calculate calories burned.
- GPS
  - Determines the subject's position on the earth.
- Ambient Light Sensor
  - Typically used to adjust display brightness.
- Proximity Sensor
  - Allows the smartwatch to know the subject is wearing the watch. Typically used to conserve battery power.
- ECG Sensor
  - Detects electrical impulses emitted by the subject's heart.
- Electrodermal Activity Sensor
  - Used in combination with other sensors (e.g., ECG, Skin temperature) to measure the subject's stress levels.
- UV Sensor
  - Measure's ultra violet radiation from the sun.
- Bioimpedance Sensor
  - Determines respiratory rate, sleep quality, et al, by measuring electrical resistance in the subject's skin.
- Camera
  - Record video and still images.
- Microphone
  - Record audio data.

Sources: [1](https://www.azosensors.com/article.aspx?ArticleID=2614), [2](https://www.cashify.in/explained-sensors-in-smartwatch), [3](https://timesofindia.indiatimes.com/gadgets-news/16-sensors-that-are-present-inside-fitness-bands-and-smartwatches-that-you-need-to-know/articleshow/78033264.cms), [4](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5038811/).

It cannot be assumed that this is a complete list.

# Common Health-Related Data Points

The sensors listed in the previous section are used to collect data. These data points are collected by individual sensors, or combinations thereof. The following data points pertain directly to health and fitness: 

- Heart Rate
- Steps
- Intensity Minutes
- Stress
  - Determined through heart-rate variability.
- Respiration
- Sleep Quality
  - Based on several factors including snoring, light patterns, and heart rate
- Body Composition
  - Muscle to fat ratio determined using bioimpedence
- Active Minutes
- Menstrual Health
  - Informed by the subject herself, who uses the device to track _symptoms_.
- Cadence (for runners)
- VO2 Max (for endurance training)
  - A measure of cardio-respiratory fitness.
- Calories Burned for Overall Fitness
- Pulse
- Body Battery
  - This was listed as a data point offered by Garmin devices. It may be proprietary.

Sources: [1](https://www.makeuseof.com/health-data-points-pay-attention-fitness-tracker/), [2](https://developer.garmin.com/gc-developer-program/health-api/).

# What Can be Determined?

Manufacturers and marketers would have you believe smartwatches can improve your overall health by detecting potential problems before they become serious. Others, including medical _professionals_ may dispute these claims, though they are likely concerned with the device's accuracy and the subjects own ability to make a diagnoses. What follows is a short list of determinations that are conceivably possible by analyzing data collected by a smartwatch: 

- Gait Analysis
  - Is the subject walking steadily?
- Atrial fibrillation
  - Possible indicator of an impending stroke.
- Infection
  - Metabolic rate changes can potentially detect cold virus infection.
- Sleep Apnea
- Respiratory Issues
- Diabetes

Sources: [1](https://www.cbsnews.com/news/self-tracking-your-health-data-wearables/), [2](https://www.popsci.com/story/diy/health-conditions-smartwatch/), [3](https://www.goodrx.com/health-topic/heart/smartwatch-heart-health).

# How Much Data do they Collect?

Potentially 2 to 5 GB per day.

Sources: [1](https://medium.com/xnewdata/data-generated-by-wearables-48da42a88263).


# Which is Most Private?

https://threadcurve.com/smartwatch-privacy-the-best-and-worst/

https://phys.org/news/2015-01-wearable-sensors-lots-datanow.html

https://www.researchgate.net/publication/300651368_Health_Information_Tailoring_and_Data_Privacy_in_a_Smart_Watch_as_a_Preventive_Health_Tool
