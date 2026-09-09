---
schema: wang-person/v1
id: p_NXpxUorpYgY9svtu6n4MaF
status: active
merged_into: null
display_name: 王旭載
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E2k7G1Ry72ELVXqdjN3A6V
        subject_person_id: p_NXpxUorpYgY9svtu6n4MaF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭載
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L7VNpFjHk8TpWoTKWxNggJ
          claim_id: c_E2k7G1Ry72ELVXqdjN3A6V
          source_id: s_eiZ7DS86Fq8U9yZ4LYwB3U
          stance: supports
          locator: CBDB:638351
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638351）
          source: &a1
            id: s_eiZ7DS86Fq8U9yZ4LYwB3U
            source_type: api_record
            title: 中国历代人物传记资料库：王旭載（CBDB 638351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638351&o=json
            external_identifier: CBDB:638351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZGBJ6DT4t4o6mZ9M94Q1w6
        subject_person_id: p_NXpxUorpYgY9svtu6n4MaF
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
        - id: cs_M7A6nHFzFkvdAdRpuwUJ72
          claim_id: c_ZGBJ6DT4t4o6mZ9M94Q1w6
          source_id: s_eiZ7DS86Fq8U9yZ4LYwB3U
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

# 王旭載

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旭載 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王旭載（CBDB 638351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638351&o=json)
