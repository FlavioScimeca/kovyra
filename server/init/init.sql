-- Initialize database for development
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- You can add more initialization SQL here
-- For example:
-- CREATE TABLE IF NOT EXISTS users (
--   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--   email VARCHAR(255) NOT NULL UNIQUE,
--   name VARCHAR(255) NOT NULL,
--   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
--   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
-- ); 