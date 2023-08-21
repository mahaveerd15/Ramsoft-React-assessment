import { getBoardData, setBoardData } from '../Data';

describe('Data functions', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('getBoardData', () => {
    it('should return an empty array if no data is stored', async () => {
      const data = await getBoardData();
      expect(data).toEqual([]);
    });

    it('should return the stored data', async () => {
      const testData = [{ id: 'c1', title: 'Column 1', tasks: [] }];
      localStorage.setItem('boardData', JSON.stringify(testData));

      const data = await getBoardData();
      expect(data).toEqual(testData);
    });
  });

  describe('setBoardData', () => {
    it('should store the provided data', async () => {
      const testData = [{ id: 'c1', title: 'Column 1', tasks: [] }];
      await setBoardData(testData);

      const storedData = JSON.parse(localStorage.getItem('boardData'));
      expect(storedData).toEqual(testData);
    });

    it('should overwrite existing data with new data', async () => {
      const initialData = [{ id: 'c1', title: 'Column 1', tasks: [] }];
      const newData = [{ id: 'c2', title: 'Column 2', tasks: [] }];
      localStorage.setItem('boardData', JSON.stringify(initialData));

      await setBoardData(newData);

      const storedData = JSON.parse(localStorage.getItem('boardData'));
      expect(storedData).toEqual(newData);
    });
  });
});
