import React, { useState } from 'react';
import { BookOpen, GraduationCap, Lock, UserCheck } from 'lucide-react';
import type { StudentIdentity } from '../types/quiz';
import { loadStudentSession } from '../utils/storage';

interface LoginScreenProps {
  onLogin: (student: StudentIdentity) => void;
  onOpenTeacherModal: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onLogin,
  onOpenTeacherModal,
}) => {
  const [fullName, setFullName] = useState('');
  const [className, setClassName] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const trimmedName = fullName.trim();
  const trimmedClass = className.trim();
  const existingSession =
    trimmedName && trimmedClass
      ? loadStudentSession({ fullName: trimmedName, className: trimmedClass })
      : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trimmedName) {
      setErrorMsg('Nama Lengkap Murid wajib diisi.');
      return;
    }
    if (!trimmedClass) {
      setErrorMsg('Kelas wajib diisi (contoh: XI IPA 1).');
      return;
    }
    setErrorMsg(null);
    onLogin({ fullName: trimmedName, className: trimmedClass });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 border-b border-teal-900/15 bg-teal-900 text-white shadow-sm">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5 min-w-0">
            <BookOpen className="h-5 w-5 shrink-0 text-teal-200" />
            <span className="truncate text-sm font-bold tracking-tight sm:text-base">
              Asesmen Fisika SMA
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenTeacherModal}
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-teal-600 bg-teal-800 px-3 py-1.5 text-xs font-semibold text-teal-50 transition-colors hover:bg-teal-700 whitespace-nowrap shrink-0"
          >
            <Lock className="h-3.5 w-3.5 shrink-0" />
            <span>MODE GURU</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-3 py-6 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-teal-100 bg-teal-800 px-5 py-6 text-white sm:px-8">
            <p className="text-xs font-semibold tracking-wider text-teal-200">
              FISIKA SMA · HUKUM NEWTON II ROTASI &amp; MENGGELINDING
            </p>
            <h1 className="mt-1.5 text-xl font-bold leading-snug sm:text-2xl text-balance">
              QUIZ PENILAIAN FISIKA — DINAMIKA ROTASI DAN GERAK MENGGELINDING
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-teal-100">
              <span>Pengajar / Narator: MR JO</span>
              <span aria-hidden="true">·</span>
              <span>10 Soal HOTS</span>
              <span aria-hidden="true">·</span>
              <span>Skor Maksimal 100 Poin</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-8 space-y-5">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Masuk Peserta Didik
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Masukkan nama lengkap dan kelas Anda. Progres pengerjaan tersimpan otomatis di perangkat ini berdasarkan identitas Anda.
              </p>
            </div>

            {errorMsg && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
              >
                {errorMsg}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="student-fullname"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Nama Lengkap Murid
                </label>
                <input
                  id="student-fullname"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Contoh: Budi Santoso"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errorMsg) setErrorMsg(null);
                  }}
                  className="mt-1.5 block w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/20"
                />
              </div>

              <div>
                <label
                  htmlFor="student-class"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Kelas
                </label>
                <input
                  id="student-class"
                  name="className"
                  type="text"
                  placeholder="Contoh: XI IPA 1"
                  value={className}
                  onChange={(e) => {
                    setClassName(e.target.value);
                    if (errorMsg) setErrorMsg(null);
                  }}
                  className="mt-1.5 block w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/20"
                />
              </div>
            </div>

            {existingSession && (
              <div className="rounded-xl border border-teal-200 bg-teal-50/80 p-3.5 text-xs text-teal-900">
                <div className="flex items-start gap-2">
                  <UserCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                  <div>
                    <p className="font-semibold">
                      Progres sebelumnya ditemukan ({existingSession.status})
                    </p>
                    <p className="mt-0.5 text-teal-800">
                      Anda dapat langsung melanjutkan pengerjaan dari sesi tersimpan terakhir.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="flex w-full min-h-[46px] items-center justify-center gap-2 rounded-xl bg-teal-800 px-5 py-3 text-sm font-bold tracking-wide text-white shadow-sm transition-colors hover:bg-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
            >
              <GraduationCap className="h-4 w-4 shrink-0" />
              <span>MULAI MENGERJAKAN</span>
            </button>

            <div className="border-t border-slate-100 pt-4 text-xs text-slate-500 space-y-1">
              <p>· Soal 1–2: Pilihan Ganda (masing-masing 10 poin)</p>
              <p>· Soal 3–4: Pilihan Ganda Kompleks (all-or-nothing, 10 poin)</p>
              <p>· Soal 5: Benar / Salah 4 Pernyataan (+2,5 benar, -1 salah, 0 kosong)</p>
              <p>· Soal 6–10: Isian Singkat Matematis (masing-masing 10 poin)</p>
            </div>
          </form>
        </div>

        {/* Zona aman kosong di bagian bawah halaman */}
        <div className="min-h-[220px]" aria-hidden="true" />
      </main>
    </div>
  );
};
