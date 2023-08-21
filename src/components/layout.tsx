import Footer from "./instruction-component/navigation/footer";
import Navbar from "./instruction-component/navigation/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "105vh",
      }}
    >
      <Navbar />
      <div style={{ flexGrow: 1 }}>{children}</div>
      <Footer />
    </div>
  );
}
