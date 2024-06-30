import Image from "next/image";
import { Button } from "@/components/ui/button";
import db from "@/lib/db";
import mongoose from "mongoose";
const dummySchema = new mongoose.Schema({
  name: String,
  age: Number,
}, { timestamps: true });
const dummy = mongoose.models.dummy || mongoose.model("dummy", dummySchema);
export default async function Home() {
  const data = await getData();
  async function getData() {
    db();
    const data = await dummy.find();
    console.log(data);
    return data
  }
  return (
    <div>HomePage

      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </table>

      </div>
    </div>
  );
}
