interface IProcess {
    id?: string;
    title: string;
    subprocesses: string[];
    interconnections: string[];
}

export default IProcess;
