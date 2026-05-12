

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="text-center">
                {/* Angka 404 */}
                <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">
                    404
                </h1>
                
                {/* Latar belakang untuk teks "Not Found" */}
                <div className="bg-blue-600 px-2 text-sm rounded rotate-12 absolute text-white shadow-md">
                    Halaman Tidak Ditemukan
                </div>

                {/* Pesan Error */}
                <h2 className="mt-8 text-3xl font-bold text-gray-800 md:text-4xl">
                    Waduh, Anda tersesat!
                </h2>
                
                <p className="mt-4 text-gray-500 mb-8 max-w-md mx-auto">
                    Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dihapus, diubah namanya, atau tidak pernah ada.
                </p>

                {/* Tombol Kembali ke Beranda */}
                <a 
                    href="/" 
                    className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                    Kembali ke Beranda
                </a>
            </div>
        </div>
    );
}