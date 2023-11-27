import ClassicView from "@/components/ClassicView";
import Comments from "@/components/Comments";
import ServerFetcher from "@/utils/ServerFetcher";
import Link from 'next/link'

export async function generateMetadata({ params, searchParams }, parent) {
  const { permalink } = searchParams;
 
  const data = await ServerFetcher(permalink);
 
  const content = data[0]?.data?.children[0];

  return {
    title: content.data?.title,
  }
}
 

export default async function Home({searchParams}) {
  const { permalink } = searchParams;

  const data = await ServerFetcher(permalink);

  const content = data[0]?.data?.children[0];
  const comments = data[1]?.data?.children;
  return (
    <div>
      <Link href="/" className="rounded-full bg-lime-950 px-4 py-2">Back</Link>

      <ClassicView item={content} view="card" />
      <Comments comments={comments} />
    </div>
  );
}
