import { Drawer, useMantineTheme } from "@mantine/core";
import { useAppStateContext } from "../../context/contextProvider";
import { drawerLinks } from "../../assets/links";

const DrawerRight = () => {
  const theme = useMantineTheme();
  const { drawerActive, setDrawerActive } = useAppStateContext();

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
        drawer: "bg-themeBgDarkBlue3 pl-10 bg-opacity-60",
        title: "text-white font__harmattan text-2xl tracking-wider ml-1",
      }}
    >
      <div className="flex flex-col gap-5 relative">
        {drawerLinks.map((item) => (
          <div className="flex items-center gap-4" key={item.label}>
            <item.Icon color="white" size={25} />
            <a
              className="text-white font__harmattan tracking-widest text-xl"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default DrawerRight;
