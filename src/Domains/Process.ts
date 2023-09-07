import IProcess from "../Interfaces/IProcess";

class Process {
    private id?: string;
    protected title: string;
    protected subprocesses: string[];
    protected interconnections: {}[];
    protected positions: {}[];

    constructor(process: IProcess) {
        this.id = process.id;
        this.title = process.title;
        this.subprocesses = process.subprocesses;
        this.interconnections = process.interconnections;
        this.positions = process.positions;
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

    getInterconnections(): {}[] | undefined{
        return this.interconnections;
    }

    setInterconnections(interconnections: {}[]) {
        this.interconnections = interconnections;
    }

    addInterconnection(interconnection: {}[]) {
        this.interconnections.concat(interconnection);
    }

    getPositions(): {}[] | undefined{
        return this.positions;
    }

    setPositions(positions: {}[]) {
        this.positions = positions;
    }

    addPositions(positions: {}[]) {
        this.positions.concat(positions);
    }
}

export default Process;
