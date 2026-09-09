---
schema: wang-person/v1
id: p_DkYfccsrPS11dAMcWGPmDy
status: active
merged_into: null
display_name: 王景淳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B575HD14A9K1ddMAhP3mfM
        subject_person_id: p_DkYfccsrPS11dAMcWGPmDy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景淳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hKRKX94QxbpdUFhVyrbcaZ
          claim_id: c_B575HD14A9K1ddMAhP3mfM
          source_id: s_rS3BGnF9PUfFPQQ3Y2M4w4
          stance: supports
          locator: CBDB:72073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72073）
          source: &a1
            id: s_rS3BGnF9PUfFPQQ3Y2M4w4
            source_type: api_record
            title: 中国历代人物传记资料库：王景淳（CBDB 72073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72073&o=json
            external_identifier: CBDB:72073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gNPsp9x8ALrvyhLvChwo27
        subject_person_id: p_DkYfccsrPS11dAMcWGPmDy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1814年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ji34RyGUSMgdqKZ2ihAhFB
          claim_id: c_gNPsp9x8ALrvyhLvChwo27
          source_id: s_rS3BGnF9PUfFPQQ3Y2M4w4
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
        id: c_fQyBcrZBhgPHR52rPj9Kh7
        subject_person_id: p_DkYfccsrPS11dAMcWGPmDy
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
        - id: cs_WQb4WCwabc2HFV2UJ77Y1q
          claim_id: c_fQyBcrZBhgPHR52rPj9Kh7
          source_id: s_rS3BGnF9PUfFPQQ3Y2M4w4
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

# 王景淳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景淳 | accepted |
| birth.date | 1814年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景淳（CBDB 72073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72073&o=json)
