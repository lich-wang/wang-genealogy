---
schema: wang-person/v1
id: p_H2CHgs6YnYK2cDpM8JwaGU
status: active
merged_into: null
display_name: 王扶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E7AGphb7ojifQCb5pC6fCf
        subject_person_id: p_H2CHgs6YnYK2cDpM8JwaGU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王扶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GeXp4xjyCnZwKD5LBmXt1s
          claim_id: c_E7AGphb7ojifQCb5pC6fCf
          source_id: s_y7ppLqHCmSuJR7jDyvU9ih
          stance: supports
          locator: CBDB:191307
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191307）
          source: &a1
            id: s_y7ppLqHCmSuJR7jDyvU9ih
            source_type: api_record
            title: 中国历代人物传记资料库：王扶（CBDB 191307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191307&o=json
            external_identifier: CBDB:191307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PiXsFUz8FsAGuh7MEheuxw
        subject_person_id: p_H2CHgs6YnYK2cDpM8JwaGU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 870年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QE48rzqDFX4HdmXbX3mPeW
          claim_id: c_PiXsFUz8FsAGuh7MEheuxw
          source_id: s_y7ppLqHCmSuJR7jDyvU9ih
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
        id: c_kXC36xn3hyCyUkweQLVEWH
        subject_person_id: p_H2CHgs6YnYK2cDpM8JwaGU
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
        - id: cs_xQD9K5uEzFmvzbvQLfwhCq
          claim_id: c_kXC36xn3hyCyUkweQLVEWH
          source_id: s_y7ppLqHCmSuJR7jDyvU9ih
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

# 王扶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王扶 | accepted |
| death.date | 870年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王扶（CBDB 191307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191307&o=json)
