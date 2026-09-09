---
schema: wang-person/v1
id: p_qPK7VdnLr9Q3iLCL8AkqgC
status: active
merged_into: null
display_name: 王大郎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LFWLwg5Cxmi97dduJPHY3N
        subject_person_id: p_qPK7VdnLr9Q3iLCL8AkqgC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大郎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CHST9hQEEq987rveNr1YyT
          claim_id: c_LFWLwg5Cxmi97dduJPHY3N
          source_id: s_W6W8DHVH1yCkJzNJJ9aQRU
          stance: supports
          locator: CBDB:698564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698564）
          source: &a1
            id: s_W6W8DHVH1yCkJzNJJ9aQRU
            source_type: api_record
            title: 中国历代人物传记资料库：王大郎（CBDB 698564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698564&o=json
            external_identifier: CBDB:698564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.567Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8pdAu14khUTvdzJscWdVX2
        subject_person_id: p_qPK7VdnLr9Q3iLCL8AkqgC
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
        - id: cs_DRSWsK1EDqY8wm3Y5ULYnS
          claim_id: c_8pdAu14khUTvdzJscWdVX2
          source_id: s_W6W8DHVH1yCkJzNJJ9aQRU
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

# 王大郎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大郎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大郎（CBDB 698564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698564&o=json)
