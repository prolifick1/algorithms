    function findMax(node) {
      /* loop down to find the rightmost leaf */
      var current = node;
      while (current.right != null)
        current = current.right;

      return (current.data);
    }

    module.exports = findMax;