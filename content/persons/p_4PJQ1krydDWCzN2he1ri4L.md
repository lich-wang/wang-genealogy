---
schema: wang-person/v1
id: p_4PJQ1krydDWCzN2he1ri4L
status: active
merged_into: null
display_name: 王厚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_khaZB5T1fXEohxyzVRM8yi
        subject_person_id: p_4PJQ1krydDWCzN2he1ri4L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王厚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2QmETMymjZDB4m8a6c5ptc
          claim_id: c_khaZB5T1fXEohxyzVRM8yi
          source_id: s_w1GFcCBtYvtGxma1GpXfZw
          stance: supports
          locator: CBDB:690694
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690694）
          source: &a1
            id: s_w1GFcCBtYvtGxma1GpXfZw
            source_type: api_record
            title: 中国历代人物传记资料库：王厚（CBDB 690694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690694&o=json
            external_identifier: CBDB:690694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.593Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_e97FfqU4CJsM3CarpwCKvA
        subject_person_id: p_4PJQ1krydDWCzN2he1ri4L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1300年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LsTvuFx53yBtn3zHYn7HWL
          claim_id: c_e97FfqU4CJsM3CarpwCKvA
          source_id: s_w1GFcCBtYvtGxma1GpXfZw
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
        id: c_EefDeDpxXK7sf9qhkSRHNK
        subject_person_id: p_4PJQ1krydDWCzN2he1ri4L
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1376年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LHhLBBvdiQvYph6NHHLvdV
          claim_id: c_EefDeDpxXK7sf9qhkSRHNK
          source_id: s_w1GFcCBtYvtGxma1GpXfZw
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
        id: c_BaYGPqnjD2mSRan9t4sLWU
        subject_person_id: p_4PJQ1krydDWCzN2he1ri4L
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
        - id: cs_QSjCwDFcETmYfY1TMZS2zJ
          claim_id: c_BaYGPqnjD2mSRan9t4sLWU
          source_id: s_w1GFcCBtYvtGxma1GpXfZw
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

# 王厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王厚 | accepted |
| birth.date | 1300年 | accepted |
| death.date | 1376年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王厚（CBDB 690694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690694&o=json)
