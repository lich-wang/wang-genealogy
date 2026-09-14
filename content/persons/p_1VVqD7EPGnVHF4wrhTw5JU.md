---
schema: wang-person/v1
id: p_1VVqD7EPGnVHF4wrhTw5JU
status: active
merged_into: null
display_name: 王伯載
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZkGoDKR53S7CNvz5tVwZ1M
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯載
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jo485PAqny9wFfQDQtkRHg
          claim_id: c_ZkGoDKR53S7CNvz5tVwZ1M
          source_id: s_pDsvQAaPubTkoAZNWdrF1o
          stance: supports
          locator: CBDB:286128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286128）
          source: &a1
            id: s_pDsvQAaPubTkoAZNWdrF1o
            source_type: api_record
            title: 中国历代人物传记资料库：王伯載（CBDB 286128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286128&o=json
            external_identifier: CBDB:286128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UzX7PFDTzxcydFvg9s5Ha7
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯載，明人物。正德十六年進士，籍贯石首。（中国历代人物传记资料库 CBDB 286128）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kljUoovwoPbZjR5QRvS29i
          claim_id: c_UzX7PFDTzxcydFvg9s5Ha7
          source_id: s_pDsvQAaPubTkoAZNWdrF1o
          stance: supports
          locator: CBDB:286128
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nsEovVXQV7cyKtjJ3p-lYw
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rWe1cVok9sm3wfCfr2P9SZ
          claim_id: c_nsEovVXQV7cyKtjJ3p-lYw
          source_id: s_pDsvQAaPubTkoAZNWdrF1o
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百八十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AEPDTFs3e2Ci1GpeDM9fLo
        status: active
        display_name: 王芳
        merged_into_person_id: null
    - claim:
        id: c_VMGzzIcAqBGEGSJaQfT5Wg
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6wq95j1YSNJ7cDTgyZdvCa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i1hhI1EcH6SkZqE3TtPAjO
          claim_id: c_VMGzzIcAqBGEGSJaQfT5Wg
          source_id: s_TR5BjJmPcSQs7e9MTAJrr-
          stance: supports
          locator: CBDB：兄弟 王芳（202288）之父／母 王伯載
          quotation: null
          interpretation_note: 由兄弟关系推断：王美 与 王芳 为同胞（CBDB 记「兄」），王芳 之父／母即 王美 之父／母。
          source:
            id: s_TR5BjJmPcSQs7e9MTAJrr-
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 286138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286138&o=json
            external_identifier: CBDB:286138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6wq95j1YSNJ7cDTgyZdvCa
        status: active
        display_name: 王美
        merged_into_person_id: null
    - claim:
        id: c_KAnrSNlth_fOgLXWrR8o_w
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FW21k14xDqFca8g7ebjbJV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7ym1Imv75oL81FNIhF5ofi
          claim_id: c_KAnrSNlth_fOgLXWrR8o_w
          source_id: s_iXyxRG3Hj2J-5vK4VaOgDz
          stance: supports
          locator: CBDB：兄弟 王芳（202288）之父／母 王伯載
          quotation: null
          interpretation_note: 由兄弟关系推断：王艾 与 王芳 为同胞（CBDB 记「兄」），王芳 之父／母即 王艾 之父／母。
          source:
            id: s_iXyxRG3Hj2J-5vK4VaOgDz
            source_type: api_record
            title: 中国历代人物传记资料库：王艾（CBDB 286136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286136&o=json
            external_identifier: CBDB:286136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FW21k14xDqFca8g7ebjbJV
        status: active
        display_name: 王艾
        merged_into_person_id: null
    - claim:
        id: c_oqMpCf_Ccecd9lPcyzSRT4
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q4qRU6HptEz88Z1o2riodA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_41HvCHtsZdgwXGRgiY7lqE
          claim_id: c_oqMpCf_Ccecd9lPcyzSRT4
          source_id: s_4mh9LC6-Nx2e4x-AgSXpS3
          stance: supports
          locator: CBDB：兄弟 王芳（202288）之父／母 王伯載
          quotation: null
          interpretation_note: 由兄弟关系推断：王英 与 王芳 为同胞（CBDB 记「兄」），王芳 之父／母即 王英 之父／母。
          source:
            id: s_4mh9LC6-Nx2e4x-AgSXpS3
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 286135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286135&o=json
            external_identifier: CBDB:286135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q4qRU6HptEz88Z1o2riodA
        status: active
        display_name: 王英
        merged_into_person_id: null
    - claim:
        id: c_25F2eS_PjjBndZ94CQMdsQ
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c3dL8Ne1U9R7PYPiEt63o9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N2xCE-eMJaAha8Kcoqf_Kc
          claim_id: c_25F2eS_PjjBndZ94CQMdsQ
          source_id: s_uW4LVXaMYyPJpwgzNNXpMN
          stance: supports
          locator: CBDB：兄弟 王芳（202288）之父／母 王伯載
          quotation: null
          interpretation_note: 由兄弟关系推断：王遵 与 王芳 为同胞（CBDB 记「兄」），王芳 之父／母即 王遵 之父／母。
          source:
            id: s_uW4LVXaMYyPJpwgzNNXpMN
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 286137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286137&o=json
            external_identifier: CBDB:286137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c3dL8Ne1U9R7PYPiEt63o9
        status: active
        display_name: 王遵
        merged_into_person_id: null
    - claim:
        id: c_gt040aw-pJd6Pky4heIC0q
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sfeJ5RgQcGsyj1UUHuuZQZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XGNfXEWP3a14Ov_MpLU6vK
          claim_id: c_gt040aw-pJd6Pky4heIC0q
          source_id: s_yBtf9z9OYCQO3oI0HpbT20
          stance: supports
          locator: CBDB：兄弟 王芳（202288）之父／母 王伯載
          quotation: null
          interpretation_note: 由兄弟关系推断：王萱 与 王芳 为同胞（CBDB 记「弟」），王芳 之父／母即 王萱 之父／母。
          source:
            id: s_yBtf9z9OYCQO3oI0HpbT20
            source_type: api_record
            title: 中国历代人物传记资料库：王萱（CBDB 286134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286134&o=json
            external_identifier: CBDB:286134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sfeJ5RgQcGsyj1UUHuuZQZ
        status: active
        display_name: 王萱
        merged_into_person_id: null
    - claim:
        id: c_nQlFwLWRh-ON6jO5UGxn1u
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xHg2A6nupwgnkXwUBjo6ef
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nGldr6fGbe98b2mMfB-6eQ
          claim_id: c_nQlFwLWRh-ON6jO5UGxn1u
          source_id: s_j3XAl0msjRL8M3UuY69BqZ
          stance: supports
          locator: CBDB：兄弟 王芳（202288）之父／母 王伯載
          quotation: null
          interpretation_note: 由兄弟关系推断：王苾 与 王芳 为同胞（CBDB 记「弟」），王芳 之父／母即 王苾 之父／母。
          source:
            id: s_j3XAl0msjRL8M3UuY69BqZ
            source_type: api_record
            title: 中国历代人物传记资料库：王苾（CBDB 286133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286133&o=json
            external_identifier: CBDB:286133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xHg2A6nupwgnkXwUBjo6ef
        status: active
        display_name: 王苾
        merged_into_person_id: null
    - claim:
        id: c_SBx_XNVjFirEKykR_t2yao
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zNVm442JKJscXFnvcQ8A7v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ufC3-EWzztsN6VOZgr2z7
          claim_id: c_SBx_XNVjFirEKykR_t2yao
          source_id: s_BDW29Nw4iLus4LoPo9gAfY
          stance: supports
          locator: CBDB：兄弟 王芳（202288）之父／母 王伯載
          quotation: null
          interpretation_note: 由兄弟关系推断：王萃 与 王芳 为同胞（CBDB 记「弟」），王芳 之父／母即 王萃 之父／母。
          source:
            id: s_BDW29Nw4iLus4LoPo9gAfY
            source_type: api_record
            title: 中国历代人物传记资料库：王萃（CBDB 286132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286132&o=json
            external_identifier: CBDB:286132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zNVm442JKJscXFnvcQ8A7v
        status: active
        display_name: 王萃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伯載

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯載 | accepted |
| bio.summary | 王伯載，明人物。正德十六年進士，籍贯石首。（中国历代人物传记资料库 CBDB 286128） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AEPDTFs3e2Ci1GpeDM9fLo | 王芳 | accepted |
| children | p_6wq95j1YSNJ7cDTgyZdvCa | 王美 | accepted |
| children | p_FW21k14xDqFca8g7ebjbJV | 王艾 | accepted |
| children | p_Q4qRU6HptEz88Z1o2riodA | 王英 | accepted |
| children | p_c3dL8Ne1U9R7PYPiEt63o9 | 王遵 | accepted |
| children | p_sfeJ5RgQcGsyj1UUHuuZQZ | 王萱 | accepted |
| children | p_xHg2A6nupwgnkXwUBjo6ef | 王苾 | accepted |
| children | p_zNVm442JKJscXFnvcQ8A7v | 王萃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王艾（CBDB 286136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286136&o=json)
- [中国历代人物传记资料库：王苾（CBDB 286133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286133&o=json)
- [中国历代人物传记资料库：王伯載（CBDB 286128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286128&o=json)
- [中国历代人物传记资料库：王萃（CBDB 286132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286132&o=json)
- [中国历代人物传记资料库：王美（CBDB 286138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286138&o=json)
- [中国历代人物传记资料库：王萱（CBDB 286134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286134&o=json)
- [中国历代人物传记资料库：王英（CBDB 286135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286135&o=json)
- [中国历代人物传记资料库：王遵（CBDB 286137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286137&o=json)
