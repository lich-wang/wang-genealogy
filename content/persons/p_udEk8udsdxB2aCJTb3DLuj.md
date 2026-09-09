---
schema: wang-person/v1
id: p_udEk8udsdxB2aCJTb3DLuj
status: active
merged_into: null
display_name: 王夢齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j3GBr2KwZh8Kwn4ubF2BV6
        subject_person_id: p_udEk8udsdxB2aCJTb3DLuj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sD3KVM7AZkLUYBMkK9SAuq
          claim_id: c_j3GBr2KwZh8Kwn4ubF2BV6
          source_id: s_9maDJLgVxTNPR8Lfrdz2Yg
          stance: supports
          locator: CBDB:636879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636879）
          source: &a1
            id: s_9maDJLgVxTNPR8Lfrdz2Yg
            source_type: api_record
            title: 中国历代人物传记资料库：王夢齢（CBDB 636879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636879&o=json
            external_identifier: CBDB:636879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.274Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JCHuQAbSRQ3wHv5LTkvh1s
        subject_person_id: p_udEk8udsdxB2aCJTb3DLuj
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
        - id: cs_U9NgTm9JKQZVEqE6NYQLjd
          claim_id: c_JCHuQAbSRQ3wHv5LTkvh1s
          source_id: s_9maDJLgVxTNPR8Lfrdz2Yg
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

# 王夢齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢齢 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢齢（CBDB 636879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636879&o=json)
