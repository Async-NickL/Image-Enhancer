import axios from "axios";
import { API_KEY, BASE_URL } from "./config.js";

console.log("API Base URL:", BASE_URL);
console.log("API Key exists:", !!API_KEY);

export const GetEnhancedImage = async (file) => {
  try {
    const taskId = await uploadImage(file);
    const enhancedImageUrl = await pollFetchImage(taskId);
    return enhancedImageUrl;
  } catch (error) {
    console.error("Error enhancing image:", error);
    throw error;
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);
  
  const apiUrl = `${BASE_URL}/api/tasks/visual/scale`;
  
  const { data } = await axios.post(
    apiUrl,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );
  
  if (!data?.data?.task_id) {
    throw new Error("TaskId not found");
  }
  return data.data.task_id;
};

const fetchImage = async (task_id) => {
  try {
    const apiUrl = `${BASE_URL}/api/tasks/visual/scale/${task_id}`;
    
    const { data } = await axios.get(
      apiUrl,
      {
        headers: {
          "X-API-KEY": API_KEY,
        },
      }
    );
    
    if (!data?.data) {
      throw new Error("Image data not found");
    }
    return data.data;
  } catch (error) {
    console.error("Error fetching image status:", error);
    throw error;
  }
};

const pollFetchImage = async (task_id, retries = 0) => {
  if (retries > 10) {
    throw new Error("Max retries reached");
  }
  
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  try {
    const result = await fetchImage(task_id);

    if (result.state === 4) {
      return pollFetchImage(task_id, retries + 1);
    }
    
    if (result.image) {
      return result.image;
    }
    
    return pollFetchImage(task_id, retries + 1);
  } catch (error) {
    if (retries < 10) {
      return pollFetchImage(task_id, retries + 1);
    }
    throw error;
  }
}