import IProcess from "../Interfaces/IProcess";

class Process {
    private id: number;
    protected tittle: string;
    protected subprocesses: [];

    constructor(process: IProcess) {
        this.id = process.id;
        this.tittle = process.tittle;
        this.subprocesses = process.subprocesses;
    }


    getProcessId(): number {
        return this.id;
    }

    setProcessId(id: number) {
        this.id = id;
    }

    getTittle(): string {
        return this.tittle;
    }

    setTittle(tittle: string) {
        this.tittle = tittle;
    }

    getSubprocesses(): [] {
        return this.subprocesses;
    }

    setSubprocesses(subprocesses: []) {
        this.subprocesses = subprocesses;
    }
}

export default Process;