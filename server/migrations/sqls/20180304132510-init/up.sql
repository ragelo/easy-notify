--
-- Name: auth_client; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE IF NOT EXISTS auth_client (
    id SERIAL NOT NULL PRIMARY KEY,
    name character varying(255) NOT NULL,
    secretHash character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);
