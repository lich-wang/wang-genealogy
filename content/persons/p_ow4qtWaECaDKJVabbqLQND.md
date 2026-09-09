---
schema: wang-person/v1
id: p_ow4qtWaECaDKJVabbqLQND
status: active
merged_into: null
display_name: 王斗樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CN3wP7t48mUgXp7WCs584D
        subject_person_id: p_ow4qtWaECaDKJVabbqLQND
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斗樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vS7jNJ3JAjNCq8DHd23gR5
          claim_id: c_CN3wP7t48mUgXp7WCs584D
          source_id: s_LMN4fTgetnsURdbGx5magr
          stance: supports
          locator: CBDB:456911
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456911）
          source: &a1
            id: s_LMN4fTgetnsURdbGx5magr
            source_type: api_record
            title: 中国历代人物传记资料库：王斗樞（CBDB 456911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456911&o=json
            external_identifier: CBDB:456911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qof7wPaGefiCMY8N31pCuf
        subject_person_id: p_ow4qtWaECaDKJVabbqLQND
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Djh4Tfen6RF26WCw6edH2h
          claim_id: c_Qof7wPaGefiCMY8N31pCuf
          source_id: s_LMN4fTgetnsURdbGx5magr
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

# 王斗樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斗樞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王斗樞（CBDB 456911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456911&o=json)
