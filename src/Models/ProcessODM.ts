import { Schema } from "mongoose";
import AbstractODM from "./AbstractODM";
import IProcess from "../Interfaces/IProcess";

class ProcessODM extends AbstractODM<IProcess> {
  constructor() {
    const processSchema = new Schema<IProcess>({
      title: { type: String, required: true },
      subprocesses: Array,
      interconnections: Array,
      positions: Array,
    });
    super(processSchema, "Process");
  }
}

export default ProcessODM;
