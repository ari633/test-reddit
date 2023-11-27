"use client"

import { useRouter } from 'next/navigation'

const ButtonComment = ({num_comments, permalink}) => {
  const router = useRouter();

  return (
    <button
      className="rounded-full bg-lime-950 px-4 py-2"
      onClick={() => permalink ? router.push(`/comments/?permalink=${permalink}`) : ''}
    >
      Comments {num_comments}
    </button>
  );
};

export default ButtonComment;
