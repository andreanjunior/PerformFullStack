import { Dialog } from "./componets/ui/dialog";
import { CreateGoal } from "./componets/create-goal";
import { Summary } from "./componets/summary";
import { EmptyGoals } from "./componets/empty-goals";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./http/get-summary";

export function App() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60, //60 seconds
  });

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  );
}
