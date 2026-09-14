---
schema: wang-person/v1
id: p_miQBcK4jqJAfweCMT7iV4p
status: active
merged_into: null
display_name: 王交
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GH1STXTRU16K5E2QMGWQAU
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王交
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DdEZcKPcmLQXrVkLzH5Eeh
          claim_id: c_GH1STXTRU16K5E2QMGWQAU
          source_id: s_WbFGM8GMG3mSMAr4ffnbF5
          stance: supports
          locator: CBDB:222166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222166）
          source: &a1
            id: s_WbFGM8GMG3mSMAr4ffnbF5
            source_type: api_record
            title: 中国历代人物传记资料库：王交（CBDB 222166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222166&o=json
            external_identifier: CBDB:222166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.363Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PxvHFj7FGM314ngQSzKy4L
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王交，明人物。萬曆十一年進士，籍贯慈溪，曾任太僕寺丞。（中国历代人物传记资料库 CBDB 222166）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sDN2mAIS8hpOHWrfxlXidg
          claim_id: c_PxvHFj7FGM314ngQSzKy4L
          source_id: s_WbFGM8GMG3mSMAr4ffnbF5
          stance: supports
          locator: CBDB:222166
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_z8ukmA_UqTxSiZBttC4LwD
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d-FZuxMsMgTJIjvs2jDdoS
          claim_id: c_z8ukmA_UqTxSiZBttC4LwD
          source_id: s_WbFGM8GMG3mSMAr4ffnbF5
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ahJ97i6Ls8wgTe2hMc2p2s
        status: active
        display_name: 王荁
        merged_into_person_id: null
    - claim:
        id: c_s3qRfn0tqGD8VRDYTdmOsk
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2hWuUAqDqwKKsMHvDHdqv9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z11eAXtGchZdkoW0Vy-C6d
          claim_id: c_s3qRfn0tqGD8VRDYTdmOsk
          source_id: s_S01CbbFNGzbFqoYJota7_1
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王蓳 与 王荁 为同胞（CBDB 记「弟」），王荁 之父／母即 王蓳 之父／母。
          source:
            id: s_S01CbbFNGzbFqoYJota7_1
            source_type: api_record
            title: 中国历代人物传记资料库：王蓳（CBDB 222179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222179&o=json
            external_identifier: CBDB:222179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2hWuUAqDqwKKsMHvDHdqv9
        status: active
        display_name: 王蓳
        merged_into_person_id: null
    - claim:
        id: c_WT3shUkcAcUjWh5uCpcpxt
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8hjEV1vNP9UBEPtxdtug6c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w0V7bZV1wXWeLnVRZXmUGN
          claim_id: c_WT3shUkcAcUjWh5uCpcpxt
          source_id: s_eOgczC7R3Hu-Eq7iVTbORX
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王苕 与 王荁 为同胞（CBDB 记「弟」），王荁 之父／母即 王苕 之父／母。
          source:
            id: s_eOgczC7R3Hu-Eq7iVTbORX
            source_type: api_record
            title: 中国历代人物传记资料库：王苕（CBDB 222176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222176&o=json
            external_identifier: CBDB:222176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8hjEV1vNP9UBEPtxdtug6c
        status: active
        display_name: 王苕
        merged_into_person_id: null
    - claim:
        id: c_ud7ozW_Krsrrqpo9bxbAwm
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CcnEQDngdGPkspJW1sQpqM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Irf5ggSDjza5deG-PqdXby
          claim_id: c_ud7ozW_Krsrrqpo9bxbAwm
          source_id: s_FazGfYdoaDaCE_jZZn3_St
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王芃 与 王荁 为同胞（CBDB 记「弟」），王荁 之父／母即 王芃 之父／母。
          source:
            id: s_FazGfYdoaDaCE_jZZn3_St
            source_type: api_record
            title: 中国历代人物传记资料库：王芃（CBDB 222178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222178&o=json
            external_identifier: CBDB:222178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CcnEQDngdGPkspJW1sQpqM
        status: active
        display_name: 王芃
        merged_into_person_id: null
    - claim:
        id: c_PVh2FTFPCRA8H1GyLrcnyO
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CmgfAJvHFAwZUMgb3EXgfM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JxZM0kdGGuSQStlBjAYmyd
          claim_id: c_PVh2FTFPCRA8H1GyLrcnyO
          source_id: s_mi9mW5essqTO1UjE_RCTay
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王荃 与 王荁 为同胞（CBDB 记「弟」），王荁 之父／母即 王荃 之父／母。
          source:
            id: s_mi9mW5essqTO1UjE_RCTay
            source_type: api_record
            title: 中国历代人物传记资料库：王荃（CBDB 222175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222175&o=json
            external_identifier: CBDB:222175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CmgfAJvHFAwZUMgb3EXgfM
        status: active
        display_name: 王荃
        merged_into_person_id: null
    - claim:
        id: c_5LnQ0FFj8goI3Is-SUmQ7q
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DN4SP5nU87Eqbii4fRgQR8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lVYUTT4JoLIUCGVpUWxuMn
          claim_id: c_5LnQ0FFj8goI3Is-SUmQ7q
          source_id: s_AdflYNQVGS0t9gFuZ5T3VX
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王若 与 王荁 为同胞（CBDB 记「弟」），王荁 之父／母即 王若 之父／母。
          source:
            id: s_AdflYNQVGS0t9gFuZ5T3VX
            source_type: api_record
            title: 中国历代人物传记资料库：王若（CBDB 222174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222174&o=json
            external_identifier: CBDB:222174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DN4SP5nU87Eqbii4fRgQR8
        status: active
        display_name: 王若
        merged_into_person_id: null
    - claim:
        id: c_KtCK3Wk-NHtboMPUW_cgZ_
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PH8dsFBVSTEs7C2PEXie8K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BImSRylGWEptX3IIlMCvPZ
          claim_id: c_KtCK3Wk-NHtboMPUW_cgZ_
          source_id: s_sv-sPklfppPR_ecoHQoXuF
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王芮 与 王荁 为同胞（CBDB 记「弟」），王荁 之父／母即 王芮 之父／母。
          source:
            id: s_sv-sPklfppPR_ecoHQoXuF
            source_type: api_record
            title: 中国历代人物传记资料库：王芮（CBDB 222177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222177&o=json
            external_identifier: CBDB:222177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PH8dsFBVSTEs7C2PEXie8K
        status: active
        display_name: 王芮
        merged_into_person_id: null
    - claim:
        id: c_gYO6qG2X6weKM__q1Vkyta
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RQD8Ld16cfj6m2FXsNqQ93
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6n9u9-PDc8Krgh0vSlMe5v
          claim_id: c_gYO6qG2X6weKM__q1Vkyta
          source_id: s_tvSkseHmDQHKJPbMcmPbPw
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王芑 与 王荁 为同胞（CBDB 记「弟」），王荁 之父／母即 王芑 之父／母。
          source:
            id: s_tvSkseHmDQHKJPbMcmPbPw
            source_type: api_record
            title: 中国历代人物传记资料库：王芑（CBDB 222173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222173&o=json
            external_identifier: CBDB:222173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RQD8Ld16cfj6m2FXsNqQ93
        status: active
        display_name: 王芑
        merged_into_person_id: null
    - claim:
        id: c_Pa9M47kCgH7EPf1uM3dBH2
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T3M3sq2MZq8jQQSuDjj1H9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gi1eYOcUQbFHybWZN12r8P
          claim_id: c_Pa9M47kCgH7EPf1uM3dBH2
          source_id: s_e6ScjfNev0huNZN8Skl5NK
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王苘 与 王荁 为同胞（CBDB 记「兄」），王荁 之父／母即 王苘 之父／母。
          source:
            id: s_e6ScjfNev0huNZN8Skl5NK
            source_type: api_record
            title: 中国历代人物传记资料库：王苘（CBDB 222180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222180&o=json
            external_identifier: CBDB:222180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T3M3sq2MZq8jQQSuDjj1H9
        status: active
        display_name: 王苘
        merged_into_person_id: null
    - claim:
        id: c_JZJfhNoeA_6IJ_ieVdW16h
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ie4ty6AGh2xzEj7TbWPL2T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wZ4_Kvi5aGHZGPxbCa9fwL
          claim_id: c_JZJfhNoeA_6IJ_ieVdW16h
          source_id: s_JwM2dRFji4RVaqNXCEx6U8
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王荷 与 王荁 为同胞（CBDB 记「兄」），王荁 之父／母即 王荷 之父／母。
          source:
            id: s_JwM2dRFji4RVaqNXCEx6U8
            source_type: api_record
            title: 中国历代人物传记资料库：王荷（CBDB 222183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222183&o=json
            external_identifier: CBDB:222183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ie4ty6AGh2xzEj7TbWPL2T
        status: active
        display_name: 王荷
        merged_into_person_id: null
    - claim:
        id: c_JKzhZCQkfQj2C4ZS6-GUZm
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jUFi92KMxHRSexVAgYw8ot
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e3Y0yJ47DsdkgsriHjtxVb
          claim_id: c_JKzhZCQkfQj2C4ZS6-GUZm
          source_id: s_6WoqsbV-S1nsLgWlzoDWdg
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王益 与 王荁 为同胞（CBDB 记「弟」），王荁 之父／母即 王益 之父／母。
          source:
            id: s_6WoqsbV-S1nsLgWlzoDWdg
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 222172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222172&o=json
            external_identifier: CBDB:222172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jUFi92KMxHRSexVAgYw8ot
        status: active
        display_name: 王益
        merged_into_person_id: null
    - claim:
        id: c_UoCXJ-MMUx8PtvnNr5GqE3
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wdSw4BbibnXyZCRXBicDsZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O4FdnnLxnpdxfQOFfFwPBk
          claim_id: c_UoCXJ-MMUx8PtvnNr5GqE3
          source_id: s_eu4t_55vTUWRnMfegZuk5t
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王茹 与 王荁 为同胞（CBDB 记「兄」），王荁 之父／母即 王茹 之父／母。
          source:
            id: s_eu4t_55vTUWRnMfegZuk5t
            source_type: api_record
            title: 中国历代人物传记资料库：王茹（CBDB 222181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222181&o=json
            external_identifier: CBDB:222181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wdSw4BbibnXyZCRXBicDsZ
        status: active
        display_name: 王茹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王交

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王交 | accepted |
| bio.summary | 王交，明人物。萬曆十一年進士，籍贯慈溪，曾任太僕寺丞。（中国历代人物传记资料库 CBDB 222166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ahJ97i6Ls8wgTe2hMc2p2s | 王荁 | accepted |
| children | p_2hWuUAqDqwKKsMHvDHdqv9 | 王蓳 | accepted |
| children | p_8hjEV1vNP9UBEPtxdtug6c | 王苕 | accepted |
| children | p_CcnEQDngdGPkspJW1sQpqM | 王芃 | accepted |
| children | p_CmgfAJvHFAwZUMgb3EXgfM | 王荃 | accepted |
| children | p_DN4SP5nU87Eqbii4fRgQR8 | 王若 | accepted |
| children | p_PH8dsFBVSTEs7C2PEXie8K | 王芮 | accepted |
| children | p_RQD8Ld16cfj6m2FXsNqQ93 | 王芑 | accepted |
| children | p_T3M3sq2MZq8jQQSuDjj1H9 | 王苘 | accepted |
| children | p_ie4ty6AGh2xzEj7TbWPL2T | 王荷 | accepted |
| children | p_jUFi92KMxHRSexVAgYw8ot | 王益 | accepted |
| children | p_wdSw4BbibnXyZCRXBicDsZ | 王茹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王荷（CBDB 222183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222183&o=json)
- [中国历代人物传记资料库：王交（CBDB 222166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222166&o=json)
- [中国历代人物传记资料库：王蓳（CBDB 222179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222179&o=json)
- [中国历代人物传记资料库：王芃（CBDB 222178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222178&o=json)
- [中国历代人物传记资料库：王芑（CBDB 222173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222173&o=json)
- [中国历代人物传记资料库：王苘（CBDB 222180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222180&o=json)
- [中国历代人物传记资料库：王荃（CBDB 222175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222175&o=json)
- [中国历代人物传记资料库：王茹（CBDB 222181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222181&o=json)
- [中国历代人物传记资料库：王芮（CBDB 222177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222177&o=json)
- [中国历代人物传记资料库：王若（CBDB 222174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222174&o=json)
- [中国历代人物传记资料库：王苕（CBDB 222176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222176&o=json)
- [中国历代人物传记资料库：王益（CBDB 222172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222172&o=json)
