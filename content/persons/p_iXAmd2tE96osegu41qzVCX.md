---
schema: wang-person/v1
id: p_iXAmd2tE96osegu41qzVCX
status: active
merged_into: null
display_name: 王辨之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c4ZSHGnxAQCY4NQruBsKr4
        subject_person_id: p_iXAmd2tE96osegu41qzVCX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辨之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v8QuQJ6Sot2fkKWietnNjK
          claim_id: c_c4ZSHGnxAQCY4NQruBsKr4
          source_id: s_5K2RXgzfaMu6FE6T6H8BW4
          stance: supports
          locator: CBDB:537314
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（537314）
          source: &a1
            id: s_5K2RXgzfaMu6FE6T6H8BW4
            source_type: api_record
            title: 中国历代人物传记资料库：王辨之（CBDB 537314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537314&o=json
            external_identifier: CBDB:537314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.413Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ZWno64YiWP8kL5Tv75RnX
        subject_person_id: p_iXAmd2tE96osegu41qzVCX
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
        - id: cs_BfKkkQbgcj6PF27q5Ca6GH
          claim_id: c_8ZWno64YiWP8kL5Tv75RnX
          source_id: s_5K2RXgzfaMu6FE6T6H8BW4
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

# 王辨之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王辨之 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王辨之（CBDB 537314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537314&o=json)
