import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cl.villaTorre.app',
  appName: 'myFirstApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
