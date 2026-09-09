---
schema: wang-person/v1
id: p_yUh5Ys3GsJr5X9EvLigP9m
status: active
merged_into: null
display_name: 王璧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KAPFk7Qwyj944vikcq5ND1
        subject_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HMN1GJ3zQD6tZfHQtp2uW7
          claim_id: c_KAPFk7Qwyj944vikcq5ND1
          source_id: s_b1eFbYzJkT9aHECg1r1H9A
          stance: supports
          locator: CBDB:208145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208145）
          source: &a1
            id: s_b1eFbYzJkT9aHECg1r1H9A
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 208145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208145&o=json
            external_identifier: CBDB:208145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_caxWjDwJnFU5tyYg1nYQoq
        subject_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1419年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvFt5oz7bccTH2hR2jzMbv
          claim_id: c_caxWjDwJnFU5tyYg1nYQoq
          source_id: s_b1eFbYzJkT9aHECg1r1H9A
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XD3Z8XLjRoECX7qBPf1MxE
        subject_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
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
        - id: cs_z6JekBrraArpt1NxSkFyeK
          claim_id: c_XD3Z8XLjRoECX7qBPf1MxE
          source_id: s_b1eFbYzJkT9aHECg1r1H9A
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

# 王璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璧 | accepted |
| birth.date | 1419年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璧（CBDB 208145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208145&o=json)
