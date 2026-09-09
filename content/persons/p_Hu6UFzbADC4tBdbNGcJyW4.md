---
schema: wang-person/v1
id: p_Hu6UFzbADC4tBdbNGcJyW4
status: active
merged_into: null
display_name: 王翁慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iCxJVYcbVW7trPNY31GXzb
        subject_person_id: p_Hu6UFzbADC4tBdbNGcJyW4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翁慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KTJk3o5Jezni3ZFPFwhAej
          claim_id: c_iCxJVYcbVW7trPNY31GXzb
          source_id: s_Y78gmcoYLvCCMfNB2AXtwh
          stance: supports
          locator: CBDB:175755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175755）
          source: &a1
            id: s_Y78gmcoYLvCCMfNB2AXtwh
            source_type: api_record
            title: 中国历代人物传记资料库：王翁慶（CBDB 175755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175755&o=json
            external_identifier: CBDB:175755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sGG8gdADucrq7LY8Eqmuh3
        subject_person_id: p_Hu6UFzbADC4tBdbNGcJyW4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 699年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DVeyDNnDhuWLmZyf1Yn7df
          claim_id: c_sGG8gdADucrq7LY8Eqmuh3
          source_id: s_Y78gmcoYLvCCMfNB2AXtwh
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
        id: c_zUNdTXGKfQSqmBGZH2EHAF
        subject_person_id: p_Hu6UFzbADC4tBdbNGcJyW4
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
        - id: cs_zM6Cdscob3Q97w6GWRridk
          claim_id: c_zUNdTXGKfQSqmBGZH2EHAF
          source_id: s_Y78gmcoYLvCCMfNB2AXtwh
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

# 王翁慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翁慶 | accepted |
| death.date | 699年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翁慶（CBDB 175755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175755&o=json)
