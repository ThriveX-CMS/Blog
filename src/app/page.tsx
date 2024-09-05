import Swiper from "@/components/Swiper";
import Typed from "@/components/Typed";
import Starry from "@/components/Starry"
import Container from "@/components/Container";
import ArticleLayout from "@/components/ArticleLayout";
import Sidebar from "@/components/Sidebar";

interface Props {
  searchParams: { page: number; size: number };
};

export default async ({ searchParams }: Props) => {
  const page = Number(searchParams.page) || 1;
  const size = Number(searchParams.size) || 5;

  return (
    <>
      <Swiper>
        {/* 星空背景组件 */}
        <Starry />
        {/* 打字机组件 */}
        <Typed className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[80%] text-center text-white text-[30px] custom_text_shadow"></Typed>
      </Swiper>

      <Container>
        {/* 文章列表 */}
        <ArticleLayout pagination={{ page, size }} />
        {/* 侧边栏 */}
        <Sidebar />
      </Container>
    </>
  );
}