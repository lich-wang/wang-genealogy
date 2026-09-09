---
schema: wang-person/v1
id: p_oVMkDeWCpv83NhtocLaKdd
status: active
merged_into: null
display_name: 王康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XvF47fg1C4KE97ECgin5cP
        subject_person_id: p_oVMkDeWCpv83NhtocLaKdd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KgMB2Rmr7GCWK5v662eSrx
          claim_id: c_XvF47fg1C4KE97ECgin5cP
          source_id: s_Kw4vVxuB8PX4mGLsVgJZ2G
          stance: supports
          locator: CBDB:267654
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267654）
          source: &a1
            id: s_Kw4vVxuB8PX4mGLsVgJZ2G
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 267654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267654&o=json
            external_identifier: CBDB:267654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6f4Hu7xKtp1b93vMXdBsFu
        subject_person_id: p_oVMkDeWCpv83NhtocLaKdd
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
        - id: cs_9i2SBpe6jQ9PFErWT4CKd9
          claim_id: c_6f4Hu7xKtp1b93vMXdBsFu
          source_id: s_Kw4vVxuB8PX4mGLsVgJZ2G
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

# 王康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王康（CBDB 267654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267654&o=json)
