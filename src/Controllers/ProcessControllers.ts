import { NextFunction, Request, Response } from "express";
import IProcess from "../Interfaces/IProcess";
import ProcessServices from "../Services/ProcessServices";

class ProcessControllers {
    private req: Request;
    private res: Response;
    private next: NextFunction;
    private service: ProcessServices;

    constructor(req: Request, res: Response, next: NextFunction) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.service = new ProcessServices();
    }

    public async create() {
        const process: IProcess = {
            title: this.req.body.title,
            subprocesses: this.req.body.subprocesses,
            interconnections: this.req.body.interconnections,
            positions: this.req.body.positions,
        }
        try {
            const newProcess = await this.service.create(process);
            return this.res.status(201).json(newProcess);
        } catch (error) {
            this.next(error);
        }
    }

    public async getAll() {
        try {
            const processes = await this.service.getAll();
            return this.res.status(200).json(processes);
        } catch (error) {
            this.next(error);
        }
    }

    public async getById() {
        const { id } = this.req.params;
        try {
            const process = await this.service.getProcessById(id);
            return this.res.status(200).json(process);
        } catch (error) {
            this.next(error);
        }
    }

    public async update() {
        const { id } = this.req.params;
        const obj = this.req.body;
        try {
            const updatedProcess = await this.service.update(id, obj);
            return this.res.status(200).json(updatedProcess);
        } catch (error) {
            this.next(error);
        }
    }

    public async addSubprocess() {
        const { id } = this.req.params;
        const { subprocesses } = this.req.body;
        try {
            const process = await this.service.getProcessById(id);
            process?.addSubprocess(subprocesses);
            const newSubprocess = process?.getSubprocesses() as string[];
            const updatedProcess = await this.service.addSubprocess(id, newSubprocess);
            return this.res.status(200).json(updatedProcess);
        } catch (error) {
            this.next(error);
        }
    }

    public async addInterconnection() {
        const { id } = this.req.params;
        const { interconnections } = this.req.body;
        try {
            const process = await this.service.getProcessById(id);
            process?.addInterconnection(interconnections);
            const newInterconnection = process?.getInterconnections() as {}[];
            const updatedProcess = await this.service.addInterconnection(id, newInterconnection);
            return this.res.status(200).json(updatedProcess);
        } catch (error) {
            this.next(error);
        }
    }

    public async addPositions() {
        const { id } = this.req.params;
        const { positions } = this.req.body;
        try {
            const process = await this.service.getProcessById(id);
            process?.addPositions(positions);
            const newPositions = process?.getPositions() as {}[];
            const updatedProcess = await this.service.addPositions(id, newPositions);
            return this.res.status(200).json(updatedProcess);
        } catch (error) {
            this.next(error);
        }
    }

    public async delete() {
        const { id } = this.req.params;
        try {
            const deletedProcess = await this.service.delete(id);
            return this.res.status(200).json(deletedProcess);
        } catch (error) {
            this.next(error);
        }
    }

}

export default ProcessControllers;
