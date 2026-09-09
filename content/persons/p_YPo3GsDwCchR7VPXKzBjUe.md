---
schema: wang-person/v1
id: p_YPo3GsDwCchR7VPXKzBjUe
status: active
merged_into: null
display_name: 王珽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pVREFTicEFgYQfVyv7tEo2
        subject_person_id: p_YPo3GsDwCchR7VPXKzBjUe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QrhBX7hD492bFu1ayHW822
          claim_id: c_pVREFTicEFgYQfVyv7tEo2
          source_id: s_gzeL9qcZxHU4grJcderZEU
          stance: supports
          locator: CBDB:152418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152418）
          source: &a1
            id: s_gzeL9qcZxHU4grJcderZEU
            source_type: api_record
            title: 中国历代人物传记资料库：王珽（CBDB 152418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152418&o=json
            external_identifier: CBDB:152418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MFAFRmPKQiQw11QB8vGHNC
        subject_person_id: p_YPo3GsDwCchR7VPXKzBjUe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oqgtcKJnX3J8YsmF7YBqFX
          claim_id: c_MFAFRmPKQiQw11QB8vGHNC
          source_id: s_gzeL9qcZxHU4grJcderZEU
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

# 王珽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珽 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珽（CBDB 152418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152418&o=json)
