
/**
 * 
 * @param filename 文件名
 * @param mimeType 文件类型
 * @param content  内容
 */
export const downloadFile = (filename, mimeType, content) => {
  // 创建一个 Blob 对象，包含文件内容
  const blob = new Blob([content], { type: mimeType });

  // 创建一个下载链接
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;

  // 模拟点击下载链接
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * 
 * @param url  url
 * @param filename  文件名
 */
export const downloadFile1 = (url, filename) => {
  const a = document.createElement('a'); // 创建 <a> 元素
  a.href = url;
  a.download = filename; // 设置下载文件名
  document.body.appendChild(a); // 将 <a> 元素添加到文档中
  a.click(); // 触发点击事件
  document.body.removeChild(a); // 从文档中移除 <a> 元素
};
