import { List } from "@/components/Lists";

export const metadata = {
  title: 'Reddit Test App',
  description: 'Reddit Test App Description',
}
 
export default async function Home(props) {
  return (
    <div>
      <List />
    </div>
  );
}
