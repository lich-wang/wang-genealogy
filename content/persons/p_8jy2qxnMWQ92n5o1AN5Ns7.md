---
schema: wang-person/v1
id: p_8jy2qxnMWQ92n5o1AN5Ns7
status: active
merged_into: null
display_name: 王珉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HLM73qjm2J4Ashf34b3ajE
        subject_person_id: p_8jy2qxnMWQ92n5o1AN5Ns7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3qqCJj36wi9ztEUrfagiwh
          claim_id: c_HLM73qjm2J4Ashf34b3ajE
          source_id: s_9zZHMH37angEncNBBdAjfJ
          stance: supports
          locator: CBDB:243636
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243636）
          source: &a1
            id: s_9zZHMH37angEncNBBdAjfJ
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 243636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243636&o=json
            external_identifier: CBDB:243636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.008Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sjYRbnYTWXgMKo6qR82hiL
        subject_person_id: p_8jy2qxnMWQ92n5o1AN5Ns7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉，明人物。成化五年進士，籍贯曹縣。（中国历代人物传记资料库 CBDB 243636）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6Vwx5Gt4Nwmav-3zhQZyuW
          claim_id: c_sjYRbnYTWXgMKo6qR82hiL
          source_id: s_9zZHMH37angEncNBBdAjfJ
          stance: supports
          locator: CBDB:243636
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UjaXcDVzth-AIS73tgLg2K
        subject_person_id: p_jzBh6L6KhRH4LcPSXE67mz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8jy2qxnMWQ92n5o1AN5Ns7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-mpZZaGmtxrub0Jigjo07R
          claim_id: c_UjaXcDVzth-AIS73tgLg2K
          source_id: s_1t-UNS5322C-l8vv2Pch61
          stance: supports
          locator: CBDB：兄弟 王珣（126640）之父／母 王蘭
          quotation: null
          interpretation_note: 由兄弟关系推断：王珉 与 王珣 为同胞（CBDB 记「兄」），王珣 之父／母即 王珉 之父／母。
          source:
            id: s_1t-UNS5322C-l8vv2Pch61
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 243636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243636&o=json
            external_identifier: CBDB:243636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jzBh6L6KhRH4LcPSXE67mz
        status: active
        display_name: 王蘭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6FfXeyMlRe6uiefcRSkLCI
        subject_person_id: p_8jy2qxnMWQ92n5o1AN5Ns7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_skE22yKfDfbLErvfJ74UoM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__ZXfh2o-8G7I3BN1bYNprM
          claim_id: c_6FfXeyMlRe6uiefcRSkLCI
          source_id: s_1t-UNS5322C-l8vv2Pch61
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126640 王珣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1t-UNS5322C-l8vv2Pch61
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 243636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243636&o=json
            external_identifier: CBDB:243636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_skE22yKfDfbLErvfJ74UoM
        status: active
        display_name: 王珣
        merged_into_person_id: null
---

# 王珉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珉 | accepted |
| bio.summary | 王珉，明人物。成化五年進士，籍贯曹縣。（中国历代人物传记资料库 CBDB 243636） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jzBh6L6KhRH4LcPSXE67mz | 王蘭 | accepted |
| other | p_skE22yKfDfbLErvfJ74UoM | 王珣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珉（CBDB 243636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243636&o=json)
