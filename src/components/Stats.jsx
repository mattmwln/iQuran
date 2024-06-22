import React, { useEffect } from 'react';

export default function Stats() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component is mounted
    }, []);

    return (
        <div className="mb-40 w-screen">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <p className="text-center mt-2 font-bold tracking-tight text-gray-200 sm:text-6xl">
                    Terimakasih Kepada
                </p>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                        src="https://www.freepnglogos.com/uploads/logo-nu-png/green-circle-keluarga-besar-nahdlatul-ulama-sticker-logo-nu-8.png"
                        alt="Transistor"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                        src="https://lpm.umy.ac.id/wp-content/uploads/2022/05/Logo-Muhammadiyah-png-warna-.png"
                        alt="Reform"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                        src="https://3.bp.blogspot.com/-8a7qLcKCaj8/XA5vs5Tml_I/AAAAAAAABRA/ATMBX38YkPkVUi0adCQm1zzv-hWcvzvHQCLcBGAs/s1600/Logo%2BQiraati%2B2018.png"
                        alt="Tuple"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="https://i1.wp.com/www.freepnglogos.com/uploads/logo-halal-png/dapur-halal-persyaratan-sertifikasi-halal-mui-22.png"
                        alt="SavvyCal"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="https://sabilulhasanah.com/wp-content/uploads/2021/05/logopakai_-_Copy-removebg-preview.png"
                        alt="Statamic"
                        width={158}
                        height={48}
                    />
                </div>
            </div>
        </div>
    );
}
