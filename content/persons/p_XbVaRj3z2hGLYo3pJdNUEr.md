---
schema: wang-person/v1
id: p_XbVaRj3z2hGLYo3pJdNUEr
status: active
merged_into: null
display_name: 王克恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HQFJHevd7zaqm2dXqeBvKU
        subject_person_id: p_XbVaRj3z2hGLYo3pJdNUEr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hAJpUMNBMwNoRA8eXN5ESt
          claim_id: c_HQFJHevd7zaqm2dXqeBvKU
          source_id: s_cPYd8Td1WHkswVwFP23PLG
          stance: supports
          locator: CBDB:97808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97808）
          source: &a1
            id: s_cPYd8Td1WHkswVwFP23PLG
            source_type: api_record
            title: 中国历代人物传记资料库：王克恭（CBDB 97808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97808&o=json
            external_identifier: CBDB:97808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.172Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_njQsyL9ed39Qi9uYbJ5qYM
        subject_person_id: p_XbVaRj3z2hGLYo3pJdNUEr
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
        - id: cs_YPfZYS6hhv5u9EH5tk1ddA
          claim_id: c_njQsyL9ed39Qi9uYbJ5qYM
          source_id: s_cPYd8Td1WHkswVwFP23PLG
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

# 王克恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克恭 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克恭（CBDB 97808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97808&o=json)
