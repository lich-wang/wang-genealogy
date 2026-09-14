---
schema: wang-person/v1
id: p_bVznNBP2hMh6tDWAzv1nG9
status: active
merged_into: null
display_name: 王钻
cbdb_id: 262449
revision: 10
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FVa2c19emo5ePSMCWnoMar
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王钻，明人物。弘治三年進士，籍贯黃縣，曾任衛經歷。（中国历代人物传记资料库 CBDB 262449）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_rAvwkqtBXjPY12gtvjBUEW
          claim_id: c_FVa2c19emo5ePSMCWnoMar
          source_id: s_eD7NLF6NGLJdx2pWAXc9KE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eD7NLF6NGLJdx2pWAXc9KE
            source_type: api_record
            title: 维基数据：王钻（Q45476540）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45476540
            external_identifier: Q45476540
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
        - id: cs_aIQ5y2NyAb-vA_aXif1U4k
          claim_id: c_FVa2c19emo5ePSMCWnoMar
          source_id: s_ckw8dsB44HA4YBtQnF33qH
          stance: supports
          locator: CBDB:262449
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ckw8dsB44HA4YBtQnF33qH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鑽（262449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262449&o=json
            external_identifier: CBDB:262449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:39.127Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UJA9wqa3XQGmfLdFH24x39
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王钻
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SHNLfiYZpe8r1mYmjMEYB2
          claim_id: c_UJA9wqa3XQGmfLdFH24x39
          source_id: s_ckw8dsB44HA4YBtQnF33qH
          stance: supports
          locator: Q45476540
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_aTyDrfjxFeqFef1xE77yP5
          claim_id: c_UJA9wqa3XQGmfLdFH24x39
          source_id: s_eD7NLF6NGLJdx2pWAXc9KE
          stance: supports
          locator: Q45476540
          quotation: null
          interpretation_note: null
          source:
            id: s_eD7NLF6NGLJdx2pWAXc9KE
            source_type: api_record
            title: 维基数据：王钻（Q45476540）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45476540
            external_identifier: Q45476540
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VDS1CA9pGmScdCZTd9dY9a
        subject_person_id: p_snnHYhecDpk5HZ7B1gQ1jo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4iTzFjikT9J12zUTV9Kwrd
          claim_id: c_VDS1CA9pGmScdCZTd9dY9a
          source_id: s_eD7NLF6NGLJdx2pWAXc9KE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eD7NLF6NGLJdx2pWAXc9KE
            source_type: api_record
            title: 维基数据：王钻（Q45476540）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45476540
            external_identifier: Q45476540
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
        - id: cs_kH5yHLKkhLQACUGeEDqTMv
          claim_id: c_VDS1CA9pGmScdCZTd9dY9a
          source_id: s_BpgY9e7UVYQnxYEkXLzmPM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_BpgY9e7UVYQnxYEkXLzmPM
            source_type: api_record
            title: 维基数据：王琏（Q45476476）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45476476
            external_identifier: Q45476476
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
      object_person:
        id: p_snnHYhecDpk5HZ7B1gQ1jo
        status: active
        display_name: 王琏
        merged_into_person_id: null
  children:
    - claim:
        id: c_VCiHZEAoSLTMHEQ51TrfBj
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z2x2DBX5ZuQENYQ56txTPL
          claim_id: c_VCiHZEAoSLTMHEQ51TrfBj
          source_id: s_eD7NLF6NGLJdx2pWAXc9KE
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eD7NLF6NGLJdx2pWAXc9KE
            source_type: api_record
            title: 维基数据：王钻（Q45476540）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45476540
            external_identifier: Q45476540
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
        - id: cs_jwrg2xHKcAGGxPFjveHny5
          claim_id: c_VCiHZEAoSLTMHEQ51TrfBj
          source_id: s_6HmtB82CwUfnZsN8f8ZvkG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6HmtB82CwUfnZsN8f8ZvkG
            source_type: api_record
            title: 维基数据：王时中（Q15913916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15913916
            external_identifier: Q15913916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:14.516Z
            metadata_json: null
      object_person:
        id: p_3SWv8LY5fsb1rb4ZwewsLo
        status: active
        display_name: 王时中
        merged_into_person_id: null
    - claim:
        id: c_EdR-0N5fC-b-zB6YA3ZG_v
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fEfMjJL54WdS6wVP79X5vL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tAle7BNTGle2qrw6mX4bnU
          claim_id: c_EdR-0N5fC-b-zB6YA3ZG_v
          source_id: s_XorrntH4J6QdzdVHhn6Fby
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XorrntH4J6QdzdVHhn6Fby
            source_type: api_record
            title: 中国历代人物传记资料库：王時中（CBDB 68328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68328&o=json
            external_identifier: CBDB:68328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fEfMjJL54WdS6wVP79X5vL
        status: active
        display_name: 王時中
        merged_into_person_id: null
    - claim:
        id: c_VbgvXpMqPI1rWp4aaiFI84
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_4sZsCTkJog26VjUtiqrNbQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8bOHSHnMI3UIZReAxwU2T4
          claim_id: c_VbgvXpMqPI1rWp4aaiFI84
          source_id: s__jYp9sg4gXNLik_BnFrPGg
          stance: supports
          locator: CBDB：兄弟 王时中（68328）之父／母 王钻
          quotation: null
          interpretation_note: 由兄弟关系推断：王儒 与 王时中 为同胞（CBDB 记「兄」），王时中 之父／母即 王儒 之父／母。
          source:
            id: s__jYp9sg4gXNLik_BnFrPGg
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 262456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262456&o=json
            external_identifier: CBDB:262456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4sZsCTkJog26VjUtiqrNbQ
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c_fsHoNy8LBU4HKX2JCo1esq
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_D2HurMNg1r8qf63CEHwQek
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P7IjrZIj57tOJSCZ2D935D
          claim_id: c_fsHoNy8LBU4HKX2JCo1esq
          source_id: s_SiPyhp6TfuLQt6ukIhp-44
          stance: supports
          locator: CBDB：兄弟 王时中（68328）之父／母 王钻
          quotation: null
          interpretation_note: 由兄弟关系推断：王時 与 王时中 为同胞（CBDB 记「兄」），王时中 之父／母即 王時 之父／母。
          source:
            id: s_SiPyhp6TfuLQt6ukIhp-44
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 262454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262454&o=json
            external_identifier: CBDB:262454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D2HurMNg1r8qf63CEHwQek
        status: active
        display_name: 王時
        merged_into_person_id: null
    - claim:
        id: c_JyLC1BNzi6V3lIDl7vc99E
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_XVdUz1uj9P5L1HGhQ8MZA4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mv7YQpy064t2SzdFYPybiF
          claim_id: c_JyLC1BNzi6V3lIDl7vc99E
          source_id: s_OHM_QnjZ_i4OYUu331Tab_
          stance: supports
          locator: CBDB：兄弟 王时中（68328）之父／母 王钻
          quotation: null
          interpretation_note: 由兄弟关系推断：王价 与 王时中 为同胞（CBDB 记「兄」），王时中 之父／母即 王价 之父／母。
          source:
            id: s_OHM_QnjZ_i4OYUu331Tab_
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 262459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262459&o=json
            external_identifier: CBDB:262459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XVdUz1uj9P5L1HGhQ8MZA4
        status: active
        display_name: 王价
        merged_into_person_id: null
    - claim:
        id: c_c21comUpfcT2R5bBpbhYJ0
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_jcQHbkwimczLaQjkoGTR5R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pv1ZdRQa79J8AQDk9VWhir
          claim_id: c_c21comUpfcT2R5bBpbhYJ0
          source_id: s_Wd_WxuM8pYazeUyHAknrIr
          stance: supports
          locator: CBDB：兄弟 王时中（68328）之父／母 王钻
          quotation: null
          interpretation_note: 由兄弟关系推断：王雍 与 王时中 为同胞（CBDB 记「兄」），王时中 之父／母即 王雍 之父／母。
          source:
            id: s_Wd_WxuM8pYazeUyHAknrIr
            source_type: api_record
            title: 中国历代人物传记资料库：王雍（CBDB 262455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262455&o=json
            external_identifier: CBDB:262455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jcQHbkwimczLaQjkoGTR5R
        status: active
        display_name: 王雍
        merged_into_person_id: null
    - claim:
        id: c_khepd5NqwNPlZD6vJq1yKz
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_kY5RkWuKny8vWpD2iFHL8p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YphX1lVU1P0uVcNRC9W29-
          claim_id: c_khepd5NqwNPlZD6vJq1yKz
          source_id: s_K73is2EYtmgwZ8JhtqTTSf
          stance: supports
          locator: CBDB：兄弟 王时中（68328）之父／母 王钻
          quotation: null
          interpretation_note: 由兄弟关系推断：王佳 与 王时中 为同胞（CBDB 记「弟」），王时中 之父／母即 王佳 之父／母。
          source:
            id: s_K73is2EYtmgwZ8JhtqTTSf
            source_type: api_record
            title: 中国历代人物传记资料库：王佳（CBDB 262453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262453&o=json
            external_identifier: CBDB:262453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kY5RkWuKny8vWpD2iFHL8p
        status: active
        display_name: 王佳
        merged_into_person_id: null
    - claim:
        id: c_kMBkyaSEk7l26NQulroH2h
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_mfkbALKA619DdyfJ7MisdA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ft_usZ74RksKsyt4YN2rw1
          claim_id: c_kMBkyaSEk7l26NQulroH2h
          source_id: s_dtOErnHYuX3eKdQgdPIhjD
          stance: supports
          locator: CBDB：兄弟 王时中（68328）之父／母 王钻
          quotation: null
          interpretation_note: 由兄弟关系推断：王倫 与 王时中 为同胞（CBDB 记「弟」），王时中 之父／母即 王倫 之父／母。
          source:
            id: s_dtOErnHYuX3eKdQgdPIhjD
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 262452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262452&o=json
            external_identifier: CBDB:262452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mfkbALKA619DdyfJ7MisdA
        status: active
        display_name: 王倫
        merged_into_person_id: null
    - claim:
        id: c_dA4HDl-4Xz6lmjh3ADmcM7
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_qg54QBXqwGojtESwYH4vEL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GeLqEyN8WWmn1Gm-VuXcpM
          claim_id: c_dA4HDl-4Xz6lmjh3ADmcM7
          source_id: s_A3LkW0PoZnpBx369N8yLyn
          stance: supports
          locator: CBDB：兄弟 王时中（68328）之父／母 王钻
          quotation: null
          interpretation_note: 由兄弟关系推断：王時正 与 王时中 为同胞（CBDB 记「兄」），王时中 之父／母即 王時正 之父／母。
          source:
            id: s_A3LkW0PoZnpBx369N8yLyn
            source_type: api_record
            title: 中国历代人物传记资料库：王時正（CBDB 262457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262457&o=json
            external_identifier: CBDB:262457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qg54QBXqwGojtESwYH4vEL
        status: active
        display_name: 王時正
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王钻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王钻，明人物。弘治三年進士，籍贯黃縣，曾任衛經歷。（中国历代人物传记资料库 CBDB 262449） | accepted |
| name.primary | 王钻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_snnHYhecDpk5HZ7B1gQ1jo | 王琏 | accepted |
| children | p_3SWv8LY5fsb1rb4ZwewsLo | 王时中 | accepted |
| children | p_fEfMjJL54WdS6wVP79X5vL | 王時中 | accepted |
| children | p_4sZsCTkJog26VjUtiqrNbQ | 王儒 | accepted |
| children | p_D2HurMNg1r8qf63CEHwQek | 王時 | accepted |
| children | p_XVdUz1uj9P5L1HGhQ8MZA4 | 王价 | accepted |
| children | p_jcQHbkwimczLaQjkoGTR5R | 王雍 | accepted |
| children | p_kY5RkWuKny8vWpD2iFHL8p | 王佳 | accepted |
| children | p_mfkbALKA619DdyfJ7MisdA | 王倫 | accepted |
| children | p_qg54QBXqwGojtESwYH4vEL | 王時正 | accepted |

## 外部来源

- [维基数据：王琏（Q45476476）](https://www.wikidata.org/wiki/Q45476476)
- [维基数据：王时中（Q15913916）](https://www.wikidata.org/wiki/Q15913916)
- [维基数据：王钻（Q45476540）](https://www.wikidata.org/wiki/Q45476540)
- [中国历代人物传记资料库：王佳（CBDB 262453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262453&o=json)
- [中国历代人物传记资料库：王价（CBDB 262459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262459&o=json)
- [中国历代人物传记资料库：王倫（CBDB 262452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262452&o=json)
- [中国历代人物传记资料库：王儒（CBDB 262456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262456&o=json)
- [中国历代人物传记资料库：王時（CBDB 262454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262454&o=json)
- [中国历代人物传记资料库：王時正（CBDB 262457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262457&o=json)
- [中国历代人物传记资料库：王時中（CBDB 68328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68328&o=json)
- [中国历代人物传记资料库：王雍（CBDB 262455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262455&o=json)
- [CBDB 中国历代人物传记资料库：王鑽（262449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262449&o=json)
