---
schema: wang-person/v1
id: p_viC5tkNXK7WbLaMQLQsEaA
status: active
merged_into: null
display_name: 王兆鯤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mP8jUU98nqYTeFGPov8DPV
        subject_person_id: p_viC5tkNXK7WbLaMQLQsEaA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆鯤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qfvqonSd24bt4cUBk91vKE
          claim_id: c_mP8jUU98nqYTeFGPov8DPV
          source_id: s_wFR6CVtP1qzqPF8P9ACspR
          stance: supports
          locator: CBDB:636224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636224）
          source: &a1
            id: s_wFR6CVtP1qzqPF8P9ACspR
            source_type: api_record
            title: 中国历代人物传记资料库：王兆鯤（CBDB 636224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636224&o=json
            external_identifier: CBDB:636224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HzoZd1yFE45WSXcxH4112R
        subject_person_id: p_viC5tkNXK7WbLaMQLQsEaA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆鯤，清人物。籍贯蘇州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636224）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nBANIJ7VRxfF_y1XqYEyBH
          claim_id: c_HzoZd1yFE45WSXcxH4112R
          source_id: s_wFR6CVtP1qzqPF8P9ACspR
          stance: supports
          locator: CBDB:636224
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王兆鯤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆鯤 | accepted |
| bio.summary | 王兆鯤，清人物。籍贯蘇州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636224） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆鯤（CBDB 636224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636224&o=json)
