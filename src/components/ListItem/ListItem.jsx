import s from "./style.module.css";

export function ListItem({ item }) {
  console.log(item);
  return (
    <>
      {item.name && item.price && (
        <tr>
          <th>{item.name}</th>
          <td className={s.price}>{item.price} $</td>
        </tr>
      )}
    </>
  );
}
