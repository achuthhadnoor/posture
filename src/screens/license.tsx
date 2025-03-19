import React, { useEffect, useState } from "react";
import cl from "classnames";


const LicensePage = () => {
    const [licenseKey, setLicenseKey] = useState("");
    const [agree, setAgree] = useState(false);
    const [data, setData] = useState(true);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (window) {
            // setIsWindows(!window.api.isMacOs);
        }
    }, []);

    const validateActivation = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // window.api.send('verify-license', licenseKey);
        window.api.updateLicenseKey(licenseKey).then(() => {
            setLoading(false);
        });
    };

    return (
        <>
            <div className="p-2 drag"></div>
            <div className="absolute right-2 drag p-1 ring rounded text-sm text-neutral-400 ring-neutral-700">⏱️ 7 days remaining</div>
            <div className="max-w-md mx-auto ">
                <form
                    className=" flex flex-col justify-between px-6 draggable inset-0 "
                    onSubmit={validateActivation}
                >
                    {/* Content for license activation */}
                    <div className="flex flex-1 flex-col pt-20 dark:text-neutral-200 gap-4">
                        <span className="flex items-center gap-2">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.829 5H27C29.2091 5 31 6.79086 31 9V25.3896C31 27.9763 28.5818 29.8828 26.0665 29.2792L13.4959 26.2622C12.0714 25.9203 10.9478 24.8271 10.5669 23.4126L6.96657 10.0399C6.2823 7.4983 8.19694 5 10.829 5Z" stroke="currentColor" stroke-width="4" />
                            </svg>
                        </span>
                        <h3 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
                            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300  to-green-700">Posture</span>!
                        </h3>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                Enter your license below to activate:
                            </div>
                            <input
                                className={cl(
                                    "my-2 px-[10px] py-[15px] rounded-md no-drag border-2 outline-none accent-green-500 w-full  bg-transparent text-green-900 dark:text-green-500 border-green-600 "
                                )}
                                placeholder="XXXX-XXXX-XXXX-XXXX..."
                                id="license_input"
                                value={licenseKey}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const inputValue = e.target.value.replace(/[^A-Za-z0-9]/g, "");
                                    const formattedValue = inputValue
                                        .replace(/(.{4})/g, "$1-")
                                        .slice(0, 19);
                                    setLicenseKey(formattedValue);
                                }}
                                autoFocus
                            />
                        </div>
                        <div className="flex flex-col py-1 align-baseline justify-start gap-3 text-neutral-500 no-drag">
                            <label className="flex items-center gap-1 text-sm">
                                <input
                                    type="checkbox"
                                    id="license_agree"
                                    checked={agree}
                                    className="accent-green-500"
                                    onChange={() => setAgree(!agree)}
                                />
                                <span className="px-2 select-none">
                                    I have read and agree to the{" "}
                                    <u
                                        className="cursor-pointer"
                                        onClick={() => window.api.handleOpenUrl("https://achuth.notion.site/Terms-of-Service-cf16898198bd42eeb41f4a780f04ac94")}
                                    >
                                        terms of the software license agreement
                                    </u>
                                </span>
                            </label>
                            <label className="flex items-center gap-1 text-sm">
                                <input
                                    type="checkbox"
                                    id="license_data"
                                    checked={data}
                                    className="accent-green-500"
                                    onChange={() => setData(!data)}
                                    disabled
                                />
                                <span className="px-2 select-none">
                                    Share anonymous usage data to help improve the app. No personal details is collected.
                                    {` `} <u
                                        className="cursor-pointer"
                                        onClick={() => window.api.handleOpenUrl("https://achuth.notion.site/Terms-of-Service-cf16898198bd42eeb41f4a780f04ac94")}
                                    >
                                        Learn more.
                                    </u> </span>
                            </label>
                        </div>
                        <div className="flex flex-row flex-wrap flex-1 gap-2 p-2 text-xs">
                            {errors.map((error) => (
                                <span
                                    className="text-8px  text-red-500"
                                    key={`${error}`}
                                >
                                    {error}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col text-center gap-2 no-drag">
                            <button className={cl(
                                "flex justify-center align-center items-center p-2 rounded font-semibold",
                                licenseKey.trim().length === 0 ? "cursor-not-allowed dark:text-neutral-500 dark:bg-neutral-700 bg-neutral-400 text-neutral-700" :
                                    " text-green-900  dark:bg-green-500 bg-green-600 no-drag ")}
                                disabled={licenseKey.trim().length === 0}>
                                {loading && (
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-neutral-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                )}
                                Activate
                            </button>
                            <div
                                className="cursor-pointer underline text-sm p-2 text-neutral-500"
                                onClick={() => {
                                    window.api.handleOpenUrl(
                                        "https://getcompresssapp.com/download"
                                    );
                                }}
                            >
                                Get your license key
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LicensePage;