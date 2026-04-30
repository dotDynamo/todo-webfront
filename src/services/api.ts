export const validateToken = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:8080/auth/validate", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.text();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
};