import axiosInstance from './axios';

const fetchData = async () => {
  try {
    const response = await axiosInstance.get('/api/Church/all');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchDataOne = async (id) => {
  try {
    const response = await axiosInstance.get('/api/Church/'+id);
    return response.data;
  } catch (error) {
    throw error;
  }
};


const create = async(
      name,
      street,
      postalCode,
      city,
      country,
      coordinats ) =>
{
  try {
    const response = await axiosInstance.post('/api/Church/admin/create', {
      name,
      street,
      postalCode,
      city,
      country,
      coordinats

    })




    return response.code
  } catch (error) {
    throw error;
  }
}

const remove = async(id) => {
  try {
    const response = await axiosInstance.delete('/api/Church/admin/' + id)

    return response.code
  }
  catch(error){
    throw error;
  }
}

const edit = async(
  id,
  name,
  street,
  postalCode,
  city,
  country,
  coordinats) =>{
  try {
    const response = await axiosInstance.put('/api/Church/admin/' + id,
    {
      name,
      street,
      postalCode,
      city,
      country,
      coordinats
    })

    return response.code
  }
  catch(error){
    throw error;
  }
}
export default {
  fetchData,
  fetchDataOne,
  create,
  remove,
  edit
};