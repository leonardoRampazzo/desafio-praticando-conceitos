import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    height: 200,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    marginTop: 100,
    alignContent: "center",
    justifyContent: "center",
  },
  titleTo: {
    color: "#4ea8de",
    fontWeight: "bold",
    fontSize: 30,
  },
  titleDo: {
    color: "#5d5fcc",
    fontWeight: "bold",
    fontSize: 30,
  },
  inputRow: {
    flexDirection: "row",
    marginTop: -27,
    paddingHorizontal: 24,
    zIndex: 1,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    color: "#f2f2f2",
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 16,
    height: 54,
    borderWidth: 1,
    borderColor: "#5E60CE",
    marginRight: 4,
  },
  addButton: {
    width: 54,
    height: 54,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  content: {
    backgroundColor: "#1a1a1a",
    height: "100%",
    paddingHorizontal: 24,
    marginTop: -27,
  },
  counters: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 32,
    marginBottom: 20,
  },
  createdText: {
    color: "#4ea8de",
    fontWeight: "bold",
  },
  completedText: {
    color: "#8284fa",
    fontWeight: "bold",
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 48,
  },
  emptyTextBold: {
    color: "#808080",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  emptyText: {
    color: "#808080",
    textAlign: "center",
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  checkCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#4EA8DE",
  },
  taskText: {
    flex: 1,
    color: "#F2F2F2",
  },
  taskTextCompleted: {
    flex: 1,
    color: "#808080",
    textDecorationLine: "line-through",
  },
  trashButton: {
    marginLeft: 8,
  },
  trashText: {
    color: "#F2F2F2",
  },
});