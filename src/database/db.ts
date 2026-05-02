import * as SQLite from "expo-sqlite";

// Membuka atau membuat database baru
const db = SQLite.openDatabaseSync("mtbspintar.db");

export const initDB = async () => {
  try {
    // Membuat tabel untuk menyimpan pertanyaan MTBS
    await db.withExclusiveTransactionAsync(async (txn) => {
      await txn.execAsync(`
        CREATE TABLE IF NOT EXISTS questions (
          id INTEGER PRIMARY KEY,
          question_text TEXT NOT NULL,
          category TEXT NOT NULL,
          answer_type TEXT DEFAULT 'yes_no',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      // Membuat tabel untuk riwayat cek kesehatan
      await txn.execAsync(`
        CREATE TABLE IF NOT EXISTS check_history (
          id INTEGER PRIMARY KEY,
          date_checked TEXT NOT NULL,
          result_summary TEXT,
          details TEXT,
          status TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      // Membuat tabel untuk pengingat
      await txn.execAsync(`
        CREATE TABLE IF NOT EXISTS reminders (
          id INTEGER PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT,
          reminder_date TEXT NOT NULL,
          reminder_time TEXT,
          is_completed INTEGER DEFAULT 0,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      // Membuat tabel untuk profil anak
      await txn.execAsync(`
        CREATE TABLE IF NOT EXISTS children (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          date_of_birth TEXT NOT NULL,
          gender TEXT,
          blood_type TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      // Seeding pertanyaan awal jika belum ada
      const existingCount = await txn.getFirstAsync<{ count: number }>(
        "SELECT COUNT(*) as count FROM questions",
      );

      if (existingCount && existingCount.count === 0) {
        const questions = [
          { category: "Gejala Umum", question: "Apakah balita demam?" },
          {
            category: "Gejala Umum",
            question: "Apakah balita menangis dengan keras dan terus-menerus?",
          },
          {
            category: "Kondisi Umum",
            question: "Apakah balita dapat minum atau menyusu seperti biasa?",
          },
          { category: "Kondisi Umum", question: "Apakah balita muntah?" },
          {
            category: "Pernapasan",
            question: "Apakah balita mengalami kesulitan bernapas?",
          },
          {
            category: "Pernapasan",
            question: "Apakah balita mengi atau berbunyi saat bernapas?",
          },
        ];

        for (const q of questions) {
          await txn.runAsync(
            `INSERT INTO questions (question_text, category, answer_type) VALUES (?, ?, ?)`,
            [q.question, q.category, "yes_no"],
          );
        }
      }
    });

    console.log("✅ Database berhasil diinisialisasi");
  } catch (error) {
    console.error("❌ Gagal menginisialisasi database:", error);
  }
};

// Query functions
export const getQuestions = async () => {
  try {
    return await db.getAllAsync(
      "SELECT * FROM questions ORDER BY category, id",
    );
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

export const getCheckHistory = async () => {
  try {
    return await db.getAllAsync(
      "SELECT * FROM check_history ORDER BY date_checked DESC",
    );
  } catch (error) {
    console.error("Error fetching check history:", error);
    return [];
  }
};

export const addCheckHistory = async (
  date: string,
  result_summary: string,
  details?: string,
) => {
  try {
    return await db.runAsync(
      `INSERT INTO check_history (date_checked, result_summary, details, status) VALUES (?, ?, ?, ?)`,
      [date, result_summary, details || "", "completed"],
    );
  } catch (error) {
    console.error("Error adding check history:", error);
  }
};

export const getReminders = async () => {
  try {
    return await db.getAllAsync(
      "SELECT * FROM reminders WHERE is_completed = 0 ORDER BY reminder_date",
    );
  } catch (error) {
    console.error("Error fetching reminders:", error);
    return [];
  }
};

export const addReminder = async (
  title: string,
  description: string,
  reminder_date: string,
  reminder_time?: string,
) => {
  try {
    return await db.runAsync(
      `INSERT INTO reminders (title, description, reminder_date, reminder_time) VALUES (?, ?, ?, ?)`,
      [title, description, reminder_date, reminder_time || ""],
    );
  } catch (error) {
    console.error("Error adding reminder:", error);
  }
};

export const deleteReminder = async (id: number) => {
  try {
    return await db.runAsync("DELETE FROM reminders WHERE id = ?", [id]);
  } catch (error) {
    console.error("Error deleting reminder:", error);
  }
};

export const getChildren = async () => {
  try {
    return await db.getAllAsync(
      "SELECT * FROM children ORDER BY created_at DESC",
    );
  } catch (error) {
    console.error("Error fetching children:", error);
    return [];
  }
};

export const addChild = async (
  name: string,
  date_of_birth: string,
  gender?: string,
  blood_type?: string,
) => {
  try {
    return await db.runAsync(
      `INSERT INTO children (name, date_of_birth, gender, blood_type) VALUES (?, ?, ?, ?)`,
      [name, date_of_birth, gender || "", blood_type || ""],
    );
  } catch (error) {
    console.error("Error adding child:", error);
  }
};

export default db;
