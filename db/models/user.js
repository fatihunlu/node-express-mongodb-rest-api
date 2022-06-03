module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          name: String,
          surName: String,
          email: String,
          birthDate: Date,
        },
        { timestamps: true }
      )
    );
    return User;
  };