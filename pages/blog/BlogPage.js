import style from "../../styles/blog.module.css";
import Image from "next/image";
import { BlogCard, AnotherCard } from "../../components/Cards";
import { Heading1, Heading2, Heading3, Paragraph } from "../../components/Type";

export default function BlogPage() {
  return (
    <div className={style.hero}>
      <div className="flex flex-col md:flex-row items-center w-full">
        <AnotherCard>
          <Heading1>#WomenInBlockchain</Heading1>
          <Heading1>#WomenInCardano</Heading1>
          <p className="text-2xl md:text-xl">
            Scroll through the blog to read more of our women stories
          </p>
        </AnotherCard>
        <div className="flex-2 lg:w-3/6 min-h-54 sm:w-full md:w-1/2 xs:w-full hidden lg:block md:block xl:block">
          <div className={style.heroImg}>
            <Image
              src="/rhero.jpg"
              width="1000"
              height="900"
              className="m-0 p-0"
            />
          </div>
        </div>
      </div>
      <div className="min-h-96">
        <Heading2>STORIES Of OUR WOMEN IN CARDANO</Heading2>
        <div className="flex flex-col md:flex-wrap lg:flex-row items-center w-full min-h-96 py-20 px-4">
          <BlogCard>
            <Heading3>
              CARDANO BLOCKCHAIN: A SOLUTION TO SOME OF AFRICA’S MAJOR PROBLEM
            </Heading3>
            <Paragraph>
              What came to your mind when you first heard of blockchain
              technology? Well for me, I was unenthusiastic about it, I thought
              it would be lame(I had zero interest in technology at that
              time)...
            </Paragraph>
          </BlogCard>

          <BlogCard>
            <Heading3>
              CARDANO BLOCKCHAIN: A SOLUTION TO SOME OF AFRICA’S MAJOR PROBLEM
            </Heading3>
            <Paragraph>
              What came to your mind when you first heard of blockchain
              technology? Well for me, I was unenthusiastic about it, I thought
              it would be lame(I had zero interest in technology at that
              time)...
            </Paragraph>
          </BlogCard>

          <BlogCard>
            <Heading3>
              CARDANO BLOCKCHAIN: A SOLUTION TO SOME OF AFRICA’S MAJOR PROBLEM
            </Heading3>
            <Paragraph>
              What came to your mind when you first heard of blockchain
              technology? Well for me, I was unenthusiastic about it, I thought
              it would be lame(I had zero interest in technology at that
              time)...
            </Paragraph>
          </BlogCard>
        </div>
      </div>
    </div>
  );
}
