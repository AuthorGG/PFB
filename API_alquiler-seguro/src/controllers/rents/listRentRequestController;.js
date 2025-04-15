// Importamos los modelos.
import getAllRentRequestModel from "../../models/rents/getAllRentRequestModel.js";

// Función controladora final que retorna el listado de entradas.
const listRentRequestController = async (req, res, next) => {
  try {
    const rentRequests = await getAllRentRequestModel();

    res.send({
      status: "ok",
      data: {
        rentRequests,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default listRentRequestController;
