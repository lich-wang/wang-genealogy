---
schema: wang-person/v1
id: p_N13cHvEfUQLu2AU9JvS3xk
status: active
merged_into: null
display_name: 王都
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x7CNfT3UEUkpxL1K1AZxG5
        subject_person_id: p_N13cHvEfUQLu2AU9JvS3xk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王都
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6XHy29rfr2ssfp2aJUqHFU
          claim_id: c_x7CNfT3UEUkpxL1K1AZxG5
          source_id: s_JBAaSQGQJMC4JvwoT24suL
          stance: supports
          locator: CBDB:186846
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186846）
          source: &a1
            id: s_JBAaSQGQJMC4JvwoT24suL
            source_type: api_record
            title: 中国历代人物传记资料库：王都（CBDB 186846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186846&o=json
            external_identifier: CBDB:186846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.289Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KBs25HJ1FVK6v6yFBA4dQr
        subject_person_id: p_N13cHvEfUQLu2AU9JvS3xk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 959年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jxQ8m3JodAhsQ8ZVc8NJZi
          claim_id: c_KBs25HJ1FVK6v6yFBA4dQr
          source_id: s_JBAaSQGQJMC4JvwoT24suL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_44A5gJVQwxFPxAazYACS8m
        subject_person_id: p_N13cHvEfUQLu2AU9JvS3xk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sun1gNx12H7UwWiTUbG2z4
          claim_id: c_44A5gJVQwxFPxAazYACS8m
          source_id: s_JBAaSQGQJMC4JvwoT24suL
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

# 王都

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王都 | accepted |
| death.date | 959年 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王都（CBDB 186846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186846&o=json)
