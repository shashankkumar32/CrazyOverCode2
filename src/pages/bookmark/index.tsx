import React, { ReactElement, useEffect } from "react";

import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";

import PokemonListingCards from "@/components/Ui-common/BookmarkCard";
import { useSelector } from "react-redux";
import { NextPageWithLayout } from "../_app";
import ResponsiveAppBar from "../../../layout/appbar";

const Page: NextPageWithLayout = () => {
  const Data: any | [] = useSelector((state) => state);

  return (
    <Box sx={{ mt: 16 }}>
      <Link style={{ textDecoration: "none" }} href={`bookmark`}>
        <Typography>Bookmark</Typography>
      </Link>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {Data.array.length ? (
          <Grid container lg={12} spacing={2}>
            {/* {JSON.stringify(allpokedata)} */}
            {Data?.array?.map((d: any, index: any) => (
              <Grid
                key={index}
                item
                lg={3}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {" "}
                <Link
                  style={{ textDecoration: "none" }}
                  href={`pokemon/${d.name}`}
                >
                  <PokemonListingCards name={d.name} index={index} />
                </Link>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box> No Book mark added yet</Box>
        )}
      </Box>
    </Box>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {" "}
      <ResponsiveAppBar />
      {page}
    </>
  );
};
export default Page;
