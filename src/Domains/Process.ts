import IProcess from "../Interfaces/IProcess";

class Process {
    private id?: string;
    protected title: string;
    protected subprocesses: string[];
    protected interconections: string[];

    constructor(process: IProcess) {
        this.id = process.id;
        this.title = process.title;
        this.subprocesses = process.subprocesses;
        this.interconections = process.interconections;
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

    addSubprocess(subprocess: string) {
        this.subprocesses.push(subprocess);
    }

    getInterconections(): string[] | undefined{
        return this.interconections;
    }

    setInterconections(interconections: []) {
        this.interconections = interconections;
    }

    addInterconection(interconection: string) {
        this.interconections.push(interconection);
    }
}

export default Process;
