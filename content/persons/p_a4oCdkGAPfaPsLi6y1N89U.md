---
schema: wang-person/v1
id: p_a4oCdkGAPfaPsLi6y1N89U
status: active
merged_into: null
display_name: 王道純
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DAyzQPP2BWDvsz3EYm2C8x
        subject_person_id: p_a4oCdkGAPfaPsLi6y1N89U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rCzTLBsqAxZrmZpZ4jRECS
          claim_id: c_DAyzQPP2BWDvsz3EYm2C8x
          source_id: s_oE32to5g5jPQ78Qt2kfp4c
          stance: supports
          locator: CBDB:206081
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206081）
          source: &a1
            id: s_oE32to5g5jPQ78Qt2kfp4c
            source_type: api_record
            title: 中国历代人物传记资料库：王道純（CBDB 206081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206081&o=json
            external_identifier: CBDB:206081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FETHYcc5dmTGF1153niwVx
        subject_person_id: p_a4oCdkGAPfaPsLi6y1N89U
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1548年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VL8YkNxHb4uc6HguAf2Vsu
          claim_id: c_FETHYcc5dmTGF1153niwVx
          source_id: s_oE32to5g5jPQ78Qt2kfp4c
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
        id: c_hQdUxdrTXujxc9xHBBKvG3
        subject_person_id: p_a4oCdkGAPfaPsLi6y1N89U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kRhne5q8iAA934FdrcBLjH
          claim_id: c_hQdUxdrTXujxc9xHBBKvG3
          source_id: s_oE32to5g5jPQ78Qt2kfp4c
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

# 王道純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道純 | accepted |
| birth.date | 1548年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道純（CBDB 206081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206081&o=json)
