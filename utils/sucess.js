export const CreateSuccess = (statusCode, successMessage , data)=>{
    const sucessObj = {
        status: statusCode,
        message: successMessage,
        data: data
    }
    return sucessObj;
}