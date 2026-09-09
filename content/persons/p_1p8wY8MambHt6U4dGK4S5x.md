---
schema: wang-person/v1
id: p_1p8wY8MambHt6U4dGK4S5x
status: active
merged_into: null
display_name: 王治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AdrLF1H1aS479kMuQUM9PE
        subject_person_id: p_1p8wY8MambHt6U4dGK4S5x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_261mXYe2SagA4SJuTDCuKT
          claim_id: c_AdrLF1H1aS479kMuQUM9PE
          source_id: s_N8z8jtoYrehQ2rP36Kh5si
          stance: supports
          locator: CBDB:69269
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69269）
          source: &a1
            id: s_N8z8jtoYrehQ2rP36Kh5si
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 69269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69269&o=json
            external_identifier: CBDB:69269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_P42NpKuGx559HMioXz5WVP
        subject_person_id: p_1p8wY8MambHt6U4dGK4S5x
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1792年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zR1YT5adg15izau9qY9cP1
          claim_id: c_P42NpKuGx559HMioXz5WVP
          source_id: s_N8z8jtoYrehQ2rP36Kh5si
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
        id: c_kG5mtQzvU2pfdAz47UgaY4
        subject_person_id: p_1p8wY8MambHt6U4dGK4S5x
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
        - id: cs_9WH1rM1goGD1Jgm8q3iLEp
          claim_id: c_kG5mtQzvU2pfdAz47UgaY4
          source_id: s_N8z8jtoYrehQ2rP36Kh5si
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

# 王治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治 | accepted |
| birth.date | 1792年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王治（CBDB 69269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69269&o=json)
