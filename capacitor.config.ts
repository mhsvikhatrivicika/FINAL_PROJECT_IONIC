import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'finalProject-kel3',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    BarcodeScanner: {
      preferredCamera: 'back',
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      formats: 'QR_CODE, EAN_13',
      resultDisplayDuration: 500,
      disableAnimations: false
    }
  }
};

export default config;
