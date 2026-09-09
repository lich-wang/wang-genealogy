---
schema: wang-person/v1
id: p_MpScH1rYDWeCwhVwD6aJ3o
status: active
merged_into: null
display_name: 王炌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BWMpZ8SM1UqLLrM6G13dnD
        subject_person_id: p_MpScH1rYDWeCwhVwD6aJ3o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r5ki4uWfwsYNWFBnDf4qYZ
          claim_id: c_BWMpZ8SM1UqLLrM6G13dnD
          source_id: s_ST2cG2VirVeLqM4crQ49DL
          stance: supports
          locator: CBDB:283530
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283530）
          source: &a1
            id: s_ST2cG2VirVeLqM4crQ49DL
            source_type: api_record
            title: 中国历代人物传记资料库：王炌（CBDB 283530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283530&o=json
            external_identifier: CBDB:283530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y88U8uEpT3u6Hh85DTdFuy
        subject_person_id: p_MpScH1rYDWeCwhVwD6aJ3o
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
        - id: cs_dYn6miYt5m5zPs3Bi97ZqH
          claim_id: c_Y88U8uEpT3u6Hh85DTdFuy
          source_id: s_ST2cG2VirVeLqM4crQ49DL
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

# 王炌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炌（CBDB 283530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283530&o=json)
