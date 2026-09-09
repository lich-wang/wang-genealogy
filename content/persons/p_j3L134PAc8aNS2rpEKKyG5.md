---
schema: wang-person/v1
id: p_j3L134PAc8aNS2rpEKKyG5
status: active
merged_into: null
display_name: 王壂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FsT6vEzfp2uPUTifzKD7Sk
        subject_person_id: p_j3L134PAc8aNS2rpEKKyG5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qKQuPoEDvLZzW6XHiHHqtR
          claim_id: c_FsT6vEzfp2uPUTifzKD7Sk
          source_id: s_76giSTVafX27xZTWUM7QBL
          stance: supports
          locator: CBDB:495440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495440）
          source: &a1
            id: s_76giSTVafX27xZTWUM7QBL
            source_type: api_record
            title: 中国历代人物传记资料库：王壂（CBDB 495440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495440&o=json
            external_identifier: CBDB:495440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.494Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ng4tyVPbXvPDL1ADkuxAgv
        subject_person_id: p_j3L134PAc8aNS2rpEKKyG5
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
        - id: cs_MJbnMcL3eGUzxLHJS9LMBt
          claim_id: c_Ng4tyVPbXvPDL1ADkuxAgv
          source_id: s_76giSTVafX27xZTWUM7QBL
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

# 王壂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壂 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壂（CBDB 495440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495440&o=json)
