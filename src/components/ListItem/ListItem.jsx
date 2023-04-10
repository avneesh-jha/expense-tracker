import s from "./style.module.css";

export function ListItem({ item }) {
  console.log(item);
  return (
    <>
      {item && (
        <tr>
          <th>{item.name}</th>
          <td className={s.price}>{item.price} $</td>
        </tr>
      )}
    </>
  );
}
