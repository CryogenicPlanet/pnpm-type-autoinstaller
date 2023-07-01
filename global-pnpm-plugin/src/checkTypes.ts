import axios from 'axios';

export async function checkTypes(packageName: string): Promise<boolean> {
  try {
    const response = await axios.get(`https://registry.npmjs.org/@types/${packageName}`);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}