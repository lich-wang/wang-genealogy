---
schema: wang-person/v1
id: p_1iXYH9rLF83DNfU7T3VWBN
status: active
merged_into: null
display_name: 王瀹初
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i8o53JCie3Gn9Ftcz38Lh6
        subject_person_id: p_1iXYH9rLF83DNfU7T3VWBN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀹初
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kdHG7AnMCxtK7f7b6Wb3Rd
          claim_id: c_i8o53JCie3Gn9Ftcz38Lh6
          source_id: s_DdxHPH8zygcEjqhPQKLu1D
          stance: supports
          locator: CBDB:527384
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527384）
          source: &a1
            id: s_DdxHPH8zygcEjqhPQKLu1D
            source_type: api_record
            title: 中国历代人物传记资料库：王瀹初（CBDB 527384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527384&o=json
            external_identifier: CBDB:527384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qVBac4XvMCi8m7APMEVCqC
        subject_person_id: p_1iXYH9rLF83DNfU7T3VWBN
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
        - id: cs_7187hQrJJkzsc6JoV3puwF
          claim_id: c_qVBac4XvMCi8m7APMEVCqC
          source_id: s_DdxHPH8zygcEjqhPQKLu1D
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

# 王瀹初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀹初 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瀹初（CBDB 527384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527384&o=json)
