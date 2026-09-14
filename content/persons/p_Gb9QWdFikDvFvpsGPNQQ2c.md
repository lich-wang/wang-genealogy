---
schema: wang-person/v1
id: p_Gb9QWdFikDvFvpsGPNQQ2c
status: active
merged_into: null
display_name: 王錦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gkz3BvzpSmtBvkTBHM95zs
        subject_person_id: p_Gb9QWdFikDvFvpsGPNQQ2c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rmg7v7hyCqTFaVRanqGu5R
          claim_id: c_Gkz3BvzpSmtBvkTBHM95zs
          source_id: s_49vHPLnd8hqGzNGqyPh5hY
          stance: supports
          locator: CBDB:276567
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276567）
          source: &a1
            id: s_49vHPLnd8hqGzNGqyPh5hY
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 276567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276567&o=json
            external_identifier: CBDB:276567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_35iKNrrvocB3zYnTkKbk9x
        subject_person_id: p_Gb9QWdFikDvFvpsGPNQQ2c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦，明人物。正德六年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 276567）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YgDtv2HBm8OAqDmJVIIEnw
          claim_id: c_35iKNrrvocB3zYnTkKbk9x
          source_id: s_49vHPLnd8hqGzNGqyPh5hY
          stance: supports
          locator: CBDB:276567
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dvbXFkvWucMSzdyzzV7QIG
        subject_person_id: p_39fzFnGh8FGp4S6Ku2uSE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gb9QWdFikDvFvpsGPNQQ2c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OoAsgB5RdUWKHBIu5hprQh
          claim_id: c_dvbXFkvWucMSzdyzzV7QIG
          source_id: s_-nQfuioO7j7g0ThKPZOMBw
          stance: supports
          locator: CBDB：兄弟 王鑾（126900）之父／母 王潣
          quotation: null
          interpretation_note: 由兄弟关系推断：王錦 与 王鑾 为同胞（CBDB 记「兄」），王鑾 之父／母即 王錦 之父／母。
          source:
            id: s_-nQfuioO7j7g0ThKPZOMBw
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 276567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276567&o=json
            external_identifier: CBDB:276567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_39fzFnGh8FGp4S6Ku2uSE6
        status: active
        display_name: 王潣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WY6PGgiaW5elYahpmph9u1
        subject_person_id: p_Gb9QWdFikDvFvpsGPNQQ2c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HpJus1mFO55TvYxUnQkvE6
          claim_id: c_WY6PGgiaW5elYahpmph9u1
          source_id: s_-nQfuioO7j7g0ThKPZOMBw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126900 王鑾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-nQfuioO7j7g0ThKPZOMBw
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 276567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276567&o=json
            external_identifier: CBDB:276567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f8i9p9JzFPTMv3CWRTDLAz
        status: active
        display_name: 王鑾
        merged_into_person_id: null
---

# 王錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦 | accepted |
| bio.summary | 王錦，明人物。正德六年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 276567） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_39fzFnGh8FGp4S6Ku2uSE6 | 王潣 | accepted |
| other | p_f8i9p9JzFPTMv3CWRTDLAz | 王鑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錦（CBDB 276567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276567&o=json)
