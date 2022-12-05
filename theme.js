import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#fff',
      textSecondary: '#000',
      timeBackground: '#000',
    },
    fontSizes: {
      body: 14,
      appBar: 16,
      location: 22,
      weatherDescription: 15,
      temp: 80
    },
    fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System',
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
  export default theme;