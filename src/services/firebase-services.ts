import { database } from "@/firebase";
import { ref, get } from "firebase/database";

export const getData = async () => {
  try {
    const headerRef = ref(database, "data"); // Get ref of 'data'
    const snapshot = await get(headerRef); // Get data of 'data'
    return snapshot.val();
  } catch (error) {
    console.error("Error getting data:", error);
    throw error;
  }
};
