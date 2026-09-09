---
schema: wang-person/v1
id: p_mmWrL7kZx8HQpct84Z7mQB
status: active
merged_into: null
display_name: 王伯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c9J1SHunaSm3S9LakAT3PN
        subject_person_id: p_mmWrL7kZx8HQpct84Z7mQB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jt2TJe2D7mUjni28ykTs4s
          claim_id: c_c9J1SHunaSm3S9LakAT3PN
          source_id: s_NQw1mPMx7n2bacCtiSuh7s
          stance: supports
          locator: CBDB:551658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551658）
          source: &a1
            id: s_NQw1mPMx7n2bacCtiSuh7s
            source_type: api_record
            title: 中国历代人物传记资料库：王伯（CBDB 551658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551658&o=json
            external_identifier: CBDB:551658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VJqEHv9d9MoAUkCBEYjasy
        subject_person_id: p_mmWrL7kZx8HQpct84Z7mQB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1350年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_62m9rnnJGeTmGwP9yMva5H
          claim_id: c_VJqEHv9d9MoAUkCBEYjasy
          source_id: s_NQw1mPMx7n2bacCtiSuh7s
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
        id: c_1WaNwnadswFCibH7t8LrJo
        subject_person_id: p_mmWrL7kZx8HQpct84Z7mQB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为高麗人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EbakkwiW65c4QP2u82GyHv
          claim_id: c_1WaNwnadswFCibH7t8LrJo
          source_id: s_NQw1mPMx7n2bacCtiSuh7s
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

# 王伯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯 | accepted |
| death.date | 1350年 | accepted |
| bio.summary | CBDB 记载为高麗人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯（CBDB 551658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551658&o=json)
