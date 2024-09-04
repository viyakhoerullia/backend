const db = require('../models');
const detail_transaksi = db.detail_transaksi;

// Create a new Detail Transaksi
exports.create = async (req, res) => {
  try {
    const { id_transaksi, id_sepeda, harga, jumlah_sepeda, durasi, tanggal_sewa, tanggal_pengembalian, dari_jam, sampai_jam, dijemput_diantar } = req.body;

    const total_harga = jumlah_sepeda * harga * durasi; // Perhitungan total_harga

    const newdetail_transaksi = await detail_transaksi.create({
      id,
      id_transaksi,
      id_sepeda,
      harga,
      jumlah_sepeda,
      durasi,
      tanggal_penyewaan,
      tanggal_sewa,
      tanggal_pengembalian,
      dari_jam,
      sampai_jam,
      dijemput_diantar,
      total_harga,
    });

    res.status(201).json(newdetail_transaksi);
  } catch (error) {
    res.status(500).json({ message: 'Error creating detail transaksi', error });
  }
};

// Retrieve all Detail Transaksi
exports.readAll = async (req, res) => {
  try {
    const detail_transaksis = await detail_transaksi.findAll();
    res.status(200).json(detail_transaksis);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving detail transaksi', error });
  }
};

// Retrieve Detail Transaksi by ID
exports.readById = async (req, res) => {
  try {
    const id = req.params.id;
    const detail_transaksi = await detail_transaksi.findByPk(id);

    if (!detail_transaksi) {
      return res.status(404).json({ message: 'Detail Transaksi not found' });
    }

    res.status(200).json(detail_transaksi);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving detail transaksi', error });
  }
};

// Update a Detail Transaksi by ID
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { id_transaksi, id_sepeda, harga, jumlah_sepeda, durasi, tanggal_sewa, tanggal_pengembalian, dari_jam, sampai_jam, dijemput_diantar } = req.body;

    const total_harga = jumlah_sepeda * harga * durasi; // Update perhitungan total_harga

    const [updated] = await detail_transaksi.update(
      { id_transaksi, id_sepeda, harga, jumlah_sepeda, durasi, tanggal_sewa, tanggal_pengembalian, dari_jam, sampai_jam, dijemput_diantar, total_harga },
      { where: { id } }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Detail Transaksi not found' });
    }

    const updateddetail_transaksi = await detail_transaksi.findByPk(id);
    res.status(200).json(updateddetail_transaksi);
  } catch (error) {
    res.status(500).json({ message: 'Error updating detail transaksi', error });
  }
};

// Delete a Detail Transaksi by ID
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await detail_transaksi.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: 'Detail Transaksi not found' });
    }

    res.status(200).json({ message: 'Detail Transaksi deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting detail transaksi', error });
  }
};
