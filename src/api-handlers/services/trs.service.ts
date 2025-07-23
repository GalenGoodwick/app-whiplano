/* eslint-disable */

import APIAxios from "../ApiAxios";

export interface TRSData {
  model_name: string;
  title: string;
  description: string;
  number: number;
  image: File | null;
  content: File | null;
}

export interface TrsDataItem {
  id: number;
  title: string;
  description: string;
  creator_email: string;
  status: string;
  created_at: string;
}


export const submitTRS = async (data: TRSData): Promise<any> => {
  const formData = new FormData();
  formData.append("model_name", data.model_name);
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("number", data.number.toString());

  if (data.image) {
    formData.append("image", data.image);
  }

  if (data.content) {
    formData.append("files", data.content);
  }

  try {
    const response = await APIAxios.post("/create_trs_request", formData);
    return response.data; // Handle response data as needed
  } catch (error: any) {
    console.error("Error submitting TRS:", error.response?.data || error.message);
    throw new Error("Failed to submit TRS");
  }
};



//To fetch TRS Data 


export const fetchTrsData = async (): Promise<TrsDataItem[]> => {
  try {
    const response = await APIAxios.get(`admin/creation_requests`);
    return response.data;
  } catch (error) {
    console.error('Error fetching TRS data:', error);
    throw error;
  }
};


//To Approve TRS Request

export const approveTrsRequest = async (requestId: number) => {
  try {
    const response = await APIAxios.post('/admin/approve', null, {
      params: { id: requestId },
    });
        console.log('hello from the backend')

    return response.data;
  } catch (error) {
    console.error('Error approving TRS request:', error);
    throw error;
  }
};


// To fetch TRS data by collection_name

export const fetchTrsDataByCollectionName = async (collectionName: string) => {
  try {
    const response = await APIAxios.get(`/admin/creation_requests?collection_name=${collectionName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching TRS data by collection_name:', error);
    throw error;
  }
};
