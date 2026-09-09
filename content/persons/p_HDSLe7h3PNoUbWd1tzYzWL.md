---
schema: wang-person/v1
id: p_HDSLe7h3PNoUbWd1tzYzWL
status: active
merged_into: null
display_name: 王劭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qi71zm1BiF3U3F6TSoDzZZ
        subject_person_id: p_HDSLe7h3PNoUbWd1tzYzWL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v9s95mCgibYCrUqWAp1Low
          claim_id: c_qi71zm1BiF3U3F6TSoDzZZ
          source_id: s_sP7PSDFQYZBoNG6a2EC8rU
          stance: supports
          locator: CBDB:531294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（531294）
          source: &a1
            id: s_sP7PSDFQYZBoNG6a2EC8rU
            source_type: api_record
            title: 中国历代人物传记资料库：王劭（CBDB 531294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531294&o=json
            external_identifier: CBDB:531294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3c9kaaPbCTDheXszk3XEkU
        subject_person_id: p_HDSLe7h3PNoUbWd1tzYzWL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pv2XK6WNnmCBtkXzuWhNMG
          claim_id: c_3c9kaaPbCTDheXszk3XEkU
          source_id: s_sP7PSDFQYZBoNG6a2EC8rU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王劭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王劭 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王劭（CBDB 531294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531294&o=json)
