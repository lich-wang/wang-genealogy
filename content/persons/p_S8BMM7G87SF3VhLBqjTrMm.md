---
schema: wang-person/v1
id: p_S8BMM7G87SF3VhLBqjTrMm
status: active
merged_into: null
display_name: 王舟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CbDM7GaaPHja84RYtutKE4
        subject_person_id: p_S8BMM7G87SF3VhLBqjTrMm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WaY33wejkM2QaG2GaT4Qrp
          claim_id: c_CbDM7GaaPHja84RYtutKE4
          source_id: s_4RMe7EhANvPpcmPNj7V33e
          stance: supports
          locator: CBDB:100658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100658）
          source: &a1
            id: s_4RMe7EhANvPpcmPNj7V33e
            source_type: api_record
            title: 中国历代人物传记资料库：王舟（CBDB 100658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100658&o=json
            external_identifier: CBDB:100658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TVvmXwiP7Kp4GfByCvMP6w
        subject_person_id: p_S8BMM7G87SF3VhLBqjTrMm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1248年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pyrxaWSEjUojr528K25fZb
          claim_id: c_TVvmXwiP7Kp4GfByCvMP6w
          source_id: s_4RMe7EhANvPpcmPNj7V33e
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
        id: c_FxxTyo4xN5LZ5e2Zi2DKKs
        subject_person_id: p_S8BMM7G87SF3VhLBqjTrMm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1313年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7w4EcgdaYvNSCtqKuhvPdZ
          claim_id: c_FxxTyo4xN5LZ5e2Zi2DKKs
          source_id: s_4RMe7EhANvPpcmPNj7V33e
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
        id: c_mEDbGvJ9SppCE9NX19fwAj
        subject_person_id: p_S8BMM7G87SF3VhLBqjTrMm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YsdUitnXb3LUQBvq2R4xSe
          claim_id: c_mEDbGvJ9SppCE9NX19fwAj
          source_id: s_4RMe7EhANvPpcmPNj7V33e
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

# 王舟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舟 | accepted |
| birth.date | 1248年 | accepted |
| death.date | 1313年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舟（CBDB 100658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100658&o=json)
