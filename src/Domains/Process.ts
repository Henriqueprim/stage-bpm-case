import IProcess from "../Interfaces/IProcess";

class Process {
    private id: string;
    protected title: string;
    protected subprocesses: IProcess[];

    constructor(process: IProcess) {
        this.id = process.id;
        this.title = process.title;
        this.subprocesses = process.subprocesses;
    }


    getProcessId(): string {
        return this.id;
    }

    setProcessId(id: string) {
        this.id = id;
    }

    getTittle(): string {
        return this.title;
    }

    setTittle(title: string) {
        this.title = title;
    }

    getSubprocesses(): IProcess[] {
        return this.subprocesses;
    }

    setSubprocesses(subprocesses: []) {
        this.subprocesses = subprocesses;
    }

    addSubprocess(subprocess: IProcess) {
        this.subprocesses.push(subprocess);
    }
}

export default Process;
