import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'ng-chart',
  webDir: 'dist/ng-chart/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
