import { GetFormStats } from "@/actions/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import CreateFormBtn from "@/components/form/CreateFormBtn";

export default function Dashboard() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<CardsStats loading={true}></CardsStats>}>
        <CardsStatsWrapper></CardsStatsWrapper>
      </Suspense>
      <Separator className="my-6"/>
      <h2>Your Forms</h2>
      <Separator className="my-6"/>
      <CreateFormBtn />
    </div>
  )
}

async function CardsStatsWrapper() {
  const stats = await GetFormStats();
  return <CardsStats loading={false} data={stats} />
}

interface CardsStatsProps{
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}

interface CardStatProps{
  title: string,
  helperText: string,
  value: string,
  loading: boolean,
  className: string
}

function CardsStats(props: CardsStatsProps) {
  const {data, loading} = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <CardStat
        title="Total visits"
        helperText="All time form visits"
        value={data?.visits.toLocaleString() || "" }
        loading={loading}
        className="shadow-md shadow-blue-600"
      />

      <CardStat
        title="Total submissions"
        helperText="All time form submissions"
        value={data?.submissions.toLocaleString() || "" }
        loading={loading}
        className="shadow-md shadow-yellow-600"
      />

      <CardStat
        title="Submissions Rate"
        helperText="Visits that result in form submissions"
        value={data?.visits.toLocaleString() + "%" || "" }
        loading={loading}
        className="shadow-md shadow-green-600"
      />

      <CardStat
        title="Bounce Rate"
        helperText="Visits that leaves without interating"
        value={data?.visits.toLocaleString() + "%" || "" }
        loading={loading}
        className="shadow-md shadow-red-600"
      />
    </div>
  )
}

function CardStat(props: CardStatProps){
  const { title, helperText, value, className, loading } = props;
  return (
    <Card className={ className }>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          { title }
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          { loading && 
          <Skeleton>
            <span className="opacity-0">0</span>
          </Skeleton> }
          { !loading && value }
        </div>
        <p className="text-xs text-muted-foreground pt-1">{ helperText }</p>
      </CardContent>
    </Card>
  )
} 