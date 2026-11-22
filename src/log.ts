export type Log = {
    timestamp: string;
    level: 'info' | 'warn' | 'error';
    service: string;
    message: string;
    attributes: Record<string, string | number | boolean>;
};