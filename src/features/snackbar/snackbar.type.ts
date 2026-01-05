export type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

export interface SnackbarItem {
  id: string;
  message: string;
  severity: SnackbarSeverity;
  duration: number;
}

export interface SnackbarState {
  items: SnackbarItem[];
  max: number;
}
export interface EnqueuePayload {
  message: string;
  severity?: SnackbarItem['severity'];
}