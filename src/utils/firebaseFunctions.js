import { collection, getDocs, setDoc, doc, orderBy, query } from "firebase/firestore";
import { firestore } from "../config/firebase.config";

// Saving new items
export const saveItem = async (data) => {
    try {
        await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, { merge: true });
    } catch (error) {
        console.error("Error saving item: ", error);
    }
};

// fetching food items 
export const getAllFoodItems = async () => {
  try {
    const q = query(collection(firestore, 'foodItems'), orderBy("id", "desc"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => doc.data());
    console.log("Fetched data from Firestore:", data); // Add this line
    return data;
  } catch (error) {
    console.error("Error fetching food items: ", error);
    return [];
  }
};
