import Link from "next/link";

type NavProps = {
  nextSlug: string;
};

export default function Nav({ nextSlug }: NavProps) {
  return (
    <section className="px-[10px] py-[100px] min-[1911px]:px-[65px] flex justify-between text-[15px] md:text-[20px]">
      <Link href="/" className="hover:opacity-50 transition-opacity font-bold">
        Home
      </Link>
      <Link
        href={`/works/${nextSlug}`}
        className="hover:opacity-50 transition-opacity font-bold"
      >
        Next →
      </Link>
    </section>
  );
}

