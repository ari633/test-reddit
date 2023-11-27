"use client";
import { useCallback, useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ClientFetcher } from "@/utils/ClientFetcher";
import ClassicView from "../ClassicView";

export function List() {
  const [sortBy, setSortBy] = useState("new");
  const [limit, setLimit] = useState(10);
  const [after, setAfter] = useState("");
  const [viewtype, setViewType] = useState("classic");
  const [loading, setLoading] = useState(false);
  const [loadingScroll, setLoadingScroll] = useState(false);

  const [data, setData] = useState([]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    
    ClientFetcher(`/api?sortBy=${sortBy}&limit=${limit}`).then(
      (res) => {
        setAfter(res.data?.after);
        setData(res.data?.children);
        setLoading(false);
      }
    );

  }, [sortBy, limit]);

  useEffect(() => {
    const sort = searchParams.get('sort');
    if (sort && sort !== sortBy) {
      setSortBy(sort);
    }
  }, [searchParams]);

  const handleOnScroll = (e) => {
    const target = e.target;
  
    if (target.scrollHeight - target.scrollTop === target.clientHeight && !loading) {
      setLoadingScroll(true);
      ClientFetcher(`/api?sortBy=${sortBy}&limit=${limit}&after=${after}`).then(
        (res) => {
          if (res.data) {
            setAfter(res.data?.after);
            setData((prev) => [...prev, ...res.data?.children]);
          }
          setLoadingScroll(false);
        }
      );
    }
  };

  const handleChangeSort = (e) => {
    const val = e.target.value;
    return router.push(pathname + "?" + createQueryString("sort", val));
  };

  const handleChangeView = (e) => {
    const val = e.target.value;
    setViewType(val);
    return router.push(pathname + "?" + createQueryString("viewtype", val));
  };

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-between mb-4">
        <div>
          <select value={sortBy} className="bg-neutral-900" onChange={handleChangeSort}>
            <option value="new">New</option>
            <option value="hot">Hot</option>
            <option value="top">Top</option>
          </select>
        </div>
        <div>
          <select className="bg-neutral-900" onChange={handleChangeView}>
            <option value="classic">Classic</option>
            <option value="card">Card</option>
          </select>
        </div>
      </div>
      <div style={{ height: '100vh', overflowY: 'scroll' }} onScroll={handleOnScroll}>
        {data?.map((item, i) => (        
          <>
            <ClassicView item={item} key={`kitem_${i}`} view={viewtype} />
          </>
        ))}
      </div>
      {loadingScroll && (
        <div>
          Loading....
        </div>
      )}
    </>
  );
}
