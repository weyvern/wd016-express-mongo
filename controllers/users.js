import pool, { ObjectId } from '../db/mongoClient.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

const DATABASE = 'myBlog';
const COLLECTION = 'users';
const userCollection = pool.db(DATABASE).collection(COLLECTION);

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await userCollection.find().toArray();
  res.status(200).json(users);
});

export const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await userCollection.findOne({ _id: ObjectId(id) });
  if (!user) throw new ErrorResponse('User does not exist', 404);
  res.status(200).json(user);
});

export const createNewUser = asyncHandler(async (req, res) => {
  const { name, lastName, email, age } = req.body;
  const found = await userCollection.findOne({ email });
  if (found) throw new ErrorResponse('Email is already taken', 403);
  if (!name || !lastName || !email) throw new ErrorResponse('Fields cannot be empty', 400);
  const { insertedId, ops } = await userCollection.insertOne({ name, lastName, email, age });
  const newUser = await userCollection.findOne({ _id: ObjectId(insertedId) });
  res.status(201).json(newUser);
});
