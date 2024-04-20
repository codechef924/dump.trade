import {
  bZ as Le,
  b_ as ue,
  b$ as Ke,
  c0 as Oe,
  c1 as Ue,
  c2 as Ve,
  c3 as Ne,
  c4 as Ge,
  c5 as We,
  c6 as ze,
  c7 as t0,
  c8 as N,
  c9 as r0,
  ca as T,
  cb as he,
  cc as o0,
  cd as P0,
  ce as L,
  cf as pe,
  cg as x0,
  a_ as O0,
  ch as v0,
  ci as U0,
  cj as me,
  ck as u0,
  cl as b0,
  cm as q0,
  cn as W0,
  co as Z0,
  cp as L0,
  cq as ge,
  cr as i0,
  cs as ye,
  ct as ve,
  cu as He,
  cv as we,
  cw as z0,
  cx as H0,
  cy as K0,
  cz as Q0,
  cA as Se,
  cB as $e,
  cC as Je,
  aM as R0,
  cD as je,
  cE as qe,
  cF as Ze,
  cG as Qe,
  cH as Xe,
  cI as Ye,
  cJ as ex,
  cK as xx,
  cL as ax,
  cM as cx,
  cN as tx,
  cO as rx,
  cP as fx,
  cQ as nx,
  cR as dx,
  cS as ox,
  cT as ix,
  cU as sx,
  cV as bx,
  cW as lx,
  cX as ux,
  cY as hx,
  cZ as px,
  c_ as mx,
  c$ as gx,
  d0 as yx,
  d1 as vx,
  aZ as wx,
  at as Sx,
  d2 as Cx,
  d3 as Ex,
  d4 as Ax,
  d5 as _x,
  d6 as kx,
  d7 as Tx,
  d8 as Px,
  d9 as Fx,
  da as Bx,
  db as Mx,
  dc as Dx,
  dd as Rx,
  de as Ix,
  df as Lx,
  bF as Kx,
  dg as Ox,
  au as Ux,
  dh as Vx,
  di as Nx,
  dj as Gx,
  dk as Wx,
  dl as zx,
  dm as Hx,
  dn as $x,
  dp as Jx,
  dq as jx,
  ar as qx,
  dr as Zx,
  ds as Qx,
  dt as Xx,
  du as Yx,
  dv as ea,
  dw as xa,
  _ as aa,
  ap as ca,
  a0 as B0,
  ah as M0,
  al as ta,
  am as ra,
  aj as E0,
  aL as fe,
  a1 as f0,
  a2 as A0,
  a3 as e0,
  a4 as c0,
  a6 as D,
  a5 as z,
  aa as h0,
  aD as fa,
  ay as ne,
  a7 as na,
  af as _0,
  b0 as de,
  ab as da,
  b1 as oa,
  aE as ia,
  aF as sa,
} from "./entry.16c5462c.js";
import { _ as ba } from "./Select.74f8e480.js";
import { u as la, _ as ua, a as ha } from "./useForm.3e4d564e.js";
import { _ as pa } from "./LoadingDots.68a50a62.js";
import { r as G0, m as ma } from "./index.235c8c1b.js";
import { g as ga, s as ya } from "./layerzero.89102e90.js";
import { a as va, b as wa } from "./token.1b6e2baf.js";
const Sa = "Ξ",
  Ca = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        AddressZero: Le,
        EtherSymbol: Sa,
        HashZero: ue,
        MaxInt256: Ke,
        MaxUint256: Oe,
        MinInt256: Ue,
        NegativeOne: Ve,
        One: Ne,
        Two: Ge,
        WeiPerEther: We,
        Zero: ze,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Ea(x) {
  const e = t0(x);
  if (e.length > 31)
    throw new Error("bytes32 string must be less than 32 bytes");
  return N(r0([e, ue]).slice(0, 32));
}
function Aa(x) {
  const e = T(x);
  if (e.length !== 32) throw new Error("invalid bytes32 - not 32 bytes long");
  if (e[31] !== 0)
    throw new Error("invalid bytes32 string - no null terminator");
  let a = 31;
  for (; e[a - 1] === 0; ) a--;
  return he(e.slice(0, a));
}
const _a = `Ethereum Signed Message:
`;
function X0(x) {
  return (
    typeof x == "string" && (x = t0(x)),
    o0(r0([t0(_a), t0(String(x.length)), x]))
  );
}
function Y0(x, e, a, r, o) {
  (x = T(x)), (e = T(e));
  let s,
    b = 1;
  const i = new Uint8Array(r),
    _ = new Uint8Array(e.length + 4);
  _.set(e);
  let S, m;
  for (let C = 1; C <= b; C++) {
    (_[e.length] = (C >> 24) & 255),
      (_[e.length + 1] = (C >> 16) & 255),
      (_[e.length + 2] = (C >> 8) & 255),
      (_[e.length + 3] = C & 255);
    let A = T(P0(o, x, _));
    s ||
      ((s = A.length),
      (m = new Uint8Array(s)),
      (b = Math.ceil(r / s)),
      (S = r - (b - 1) * s)),
      m.set(A);
    for (let u = 1; u < a; u++) {
      A = T(P0(o, x, A));
      for (let t = 0; t < s; t++) m[t] ^= A[t];
    }
    const R = (C - 1) * s,
      $ = C === b ? S : s;
    i.set(T(m).slice(0, $), R);
  }
  return N(i);
}
const ka = "wordlists/5.6.0",
  Ta = new x0(ka);
class C0 {
  constructor(e) {
    Ta.checkAbstract(new.target, C0), L(this, "locale", e);
  }
  split(e) {
    return e.toLowerCase().split(/ +/g);
  }
  join(e) {
    return e.join(" ");
  }
  static check(e) {
    const a = [];
    for (let r = 0; r < 2048; r++) {
      const o = e.getWord(r);
      if (r !== e.getWordIndex(o)) return "0x";
      a.push(o);
    }
    return pe(
      a.join(`
`) +
        `
`
    );
  }
  static register(e, a) {
    a || (a = e.locale);
  }
}
const Pa =
  "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo";
let T0 = null;
function oe(x) {
  if (
    T0 == null &&
    ((T0 = Pa.replace(/([A-Z])/g, " $1")
      .toLowerCase()
      .substring(1)
      .split(" ")),
    C0.check(x) !==
      "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60")
  )
    throw ((T0 = null), new Error("BIP39 Wordlist for en (English) FAILED"));
}
class Fa extends C0 {
  constructor() {
    super("en");
  }
  getWord(e) {
    return oe(this), T0[e];
  }
  getWordIndex(e) {
    return oe(this), T0.indexOf(e);
  }
}
const Ce = new Fa();
C0.register(Ce);
const $0 = { en: Ce },
  Ba = "hdnode/5.6.0",
  w0 = new x0(Ba),
  Ma = O0.from(
    "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
  ),
  Da = t0("Bitcoin seed"),
  m0 = 2147483648;
function Ee(x) {
  return ((1 << x) - 1) << (8 - x);
}
function Ra(x) {
  return (1 << x) - 1;
}
function D0(x) {
  return q0(N(x), 32);
}
function ie(x) {
  return Z0.encode(r0([x, U0(u0(u0(x)), 0, 4)]));
}
function ee(x) {
  if (x == null) return $0.en;
  if (typeof x == "string") {
    const e = $0[x];
    return (
      e == null && w0.throwArgumentError("unknown locale", "wordlist", x), e
    );
  }
  return x;
}
const p0 = {},
  S0 = "m/44'/60'/0'/0/0";
