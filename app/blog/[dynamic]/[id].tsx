import { useRouter } from "next/router";

export default function DynamicPage() {
  const router = useRouter();
  const {
    query: { dynamic, id },
  } = router;
  return (
    <div>
      Data: {dynamic} - {id}
    </div>
  );
}
