---
schema: wang-person/v1
id: p_YfWCerwWE4CTy6sBNL23KD
status: active
merged_into: null
display_name: 王珝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gW9VXA9z6YhKFMgMJqpnsL
        subject_person_id: p_YfWCerwWE4CTy6sBNL23KD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w1WWpbErcaRHBiWfJZeBU7
          claim_id: c_gW9VXA9z6YhKFMgMJqpnsL
          source_id: s_mVDQ2zD363QzKr8d6jFE95
          stance: supports
          locator: CBDB:126641
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126641）
          source: &a1
            id: s_mVDQ2zD363QzKr8d6jFE95
            source_type: api_record
            title: 中国历代人物传记资料库：王珝（CBDB 126641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126641&o=json
            external_identifier: CBDB:126641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.090Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_44fWGU8sp1CgEMLWw9RwFJ
        subject_person_id: p_YfWCerwWE4CTy6sBNL23KD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珝，明人物。籍贯永平府，曾任巡撫。（中国历代人物传记资料库 CBDB 126641）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VXSGguSbyNMTD_vWoPCkLE
          claim_id: c_44fWGU8sp1CgEMLWw9RwFJ
          source_id: s_mVDQ2zD363QzKr8d6jFE95
          stance: supports
          locator: CBDB:126641
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

# 王珝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珝 | accepted |
| bio.summary | 王珝，明人物。籍贯永平府，曾任巡撫。（中国历代人物传记资料库 CBDB 126641） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珝（CBDB 126641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126641&o=json)
