---
schema: wang-person/v1
id: p_uAAyHX7RHTcurCnZEtd77T
status: active
merged_into: null
display_name: 王麒
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ea5fboKGdyCDfBjDpALyuD
        subject_person_id: p_uAAyHX7RHTcurCnZEtd77T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yL8TJJ9tBo1Vwh9qP9vwFF
          claim_id: c_ea5fboKGdyCDfBjDpALyuD
          source_id: s_ub5aLpvzEMBT7H8FNMbH5e
          stance: supports
          locator: CBDB:319424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（319424）
          source: &a1
            id: s_ub5aLpvzEMBT7H8FNMbH5e
            source_type: api_record
            title: 中国历代人物传记资料库：王麒（CBDB 319424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319424&o=json
            external_identifier: CBDB:319424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.039Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LAegUAYDHkQKZP62QqUPZw
        subject_person_id: p_uAAyHX7RHTcurCnZEtd77T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麒，明人物。嘉靖三十五年進士，籍贯安福，曾任知州。（中国历代人物传记资料库 CBDB 319424）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LymI2cM0v1dcAKbVWiiUuq
          claim_id: c_LAegUAYDHkQKZP62QqUPZw
          source_id: s_ub5aLpvzEMBT7H8FNMbH5e
          stance: supports
          locator: CBDB:319424
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_imbc8wXY-Acdo7ZlL448Zw
        subject_person_id: p_uAAyHX7RHTcurCnZEtd77T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RFP8uQh7mfvwWjCYzUDpGk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZmPOByn0J3Rwwaby5UkgTS
          claim_id: c_imbc8wXY-Acdo7ZlL448Zw
          source_id: s_ub5aLpvzEMBT7H8FNMbH5e
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第二甲第三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RFP8uQh7mfvwWjCYzUDpGk
        status: active
        display_name: 王凝
        merged_into_person_id: null
    - claim:
        id: c_X8xi2n8iKy1U-oSUXlzZhX
        subject_person_id: p_uAAyHX7RHTcurCnZEtd77T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7o2hsFUByJLeB7yFL7mBo8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mka_a77ZwbqRBWQj7an_57
          claim_id: c_X8xi2n8iKy1U-oSUXlzZhX
          source_id: s_NjgS6jWlofi64MwF2HeeNj
          stance: supports
          locator: CBDB：兄弟 王凝（126821）之父／母 王麒
          quotation: null
          interpretation_note: 由兄弟关系推断：王凖 与 王凝 为同胞（CBDB 记「兄」），王凝 之父／母即 王凖 之父／母。
          source:
            id: s_NjgS6jWlofi64MwF2HeeNj
            source_type: api_record
            title: 中国历代人物传记资料库：王凖（CBDB 319430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319430&o=json
            external_identifier: CBDB:319430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7o2hsFUByJLeB7yFL7mBo8
        status: active
        display_name: 王凖
        merged_into_person_id: null
    - claim:
        id: c_JpCwYlMy5YR87gPNVwAgtg
        subject_person_id: p_uAAyHX7RHTcurCnZEtd77T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LrYcPKrCHA7nBHYRZ5ruHc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8JUXfHIgKkqsgZFCdPLC1U
          claim_id: c_JpCwYlMy5YR87gPNVwAgtg
          source_id: s_di8pzZj3Ctwk-prg4AK4hp
          stance: supports
          locator: CBDB：兄弟 王凝（126821）之父／母 王麒
          quotation: null
          interpretation_note: 由兄弟关系推断：王兆 与 王凝 为同胞（CBDB 记「兄」），王凝 之父／母即 王兆 之父／母。
          source:
            id: s_di8pzZj3Ctwk-prg4AK4hp
            source_type: api_record
            title: 中国历代人物传记资料库：王兆（CBDB 319428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319428&o=json
            external_identifier: CBDB:319428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LrYcPKrCHA7nBHYRZ5ruHc
        status: active
        display_name: 王兆
        merged_into_person_id: null
    - claim:
        id: c_lQBwTZT76yxPY8dw6gPNJJ
        subject_person_id: p_uAAyHX7RHTcurCnZEtd77T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a2omTAnL97ywTwSJ4244fS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3M9JpwLiiR6OpKG7JvPl4Z
          claim_id: c_lQBwTZT76yxPY8dw6gPNJJ
          source_id: s_U02EcSmBwRRPT_mk63EyhS
          stance: supports
          locator: CBDB：兄弟 王凝（126821）之父／母 王麒
          quotation: null
          interpretation_note: 由兄弟关系推断：王冲 与 王凝 为同胞（CBDB 记「弟」），王凝 之父／母即 王冲 之父／母。
          source:
            id: s_U02EcSmBwRRPT_mk63EyhS
            source_type: api_record
            title: 中国历代人物传记资料库：王冲（CBDB 319427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319427&o=json
            external_identifier: CBDB:319427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_a2omTAnL97ywTwSJ4244fS
        status: active
        display_name: 王冲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王麒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麒 | accepted |
| bio.summary | 王麒，明人物。嘉靖三十五年進士，籍贯安福，曾任知州。（中国历代人物传记资料库 CBDB 319424） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RFP8uQh7mfvwWjCYzUDpGk | 王凝 | accepted |
| children | p_7o2hsFUByJLeB7yFL7mBo8 | 王凖 | accepted |
| children | p_LrYcPKrCHA7nBHYRZ5ruHc | 王兆 | accepted |
| children | p_a2omTAnL97ywTwSJ4244fS | 王冲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冲（CBDB 319427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319427&o=json)
- [中国历代人物传记资料库：王麒（CBDB 319424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319424&o=json)
- [中国历代人物传记资料库：王兆（CBDB 319428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319428&o=json)
- [中国历代人物传记资料库：王凖（CBDB 319430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319430&o=json)
