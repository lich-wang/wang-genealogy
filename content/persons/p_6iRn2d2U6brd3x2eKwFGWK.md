---
schema: wang-person/v1
id: p_6iRn2d2U6brd3x2eKwFGWK
status: active
merged_into: null
display_name: 王履正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ixjNgp6WdyP3omk3nMG2fX
        subject_person_id: p_6iRn2d2U6brd3x2eKwFGWK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W8jGcCdnFAWypNJAfzNEXv
          claim_id: c_ixjNgp6WdyP3omk3nMG2fX
          source_id: s_F72hsfdkPEmwTUeKt45w5Y
          stance: supports
          locator: CBDB:543875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（543875）
          source: &a1
            id: s_F72hsfdkPEmwTUeKt45w5Y
            source_type: api_record
            title: 中国历代人物传记资料库：王履正（CBDB 543875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543875&o=json
            external_identifier: CBDB:543875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fuEeUVQz3gAY6r8rjtnoSt
        subject_person_id: p_6iRn2d2U6brd3x2eKwFGWK
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
        - id: cs_7QCpcApMP5G1ddvhoL6LBn
          claim_id: c_fuEeUVQz3gAY6r8rjtnoSt
          source_id: s_F72hsfdkPEmwTUeKt45w5Y
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

# 王履正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履正 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履正（CBDB 543875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543875&o=json)
