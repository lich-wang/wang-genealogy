---
schema: wang-person/v1
id: p_Ld4WoAsGKyzu9y4Dgh2QB5
status: active
merged_into: null
display_name: 王仁裕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gt4zGD4Ehf9FMb44fCQCko
        subject_person_id: p_Ld4WoAsGKyzu9y4Dgh2QB5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rUiPaDRA4e1oMjpZDP7yN7
          claim_id: c_Gt4zGD4Ehf9FMb44fCQCko
          source_id: s_mHp5ktNPiLESDt5ekRHL4M
          stance: supports
          locator: CBDB:91980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91980）
          source: &a1
            id: s_mHp5ktNPiLESDt5ekRHL4M
            source_type: api_record
            title: 中国历代人物传记资料库：王仁裕（CBDB 91980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91980&o=json
            external_identifier: CBDB:91980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.063Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QLB5KPy9GUV8fwXLGrGmUC
        subject_person_id: p_Ld4WoAsGKyzu9y4Dgh2QB5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 880年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JyZBPdsVmLuxkzQrcMy2oC
          claim_id: c_QLB5KPy9GUV8fwXLGrGmUC
          source_id: s_mHp5ktNPiLESDt5ekRHL4M
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
        id: c_c12FB89NoQfSEYgyRD8k5n
        subject_person_id: p_Ld4WoAsGKyzu9y4Dgh2QB5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 956年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hgebVLLCxHXw6mpsgWq8iC
          claim_id: c_c12FB89NoQfSEYgyRD8k5n
          source_id: s_mHp5ktNPiLESDt5ekRHL4M
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
        id: c_ADt8qUMHj2gWtai2ysdMhE
        subject_person_id: p_Ld4WoAsGKyzu9y4Dgh2QB5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_83MT6LuHJF73PH6RXLb1pU
          claim_id: c_ADt8qUMHj2gWtai2ysdMhE
          source_id: s_mHp5ktNPiLESDt5ekRHL4M
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

# 王仁裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁裕 | accepted |
| birth.date | 880年 | accepted |
| death.date | 956年 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁裕（CBDB 91980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91980&o=json)
