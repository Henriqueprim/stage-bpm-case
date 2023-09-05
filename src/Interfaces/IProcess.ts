interface IProcess {
    id?: string;
    title: string;
    subprocesses: string[];
    interconections: string[];
}

export default IProcess;
