import { motion } from "framer-motion";
import { useState, ChangeEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Table } from "@/components/ui/table";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function IndexPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [customer, setCustomer] = useState("");
  const [items, setItems] = useState([
    { reference: "", description: "", quantity: 0, discount: 0 },
  ]);

  const addItem = () => {
    setItems([...items, { reference: "", description: "", quantity: 0, discount: 0 }]);
  };

  const handleSaveOrder = () => {
    // Logic to save the order
    console.log("Order saved", { orderNumber, customer, items });
    // Reset form
    setOrderNumber("");
    setCustomer("");
    setItems([{ reference: "", description: "", quantity: 0, discount: 0 }]);
  };

  const handleCustomerChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCustomer(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Order Section */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Crear Pedido
        </h1>
        <div className="space-y-4">
          <div>
            <Label htmlFor="order-number">Número de Pedido</Label>
            <Input
              id="order-number"
              placeholder="Ingrese el número de pedido"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="customer">Cliente</Label>
            <select
              id="customer"
              value={customer}
              onChange={handleCustomerChange}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="" disabled selected>
                Seleccione un cliente
              </option>
              {/* Options should be populated dynamically */}
              <option value="cliente1">Cliente 1</option>
              <option value="cliente2">Cliente 2</option>
            </select>
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Añadir Artículos
        </h2>
        <Table>
          <thead>
            <tr>
              <th>Referencia</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Descuento Especial</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <Input
                    placeholder="Referencia"
                    value={item.reference}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[index].reference = e.target.value;
                      setItems(newItems);
                    }}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Descripción"
                    value={item.description}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[index].description = e.target.value;
                      setItems(newItems);
                    }}
                  />
                </td>
                <td>
                  <Input
                    type="number"
                    placeholder="Cantidad"
                    value={item.quantity}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[index].quantity = parseInt(e.target.value);
                      setItems(newItems);
                    }}
                  />
                </td>
                <td>
                  <Input
                    type="number"
                    placeholder="Descuento"
                    value={item.discount}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[index].discount = parseFloat(e.target.value);
                      setItems(newItems);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={addItem} variant="outline">
          Añadir Artículo
        </Button>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <Button size="lg" variant="default" onClick={handleSaveOrder}>
            Guardar Pedido
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
}