class Y {
  constructor(e, a, r, o, s, b, i, _) {
    if ((w0.checkNew(new.target, Y), e !== p0))
      throw new Error("HDNode constructor cannot be called directly");
    if (a) {
      const S = new v0(a);
      L(this, "privateKey", S.privateKey),
        L(this, "publicKey", S.compressedPublicKey);
    } else L(this, "privateKey", null), L(this, "publicKey", N(r));
    L(this, "parentFingerprint", o),
      L(this, "fingerprint", U0(me(u0(this.publicKey)), 0, 4)),
      L(this, "address", b0(this.publicKey)),
      L(this, "chainCode", s),
      L(this, "index", b),
      L(this, "depth", i),
      _ == null
        ? (L(this, "mnemonic", null), L(this, "path", null))
        : typeof _ == "string"
        ? (L(this, "mnemonic", null), L(this, "path", _))
        : (L(this, "mnemonic", _), L(this, "path", _.path));
  }
  get extendedKey() {
    if (this.depth >= 256) throw new Error("Depth too large!");
    return ie(
      r0([
        this.privateKey != null ? "0x0488ADE4" : "0x0488B21E",
        N(this.depth),
        this.parentFingerprint,
        q0(N(this.index), 4),
        this.chainCode,
        this.privateKey != null
          ? r0(["0x00", this.privateKey])
          : this.publicKey,
      ])
    );
  }
  neuter() {
    return new Y(
      p0,
      null,
      this.publicKey,
      this.parentFingerprint,
      this.chainCode,
      this.index,
      this.depth,
      this.path
    );
  }
  _derive(e) {
    if (e > 4294967295) throw new Error("invalid index - " + String(e));
    let a = this.path;
    a && (a += "/" + (e & ~m0));
    const r = new Uint8Array(37);
    if (e & m0) {
      if (!this.privateKey)
        throw new Error("cannot derive child of neutered node");
      r.set(T(this.privateKey), 1), a && (a += "'");
    } else r.set(T(this.publicKey));
    for (let C = 24; C >= 0; C -= 8) r[33 + (C >> 3)] = (e >> (24 - C)) & 255;
    const o = T(P0(W0.sha512, this.chainCode, r)),
      s = o.slice(0, 32),
      b = o.slice(32);
    let i = null,
      _ = null;
    this.privateKey
      ? (i = D0(O0.from(s).add(this.privateKey).mod(Ma)))
      : (_ = new v0(N(s))._addPoint(this.publicKey));
    let S = a;
    const m = this.mnemonic;
    return (
      m &&
        (S = Object.freeze({
          phrase: m.phrase,
          path: a,
          locale: m.locale || "en",
        })),
      new Y(p0, i, _, this.fingerprint, D0(b), e, this.depth + 1, S)
    );
  }
  derivePath(e) {
    const a = e.split("/");
    if (a.length === 0 || (a[0] === "m" && this.depth !== 0))
      throw new Error("invalid path - " + e);
    a[0] === "m" && a.shift();
    let r = this;
    for (let o = 0; o < a.length; o++) {
      const s = a[o];
      if (s.match(/^[0-9]+'$/)) {
        const b = parseInt(s.substring(0, s.length - 1));
        if (b >= m0) throw new Error("invalid path index - " + s);
        r = r._derive(m0 + b);
      } else if (s.match(/^[0-9]+$/)) {
        const b = parseInt(s);
        if (b >= m0) throw new Error("invalid path index - " + s);
        r = r._derive(b);
      } else throw new Error("invalid path component - " + s);
    }
    return r;
  }
  static _fromSeed(e, a) {
    const r = T(e);
    if (r.length < 16 || r.length > 64) throw new Error("invalid seed");
    const o = T(P0(W0.sha512, Da, r));
    return new Y(
      p0,
      D0(o.slice(0, 32)),
      null,
      "0x00000000",
      D0(o.slice(32)),
      0,
      0,
      a
    );
  }
  static fromMnemonic(e, a, r) {
    return (
      (r = ee(r)),
      (e = N0(V0(e, r), r)),
      Y._fromSeed(Ae(e, a), { phrase: e, path: "m", locale: r.locale })
    );
  }
  static fromSeed(e) {
    return Y._fromSeed(e, null);
  }
  static fromExtendedKey(e) {
    const a = Z0.decode(e);
    (a.length !== 82 || ie(a.slice(0, 78)) !== e) &&
      w0.throwArgumentError(
        "invalid extended key",
        "extendedKey",
        "[REDACTED]"
      );
    const r = a[4],
      o = N(a.slice(5, 9)),
      s = parseInt(N(a.slice(9, 13)).substring(2), 16),
      b = N(a.slice(13, 45)),
      i = a.slice(45, 78);
    switch (N(a.slice(0, 4))) {
      case "0x0488b21e":
      case "0x043587cf":
        return new Y(p0, null, N(i), o, b, s, r, null);
      case "0x0488ade4":
      case "0x04358394 ":
        if (i[0] !== 0) break;
        return new Y(p0, N(i.slice(1)), null, o, b, s, r, null);
    }
    return w0.throwArgumentError(
      "invalid extended key",
      "extendedKey",
      "[REDACTED]"
    );
  }
}
function Ae(x, e) {
  e || (e = "");
  const a = t0("mnemonic" + e, L0.NFKD);
  return Y0(t0(x, L0.NFKD), a, 2048, 64, "sha512");
}
function V0(x, e) {
  (e = ee(e)), w0.checkNormalize();
  const a = e.split(x);
  if (a.length % 3 !== 0) throw new Error("invalid mnemonic");
  const r = T(new Uint8Array(Math.ceil((11 * a.length) / 8)));
  let o = 0;
  for (let S = 0; S < a.length; S++) {
    let m = e.getWordIndex(a[S].normalize("NFKD"));
    if (m === -1) throw new Error("invalid mnemonic");
    for (let C = 0; C < 11; C++)
      m & (1 << (10 - C)) && (r[o >> 3] |= 1 << (7 - (o % 8))), o++;
  }
  const s = (32 * a.length) / 3,
    b = a.length / 3,
    i = Ee(b);
  if ((T(u0(r.slice(0, s / 8)))[0] & i) !== (r[r.length - 1] & i))
    throw new Error("invalid checksum");
  return N(r.slice(0, s / 8));
}
function N0(x, e) {
  if (
    ((e = ee(e)),
    (x = T(x)),
    x.length % 4 !== 0 || x.length < 16 || x.length > 32)
  )
    throw new Error("invalid entropy");
  const a = [0];
  let r = 11;
  for (let b = 0; b < x.length; b++)
    r > 8
      ? ((a[a.length - 1] <<= 8), (a[a.length - 1] |= x[b]), (r -= 8))
      : ((a[a.length - 1] <<= r),
        (a[a.length - 1] |= x[b] >> (8 - r)),
        a.push(x[b] & Ra(8 - r)),
        (r += 3));
  const o = x.length / 4,
    s = T(u0(x))[0] & Ee(o);
  return (
    (a[a.length - 1] <<= o),
    (a[a.length - 1] |= s >> (8 - o)),
    e.join(a.map((b) => e.getWord(b)))
  );
}
function Ia(x, e) {
  try {
    return V0(x, e), !0;
  } catch {}
  return !1;
}
function La(x) {
  return (
    (typeof x != "number" || x < 0 || x >= m0 || x % 1) &&
      w0.throwArgumentError("invalid account index", "index", x),
    `m/44'/60'/${x}'/0/0`
  );
}
const Ka = "random/5.6.0",
  J0 = new x0(Ka);
function Oa() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("unable to locate global object");
}
const se = Oa();
let I0 = se.crypto || se.msCrypto;
(!I0 || !I0.getRandomValues) &&
  (J0.warn("WARNING: Missing strong random number source"),
  (I0 = {
    getRandomValues: function (x) {
      return J0.throwError(
        "no secure random source avaialble",
        x0.errors.UNSUPPORTED_OPERATION,
        { operation: "crypto.getRandomValues" }
      );
    },
  }));
