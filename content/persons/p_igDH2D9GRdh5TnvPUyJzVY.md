---
schema: wang-person/v1
id: p_igDH2D9GRdh5TnvPUyJzVY
status: active
merged_into: null
display_name: 王瓉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HbeCqMo7B82j8PVVzxRh8F
        subject_person_id: p_igDH2D9GRdh5TnvPUyJzVY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B5eSEQ6f1XeprkzFb4rw8V
          claim_id: c_HbeCqMo7B82j8PVVzxRh8F
          source_id: s_q2J1ee2ZS6KPFMcBzTPDCm
          stance: supports
          locator: CBDB:639459
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639459）
          source: &a1
            id: s_q2J1ee2ZS6KPFMcBzTPDCm
            source_type: api_record
            title: 中国历代人物传记资料库：王瓉（CBDB 639459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639459&o=json
            external_identifier: CBDB:639459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9JygTEqrgotj3V9yaJxCrg
        subject_person_id: p_igDH2D9GRdh5TnvPUyJzVY
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
        - id: cs_X7KmGKb5nvXXiZCR1PkT5W
          claim_id: c_9JygTEqrgotj3V9yaJxCrg
          source_id: s_q2J1ee2ZS6KPFMcBzTPDCm
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

# 王瓉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓉（CBDB 639459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639459&o=json)
