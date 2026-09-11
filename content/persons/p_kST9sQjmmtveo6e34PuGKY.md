---
schema: wang-person/v1
id: p_kST9sQjmmtveo6e34PuGKY
status: active
merged_into: null
display_name: 王世榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9iKQpjryK73uEXjz7vZQpk
        subject_person_id: p_kST9sQjmmtveo6e34PuGKY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lvoz7KJ3Kf7HVkVaad42t9
          claim_id: c_9iKQpjryK73uEXjz7vZQpk
          source_id: s_yrUAbjcfvH5KniYJX96sDv
          stance: supports
          locator: CBDB:486704
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（486704）
          source: &a1
            id: s_yrUAbjcfvH5KniYJX96sDv
            source_type: api_record
            title: 中国历代人物传记资料库：王世榮（CBDB 486704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486704&o=json
            external_identifier: CBDB:486704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o7Fw4bJK5mxJgnSZQAFbR4
        subject_person_id: p_kST9sQjmmtveo6e34PuGKY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世榮，明人物。曾任參將、副將軍。（中国历代人物传记资料库 CBDB 486704）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tscf8t00OQ7LM7fVH-1DxV
          claim_id: c_o7Fw4bJK5mxJgnSZQAFbR4
          source_id: s_yrUAbjcfvH5KniYJX96sDv
          stance: supports
          locator: CBDB:486704
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

# 王世榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世榮 | accepted |
| bio.summary | 王世榮，明人物。曾任參將、副將軍。（中国历代人物传记资料库 CBDB 486704） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世榮（CBDB 486704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486704&o=json)