function y0(x) {
  (x <= 0 || x > 1024 || x % 1 || x != x) &&
    J0.throwArgumentError("invalid length", "length", x);
  const e = new Uint8Array(x);
  return I0.getRandomValues(e), T(e);
}
var _e = { exports: {} };
(function (x, e) {
  (function (a) {
    function r(c) {
      return parseInt(c) === c;
    }
    function o(c) {
      if (!r(c.length)) return !1;
      for (var d = 0; d < c.length; d++)
        if (!r(c[d]) || c[d] < 0 || c[d] > 255) return !1;
      return !0;
    }
    function s(c, d) {
      if (c.buffer && ArrayBuffer.isView(c) && c.name === "Uint8Array")
        return (
          d &&
            (c.slice ? (c = c.slice()) : (c = Array.prototype.slice.call(c))),
          c
        );
      if (Array.isArray(c)) {
        if (!o(c)) throw new Error("Array contains invalid value: " + c);
        return new Uint8Array(c);
      }
      if (r(c.length) && o(c)) return new Uint8Array(c);
      throw new Error("unsupported array-like object");
    }
    function b(c) {
      return new Uint8Array(c);
    }
    function i(c, d, l, f, n) {
      (f != null || n != null) &&
        (c.slice
          ? (c = c.slice(f, n))
          : (c = Array.prototype.slice.call(c, f, n))),
        d.set(c, l);
    }
    var _ = (function () {
        function c(l) {
          var f = [],
            n = 0;
          for (l = encodeURI(l); n < l.length; ) {
            var y = l.charCodeAt(n++);
            y === 37
              ? (f.push(parseInt(l.substr(n, 2), 16)), (n += 2))
              : f.push(y);
          }
          return s(f);
        }
        function d(l) {
          for (var f = [], n = 0; n < l.length; ) {
            var y = l[n];
            y < 128
              ? (f.push(String.fromCharCode(y)), n++)
              : y > 191 && y < 224
              ? (f.push(String.fromCharCode(((y & 31) << 6) | (l[n + 1] & 63))),
                (n += 2))
              : (f.push(
                  String.fromCharCode(
                    ((y & 15) << 12) | ((l[n + 1] & 63) << 6) | (l[n + 2] & 63)
                  )
                ),
                (n += 3));
          }
          return f.join("");
        }
        return { toBytes: c, fromBytes: d };
      })(),
      S = (function () {
        function c(f) {
          for (var n = [], y = 0; y < f.length; y += 2)
            n.push(parseInt(f.substr(y, 2), 16));
          return n;
        }
        var d = "0123456789abcdef";
        function l(f) {
          for (var n = [], y = 0; y < f.length; y++) {
            var G = f[y];
            n.push(d[(G & 240) >> 4] + d[G & 15]);
          }
          return n.join("");
        }
        return { toBytes: c, fromBytes: l };
      })(),
      m = { 16: 10, 24: 12, 32: 14 },
      C = [
        1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94,
        188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145,
      ],
      A = [
        99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171,
        118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164,
        114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113,
        216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39,
        178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227,
        47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76,
        88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60,
        159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16,
        255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61,
        100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20,
        222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98,
        145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244,
        234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221,
        116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53,
        87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155,
        30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104,
        65, 153, 45, 15, 176, 84, 187, 22,
      ],
      R = [
        82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251,
        124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233,
        203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195,
        78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209,
        37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101,
        182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167,
        141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5,
        184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1,
        19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206,
        240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55,
        232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183,
        98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219,
        192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18,
        16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229,
        122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200,
        235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225,
        105, 20, 99, 85, 33, 12, 125,
      ],
      $ = [
        3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157,
        3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757,
        3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813,
        2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307,
        1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063,
        3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618,
        1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420,
        3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767,
        134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841,
        168101135, 798661301, 235341577, 605164086, 461406363, 3756188221,
        3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174,
        1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627,
        2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582,
        1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436,
        1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302,
        1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746,
        3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463,
        1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577,
        2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438,
        2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100,
        1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450,
        4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079,
        3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866,
        4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909,
        3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534,
        999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540,
        2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286,
        1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836,
        2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756,
        3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599,
        26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514,
        4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816,
        1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505,
        1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977,
        2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954,
        1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154,
        3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992,
        974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859,
        3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754,
        361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378,
        59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649,
        2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377,
        2075177163, 2824099068, 1841019862, 739644986,
      ],
      u = [
        2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027,
        2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147,
        434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938,
        1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592,
        3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988,
        2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398,
        1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525,
        886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517,
        201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806,
        252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786,
        651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339,
        1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112,
        4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187,
        1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861,
        1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867,
        3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471,
        1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773,
        1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647,
        4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603,
        3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005,
        3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895,
        251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324,
        3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751,
        2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019,
        2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034,
        2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540,
        2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026,
        1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516,
        1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981,
        936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389,
        2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294,
        133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816,
        3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350,
        3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327,
        3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654,
        3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494,
        2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617,
        658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609,
        3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214,
        2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103,
        2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934,
        3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607,
        3413881008, 4238890068, 3597515707, 975967766,
      ],
      t = [
        1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307,
        1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347,
        4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298,
        3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232,
        2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228,
        1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518,
        911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325,
        3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077,
        67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926,
        84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826,
        3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539,
        745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552,
        1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067,
        795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784,
        4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910,
        961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360,
        4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739,
        2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960,
        1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568,
        2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668,
        3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003,
        3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855,
        2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534,
        1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744,
        2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008,
        2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782,
        1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090,
        169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650,
        3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972,
        2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893,
        3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908,
        3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946,
        2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164,
        3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131,
        3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261,
        1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081,
        895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045,
        2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777,
        3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927,
        3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796,
        2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242,
        1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488,
        1425844308, 3151392187, 372911126,
      ],
      p = [
        1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062,
        1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422,
        4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983,
        3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547,
        2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643,
        1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788,
        909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625,
        3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962,
        67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071,
        84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791,
        3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989,
        741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667,
        1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797,
        791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704,
        4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535,
        960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995,
        4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214,
        2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760,
        1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408,
        2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563,
        3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573,
        3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230,
        2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284,
        1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344,
        2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123,
        2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087,
        1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700,
        168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855,
        3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747,
        2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873,
        3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523,
        3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511,
        2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419,
        3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126,
        3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401,
        1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866,
        892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850,
        2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042,
        3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917,
        3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891,
        2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452,
        1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443,
        1414855848, 3149649517, 370555436,
      ],
      h = [
        1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753,
        2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485,
        1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703,
        1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150,
        59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843,
        1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733,
        3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074,
        2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228,
        1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562,
        3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269,
        807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154,
        4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474,
        875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634,
        1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366,
        2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327,
        2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483,
        2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436,
        1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852,
        1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058,
        463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234,
        3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465,
        337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775,
        1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960,
        3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733,
        3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860,
        2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396,
        2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238,
        2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012,
        1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814,
        2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619,
        270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369,
        2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889,
        1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144,
        899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186,
        1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980,
        3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204,
        25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971,
        1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302,
        3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761,
        1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769,
        3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627,
        4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265,
        3576870512, 1215061108, 3501741890,
      ],
      w = [
        1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933,
        2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900,
        4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723,
        2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385,
        3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473,
        692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113,
        3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529,
        1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523,
        1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122,
        1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824,
        4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204,
        4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614,
        2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839,
        106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461,
        3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937,
        3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598,
        1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597,
        2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945,
        1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535,
        3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394,
        182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863,
        3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624,
        2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486,
        1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369,
        2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024,
        3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148,
        3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545,
        4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671,
        3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776,
        1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106,
        1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472,
        32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392,
        3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259,
        818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840,
        1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904,
        1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889,
        77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242,
        870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476,
        4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235,
        2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891,
        2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253,
        2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913,
        1635502980, 1893020342, 1950903388, 1120974935,
      ],
      k = [
        2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173,
        1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970,
        3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698,
        244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515,
        1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868,
        1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033,
        1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914,
        861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368,
        1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827,
        2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239,
        2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009,
        4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174,
        1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224,
        2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286,
        2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237,
        1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968,
        172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081,
        1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047,
        2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278,
        2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539,
        719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150,
        2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665,
        4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005,
        4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898,
        1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670,
        3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556,
        1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178,
        188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442,
        2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569,
        2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044,
        2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634,
        2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639,
        919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549,
        1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196,
        3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050,
        81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974,
        895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576,
        1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897,
        3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516,
        935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519,
        3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572,
        2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195,
        3060847922, 1551124588, 1463996600,
      ],
      g = [
        4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623,
        4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885,
        3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053,
        3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835,
        2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848,
        3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143,
        3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389,
        1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913,
        1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242,
        529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619,
        679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159,
        133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524,
        777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424,
        1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981,
        1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582,
        1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953,
        2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766,
        1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162,
        1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748,
        2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234,
        2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765,
        514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535,
        1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070,
        3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413,
        3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325,
        3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816,
        4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628,
        3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092,
        2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814,
        3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464,
        410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844,
        1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714,
        1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454,
        2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521,
        3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700,
        2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909,
        2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841,
        3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542,
        1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736,
        3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274,
        1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712,
        227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555,
        850817237, 1817998408, 3092726480,
      ],
      B = [
        0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554,
        708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108,
        1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990,
        4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216,
        2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058,
        3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343,
        3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029,
        3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995,
        899835584, 666464733, 699432150, 59727847, 226906860, 530400753,
        294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775,
        2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520,
        3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422,
        3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228,
        4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434,
        2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896,
        800440835, 92987698, 193195065, 429456164, 395441711, 1984812685,
        2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311,
        1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657,
        807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971,
        2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805,
        3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751,
        3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483,
        2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465,
        599762354, 159417987, 126454664, 361929877, 463180190, 2709260871,
        2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733,
        2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971,
        3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178,
        2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284,
        3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302,
        3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384,
        1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330,
        404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369,
        3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619,
        3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557,
        2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487,
        504459436, 875451293, 975658646, 675039627, 641025152, 2084704233,
        1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843,
        1451044056, 933301370, 967311729, 733156972, 632953703, 260388950,
        25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500,
        1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226,
        3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432,
        4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150,
        2438237621, 2203032232, 2370213795,
      ],
      v = [
        0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694,
        824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388,
        2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410,
        2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776,
        3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918,
        3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543,
        1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569,
        1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355,
        3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933,
        4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895,
        3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975,
        3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917,
        2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523,
        2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409,
        1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751,
        53458370, 839224033, 957055980, 605657339, 790073846, 2373340630,
        2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216,
        3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602,
        4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276,
        545572369, 296679730, 446754879, 129166120, 213705253, 1709610350,
        1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296,
        1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598,
        3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840,
        2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386,
        1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268,
        1988838185, 533804130, 350174575, 164439672, 46346101, 870912086,
        954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643,
        2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929,
        3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127,
        3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309,
        457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035,
        2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319,
        182621114, 401639597, 486441376, 768917123, 651868046, 1003007129,
        818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387,
        2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917,
        2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703,
        3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473,
        3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720,
        1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390,
        1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636,
        3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122,
        4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200,
        3046200461, 2827177882, 2743944855,
      ],
      E = [
        0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294,
        590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588,
        1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250,
        3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176,
        3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278,
        2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663,
        2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769,
        3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195,
        1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173,
        1224348052, 59984867, 244860394, 428169201, 344873464, 935293895,
        984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180,
        2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982,
        145085239, 532201772, 313773861, 830661914, 1015671571, 731183368,
        648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554,
        2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636,
        3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085,
        3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771,
        4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177,
        2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631,
        287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925,
        1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571,
        1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968,
        3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150,
        2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556,
        122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898,
        695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576,
        1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613,
        1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639,
        81781910, 331544205, 516552836, 1039717051, 821288114, 669961897,
        719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299,
        2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885,
        3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634,
        3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044,
        2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702,
        3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632,
        1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938,
        48394827, 369057872, 418672217, 1002783846, 919489135, 567498868,
        752375421, 209336225, 24197544, 376187827, 459744698, 945164165,
        895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635,
        1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881,
        3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127,
        4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285,
        2377486676, 2594734927, 2544078150,
      ],
      K = [
        0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204,
        1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408,
        1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100,
        2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816,
        3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748,
        3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843,
        377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439,
        1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315,
        2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623,
        2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475,
        3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905,
        1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837,
        923313619, 740276417, 621982671, 439452389, 322734571, 137073913,
        19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589,
        3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641,
        3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550,
        1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426,
        1928707164, 96392454, 213114376, 396673818, 514443284, 562755902,
        679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866,
        3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230,
        2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026,
        2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953,
        3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765,
        3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481,
        1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413,
        1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841,
        425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038,
        3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674,
        2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542,
        2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834,
        1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990,
        349075736, 736970802, 585122620, 972512814, 821712160, 2595684844,
        2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464,
        2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212,
        4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952,
        292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068,
        1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848,
        2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775,
        2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155,
        4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431,
        953270745, 600235211, 718002117, 367585007, 484830689, 133361907,
        251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495,
        1418573201, 1335535747, 1184342925,
      ];
    function U(c) {
      for (var d = [], l = 0; l < c.length; l += 4)
        d.push((c[l] << 24) | (c[l + 1] << 16) | (c[l + 2] << 8) | c[l + 3]);
      return d;
    }
    var V = function (c) {
      if (!(this instanceof V))
        throw Error("AES must be instanitated with `new`");
      Object.defineProperty(this, "key", { value: s(c, !0) }), this._prepare();
    };
    (V.prototype._prepare = function () {
      var c = m[this.key.length];
      if (c == null)
        throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      (this._Ke = []), (this._Kd = []);
      for (var d = 0; d <= c; d++)
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      for (
        var l = (c + 1) * 4, f = this.key.length / 4, n = U(this.key), y, d = 0;
        d < f;
        d++
      )
        (y = d >> 2),
          (this._Ke[y][d % 4] = n[d]),
          (this._Kd[c - y][d % 4] = n[d]);
      for (var G = 0, M = f, F; M < l; ) {
        if (
          ((F = n[f - 1]),
          (n[0] ^=
            (A[(F >> 16) & 255] << 24) ^
            (A[(F >> 8) & 255] << 16) ^
            (A[F & 255] << 8) ^
            A[(F >> 24) & 255] ^
            (C[G] << 24)),
          (G += 1),
          f != 8)
        )
          for (var d = 1; d < f; d++) n[d] ^= n[d - 1];
        else {
          for (var d = 1; d < f / 2; d++) n[d] ^= n[d - 1];
          (F = n[f / 2 - 1]),
            (n[f / 2] ^=
              A[F & 255] ^
              (A[(F >> 8) & 255] << 8) ^
              (A[(F >> 16) & 255] << 16) ^
              (A[(F >> 24) & 255] << 24));
          for (var d = f / 2 + 1; d < f; d++) n[d] ^= n[d - 1];
        }
        for (var d = 0, Q, X; d < f && M < l; )
          (Q = M >> 2),
            (X = M % 4),
            (this._Ke[Q][X] = n[d]),
            (this._Kd[c - Q][X] = n[d++]),
            M++;
      }
      for (var Q = 1; Q < c; Q++)
        for (var X = 0; X < 4; X++)
          (F = this._Kd[Q][X]),
            (this._Kd[Q][X] =
              B[(F >> 24) & 255] ^
              v[(F >> 16) & 255] ^
              E[(F >> 8) & 255] ^
              K[F & 255]);
    }),
      (V.prototype.encrypt = function (c) {
        if (c.length != 16)
          throw new Error("invalid plaintext size (must be 16 bytes)");
        for (
          var d = this._Ke.length - 1, l = [0, 0, 0, 0], f = U(c), n = 0;
          n < 4;
          n++
        )
          f[n] ^= this._Ke[0][n];
        for (var y = 1; y < d; y++) {
          for (var n = 0; n < 4; n++)
            l[n] =
              $[(f[n] >> 24) & 255] ^
              u[(f[(n + 1) % 4] >> 16) & 255] ^
              t[(f[(n + 2) % 4] >> 8) & 255] ^
              p[f[(n + 3) % 4] & 255] ^
              this._Ke[y][n];
          f = l.slice();
        }
        for (var G = b(16), M, n = 0; n < 4; n++)
          (M = this._Ke[d][n]),
            (G[4 * n] = (A[(f[n] >> 24) & 255] ^ (M >> 24)) & 255),
            (G[4 * n + 1] =
              (A[(f[(n + 1) % 4] >> 16) & 255] ^ (M >> 16)) & 255),
            (G[4 * n + 2] = (A[(f[(n + 2) % 4] >> 8) & 255] ^ (M >> 8)) & 255),
            (G[4 * n + 3] = (A[f[(n + 3) % 4] & 255] ^ M) & 255);
        return G;
      }),
      (V.prototype.decrypt = function (c) {
        if (c.length != 16)
          throw new Error("invalid ciphertext size (must be 16 bytes)");
        for (
          var d = this._Kd.length - 1, l = [0, 0, 0, 0], f = U(c), n = 0;
          n < 4;
          n++
        )
          f[n] ^= this._Kd[0][n];
        for (var y = 1; y < d; y++) {
          for (var n = 0; n < 4; n++)
            l[n] =
              h[(f[n] >> 24) & 255] ^
              w[(f[(n + 3) % 4] >> 16) & 255] ^
              k[(f[(n + 2) % 4] >> 8) & 255] ^
              g[f[(n + 1) % 4] & 255] ^
              this._Kd[y][n];
          f = l.slice();
        }
        for (var G = b(16), M, n = 0; n < 4; n++)
          (M = this._Kd[d][n]),
            (G[4 * n] = (R[(f[n] >> 24) & 255] ^ (M >> 24)) & 255),
            (G[4 * n + 1] =
              (R[(f[(n + 3) % 4] >> 16) & 255] ^ (M >> 16)) & 255),
            (G[4 * n + 2] = (R[(f[(n + 2) % 4] >> 8) & 255] ^ (M >> 8)) & 255),
            (G[4 * n + 3] = (R[f[(n + 1) % 4] & 255] ^ M) & 255);
        return G;
      });
    var Z = function (c) {
      if (!(this instanceof Z))
        throw Error("AES must be instanitated with `new`");
      (this.description = "Electronic Code Block"),
        (this.name = "ecb"),
        (this._aes = new V(c));
    };
    (Z.prototype.encrypt = function (c) {
      if (((c = s(c)), c.length % 16 !== 0))
        throw new Error(
          "invalid plaintext size (must be multiple of 16 bytes)"
        );
      for (var d = b(c.length), l = b(16), f = 0; f < c.length; f += 16)
        i(c, l, 0, f, f + 16), (l = this._aes.encrypt(l)), i(l, d, f);
      return d;
    }),
      (Z.prototype.decrypt = function (c) {
        if (((c = s(c)), c.length % 16 !== 0))
          throw new Error(
            "invalid ciphertext size (must be multiple of 16 bytes)"
          );
        for (var d = b(c.length), l = b(16), f = 0; f < c.length; f += 16)
          i(c, l, 0, f, f + 16), (l = this._aes.decrypt(l)), i(l, d, f);
        return d;
      });
    var O = function (c, d) {
      if (!(this instanceof O))
        throw Error("AES must be instanitated with `new`");
      if (
        ((this.description = "Cipher Block Chaining"), (this.name = "cbc"), !d)
      )
        d = b(16);
      else if (d.length != 16)
        throw new Error("invalid initialation vector size (must be 16 bytes)");
      (this._lastCipherblock = s(d, !0)), (this._aes = new V(c));
    };
    (O.prototype.encrypt = function (c) {
      if (((c = s(c)), c.length % 16 !== 0))
        throw new Error(
          "invalid plaintext size (must be multiple of 16 bytes)"
        );
      for (var d = b(c.length), l = b(16), f = 0; f < c.length; f += 16) {
        i(c, l, 0, f, f + 16);
        for (var n = 0; n < 16; n++) l[n] ^= this._lastCipherblock[n];
        (this._lastCipherblock = this._aes.encrypt(l)),
          i(this._lastCipherblock, d, f);
      }
      return d;
    }),
      (O.prototype.decrypt = function (c) {
        if (((c = s(c)), c.length % 16 !== 0))
          throw new Error(
            "invalid ciphertext size (must be multiple of 16 bytes)"
          );
        for (var d = b(c.length), l = b(16), f = 0; f < c.length; f += 16) {
          i(c, l, 0, f, f + 16), (l = this._aes.decrypt(l));
          for (var n = 0; n < 16; n++)
            d[f + n] = l[n] ^ this._lastCipherblock[n];
          i(c, this._lastCipherblock, 0, f, f + 16);
        }
        return d;
      });
    var W = function (c, d, l) {
      if (!(this instanceof W))
        throw Error("AES must be instanitated with `new`");
      if (((this.description = "Cipher Feedback"), (this.name = "cfb"), !d))
        d = b(16);
      else if (d.length != 16)
        throw new Error("invalid initialation vector size (must be 16 size)");
      l || (l = 1),
        (this.segmentSize = l),
        (this._shiftRegister = s(d, !0)),
        (this._aes = new V(c));
    };
    (W.prototype.encrypt = function (c) {
      if (c.length % this.segmentSize != 0)
        throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var d = s(c, !0), l, f = 0; f < d.length; f += this.segmentSize) {
        l = this._aes.encrypt(this._shiftRegister);
        for (var n = 0; n < this.segmentSize; n++) d[f + n] ^= l[n];
        i(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
          i(
            d,
            this._shiftRegister,
            16 - this.segmentSize,
            f,
            f + this.segmentSize
          );
      }
      return d;
    }),
      (W.prototype.decrypt = function (c) {
        if (c.length % this.segmentSize != 0)
          throw new Error(
            "invalid ciphertext size (must be segmentSize bytes)"
          );
        for (var d = s(c, !0), l, f = 0; f < d.length; f += this.segmentSize) {
          l = this._aes.encrypt(this._shiftRegister);
          for (var n = 0; n < this.segmentSize; n++) d[f + n] ^= l[n];
          i(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
            i(
              c,
              this._shiftRegister,
              16 - this.segmentSize,
              f,
              f + this.segmentSize
            );
        }
        return d;
      });
    var q = function (c, d) {
      if (!(this instanceof q))
        throw Error("AES must be instanitated with `new`");
      if (((this.description = "Output Feedback"), (this.name = "ofb"), !d))
        d = b(16);
      else if (d.length != 16)
        throw new Error("invalid initialation vector size (must be 16 bytes)");
      (this._lastPrecipher = s(d, !0)),
        (this._lastPrecipherIndex = 16),
        (this._aes = new V(c));
    };
    (q.prototype.encrypt = function (c) {
      for (var d = s(c, !0), l = 0; l < d.length; l++)
        this._lastPrecipherIndex === 16 &&
          ((this._lastPrecipher = this._aes.encrypt(this._lastPrecipher)),
          (this._lastPrecipherIndex = 0)),
          (d[l] ^= this._lastPrecipher[this._lastPrecipherIndex++]);
      return d;
    }),
      (q.prototype.decrypt = q.prototype.encrypt);
    var I = function (c) {
      if (!(this instanceof I))
        throw Error("Counter must be instanitated with `new`");
      c !== 0 && !c && (c = 1),
        typeof c == "number"
          ? ((this._counter = b(16)), this.setValue(c))
          : this.setBytes(c);
    };
    (I.prototype.setValue = function (c) {
      if (typeof c != "number" || parseInt(c) != c)
        throw new Error("invalid counter value (must be an integer)");
      for (var d = 15; d >= 0; --d) (this._counter[d] = c % 256), (c = c >> 8);
    }),
      (I.prototype.setBytes = function (c) {
        if (((c = s(c, !0)), c.length != 16))
          throw new Error("invalid counter bytes size (must be 16 bytes)");
        this._counter = c;
      }),
      (I.prototype.increment = function () {
        for (var c = 15; c >= 0; c--)
          if (this._counter[c] === 255) this._counter[c] = 0;
          else {
            this._counter[c]++;
            break;
          }
      });
    var P = function (c, d) {
      if (!(this instanceof P))
        throw Error("AES must be instanitated with `new`");
      (this.description = "Counter"),
        (this.name = "ctr"),
        d instanceof I || (d = new I(d)),
        (this._counter = d),
        (this._remainingCounter = null),
        (this._remainingCounterIndex = 16),
        (this._aes = new V(c));
    };
    (P.prototype.encrypt = function (c) {
      for (var d = s(c, !0), l = 0; l < d.length; l++)
        this._remainingCounterIndex === 16 &&
          ((this._remainingCounter = this._aes.encrypt(this._counter._counter)),
          (this._remainingCounterIndex = 0),
          this._counter.increment()),
          (d[l] ^= this._remainingCounter[this._remainingCounterIndex++]);
      return d;
    }),
      (P.prototype.decrypt = P.prototype.encrypt);
    function a0(c) {
      c = s(c, !0);
      var d = 16 - (c.length % 16),
        l = b(c.length + d);
      i(c, l);
      for (var f = c.length; f < l.length; f++) l[f] = d;
      return l;
    }
    function J(c) {
      if (((c = s(c, !0)), c.length < 16))
        throw new Error("PKCS#7 invalid length");
      var d = c[c.length - 1];
      if (d > 16) throw new Error("PKCS#7 padding byte out of range");
      for (var l = c.length - d, f = 0; f < d; f++)
        if (c[l + f] !== d) throw new Error("PKCS#7 invalid padding byte");
      var n = b(l);
      return i(c, n, 0, 0, l), n;
    }
    var j = {
      AES: V,
      Counter: I,
      ModeOfOperation: { ecb: Z, cbc: O, cfb: W, ofb: q, ctr: P },
      utils: { hex: S, utf8: _ },
      padding: { pkcs7: { pad: a0, strip: J } },
      _arrayTest: { coerceArray: s, createArray: b, copyArray: i },
    };
    x.exports = j;
  })();
})(_e);
var Ua = _e.exports;
const n0 = ge(Ua),
  ke = "json-wallets/5.6.0";
function l0(x) {
  return (
    typeof x == "string" && x.substring(0, 2) !== "0x" && (x = "0x" + x), T(x)
  );
}
function k0(x, e) {
  for (x = String(x); x.length < e; ) x = "0" + x;
  return x;
}
function xe(x) {
  return typeof x == "string" ? t0(x, L0.NFKC) : T(x);
}
function H(x, e) {
  let a = x;
  const r = e.toLowerCase().split("/");
  for (let o = 0; o < r.length; o++) {
    let s = null;
    for (const b in a)
      if (b.toLowerCase() === r[o]) {
        s = a[b];
        break;
      }
    if (s === null) return null;
    a = s;
  }
  return a;
}
function Va(x) {
  const e = T(x);
  (e[6] = (e[6] & 15) | 64), (e[8] = (e[8] & 63) | 128);
  const a = N(e);
  return [
    a.substring(2, 10),
    a.substring(10, 14),
    a.substring(14, 18),
    a.substring(18, 22),
    a.substring(22, 34),
  ].join("-");
}
const Na = new x0(ke);
class Ga extends ye {
  isCrowdsaleAccount(e) {
    return !!(e && e._isCrowdsaleAccount);
  }
}
function Te(x, e) {
  const a = JSON.parse(x);
  e = xe(e);
  const r = i0(H(a, "ethaddr")),
    o = l0(H(a, "encseed"));
  (!o || o.length % 16 !== 0) &&
    Na.throwArgumentError("invalid encseed", "json", x);
  const s = T(Y0(e, e, 2e3, 32, "sha256")).slice(0, 16),
    b = o.slice(0, 16),
    i = o.slice(16),
    _ = new n0.ModeOfOperation.cbc(s, b),
    S = n0.padding.pkcs7.strip(T(_.decrypt(i)));
  let m = "";
  for (let R = 0; R < S.length; R++) m += String.fromCharCode(S[R]);
  const C = t0(m),
    A = o0(C);
  return new Ga({ _isCrowdsaleAccount: !0, address: r, privateKey: A });
}
function ae(x) {
  let e = null;
  try {
    e = JSON.parse(x);
  } catch {
    return !1;
  }
  return e.encseed && e.ethaddr;
}
function ce(x) {
  let e = null;
  try {
    e = JSON.parse(x);
  } catch {
    return !1;
  }
  return !(
    !e.version ||
    parseInt(e.version) !== e.version ||
    parseInt(e.version) !== 3
  );
}
function Wa(x) {
  if (ae(x))
    try {
      return i0(JSON.parse(x).ethaddr);
    } catch {
      return null;
    }
  if (ce(x))
    try {
      return i0(JSON.parse(x).address);
    } catch {
      return null;
    }
  return null;
}
var Pe = { exports: {} };
(function (x, e) {
  (function (a) {
    function o(u) {
      const t = new Uint32Array([
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ]);
      let p = 1779033703,
        h = 3144134277,
        w = 1013904242,
        k = 2773480762,
        g = 1359893119,
        B = 2600822924,
        v = 528734635,
        E = 1541459225;
      const K = new Uint32Array(64);
      function U(P) {
        let a0 = 0,
          J = P.length;
        for (; J >= 64; ) {
          let j = p,
            c = h,
            d = w,
            l = k,
            f = g,
            n = B,
            y = v,
            G = E,
            M,
            F,
            Q,
            X,
            F0;
          for (F = 0; F < 16; F++)
            (Q = a0 + F * 4),
              (K[F] =
                ((P[Q] & 255) << 24) |
                ((P[Q + 1] & 255) << 16) |
                ((P[Q + 2] & 255) << 8) |
                (P[Q + 3] & 255));
          for (F = 16; F < 64; F++)
            (M = K[F - 2]),
              (X =
                ((M >>> 17) | (M << (32 - 17))) ^
                ((M >>> 19) | (M << (32 - 19))) ^
                (M >>> 10)),
              (M = K[F - 15]),
              (F0 =
                ((M >>> 7) | (M << (32 - 7))) ^
                ((M >>> 18) | (M << (32 - 18))) ^
                (M >>> 3)),
              (K[F] = (((X + K[F - 7]) | 0) + ((F0 + K[F - 16]) | 0)) | 0);
          for (F = 0; F < 64; F++)
            (X =
              ((((((f >>> 6) | (f << (32 - 6))) ^
                ((f >>> 11) | (f << (32 - 11))) ^
                ((f >>> 25) | (f << (32 - 25)))) +
                ((f & n) ^ (~f & y))) |
                0) +
                ((G + ((t[F] + K[F]) | 0)) | 0)) |
              0),
              (F0 =
                ((((j >>> 2) | (j << (32 - 2))) ^
                  ((j >>> 13) | (j << (32 - 13))) ^
                  ((j >>> 22) | (j << (32 - 22)))) +
                  ((j & c) ^ (j & d) ^ (c & d))) |
                0),
              (G = y),
              (y = n),
              (n = f),
              (f = (l + X) | 0),
              (l = d),
              (d = c),
              (c = j),
              (j = (X + F0) | 0);
          (p = (p + j) | 0),
            (h = (h + c) | 0),
            (w = (w + d) | 0),
            (k = (k + l) | 0),
            (g = (g + f) | 0),
            (B = (B + n) | 0),
            (v = (v + y) | 0),
            (E = (E + G) | 0),
            (a0 += 64),
            (J -= 64);
        }
      }
      U(u);
      let V,
        Z = u.length % 64,
        O = (u.length / 536870912) | 0,
        W = u.length << 3,
        q = Z < 56 ? 56 : 120,
        I = u.slice(u.length - Z, u.length);
      for (I.push(128), V = Z + 1; V < q; V++) I.push(0);
      return (
        I.push((O >>> 24) & 255),
        I.push((O >>> 16) & 255),
        I.push((O >>> 8) & 255),
        I.push((O >>> 0) & 255),
        I.push((W >>> 24) & 255),
        I.push((W >>> 16) & 255),
        I.push((W >>> 8) & 255),
        I.push((W >>> 0) & 255),
        U(I),
        [
          (p >>> 24) & 255,
          (p >>> 16) & 255,
          (p >>> 8) & 255,
          (p >>> 0) & 255,
          (h >>> 24) & 255,
          (h >>> 16) & 255,
          (h >>> 8) & 255,
          (h >>> 0) & 255,
          (w >>> 24) & 255,
          (w >>> 16) & 255,
          (w >>> 8) & 255,
          (w >>> 0) & 255,
          (k >>> 24) & 255,
          (k >>> 16) & 255,
          (k >>> 8) & 255,
          (k >>> 0) & 255,
          (g >>> 24) & 255,
          (g >>> 16) & 255,
          (g >>> 8) & 255,
          (g >>> 0) & 255,
          (B >>> 24) & 255,
          (B >>> 16) & 255,
          (B >>> 8) & 255,
          (B >>> 0) & 255,
          (v >>> 24) & 255,
          (v >>> 16) & 255,
          (v >>> 8) & 255,
          (v >>> 0) & 255,
          (E >>> 24) & 255,
          (E >>> 16) & 255,
          (E >>> 8) & 255,
          (E >>> 0) & 255,
        ]
      );
    }
    function s(u, t, p) {
      u = u.length <= 64 ? u : o(u);
      const h = 64 + t.length + 4,
        w = new Array(h),
        k = new Array(64);
      let g,
        B = [];
      for (g = 0; g < 64; g++) w[g] = 54;
      for (g = 0; g < u.length; g++) w[g] ^= u[g];
      for (g = 0; g < t.length; g++) w[64 + g] = t[g];
      for (g = h - 4; g < h; g++) w[g] = 0;
      for (g = 0; g < 64; g++) k[g] = 92;
      for (g = 0; g < u.length; g++) k[g] ^= u[g];
      function v() {
        for (let E = h - 1; E >= h - 4; E--) {
          if ((w[E]++, w[E] <= 255)) return;
          w[E] = 0;
        }
      }
      for (; p >= 32; ) v(), (B = B.concat(o(k.concat(o(w))))), (p -= 32);
      return p > 0 && (v(), (B = B.concat(o(k.concat(o(w))).slice(0, p)))), B;
    }
    function b(u, t, p, h, w) {
      let k;
      for (m(u, (2 * p - 1) * 16, w, 0, 16), k = 0; k < 2 * p; k++)
        S(u, k * 16, w, 16), _(w, h), m(w, 0, u, t + k * 16, 16);
      for (k = 0; k < p; k++) m(u, t + k * 2 * 16, u, k * 16, 16);
      for (k = 0; k < p; k++) m(u, t + (k * 2 + 1) * 16, u, (k + p) * 16, 16);
    }
    function i(u, t) {
      return (u << t) | (u >>> (32 - t));
    }
    function _(u, t) {
      m(u, 0, t, 0, 16);
      for (let p = 8; p > 0; p -= 2)
        (t[4] ^= i(t[0] + t[12], 7)),
          (t[8] ^= i(t[4] + t[0], 9)),
          (t[12] ^= i(t[8] + t[4], 13)),
          (t[0] ^= i(t[12] + t[8], 18)),
          (t[9] ^= i(t[5] + t[1], 7)),
          (t[13] ^= i(t[9] + t[5], 9)),
          (t[1] ^= i(t[13] + t[9], 13)),
          (t[5] ^= i(t[1] + t[13], 18)),
          (t[14] ^= i(t[10] + t[6], 7)),
          (t[2] ^= i(t[14] + t[10], 9)),
          (t[6] ^= i(t[2] + t[14], 13)),
          (t[10] ^= i(t[6] + t[2], 18)),
          (t[3] ^= i(t[15] + t[11], 7)),
          (t[7] ^= i(t[3] + t[15], 9)),
          (t[11] ^= i(t[7] + t[3], 13)),
          (t[15] ^= i(t[11] + t[7], 18)),
          (t[1] ^= i(t[0] + t[3], 7)),
          (t[2] ^= i(t[1] + t[0], 9)),
          (t[3] ^= i(t[2] + t[1], 13)),
          (t[0] ^= i(t[3] + t[2], 18)),
          (t[6] ^= i(t[5] + t[4], 7)),
          (t[7] ^= i(t[6] + t[5], 9)),
          (t[4] ^= i(t[7] + t[6], 13)),
          (t[5] ^= i(t[4] + t[7], 18)),
          (t[11] ^= i(t[10] + t[9], 7)),
          (t[8] ^= i(t[11] + t[10], 9)),
          (t[9] ^= i(t[8] + t[11], 13)),
          (t[10] ^= i(t[9] + t[8], 18)),
          (t[12] ^= i(t[15] + t[14], 7)),
          (t[13] ^= i(t[12] + t[15], 9)),
          (t[14] ^= i(t[13] + t[12], 13)),
          (t[15] ^= i(t[14] + t[13], 18));
      for (let p = 0; p < 16; ++p) u[p] += t[p];
    }
    function S(u, t, p, h) {
      for (let w = 0; w < h; w++) p[w] ^= u[t + w];
    }
    function m(u, t, p, h, w) {
      for (; w--; ) p[h++] = u[t++];
    }
    function C(u) {
      if (!u || typeof u.length != "number") return !1;
      for (let t = 0; t < u.length; t++) {
        const p = u[t];
        if (typeof p != "number" || p % 1 || p < 0 || p >= 256) return !1;
      }
      return !0;
    }
    function A(u, t) {
      if (typeof u != "number" || u % 1) throw new Error("invalid " + t);
      return u;
    }
    function R(u, t, p, h, w, k, g) {
      if (
        ((p = A(p, "N")),
        (h = A(h, "r")),
        (w = A(w, "p")),
        (k = A(k, "dkLen")),
        p === 0 || p & (p - 1))
      )
        throw new Error("N must be power of 2");
      if (p > 2147483647 / 128 / h) throw new Error("N too large");
      if (h > 2147483647 / 128 / w) throw new Error("r too large");
      if (!C(u)) throw new Error("password must be an array or buffer");
      if (((u = Array.prototype.slice.call(u)), !C(t)))
        throw new Error("salt must be an array or buffer");
      t = Array.prototype.slice.call(t);
      let B = s(u, t, w * 128 * h);
      const v = new Uint32Array(w * 32 * h);
      for (let f = 0; f < v.length; f++) {
        const n = f * 4;
        v[f] =
          ((B[n + 3] & 255) << 24) |
          ((B[n + 2] & 255) << 16) |
          ((B[n + 1] & 255) << 8) |
          ((B[n + 0] & 255) << 0);
      }
      const E = new Uint32Array(64 * h),
        K = new Uint32Array(32 * h * p),
        U = 32 * h,
        V = new Uint32Array(16),
        Z = new Uint32Array(16),
        O = w * p * 2;
      let W = 0,
        q = null,
        I = !1,
        P = 0,
        a0 = 0,
        J,
        j;
      const c = g ? parseInt(1e3 / h) : 4294967295,
        d = typeof setImmediate < "u" ? setImmediate : setTimeout,
        l = function () {
          if (I) return g(new Error("cancelled"), W / O);
          let f;
          switch (P) {
            case 0:
              (j = a0 * 32 * h), m(v, j, E, 0, U), (P = 1), (J = 0);
            case 1:
              (f = p - J), f > c && (f = c);
              for (let y = 0; y < f; y++)
                m(E, 0, K, (J + y) * U, U), b(E, U, h, V, Z);
              if (((J += f), (W += f), g)) {
                const y = parseInt((1e3 * W) / O);
                if (y !== q) {
                  if (((I = g(null, W / O)), I)) break;
                  q = y;
                }
              }
              if (J < p) break;
              (J = 0), (P = 2);
            case 2:
              (f = p - J), f > c && (f = c);
              for (let y = 0; y < f; y++) {
                const G = (2 * h - 1) * 16,
                  M = E[G] & (p - 1);
                S(K, M * U, E, U), b(E, U, h, V, Z);
              }
              if (((J += f), (W += f), g)) {
                const y = parseInt((1e3 * W) / O);
                if (y !== q) {
                  if (((I = g(null, W / O)), I)) break;
                  q = y;
                }
              }
              if (J < p) break;
              if ((m(E, 0, v, j, U), a0++, a0 < w)) {
                P = 0;
                break;
              }
              B = [];
              for (let y = 0; y < v.length; y++)
                B.push((v[y] >> 0) & 255),
                  B.push((v[y] >> 8) & 255),
                  B.push((v[y] >> 16) & 255),
                  B.push((v[y] >> 24) & 255);
              const n = s(u, B, k);
              return g && g(null, 1, n), n;
          }
          g && d(l);
        };
      if (!g)
        for (;;) {
          const f = l();
          if (f != null) return f;
        }
      l();
    }
    const $ = {
      scrypt: function (u, t, p, h, w, k, g) {
        return new Promise(function (B, v) {
          let E = 0;
          g && g(0),
            R(u, t, p, h, w, k, function (K, U, V) {
              if (K) v(K);
              else if (V) g && E !== 1 && g(1), B(new Uint8Array(V));
              else if (g && U !== E) return (E = U), g(U);
            });
        });
      },
      syncScrypt: function (u, t, p, h, w, k) {
        return new Uint8Array(R(u, t, p, h, w, k));
      },
    };
    x.exports = $;
  })();
})(Pe);
var za = Pe.exports;
const te = ge(za);
var Ha =
  (globalThis && globalThis.__awaiter) ||
  function (x, e, a, r) {
    function o(s) {
      return s instanceof a
        ? s
        : new a(function (b) {
            b(s);
          });
    }
    return new (a || (a = Promise))(function (s, b) {
      function i(m) {
        try {
          S(r.next(m));
        } catch (C) {
          b(C);
        }
      }
      function _(m) {
        try {
          S(r.throw(m));
        } catch (C) {
          b(C);
        }
      }
      function S(m) {
        m.done ? s(m.value) : o(m.value).then(i, _);
      }
      S((r = r.apply(x, e || [])).next());
    });
  };
const j0 = new x0(ke);
function be(x) {
  return x != null && x.mnemonic && x.mnemonic.phrase;
}
class $a extends ye {
  isKeystoreAccount(e) {
    return !!(e && e._isKeystoreAccount);
  }
}
function Ja(x, e, a) {
  if (H(x, "crypto/cipher") === "aes-128-ctr") {
    const o = l0(H(x, "crypto/cipherparams/iv")),
      s = new n0.Counter(o),
      b = new n0.ModeOfOperation.ctr(e, s);
    return T(b.decrypt(a));
  }
  return null;
}
function Fe(x, e) {
  const a = l0(H(x, "crypto/ciphertext"));
  if (
    N(o0(r0([e.slice(16, 32), a]))).substring(2) !==
    H(x, "crypto/mac").toLowerCase()
  )
    throw new Error("invalid password");
  const o = Ja(x, e.slice(0, 16), a);
  o ||
    j0.throwError("unsupported cipher", x0.errors.UNSUPPORTED_OPERATION, {
      operation: "decrypt",
    });
  const s = e.slice(32, 64),
    b = b0(o);
  if (x.address) {
    let _ = x.address.toLowerCase();
    if ((_.substring(0, 2) !== "0x" && (_ = "0x" + _), i0(_) !== b))
      throw new Error("address mismatch");
  }
  const i = { _isKeystoreAccount: !0, address: b, privateKey: N(o) };
  if (H(x, "x-ethers/version") === "0.1") {
    const _ = l0(H(x, "x-ethers/mnemonicCiphertext")),
      S = l0(H(x, "x-ethers/mnemonicCounter")),
      m = new n0.Counter(S),
      C = new n0.ModeOfOperation.ctr(s, m),
      A = H(x, "x-ethers/path") || S0,
      R = H(x, "x-ethers/locale") || "en",
      $ = T(C.decrypt(_));
    try {
      const u = N0($, R),
        t = Y.fromMnemonic(u, null, R).derivePath(A);
      if (t.privateKey != i.privateKey) throw new Error("mnemonic mismatch");
      i.mnemonic = t.mnemonic;
    } catch (u) {
      if (u.code !== x0.errors.INVALID_ARGUMENT || u.argument !== "wordlist")
        throw u;
    }
  }
  return new $a(i);
}
function Be(x, e, a, r, o) {
  return T(Y0(x, e, a, r, o));
}
function ja(x, e, a, r, o) {
  return Promise.resolve(Be(x, e, a, r, o));
}
function Me(x, e, a, r, o) {
  const s = xe(e),
    b = H(x, "crypto/kdf");
  if (b && typeof b == "string") {
    const i = function (_, S) {
      return j0.throwArgumentError(
        "invalid key-derivation function parameters",
        _,
        S
      );
    };
    if (b.toLowerCase() === "scrypt") {
      const _ = l0(H(x, "crypto/kdfparams/salt")),
        S = parseInt(H(x, "crypto/kdfparams/n")),
        m = parseInt(H(x, "crypto/kdfparams/r")),
        C = parseInt(H(x, "crypto/kdfparams/p"));
      (!S || !m || !C) && i("kdf", b), S & (S - 1) && i("N", S);
      const A = parseInt(H(x, "crypto/kdfparams/dklen"));
      return A !== 32 && i("dklen", A), r(s, _, S, m, C, 64, o);
    } else if (b.toLowerCase() === "pbkdf2") {
      const _ = l0(H(x, "crypto/kdfparams/salt"));
      let S = null;
      const m = H(x, "crypto/kdfparams/prf");
      m === "hmac-sha256"
        ? (S = "sha256")
        : m === "hmac-sha512"
        ? (S = "sha512")
        : i("prf", m);
      const C = parseInt(H(x, "crypto/kdfparams/c")),
        A = parseInt(H(x, "crypto/kdfparams/dklen"));
      return A !== 32 && i("dklen", A), a(s, _, C, A, S);
    }
  }
  return j0.throwArgumentError("unsupported key-derivation function", "kdf", b);
}
function qa(x, e) {
  const a = JSON.parse(x),
    r = Me(a, e, Be, te.syncScrypt);
  return Fe(a, r);
}
function Za(x, e, a) {
  return Ha(this, void 0, void 0, function* () {
    const r = JSON.parse(x),
      o = yield Me(r, e, ja, te.scrypt, a);
    return Fe(r, o);
  });
}
function Qa(x, e, a, r) {
  try {
    if (i0(x.address) !== b0(x.privateKey))
      throw new Error("address/privateKey mismatch");
    if (be(x)) {
      const t = x.mnemonic;
      if (
        Y.fromMnemonic(t.phrase, null, t.locale).derivePath(t.path || S0)
          .privateKey != x.privateKey
      )
        throw new Error("mnemonic mismatch");
    }
  } catch (t) {
    return Promise.reject(t);
  }
  typeof a == "function" && !r && ((r = a), (a = {})), a || (a = {});
  const o = T(x.privateKey),
    s = xe(e);
  let b = null,
    i = null,
    _ = null;
  if (be(x)) {
    const t = x.mnemonic;
    (b = T(V0(t.phrase, t.locale || "en"))),
      (i = t.path || S0),
      (_ = t.locale || "en");
  }
  let S = a.client;
  S || (S = "ethers.js");
  let m = null;
  a.salt ? (m = T(a.salt)) : (m = y0(32));
  let C = null;
  if (a.iv) {
    if (((C = T(a.iv)), C.length !== 16)) throw new Error("invalid iv");
  } else C = y0(16);
  let A = null;
  if (a.uuid) {
    if (((A = T(a.uuid)), A.length !== 16)) throw new Error("invalid uuid");
  } else A = y0(16);
  let R = 1 << 17,
    $ = 8,
    u = 1;
  return (
    a.scrypt &&
      (a.scrypt.N && (R = a.scrypt.N),
      a.scrypt.r && ($ = a.scrypt.r),
      a.scrypt.p && (u = a.scrypt.p)),
    te.scrypt(s, m, R, $, u, 64, r).then((t) => {
      t = T(t);
      const p = t.slice(0, 16),
        h = t.slice(16, 32),
        w = t.slice(32, 64),
        k = new n0.Counter(C),
        g = new n0.ModeOfOperation.ctr(p, k),
        B = T(g.encrypt(o)),
        v = o0(r0([h, B])),
        E = {
          address: x.address.substring(2).toLowerCase(),
          id: Va(A),
          version: 3,
          Crypto: {
            cipher: "aes-128-ctr",
            cipherparams: { iv: N(C).substring(2) },
            ciphertext: N(B).substring(2),
            kdf: "scrypt",
            kdfparams: { salt: N(m).substring(2), n: R, dklen: 32, p: u, r: $ },
            mac: v.substring(2),
          },
        };
      if (b) {
        const K = y0(16),
          U = new n0.Counter(K),
          V = new n0.ModeOfOperation.ctr(w, U),
          Z = T(V.encrypt(b)),
          O = new Date(),
          W =
            O.getUTCFullYear() +
            "-" +
            k0(O.getUTCMonth() + 1, 2) +
            "-" +
            k0(O.getUTCDate(), 2) +
            "T" +
            k0(O.getUTCHours(), 2) +
            "-" +
            k0(O.getUTCMinutes(), 2) +
            "-" +
            k0(O.getUTCSeconds(), 2) +
            ".0Z";
        E["x-ethers"] = {
          client: S,
          gethFilename: "UTC--" + W + "--" + E.address,
          mnemonicCounter: N(K).substring(2),
          mnemonicCiphertext: N(Z).substring(2),
          path: i,
          locale: _,
          version: "0.1",
        };
      }
      return JSON.stringify(E);
    })
  );
}
function Xa(x, e, a) {
  if (ae(x)) {
    a && a(0);
    const r = Te(x, e);
    return a && a(1), Promise.resolve(r);
  }
  return ce(x) ? Za(x, e, a) : Promise.reject(new Error("invalid JSON wallet"));
}
function Ya(x, e) {
  if (ae(x)) return Te(x, e);
  if (ce(x)) return qa(x, e);
  throw new Error("invalid JSON wallet");
}
const ec = "wallet/5.6.0";
var le =
  (globalThis && globalThis.__awaiter) ||
  function (x, e, a, r) {
    function o(s) {
      return s instanceof a
        ? s
        : new a(function (b) {
            b(s);
          });
    }
    return new (a || (a = Promise))(function (s, b) {
      function i(m) {
        try {
          S(r.next(m));
        } catch (C) {
          b(C);
        }
      }
      function _(m) {
        try {
          S(r.throw(m));
        } catch (C) {
          b(C);
        }
      }
      function S(m) {
        m.done ? s(m.value) : o(m.value).then(i, _);
      }
      S((r = r.apply(x, e || [])).next());
    });
  };
const s0 = new x0(ec);
function xc(x) {
  return x != null && Se(x.privateKey, 32) && x.address != null;
}
function ac(x) {
  const e = x.mnemonic;
  return e && e.phrase;
}
class d0 extends ve {
  constructor(e, a) {
    if ((s0.checkNew(new.target, d0), super(), xc(e))) {
      const r = new v0(e.privateKey);
      if (
        (L(this, "_signingKey", () => r),
        L(this, "address", b0(this.publicKey)),
        this.address !== i0(e.address) &&
          s0.throwArgumentError(
            "privateKey/address mismatch",
            "privateKey",
            "[REDACTED]"
          ),
        ac(e))
      ) {
        const o = e.mnemonic;
        L(this, "_mnemonic", () => ({
          phrase: o.phrase,
          path: o.path || S0,
          locale: o.locale || "en",
        }));
        const s = this.mnemonic,
          b = Y.fromMnemonic(s.phrase, null, s.locale).derivePath(s.path);
        b0(b.privateKey) !== this.address &&
          s0.throwArgumentError(
            "mnemonic/address mismatch",
            "privateKey",
            "[REDACTED]"
          );
      } else L(this, "_mnemonic", () => null);
    } else {
      if (v0.isSigningKey(e))
        e.curve !== "secp256k1" &&
          s0.throwArgumentError(
            "unsupported curve; must be secp256k1",
            "privateKey",
            "[REDACTED]"
          ),
          L(this, "_signingKey", () => e);
      else {
        typeof e == "string" &&
          e.match(/^[0-9a-f]*$/i) &&
          e.length === 64 &&
          (e = "0x" + e);
        const r = new v0(e);
        L(this, "_signingKey", () => r);
      }
      L(this, "_mnemonic", () => null), L(this, "address", b0(this.publicKey));
    }
    a &&
      !He.isProvider(a) &&
      s0.throwArgumentError("invalid provider", "provider", a),
      L(this, "provider", a || null);
  }
  get mnemonic() {
    return this._mnemonic();
  }
  get privateKey() {
    return this._signingKey().privateKey;
  }
  get publicKey() {
    return this._signingKey().publicKey;
  }
  getAddress() {
    return Promise.resolve(this.address);
  }
  connect(e) {
    return new d0(this, e);
  }
  signTransaction(e) {
    return we(e).then((a) => {
      a.from != null &&
        (i0(a.from) !== this.address &&
          s0.throwArgumentError(
            "transaction from address mismatch",
            "transaction.from",
            e.from
          ),
        delete a.from);
      const r = this._signingKey().signDigest(o0(z0(a)));
      return z0(a, r);
    });
  }
  signMessage(e) {
    return le(this, void 0, void 0, function* () {
      return H0(this._signingKey().signDigest(X0(e)));
    });
  }
  _signTypedData(e, a, r) {
    return le(this, void 0, void 0, function* () {
      const o = yield K0.resolveNames(
        e,
        a,
        r,
        (s) => (
          this.provider == null &&
            s0.throwError(
              "cannot resolve ENS names without a provider",
              x0.errors.UNSUPPORTED_OPERATION,
              { operation: "resolveName", value: s }
            ),
          this.provider.resolveName(s)
        )
      );
      return H0(this._signingKey().signDigest(K0.hash(o.domain, a, o.value)));
    });
  }
  encrypt(e, a, r) {
    if (
      (typeof a == "function" && !r && ((r = a), (a = {})),
      r && typeof r != "function")
    )
      throw new Error("invalid callback");
    return a || (a = {}), Qa(this, e, a, r);
  }
  static createRandom(e) {
    let a = y0(16);
    e || (e = {}),
      e.extraEntropy && (a = T(U0(o0(r0([a, e.extraEntropy])), 0, 16)));
    const r = N0(a, e.locale);
    return d0.fromMnemonic(r, e.path, e.locale);
  }
  static fromEncryptedJson(e, a, r) {
    return Xa(e, a, r).then((o) => new d0(o));
  }
  static fromEncryptedJsonSync(e, a) {
    return new d0(Ya(e, a));
  }
  static fromMnemonic(e, a, r) {
    return a || (a = S0), new d0(Y.fromMnemonic(e, null, r).derivePath(a));
  }
}
function cc(x, e) {
  return Q0(X0(x), e);
}
function tc(x, e, a, r) {
  return Q0(K0.hash(x, e, a), r);
}
const rc = Object.freeze(
    Object.defineProperty(
      { __proto__: null, decode: $e, encode: Je },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fc = "solidity/5.6.0",
  nc = new RegExp("^bytes([0-9]+)$"),
  dc = new RegExp("^(u?int)([0-9]*)$"),
  oc = new RegExp("^(.*)\\[([0-9]*)\\]$"),
  ic = "0000000000000000000000000000000000000000000000000000000000000000",
  g0 = new x0(fc);
function De(x, e, a) {
  switch (x) {
    case "address":
      return a ? R0(e, 32) : T(e);
    case "string":
      return t0(e);
    case "bytes":
      return T(e);
    case "bool":
      return (e = e ? "0x01" : "0x00"), a ? R0(e, 32) : T(e);
  }
  let r = x.match(dc);
  if (r) {
    let o = parseInt(r[2] || "256");
    return (
      ((r[2] && String(o) !== r[2]) || o % 8 !== 0 || o === 0 || o > 256) &&
        g0.throwArgumentError("invalid number type", "type", x),
      a && (o = 256),
      (e = O0.from(e).toTwos(o)),
      R0(e, o / 8)
    );
  }
  if (((r = x.match(nc)), r)) {
    const o = parseInt(r[1]);
    return (
      (String(o) !== r[1] || o === 0 || o > 32) &&
        g0.throwArgumentError("invalid bytes type", "type", x),
      T(e).byteLength !== o &&
        g0.throwArgumentError(`invalid value for ${x}`, "value", e),
      a ? T((e + ic).substring(0, 66)) : e
    );
  }
  if (((r = x.match(oc)), r && Array.isArray(e))) {
    const o = r[1];
    parseInt(r[2] || String(e.length)) != e.length &&
      g0.throwArgumentError(`invalid array length for ${x}`, "value", e);
    const b = [];
    return (
      e.forEach(function (i) {
        b.push(De(o, i, !0));
      }),
      r0(b)
    );
  }
  return g0.throwArgumentError("invalid type", "type", x);
}
function re(x, e) {
  x.length != e.length &&
    g0.throwArgumentError(
      "wrong number of values; expected ${ types.length }",
      "values",
      e
    );
  const a = [];
  return (
    x.forEach(function (r, o) {
      a.push(De(r, e[o]));
    }),
    N(r0(a))
  );
}
function sc(x, e) {
  return o0(re(x, e));
}
function bc(x, e) {
  return u0(re(x, e));
}
const lc = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        AbiCoder: je,
        ConstructorFragment: qe,
        ErrorFragment: Ze,
        EventFragment: Qe,
        FormatTypes: Xe,
        Fragment: Ye,
        FunctionFragment: ex,
        HDNode: Y,
        Indexed: xx,
        Interface: ax,
        LogDescription: cx,
        Logger: x0,
        ParamType: tx,
        RLP: rx,
        SigningKey: v0,
        get SupportedAlgorithm() {
          return W0;
        },
        TransactionDescription: fx,
        get TransactionTypes() {
          return nx;
        },
        get UnicodeNormalizationForm() {
          return L0;
        },
        Utf8ErrorFuncs: dx,
        get Utf8ErrorReason() {
          return ox;
        },
        _TypedDataEncoder: K0,
        _fetchData: ix,
        _toEscapedUtf8String: sx,
        accessListify: bx,
        arrayify: T,
        base58: Z0,
        base64: rc,
        checkProperties: lx,
        checkResultErrors: ux,
        commify: hx,
        computeAddress: b0,
        computeHmac: P0,
        computePublicKey: px,
        concat: r0,
        deepCopy: mx,
        defaultAbiCoder: gx,
        defaultPath: S0,
        defineReadOnly: L,
        dnsEncode: yx,
        entropyToMnemonic: N0,
        fetchJson: vx,
        formatBytes32String: Ea,
        formatEther: wx,
        formatUnits: Sx,
        getAccountPath: La,
        getAddress: i0,
        getContractAddress: Cx,
        getCreate2Address: Ex,
        getIcapAddress: Ax,
        getJsonWalletAddress: Wa,
        getStatic: _x,
        hashMessage: X0,
        hexConcat: kx,
        hexDataLength: Tx,
        hexDataSlice: U0,
        hexStripZeros: Px,
        hexValue: Fx,
        hexZeroPad: q0,
        hexlify: N,
        id: pe,
        isAddress: Bx,
        isBytes: Mx,
        isBytesLike: Dx,
        isHexString: Se,
        isValidMnemonic: Ia,
        isValidName: Rx,
        joinSignature: H0,
        keccak256: o0,
        mnemonicToEntropy: V0,
        mnemonicToSeed: Ae,
        namehash: Ix,
        nameprep: Lx,
        parseBytes32String: Aa,
        parseEther: Kx,
        parseTransaction: Ox,
        parseUnits: Ux,
        poll: Vx,
        randomBytes: y0,
        recoverAddress: Q0,
        recoverPublicKey: Nx,
        resolveProperties: we,
        ripemd160: me,
        serializeTransaction: z0,
        sha256: u0,
        sha512: Gx,
        shallowCopy: Wx,
        shuffled: zx,
        solidityKeccak256: sc,
        solidityPack: re,
        soliditySha256: bc,
        splitSignature: Hx,
        stripZeros: $x,
        toUtf8Bytes: t0,
        toUtf8CodePoints: Jx,
        toUtf8String: he,
        verifyMessage: cc,
        verifyTypedData: tc,
        zeroPad: R0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Re = "ethers/5.6.2",
  uc = new x0(Re),
  Ie = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BaseContract: jx,
        BigNumber: O0,
        Contract: qx,
        ContractFactory: Zx,
        FixedNumber: Qx,
        Signer: ve,
        VoidSigner: Xx,
        Wallet: d0,
        Wordlist: C0,
        constants: Ca,
        get errors() {
          return Yx;
        },
        getDefaultProvider: ea,
        logger: uc,
        providers: xa,
        utils: lc,
        version: Re,
        wordlists: $0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
try {
  const x = window;
  x._ethers == null && (x._ethers = Ie);
} catch {}
const hc = { class: "grid gap-6 justify-center items-center" },
  pc = { class: "grid gap-3" },
  mc = D(
    "div",
    { class: "grid gap-1" },
    [
      D("h6", { class: "typo-h6" }, "Bridge"),
      D(
        "p",
        { class: "typo-caption-s text-secondary-80%" },
        "Send $DIP token across chains."
      ),
    ],
    -1
  ),
  gc = {
    class: "grid gap-3 lg:grid-cols-[1fr_auto_1fr] medium-lg:grid-cols-1",
  },
  yc = { class: "grid grid-cols-[1fr,auto] items-center" },
  vc = D("label", { class: "typo-caption-m", for: "fromValue" }, " From ", -1),
  wc = { class: "grid gap-1 grid-flow-col items-center justify-start" },
  Sc = {
    class: "overflow-hidden whitespace-nowrap text-ellipsis typo-button-s",
  },
  Cc = { class: "grid gap-2 grid-cols-[1fr_auto_auto] items-center" },
  Ec = { class: "grid items-center" },
  Ac = { class: "grid gap-2 grid-flow-col items-center justify-start" },
  _c = D(
    "span",
    { class: "overflow-hidden whitespace-nowrap text-ellipsis typo-button-s" },
    "$DUMP",
    -1
  ),
  kc = {
    class: "grid grid-flow-col justify-between items-center typo-caption-s",
  },
  Tc = D("span", null, "Balance:", -1),
  Pc = D(
    "div",
    { class: "lg:w-px medium-lg:w-full lg:h-full medium-lg:h-px bg-secondary" },
    null,
    -1
  ),
  Fc = { class: "grid grid-cols-[1fr,auto] items-center" },
  Bc = D("label", { class: "typo-caption-m", for: "fromValue" }, " To ", -1),
  Mc = { class: "grid gap-2 grid-flow-col items-center justify-start" },
  Dc = {
    class: "overflow-hidden whitespace-nowrap text-ellipsis typo-button-s",
  },
  Rc = { class: "" },
  Ic = {
    class: "grid grid-flow-col justify-between items-center typo-caption-s",
  },
  Lc = D("span", null, "Bridge fees", -1),
  Kc = { class: "grid gap-3 lg:grid-cols-[1fr_auto] medium-lg:grid-cols-1" },
  Oc = { key: 0 },
  Uc = { key: 0 },
  Vc = {
    class:
      "grid grid-flow-col gap-1 m-1 justify-center items-center typo-caption-s",
  },
  Nc = D("span", null, "Powered by", -1),
  qc = aa({
    __name: "index",
    setup(x) {
      const { notify: e } = ca(),
        a = B0([
          {
            icon: "Logo/Ethereum",
            chainId: 1,
            name: "Ethereum",
            currency: "ETH",
            rpcUrl: "https://eth.llamarpc.com",
            explorerUrl: "https://etherscan.io",
            isTestnet: !1,
            layerzeroId: 30101,
          },
          {
            icon: "Logo/Base",
            chainId: 8453,
            name: "Base",
            currency: "ETH",
            rpcUrl: "https://api.basescan.org/api",
            explorerUrl: "https://basescan.org/",
            isTestnet: !1,
            layerzeroId: 30184,
          },
          {
            icon: "Logo/Ethereum",
            chainId: 11155111,
            name: "Sepolia",
            currency: "ETH",
            rpcUrl: "https://ethereum-sepolia.publicnode.com",
            explorerUrl: "https://sepolia.etherscan.io/",
            isTestnet: !0,
            layerzeroId: 40161,
          },
          {
            icon: "Logo/Base",
            chainId: 84532,
            name: "Base Sepolia",
            currency: "ETH",
            rpcUrl: "https://sepolia.base.org",
            explorerUrl: "https://sepolia.basescan.org/",
            isTestnet: !0,
            layerzeroId: 40245,
          },
          {
            icon: "Logo/Arbitrum",
            chainId: 421614,
            name: "Arbitrum Sepolia",
            currency: "ETH",
            rpcUrl: "https://sepolia-rollup.arbitrum.io/rpc",
            explorerUrl: "https://sepolia.arbiscan.io/",
            isTestnet: !0,
            layerzeroId: 40231,
          },
          {
            icon: "Logo/Blast",
            chainId: 168587773,
            name: "Blast Sepolia",
            currency: "ETH",
            rpcUrl: "https://sepolia.blast.io",
            explorerUrl: "https://testnet.blastscan.io/",
            isTestnet: !0,
            layerzeroId: 40243,
          },
        ]),
        r = M0(() =>
          a.value.filter(
            (v) =>
              (m.value.includes("sepolia") ? v.isTestnet : !v.isTestnet) ?? null
          )
        ),
        [o] = [ta()],
        { externalRequestChainChange: s, getBalances: b } = o,
        { dumpBalance: i, chainId: _, address: S, currentChain: m } = ra(o),
        C = B0(0),
        A = B0(!1),
        R = B0(!1),
        $ = M0(
          () => r.value.find((v) => v.chainId === Number(_.value)) ?? r.value[0]
        ),
        u = M0(
          () => r.value.filter((v) => v.chainId !== Number(_.value))[0] ?? null
        ),
        t = M0(() => p.selectedFromChain.chainId === Number(_.value));
      E0($, async () => {
        (h.value.selectedFromChain.$model = $.value), await w();
      }),
        E0(u, async () => {
          (h.value.selectedToChain.$model = $.value), await w();
        });
      const { states: p, validator: h } = la({
        selectedFromChain: { value: $.value, validators: { required: G0 } },
        selectedToChain: { value: u.value, validators: { required: G0 } },
        fromValue: {
          value: void 0,
          validators: { minValue: ma(0), required: G0 },
        },
      });
      E0(
        () => h.value.selectedFromChain.$model,
        async (v) => {
          if (
            v !== void 0 &&
            v.chainId === h.value.selectedToChain.$model.chainId
          ) {
            const E = r.value.find((K) => K.chainId !== v.chainId);
            E !== void 0 &&
              ((h.value.selectedToChain.$model = E),
              await w(),
              await s(`0x${v.chainId.toString(16)}`),
              (h.value.selectedFromChain.$model = $.value));
          }
        }
      ),
        E0(
          () => h.value.selectedToChain.$model,
          async (v) => {
            if (
              v !== void 0 &&
              v.chainId === h.value.selectedFromChain.$model.chainId
            ) {
              const E = r.value.find((K) => K.chainId !== v.chainId);
              await w(), E !== void 0 && (h.value.selectedFromChain.$model = E);
            }
          }
        ),
        E0(
          () => h.value.fromValue.$model,
          async () => {
            await w();
            const v = await va(
              fe[m.value].token,
              S.value,
              "0x6edce65403992e310a62460808c4b910d972f10f"
            );
            Number(v) >= Number(h.value.fromValue.$model)
              ? (R.value = !0)
              : (R.value = !1);
          }
        );
      const w = async () => {
          if (h.value.fromValue.$model) {
            const v = await ga(
              S.value,
              Number(h.value.fromValue.$model),
              h.value.selectedToChain.$model.layerzeroId
            );
            C.value = v;
          }
        },
        k = async () => {
          try {
            if (A.value) return;
            if (!R.value) throw new Error("Approval needed");
            (A.value = !0),
              await ya(
                S.value,
                Number(h.value.fromValue.$model),
                h.value.selectedToChain.$model.layerzeroId,
                C.value
              ),
              (R.value = !0);
          } catch (v) {
            e.danger({
              title: "Error",
              message:
                v instanceof Error
                  ? v.message
                  : "An error occurred while bridging the token",
            });
          } finally {
            A.value = !1;
          }
        },
        g = async () => {
          await s(`0x${h.value.selectedFromChain.$model.chainId.toString(16)}`);
        };
      async function B() {
        try {
          if (A.value) return;
          if (R.value) throw new Error("No approval needed");
          (A.value = !0),
            await wa(
              fe[m.value].token,
              "0x6edce65403992e310a62460808c4b910d972f10f",
              Number(h.value.fromValue.$model)
            ),
            (R.value = !0);
        } catch (v) {
          e.danger({
            title: "Error",
            message:
              v instanceof Error
                ? v.message
                : "An error occurred while approving the token",
          });
        } finally {
          (A.value = !1), await b();
        }
      }
      return (v, E) => {
        const K = da,
          U = ba,
          V = ua,
          Z = ha,
          O = oa,
          W = pa,
          q = ia,
          I = sa;
        return (
          f0(),
          A0("div", hc, [
            e0(
              I,
              { class: "grid lg:w-[540px] medium-lg:w-[320px] p-4 bg-primary" },
              {
                default: c0(() => [
                  D("div", pc, [
                    mc,
                    D("div", gc, [
                      e0(
                        O,
                        { class: "content-start" },
                        {
                          default: c0(() => [
                            D("div", yc, [
                              vc,
                              e0(
                                U,
                                {
                                  modelValue: z(h).selectedFromChain.$model,
                                  "onUpdate:modelValue":
                                    E[0] ||
                                    (E[0] = (P) =>
                                      (z(h).selectedFromChain.$model = P)),
                                  options: z(r),
                                  placeholder: "Select chain",
                                },
                                {
                                  option: c0(({ option: P }) => [
                                    D("span", wc, [
                                      e0(
                                        K,
                                        { name: P.icon, class: "w-6" },
                                        null,
                                        8,
                                        ["name"]
                                      ),
                                      D("span", Sc, h0(P.name), 1),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["modelValue", "options"]
                              ),
                            ]),
                            D("div", Cc, [
                              e0(
                                V,
                                {
                                  modelValue: z(h).fromValue.$model,
                                  "onUpdate:modelValue":
                                    E[1] ||
                                    (E[1] = (P) => (z(h).fromValue.$model = P)),
                                  class: "h-7 w-16",
                                  attributes: {
                                    id: "fromValue",
                                    type: "number",
                                    min: 0,
                                    max: z(i) ?? 0,
                                    placeholder: "0.0",
                                    step: 0.01,
                                  },
                                },
                                null,
                                8,
                                ["modelValue", "attributes"]
                              ),
                              D("div", Ec, [
                                z(i)
                                  ? (f0(),
                                    A0(
                                      "span",
                                      {
                                        key: 0,
                                        class: "typo-tag underline",
                                        onClick:
                                          E[2] ||
                                          (E[2] = (P) =>
                                            (z(h).fromValue.$model = z(i))),
                                      },
                                      " (Max: " + h0(z(i).toFixed(2)) + ") ",
                                      1
                                    ))
                                  : fa("", !0),
                              ]),
                              D("span", Ac, [
                                _c,
                                e0(Z, { icon: "Token/DUMP", size: "s" }),
                              ]),
                            ]),
                            D("div", kc, [
                              Tc,
                              D("span", null, h0(z(i).toFixed(2)), 1),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                      Pc,
                      e0(
                        O,
                        { class: "content-start" },
                        {
                          default: c0(() => [
                            D("div", Fc, [
                              Bc,
                              e0(
                                U,
                                {
                                  modelValue: z(h).selectedToChain.$model,
                                  "onUpdate:modelValue":
                                    E[3] ||
                                    (E[3] = (P) =>
                                      (z(h).selectedToChain.$model = P)),
                                  options: z(r).filter(
                                    (P) => P.chainId !== Number(z(_))
                                  ),
                                  placeholder: "Select token",
                                },
                                {
                                  option: c0(({ option: P }) => [
                                    D("span", Mc, [
                                      e0(
                                        K,
                                        { name: P.icon, class: "w-6" },
                                        null,
                                        8,
                                        ["name"]
                                      ),
                                      D("span", Dc, h0(P.name), 1),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["modelValue", "options"]
                              ),
                            ]),
                            D("div", Rc, [
                              e0(
                                O,
                                {
                                  "is-padding-less": "",
                                  class:
                                    "px-2 py-1 typo-button-m text-secondary-40%",
                                },
                                {
                                  default: c0(() => {
                                    var P, a0, J;
                                    return [
                                      ne(
                                        h0(
                                          ((J =
                                            (a0 =
                                              (P = z(h)) == null
                                                ? void 0
                                                : P.fromValue) == null
                                              ? void 0
                                              : a0.$model) == null
                                            ? void 0
                                            : J.toFixed(2)) || 0
                                        ),
                                        1
                                      ),
                                    ];
                                  }),
                                  _: 1,
                                }
                              ),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    D("div", Ic, [
                      Lc,
                      D(
                        "span",
                        null,
                        h0(
                          Number(
                            z(Ie).utils.formatUnits(Number(z(C)).toString(), 18)
                          ).toFixed(6)
                        ) + " $ETH",
                        1
                      ),
                    ]),
                    D("div", Kc, [
                      D("div", null, [
                        z(t)
                          ? (f0(),
                            A0(
                              na,
                              { key: 0 },
                              [
                                z(R)
                                  ? (f0(),
                                    _0(
                                      q,
                                      {
                                        key: 0,
                                        class: "w-full",
                                        onClick: E[4] || (E[4] = (P) => k()),
                                      },
                                      {
                                        default: c0(() => [
                                          e0(
                                            de,
                                            {
                                              name: "fade-quicker",
                                              mode: "out-in",
                                            },
                                            {
                                              default: c0(() => [
                                                z(A)
                                                  ? (f0(), _0(W, { key: 1 }))
                                                  : (f0(),
                                                    A0("span", Oc, "Bridge")),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ))
                                  : (f0(),
                                    _0(
                                      q,
                                      {
                                        key: 1,
                                        class: "w-full",
                                        onClick: E[5] || (E[5] = (P) => B()),
                                      },
                                      {
                                        default: c0(() => [
                                          e0(
                                            de,
                                            {
                                              name: "fade-quicker",
                                              mode: "out-in",
                                            },
                                            {
                                              default: c0(() => [
                                                z(A)
                                                  ? (f0(), _0(W, { key: 1 }))
                                                  : (f0(),
                                                    A0("span", Uc, "Approve")),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    )),
                              ],
                              64
                            ))
                          : (f0(),
                            _0(
                              q,
                              { key: 1, class: "w-full", onClick: g },
                              {
                                default: c0(() => [ne(" Change network ")]),
                                _: 1,
                              }
                            )),
                      ]),
                      D("div", Vc, [
                        Nc,
                        e0(K, {
                          name: "Logo/Text/LayerZero",
                          class: "w-20 opacity-80",
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              }
            ),
          ])
        );
      };
    },
  });
export { qc as _ };
