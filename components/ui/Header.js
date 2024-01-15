import { getHeaderTitle } from "@react-navigation/elements";

export default function Header({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);

  return (
    <MyHeader
      title={title}
      leftButton={
        back ? <MyBackButton onPress={navigation.goBack} /> : undefined
      }
      style={options.headerStyle}
    />
  );
}
