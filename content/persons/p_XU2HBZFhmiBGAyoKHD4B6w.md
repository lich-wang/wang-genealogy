---
schema: wang-person/v1
id: p_XU2HBZFhmiBGAyoKHD4B6w
status: active
merged_into: null
display_name: 王宬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tAfyK5JcrNEhocSrd8DhTB
        subject_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EenfyuhPfyZgAwqMRbZ3wS
          claim_id: c_tAfyK5JcrNEhocSrd8DhTB
          source_id: s_fAninjy79gxLGtFFqcmEGK
          stance: supports
          locator: CBDB:199813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199813）
          source: &a1
            id: s_fAninjy79gxLGtFFqcmEGK
            source_type: api_record
            title: 中国历代人物传记资料库：王宬（CBDB 199813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199813&o=json
            external_identifier: CBDB:199813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sZfLfWZvpa5p4ANKQP7paz
        subject_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1440年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FMQdGgBAWGVVPVs2JvUifL
          claim_id: c_sZfLfWZvpa5p4ANKQP7paz
          source_id: s_fAninjy79gxLGtFFqcmEGK
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
        id: c_vUP1EV2FbfQExhc4EAN26k
        subject_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
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
        - id: cs_rsxzs7s7Bqja4XwjuKGdUt
          claim_id: c_vUP1EV2FbfQExhc4EAN26k
          source_id: s_fAninjy79gxLGtFFqcmEGK
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

# 王宬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宬 | accepted |
| birth.date | 1440年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宬（CBDB 199813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199813&o=json)
