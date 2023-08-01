import express from "express";
import { createRole, getAllRoles, updateRole, deleteRole } from "../controllers/role.controller.js";
const router = express.Router();

//  Create new role in Db
router.post('/create', createRole);

// Update role in Db
router.put('/update/:id', updateRole);

// Get All the roles from Db
router.get('/getAll', getAllRoles);

// Delete role from Db
router.delete('/deleteRole/:id', deleteRole);


export default router;