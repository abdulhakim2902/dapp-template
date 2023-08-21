import Navbar from "@/components/instructionsComponent/navigation/navbar";
import Footer from "@/components/instructionsComponent/navigation/footer";

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
