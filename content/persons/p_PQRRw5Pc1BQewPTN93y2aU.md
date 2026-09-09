---
schema: wang-person/v1
id: p_PQRRw5Pc1BQewPTN93y2aU
status: active
merged_into: null
display_name: 王利賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mkE3DKGMJB4J9oV7USGtHQ
        subject_person_id: p_PQRRw5Pc1BQewPTN93y2aU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T8k6QQvYfBzV49aGo4sGD1
          claim_id: c_mkE3DKGMJB4J9oV7USGtHQ
          source_id: s_kC9vH4B3xN64rKuM8FHG1a
          stance: supports
          locator: CBDB:331580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331580）
          source: &a1
            id: s_kC9vH4B3xN64rKuM8FHG1a
            source_type: api_record
            title: 中国历代人物传记资料库：王利賓（CBDB 331580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331580&o=json
            external_identifier: CBDB:331580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CNWkMuXGwAV3kJc6GJGuRV
        subject_person_id: p_PQRRw5Pc1BQewPTN93y2aU
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
        - id: cs_uDcTVgQSaK4ion6vT5avcc
          claim_id: c_CNWkMuXGwAV3kJc6GJGuRV
          source_id: s_kC9vH4B3xN64rKuM8FHG1a
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

# 王利賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王利賓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王利賓（CBDB 331580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331580&o=json)
