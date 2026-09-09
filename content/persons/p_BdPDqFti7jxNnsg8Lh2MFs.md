---
schema: wang-person/v1
id: p_BdPDqFti7jxNnsg8Lh2MFs
status: active
merged_into: null
display_name: 王㷆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MoAwSh9rFQLmyYnpRnfdF3
        subject_person_id: p_BdPDqFti7jxNnsg8Lh2MFs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㷆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KFuB7ZosAfd4eCJgZGF7F9
          claim_id: c_MoAwSh9rFQLmyYnpRnfdF3
          source_id: s_Mw9bWF5SNzmdBsthiCcX7i
          stance: supports
          locator: CBDB:71224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71224）
          source: &a1
            id: s_Mw9bWF5SNzmdBsthiCcX7i
            source_type: api_record
            title: 中国历代人物传记资料库：王㷆（CBDB 71224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71224&o=json
            external_identifier: CBDB:71224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_L4DrMdt9KB1LqaNYZzTyCJ
        subject_person_id: p_BdPDqFti7jxNnsg8Lh2MFs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1932年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x4NsqscbD441opj7odHvHm
          claim_id: c_L4DrMdt9KB1LqaNYZzTyCJ
          source_id: s_Mw9bWF5SNzmdBsthiCcX7i
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
        id: c_wPisCkig8Dsyb99zZ9cnfk
        subject_person_id: p_BdPDqFti7jxNnsg8Lh2MFs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WXBddpNB3BENNa4cqi5KXN
          claim_id: c_wPisCkig8Dsyb99zZ9cnfk
          source_id: s_Mw9bWF5SNzmdBsthiCcX7i
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

# 王㷆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王㷆 | accepted |
| death.date | 1932年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王㷆（CBDB 71224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71224&o=json)
