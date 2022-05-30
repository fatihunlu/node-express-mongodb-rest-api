module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          name: String,
          description: String,
        },
        { timestamps: true }
      )
    );
    return User;
  };