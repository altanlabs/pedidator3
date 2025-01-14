import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  const navigate = useNavigate();

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
            <Input id="order-number" placeholder="Ingrese el número de pedido" />
          </div>
          <div>
            <Label htmlFor="customer">Cliente</Label>
            <Select id="customer" placeholder="Seleccione un cliente">
              {/* Options should be populated dynamically */}
              <option value="cliente1">Cliente 1</option>
              <option value="cliente2">Cliente 2</option>
            </Select>
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
            <tr>
              <td><Input placeholder="Referencia" /></td>
              <td><Input placeholder="Descripción" /></td>
              <td><Input type="number" placeholder="Cantidad" /></td>
              <td><Input type="number" placeholder="Descuento" /></td>
            </tr>
            {/* Additional rows can be added dynamically */}
          </tbody>
        </Table>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <Button size="lg" variant="default">
            Guardar Pedido
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
}
