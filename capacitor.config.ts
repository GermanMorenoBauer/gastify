import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gasstify.app',
  appName: 'gastify',
  webDir: 'dist/gastify/browser',
  plugins: {
    Geolocation: {
      enabled: true
    }
  }
};

export default config;
