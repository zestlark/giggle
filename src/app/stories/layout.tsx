import Header from "@/app/component/header";

export default function StoriesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div>
                <Header />
                {children}
            </div>
        </>
    );
}
