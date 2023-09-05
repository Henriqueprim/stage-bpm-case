import IProcess from "../Interfaces/IProcess";

class Process {
    private id?: string;
    protected title: string;
    protected subprocesses: string[];
    protected interconnections: string[];

    constructor(process: IProcess) {
        this.id = process.id;
        this.title = process.title;
        this.subprocesses = process.subprocesses;
        this.interconnections = process.interconnections;
    }


    getProcessId(): string | undefined{
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

    getSubprocesses(): string[] | undefined{
        return this.subprocesses;
    }

    setSubprocesses(subprocesses: []) {
        this.subprocesses = subprocesses;
    }

    addSubprocess(subprocess: string[]) {
        this.subprocesses.concat(subprocess);
    }

    getInterconnections(): string[] | undefined{
        return this.interconnections;
    }

    setInterconnections(interconnections: []) {
        this.interconnections = interconnections;
    }

    addInterconnection(interconnection: string[]) {
        this.interconnections.concat(interconnection);
    }
}

export default Process;
