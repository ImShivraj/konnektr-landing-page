import { Drawer, useMantineTheme } from "@mantine/core";
import { useAppStateContext } from "../../context/contextProvider";
import { drawerLinks } from "../../assets/links";
import Link from "next/link";

const DrawerRight = () => {
  const theme = useMantineTheme();
  //@ts-ignore
  const { drawerActive, setDrawerActive } = useAppStateContext();

  const handleLinkClick = () => {
    setDrawerActive(false);
  };

  return (
    <Drawer
      overlayColor={
        theme.colorScheme === "light"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0}
      overlayBlur={3}
      opened={drawerActive}
      onClose={() => setDrawerActive(false)}
      position="right"
      title="KONNEKTR"
      padding="md"
      size="lg"
      className="font-semibold px-5 overflow-y-scrol"
      classNames={{
        drawer: "bg-themeBgDarkBlue3 pl-10 bg-opacity-60 max-w-87.5%",
        title: "text-white font__harmattan text-2xl tracking-wider ml-1",
      }}
    >
      <div className="flex flex-col gap-5 relative">
        {drawerLinks.map((item) => {
          return item.type === "route" ? (
            <Link href={item.link} key={item.label}>
              <a
                className="text-white font__harmattan tracking-widest text-xl flex items-center gap-4"
                onClick={handleLinkClick}
              >
                <item.Icon color="white" size={25} />
                {item.label}
              </a>
            </Link>
          ) : (
            <a
              className="text-white font__harmattan tracking-widest text-xl flex items-center gap-4"
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              onClick={handleLinkClick}
            >
              <item.Icon color="white" size={25} />
              {item.label}
            </a>
          );
        })}
      </div>
    </Drawer>
  );
};

export default DrawerRight;
