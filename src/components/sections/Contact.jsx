import React from "react";

const Contact = () => {
  return (
    <section
      id="kontak"
      className="relative mt-24 md:mt-40 pb-24 px-4 flex justify-center"
      data-aos="fade-up"
    >
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-violet-600/10 blur-[140px] rounded-full -z-10" />

      <div className="w-full max-w-3xl">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-4">
            Get In <span className="text-violet-500">Touch</span>
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm tracking-[0.3em] uppercase font-bold">
            Mari diskusikan ide atau kolaborasi
          </p>
        </div>

        {/* FORM CARD */}
        <form
          action="https://formsubmit.co/prkjeon11@gmail.com"
          method="POST"
          className="relative bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-[2.5rem] px-8 md:px-14 py-14 space-y-10 shadow-2xl"
        >
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-500">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Masukkan nama Anda"
                className="bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-500">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="emailanda@email.com"
                className="bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 transition"
              />
            </div>
          </div>

          {/* PESAN */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-500">
              Pesan
            </label>
            <textarea
              name="message"
              rows="7"
              required
              placeholder="Tuliskan pesan, ide, atau kebutuhan Anda di sini..."
              className="bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 transition resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="group w-full py-5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-black text-xs tracking-[0.3em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] active:scale-[0.97]"
          >
            <span className="flex items-center justify-center gap-3">
              Kirim Pesan
              <i className="ri-send-plane-fill transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
