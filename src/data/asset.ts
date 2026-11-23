// Đường dẫn file trong public/ — chạy đúng cả ở gốc "/" lẫn bản xem trước "/preview/<dự án>/<phiên bản>" (không có "/" cuối)
const ROOT = (__BASE_PATH__ || '/').replace(/\/+$/, '');

export const asset = (path: string) => `${ROOT}/${path.replace(/^\/+/, '')}`;
