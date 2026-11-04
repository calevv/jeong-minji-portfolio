import { useParams } from "react-router";

export default function ProjectDetail() {
  const { slug } = useParams();
  return <h1>Project: {slug}</h1>;
}
