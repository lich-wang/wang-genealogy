---
schema: wang-person/v1
id: p_yoJ8xkA6RKn5KTuDeY1X7C
status: active
merged_into: null
display_name: 王正功
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BcZ6c91hQHbiVDEYMkzWPf
        subject_person_id: p_yoJ8xkA6RKn5KTuDeY1X7C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bjjiFBgmF3yGHC2A6C5o6y
          claim_id: c_BcZ6c91hQHbiVDEYMkzWPf
          source_id: s_pKwCwCh2ZSDQpztzLm1ryQ
          stance: supports
          locator: CBDB:19876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19876）
          source: &a1
            id: s_pKwCwCh2ZSDQpztzLm1ryQ
            source_type: api_record
            title: 中国历代人物传记资料库：王正功（CBDB 19876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19876&o=json
            external_identifier: CBDB:19876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5hK3EZHdDwFTfN7a9tV61B
        subject_person_id: p_yoJ8xkA6RKn5KTuDeY1X7C
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1133年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4y5borTgcA4fbKfWpsxFQC
          claim_id: c_5hK3EZHdDwFTfN7a9tV61B
          source_id: s_pKwCwCh2ZSDQpztzLm1ryQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_djn6hW4XZB51AVvgbuyuDM
        subject_person_id: p_yoJ8xkA6RKn5KTuDeY1X7C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1203年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G4L4QBSE35ZLZ6xeFZxQV9
          claim_id: c_djn6hW4XZB51AVvgbuyuDM
          source_id: s_pKwCwCh2ZSDQpztzLm1ryQ
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
        id: c_HS33RUs2tiNXiRUnv1mUA5
        subject_person_id: p_yoJ8xkA6RKn5KTuDeY1X7C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1hGizFoWGSsF9PqJ3dSDPU
          claim_id: c_HS33RUs2tiNXiRUnv1mUA5
          source_id: s_pKwCwCh2ZSDQpztzLm1ryQ
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

# 王正功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正功 | accepted |
| birth.date | 1133年 | accepted |
| death.date | 1203年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正功（CBDB 19876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19876&o=json)
