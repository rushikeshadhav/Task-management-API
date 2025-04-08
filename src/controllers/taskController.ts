import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTask = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  const userId = (req as any).userId;
  const task = await prisma.task.create({
    data: { title, description, status, userId },
  });
  res.status(201).json(task);
};

export const getTasks = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const tasks = await prisma.task.findMany({ where: { userId } });
  res.json(tasks);
};

export const updateTask = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const { id } = req.params;
  const { title, description, status } = req.body;
  const task = await prisma.task.updateMany({
    where: { id, userId },
    data: { title, description, status },
  });
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const { id } = req.params;
  await prisma.task.deleteMany({ where: { id, userId } });
  res.json({ message: 'Task deleted' });
};