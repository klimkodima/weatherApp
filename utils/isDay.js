const isDay = (sunrise, sunset)  => {
     return new Date(sunrise * 1000) < new Date() && new Date() < new Date(sunset * 1000);
}

export default isDay;
