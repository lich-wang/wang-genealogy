---
schema: wang-person/v1
id: p_3o3YXYwP3wXAbDrT4L8Gc3
status: active
merged_into: null
display_name: 王柄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xr9zddn9HBFXEQhoWuR9RZ
        subject_person_id: p_3o3YXYwP3wXAbDrT4L8Gc3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8uk68gQvtcAD4QQh1MjEno
          claim_id: c_Xr9zddn9HBFXEQhoWuR9RZ
          source_id: s_aYb7MYJP6xVJDAEF9BPG2h
          stance: supports
          locator: CBDB:492133
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492133）
          source: &a1
            id: s_aYb7MYJP6xVJDAEF9BPG2h
            source_type: api_record
            title: 中国历代人物传记资料库：王柄（CBDB 492133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492133&o=json
            external_identifier: CBDB:492133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L1CL2iChBRBj4TQW4JLQoj
        subject_person_id: p_3o3YXYwP3wXAbDrT4L8Gc3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柄，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 492133）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A9oA9UDqsBNjvLLnfVPIo7
          claim_id: c_L1CL2iChBRBj4TQW4JLQoj
          source_id: s_aYb7MYJP6xVJDAEF9BPG2h
          stance: supports
          locator: CBDB:492133
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王柄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柄 | accepted |
| bio.summary | 王柄，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 492133） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王柄（CBDB 492133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492133&o=json)
