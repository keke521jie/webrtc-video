export const RequestUrl = async (options: {
  url: string;
  data?: any;
  headers?: any;
}) => {
  const response = await fetch(options.url, {
    body: JSON.stringify(options.data),
    headers: options.headers,
  });
  return await response.json();
};
