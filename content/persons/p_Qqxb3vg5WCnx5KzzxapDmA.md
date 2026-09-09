---
schema: wang-person/v1
id: p_Qqxb3vg5WCnx5KzzxapDmA
status: active
merged_into: null
display_name: 王右弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XpgzVdJsXMhb5gJkP9H86B
        subject_person_id: p_Qqxb3vg5WCnx5KzzxapDmA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王右弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GD5BCyocp198j6ou4s6Jc7
          claim_id: c_XpgzVdJsXMhb5gJkP9H86B
          source_id: s_xRFdEbFPyCfBG9G2gAHAgr
          stance: supports
          locator: CBDB:438316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（438316）
          source: &a1
            id: s_xRFdEbFPyCfBG9G2gAHAgr
            source_type: api_record
            title: 中国历代人物传记资料库：王右弼（CBDB 438316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438316&o=json
            external_identifier: CBDB:438316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.067Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1WFDdC2dbwL3GVmeSsGEfq
        subject_person_id: p_Qqxb3vg5WCnx5KzzxapDmA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1737年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wFM6NpCD4dknX1aC5FruiQ
          claim_id: c_1WFDdC2dbwL3GVmeSsGEfq
          source_id: s_xRFdEbFPyCfBG9G2gAHAgr
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
        id: c_mafPttta15c4cEhLJz4B3Q
        subject_person_id: p_Qqxb3vg5WCnx5KzzxapDmA
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
        - id: cs_FCCjryGFvx5jMGMR1vsYGs
          claim_id: c_mafPttta15c4cEhLJz4B3Q
          source_id: s_xRFdEbFPyCfBG9G2gAHAgr
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

# 王右弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王右弼 | accepted |
| birth.date | 1737年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王右弼（CBDB 438316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438316&o=json)
