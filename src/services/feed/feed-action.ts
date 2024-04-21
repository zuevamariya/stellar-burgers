import { getFeedsApi } from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFeeds = createAsyncThunk('feeds/fetchFeeds', getFeedsApi);
