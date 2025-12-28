import { apiClient } from "@/lib/apiClient";

/** * Fetch all management members
 * API: http://localhost:5000/api/v1/management/all-management
 */
export async function getAllmanagement() {
  try {
    const response = await fetch(
      ` http://localhost:5000/api/v1/management/all-management`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch management: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching management:", error);
    return [];
  }
}
/** * Fetch all notices with pagination and search
 * API: http://localhost:5000/api/v1/notice/all
 */
export async function getAllnotice(page = 1, limit = 10, search = "") {
  try {
    const response = await apiClient.get(`/notice/all`, {
      params: { page, limit, search },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching notice:",
      error.response?.data || error.message
    );
    return null;
  }
}

/**
 * Fetch a single notice by ID
 * API: http://localhost:5000/api/v1/notice/getsingleNotice/:id
 */
export async function getSingleNotice(id) {
  try {
    const response = await apiClient.get(`/notice/getsingleNotice/${id}`);
    if (response.status !== 200) {
      throw new Error(`Failed to fetch notice: ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching single notice:",
      error.response?.data || error.message
    );
    return null;
  }
}

// -----------------album related APIs -------------------
/** * Fetch all albums
 * API: http://localhost:5000/api/v1/album/get-allalbums
 */
export async function getAllAlbums() {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/album/get-allalbums`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch albums: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching albums:", error);
    return { data: [] }; // Return the structure the component expects
  }
}

/**
 * Fetch a single album by ID
 * API: http://localhost:5000/api/v1/album/get-album/:id
 */
export async function getAlbumById(id) {
  try {
    const response = await apiClient.get(`/album/get-album/${id}`);
    return { success: true, data: response.data.data };
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch album details";
    return { success: false, error: errorMessage };
  }
}

/**
 * Fetch a single notice category by ID
 * API: http://localhost:5000/api/v1/noticeCategory/singlenoticeCategory/:id
 */
export async function getSingleNoticeCategory(id) {
  try {
    const response = await apiClient.get(
      `/noticeCategory/singlenoticeCategory/${id}`
    );
    if (response.status !== 200) {
      throw new Error(`Failed to fetch category: ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching single category:",
      error.response?.data || error.message
    );

    // 5. Return null so the UI can handle the "Not Found" state
    return null;
  }
}

/**
 * Fetch all management members
 * API: http://localhost:5000/api/v1/management/all-management
 */

export async function getAllManagement(category = "") {
  try {
    const response = await apiClient.get(`/management/all-management`, {
      params: { category },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching management:", error);
    return { data: [] };
  }
}

/**
 * Fetch a single management member by ID
 * API: http://localhost:5000/api/v1/management/getsingle-management/:id
 */
export async function getSingleManagement(id) {
  try {
    const response = await apiClient.get(
      `/management/getsingle-management/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching single management:",
      error.response?.data || error.message
    );
    return null;
  }
}
/** * Fetch images by album ID
 * API: http://localhost:5000/api/v1/image/getImagesByAlbum/:id
 */
export async function getImagesByAlbum(id) {
  try {
    const response = await apiClient.get(`/image/getImagesByAlbum/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching images for album:",
      error.response?.data || error.message
    );
    return null;
  }
}

/**
 *  Fetch a single image by ID
 * API: http://localhost:5000/api/v1/image/getImageById/:id
 */

export async function getImageById(id) {
  try {
    const response = await apiClient.get(`/image/getSingleImage/${id}`);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching image by ID:",
      error.response?.data || error.message
    );
    return null;
  }
}

/** * Fetch all images
 * API: http://localhost:5000/api/v1/image/getAllImages
 */
export async function getAllImages() {
  try {
    const response = await apiClient.get("/image/getAllImages");

    if (response.status !== 200) {
      throw new Error(`Failed to fetch images: ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching all images:",
      error.response?.data || error.message
    );
    return null;
  }
}

/**
 * Fetch all notice categories
 * API: http://localhost:5000/api/v1/noticeCategory/all-noticeCategories
 */
export async function getAllNoticeCategories() {
  try {
    const response = await apiClient.get(
      "/noticeCategory/all-noticeCategories"
    );
    console.log("API Response:", response.data);
    if (response.data && response.data.categories) {
      return response.data;
    }

    if (Array.isArray(response.data)) {
      return { success: true, categories: response.data };
    }
    return { success: true, categories: [] };
  } catch (error) {
    console.error(
      "Error fetching categories:",
      error.response?.data || error.message
    );
    // Return empty array on error to prevent crashes
    return { success: false, categories: [] };
  }
}
