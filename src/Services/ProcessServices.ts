import Process from "../Domains/Process"
import IProcess from "../Interfaces/IProcess"
import ProcessODM from "../Models/ProcessODM"
import CustomError from "../Errors/CustomError"

class ProcessServices {
    model = new ProcessODM()

    private processDomain(process: IProcess | null): Process | null {
        if (!process) {
            return null;
        }
        return new Process(process);
    }

    public async create(process: IProcess): Promise<Process | null> {
        const processExists = await this.model.findOne(process.title);
        if(processExists) {
            throw new CustomError('Process already exists', 409);
        }
        const createProcess = await this.model.create(process);
        return this.processDomain(createProcess);
    }

    public async update(id: string, obj: Partial<IProcess>): Promise<Process | null> {
        const processExists = await this.model.findById(id);
        if(!processExists) {
            throw new CustomError('Process not found', 404);
        }
        const updateProcess = await this.model.update(id, obj);
        return this.processDomain(updateProcess);
    }
    
    public async addSubprocess(id: string, subprocess: string[]): Promise<Process | null> {
        const updateProcess = await this.model.update(id, {subprocesses: subprocess } );
        return this.processDomain(updateProcess);
    }

    public async addInterconnection(id: string, interconnection: string[]): Promise<Process | null> {
        const updateProcess = await this.model.update(id, {interconnections: interconnection } );
        return this.processDomain(updateProcess);
    }

    public async delete(id: string): Promise<Process | null> {
        const processExists = await this.model.findById(id);
        if(!processExists) {
            throw new CustomError('Process not found', 404);
        }
        const deleteProcess = await this.model.delete(id);
        return this.processDomain(deleteProcess);
    }

    public async getProcessById(id: string): Promise<Process | null> {
        const process = await this.model.findById(id);
        if(!process) {
            throw new CustomError('Process not found', 404);
        }
        return this.processDomain(process);
    }

    public async getAll(): Promise<Process[]> {
        const processes = await this.model.getAll();
        return processes.map((process) => this.processDomain(process) as Process);
    }
}

export default ProcessServices;
