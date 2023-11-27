import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

function ItemComment(props) {
  const { item: { data } } = props;
  dayjs.extend(RelativeTime);

  const time = dayjs(dayjs.unix(data?.created_utc).format()).fromNow();

  return (
    <div className='p-2 border-2 border-neutral-800'>
      <strong>
        { data?.author } - {time}
      </strong>
      <br />
      <p style={{ lineBreak: 'anywhere' }}>
        { data?.body }
      </p>
    </div>
  )
}

export default function Comments(props) {
  const { comments } = props;
  
  return (
    <div>      
      {comments.map((item, i) => (
        <div className='mb-4' key={`itemcomment_${i}`}>
          <ItemComment item={item}  />
          {item.data?.replies?.data?.children && (
            <div className='ml-4'>
              <Comments comments={item.data?.replies.data.children} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}