---
schema: wang-person/v1
id: p_qqKuRhJKGsGxWYB2WpZTtc
status: active
merged_into: null
display_name: 王道隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tjMDRodXjTQi8BdHC72Ehf
        subject_person_id: p_qqKuRhJKGsGxWYB2WpZTtc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SKVoEsMjujswhnaf3VhhnW
          claim_id: c_tjMDRodXjTQi8BdHC72Ehf
          source_id: s_oQojBBKWPncFZu2uXWLKCz
          stance: supports
          locator: CBDB:474739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474739）
          source: &a1
            id: s_oQojBBKWPncFZu2uXWLKCz
            source_type: api_record
            title: 中国历代人物传记资料库：王道隆（CBDB 474739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474739&o=json
            external_identifier: CBDB:474739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S9ro4WcHYpq54XmNzUrj5q
        subject_person_id: p_qqKuRhJKGsGxWYB2WpZTtc
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
        - id: cs_WpwQZD1iX4qGdLre1Cgcv7
          claim_id: c_S9ro4WcHYpq54XmNzUrj5q
          source_id: s_oQojBBKWPncFZu2uXWLKCz
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

# 王道隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道隆 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道隆（CBDB 474739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474739&o=json)
