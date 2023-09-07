interface IProcess {
    id?: string;
    title: string;
    subprocesses: string[];
    interconnections: {}[];
    positions: {}[];
}

export default IProcess;
