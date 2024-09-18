import { Plus } from "lucide-react";
import mato from "../assets/mato.svg";
import tarefa from "../assets/tarefa.png";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={tarefa} alt="tarefa" />

      <img src={mato} alt="mato" width={300} />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não tem tarefas, vamos cadastrar uma?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
