---
schema: wang-person/v1
id: p_72QrLVK6Z96sZN5LA44m9Q
status: active
merged_into: null
display_name: 王廷鼐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CdnRUBrsJKsyVoVN5mjAbr
        subject_person_id: p_72QrLVK6Z96sZN5LA44m9Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷鼐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n7UpNjPMtYGaepvKL8rWZ4
          claim_id: c_CdnRUBrsJKsyVoVN5mjAbr
          source_id: s_Jr7wK8wuRKD7mJmCp5jMLP
          stance: supports
          locator: CBDB:637581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637581）
          source: &a1
            id: s_Jr7wK8wuRKD7mJmCp5jMLP
            source_type: api_record
            title: 中国历代人物传记资料库：王廷鼐（CBDB 637581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637581&o=json
            external_identifier: CBDB:637581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VR2SzMenrKo54jsa6jvh4d
        subject_person_id: p_72QrLVK6Z96sZN5LA44m9Q
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
        - id: cs_54c4eAex2EYYY1HT4EtUk8
          claim_id: c_VR2SzMenrKo54jsa6jvh4d
          source_id: s_Jr7wK8wuRKD7mJmCp5jMLP
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

# 王廷鼐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷鼐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷鼐（CBDB 637581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637581&o=json)
