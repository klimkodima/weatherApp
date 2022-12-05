const isDay = ()  => {
    const hours = new Date().getHours();
     return hours > 8 && hours < 18;
}

export default isDay;
