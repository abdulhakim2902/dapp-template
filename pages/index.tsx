import InstructionsComponent from "@/src/components/instruction-component";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <InstructionsComponent />
    </main>
  );
}
