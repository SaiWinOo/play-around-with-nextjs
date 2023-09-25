type HeaderProps = {
    children: React.ReactNode;
};

const Header = (props : HeaderProps) => {
    return (
        <h1 className={'text-4xl font-bold text-cyan-400'}>
            {props.children}
        </h1>
    );
};

export default Header;