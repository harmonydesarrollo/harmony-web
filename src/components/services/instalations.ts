import { CreateInstalations, Instalations, UpdateInstalations } from '../types/instalations';
import HarmonyApi from './config';
// import HarmonyApi from '../config';

//https://develop.d2z36kd8bp7vmy.amplifyapp.com/employees - crear
async function createInstalation(data: CreateInstalations, token: string): Promise<any> {
  try {
    const modifiedUserInfo = { ...data };
    // Asegúrate de que photo pueda ser un objeto o undefined
    if (typeof modifiedUserInfo.img === 'object' && modifiedUserInfo.img !== null) {
      const photoObject = modifiedUserInfo.img as { fileUrl: string };
      if (photoObject.fileUrl) {
        modifiedUserInfo.img = photoObject.fileUrl;
      }
    }

    // console.log(JSON.stringify(modifiedUserInfo));
    const response = await HarmonyApi.post<any>('matrices/', modifiedUserInfo, {
      headers: { Authorization: 'Bearer ' + token },
    });

    // console.log(response);
    return response.data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
}

// update
//localhost:3000/employees/66252c0a19da4ddae3ba1eb9 -- update
async function updateById(id: string, body: UpdateInstalations, bearerToken: string): Promise<any> {
  const response = await HarmonyApi.patch<any>(
    'matrices/' + id,
    { ...body },
    {
      headers: { Authorization: 'Bearer ' + bearerToken },
    }
  );
  return response;
}

async function getAllInstalationsByIdBranch(idBranch: string, token?: string): Promise<Instalations[]> {
  try {
    const response = await HarmonyApi.get<any>('matrices/'+idBranch, {
      headers: { Authorization: 'Bearer ' + token },
    });

    // console.log(response);

    return response && response.data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
}

async function getAllInstalations(token?: string): Promise<Instalations[]> {
  try {
    const response = await HarmonyApi.get<any>('matrices', {
      headers: { Authorization: 'Bearer ' + token },
    });

    // console.log(response);

    return response && response.data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
}

async function deleteInstalations(id: string, token: string): Promise<any> {
  try {
    const response = await HarmonyApi.delete<any>('matrices/' + id, {
      headers: { Authorization: 'Bearer ' + token },
    });

    return response;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
}
export const instalationServices = {
  getAllInstalations,
  createInstalation,
  updateById,
  deleteInstalations,
  getAllInstalationsByIdBranch
};
