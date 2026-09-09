---
schema: wang-person/v1
id: p_zobvMdDSzg77HDYS5asQYN
status: active
merged_into: null
display_name: 王正中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T96vwWPdi8sVuvBG3tn8DE
        subject_person_id: p_zobvMdDSzg77HDYS5asQYN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m6sb8qrDCudCUs37Rc2rke
          claim_id: c_T96vwWPdi8sVuvBG3tn8DE
          source_id: s_yvCfhsG7fyv14U336R4WtU
          stance: supports
          locator: CBDB:69126
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69126）
          source: &a1
            id: s_yvCfhsG7fyv14U336R4WtU
            source_type: api_record
            title: 中国历代人物传记资料库：王正中（CBDB 69126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69126&o=json
            external_identifier: CBDB:69126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MzU1J1o9udkbnAEHHcvRTW
        subject_person_id: p_zobvMdDSzg77HDYS5asQYN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1599年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WLiMsu4MWTWZRegPuL9eHZ
          claim_id: c_MzU1J1o9udkbnAEHHcvRTW
          source_id: s_yvCfhsG7fyv14U336R4WtU
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
        id: c_SsKPvmj5DHuCLHjxRLz6xP
        subject_person_id: p_zobvMdDSzg77HDYS5asQYN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1667年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P5aXP6hMVF84QXmUy5d2Re
          claim_id: c_SsKPvmj5DHuCLHjxRLz6xP
          source_id: s_yvCfhsG7fyv14U336R4WtU
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
        id: c_FXuXJxwFCgACnQSjMpJfx7
        subject_person_id: p_zobvMdDSzg77HDYS5asQYN
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
        - id: cs_izXpsVDBTb4whDk6E95v9T
          claim_id: c_FXuXJxwFCgACnQSjMpJfx7
          source_id: s_yvCfhsG7fyv14U336R4WtU
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

# 王正中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正中 | accepted |
| birth.date | 1599年 | accepted |
| death.date | 1667年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正中（CBDB 69126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69126&o=json)
