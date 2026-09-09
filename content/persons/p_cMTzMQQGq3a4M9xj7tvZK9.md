---
schema: wang-person/v1
id: p_cMTzMQQGq3a4M9xj7tvZK9
status: active
merged_into: null
display_name: 王玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_npG3GR42bT3GovmsY9i9cd
        subject_person_id: p_cMTzMQQGq3a4M9xj7tvZK9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pTPDyBp87TRZ9yv7MK34J5
          claim_id: c_npG3GR42bT3GovmsY9i9cd
          source_id: s_Zq7aC39h5DJEdq5YztHCFf
          stance: supports
          locator: CBDB:29192
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29192）
          source: &a1
            id: s_Zq7aC39h5DJEdq5YztHCFf
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 29192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29192&o=json
            external_identifier: CBDB:29192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dCVqfQD5E6RVh1UD6evkX9
        subject_person_id: p_cMTzMQQGq3a4M9xj7tvZK9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1191年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QMoTxwPDDrEL5oQpD9R1Ug
          claim_id: c_dCVqfQD5E6RVh1UD6evkX9
          source_id: s_Zq7aC39h5DJEdq5YztHCFf
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
        id: c_1DNrMGY2jRqDw78n6KAUqB
        subject_person_id: p_cMTzMQQGq3a4M9xj7tvZK9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1260年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N9Bc2HmfEs3RmxYnUybwMU
          claim_id: c_1DNrMGY2jRqDw78n6KAUqB
          source_id: s_Zq7aC39h5DJEdq5YztHCFf
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
        id: c_47JKZ81yBJeuAZAqi95R6Q
        subject_person_id: p_cMTzMQQGq3a4M9xj7tvZK9
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
        - id: cs_awtLGtpY5cXqBRRF85NkXE
          claim_id: c_47JKZ81yBJeuAZAqi95R6Q
          source_id: s_Zq7aC39h5DJEdq5YztHCFf
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

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| birth.date | 1191年 | accepted |
| death.date | 1260年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉（CBDB 29192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29192&o=json)
