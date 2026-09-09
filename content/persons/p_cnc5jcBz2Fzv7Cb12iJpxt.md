---
schema: wang-person/v1
id: p_cnc5jcBz2Fzv7Cb12iJpxt
status: active
merged_into: null
display_name: 王津
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hsBUwJsvWaZ2Pcc56XH3Dm
        subject_person_id: p_cnc5jcBz2Fzv7Cb12iJpxt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王津
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zQw2NC2zq71up5p87cfY4p
          claim_id: c_hsBUwJsvWaZ2Pcc56XH3Dm
          source_id: s_pKDPtk2naPQA9F1HodwMFs
          stance: supports
          locator: CBDB:35904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35904）
          source: &a1
            id: s_pKDPtk2naPQA9F1HodwMFs
            source_type: api_record
            title: 中国历代人物传记资料库：王津（CBDB 35904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35904&o=json
            external_identifier: CBDB:35904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vY81DW2ANL46H5dxxXVpQN
        subject_person_id: p_cnc5jcBz2Fzv7Cb12iJpxt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WqZpZ3yrAty1F3u9B4vvFz
          claim_id: c_vY81DW2ANL46H5dxxXVpQN
          source_id: s_pKDPtk2naPQA9F1HodwMFs
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

# 王津

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王津 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王津（CBDB 35904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35904&o=json)
