---
schema: wang-person/v1
id: p_f22dopnC6mdCD5W9LhzLJ2
status: active
merged_into: null
display_name: 王友直
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hoWopuaDaJimjCvHZGrTmM
        subject_person_id: p_f22dopnC6mdCD5W9LhzLJ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LeJvvH5Rf7GBMAMSbA238o
          claim_id: c_hoWopuaDaJimjCvHZGrTmM
          source_id: s_E1dLuFFNuimg83CbDk7XRg
          stance: supports
          locator: CBDB:38095
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38095）
          source: &a1
            id: s_E1dLuFFNuimg83CbDk7XRg
            source_type: api_record
            title: 中国历代人物传记资料库：王友直（CBDB 38095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38095&o=json
            external_identifier: CBDB:38095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PBU7mzYxXB7ivWKwUoH4Ma
        subject_person_id: p_f22dopnC6mdCD5W9LhzLJ2
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
        - id: cs_YPVC6k5PkaawFsRfZxyXp9
          claim_id: c_PBU7mzYxXB7ivWKwUoH4Ma
          source_id: s_E1dLuFFNuimg83CbDk7XRg
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
  spouses:
    - claim:
        id: c_qceo7GwT_7H0SN9R28zvJD
        subject_person_id: p_f22dopnC6mdCD5W9LhzLJ2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HKwPdRYERavGaMysLoH1k1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N-mUtvl5Uz32u1dIrJqqsX
          claim_id: c_qceo7GwT_7H0SN9R28zvJD
          source_id: s_fLp5NJl0K25JBu5wsIgSIv
          stance: supports
          locator: 宋史：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fLp5NJl0K25JBu5wsIgSIv
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王友直妻)（CBDB 119416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119416&o=json
            external_identifier: CBDB:119416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HKwPdRYERavGaMysLoH1k1
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王友直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友直 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_HKwPdRYERavGaMysLoH1k1 | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王友直妻)（CBDB 119416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119416&o=json)
- [中国历代人物传记资料库：王友直（CBDB 38095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38095&o=json)
