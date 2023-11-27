import Image from "next/image";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import CardView from "../CardView";
import ButtonComment from "../Button/ButtonComment";

function ClassicView(props) {
  const { item, view } = props;
  const { data } = item;

  dayjs.extend(RelativeTime);

  const time = dayjs(dayjs.unix(data?.created_utc).format()).fromNow();

  return (
    <div>
      <div className="flex flex-row mb-6 border-b-2 border-b-slate-800">
        <div className={`${view === "classic" ? "basis-3/4" : ""} p-2`}>
          <div className="pb-4">
            by <strong>{data?.author}</strong>, {time}
          </div>
          <div>
            <h1 className="text-xl">{data?.title}</h1>
          </div>
          {view === "card" && <CardView data={data} />}
          <div className="mt-2">
            <ButtonComment num_comments={data?.num_comments} permalink={data?.permalink} />
          </div>
        </div>
        {view === "classic" && (
          <div className="basis-1/4 p-2">
            <div className="h-24 relative">
              {data?.thumbnail !== "self" && data?.thumbnail !== "default" && (
                <Image alt="..." fill={true} src={data?.thumbnail} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassicView;
