---
schema: wang-person/v1
id: p_CJwfhVhpTHWmgtuhYxLMbJ
status: active
merged_into: null
display_name: 王潤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RYuY7Y4REZR2UNSk4kcBWh
        subject_person_id: p_CJwfhVhpTHWmgtuhYxLMbJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wj35kucJeBQE6pE8kf5Wr2
          claim_id: c_RYuY7Y4REZR2UNSk4kcBWh
          source_id: s_Sm85q85m5Hzo6xnQcLvhvx
          stance: supports
          locator: CBDB:297880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297880）
          source: &a1
            id: s_Sm85q85m5Hzo6xnQcLvhvx
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 297880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297880&o=json
            external_identifier: CBDB:297880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GygxN31Q2n9jAK34Drk3Q3
        subject_person_id: p_CJwfhVhpTHWmgtuhYxLMbJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eL7MzQfAK638TGaPYACmPJ
          claim_id: c_GygxN31Q2n9jAK34Drk3Q3
          source_id: s_Sm85q85m5Hzo6xnQcLvhvx
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

# 王潤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潤 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潤（CBDB 297880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297880&o=json)
