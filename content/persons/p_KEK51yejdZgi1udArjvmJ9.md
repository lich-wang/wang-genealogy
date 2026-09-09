---
schema: wang-person/v1
id: p_KEK51yejdZgi1udArjvmJ9
status: active
merged_into: null
display_name: 王明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YM1qr6ySN98YaNbC2FGeiA
        subject_person_id: p_KEK51yejdZgi1udArjvmJ9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ERabxtkaYaojSqo1yi4xAv
          claim_id: c_YM1qr6ySN98YaNbC2FGeiA
          source_id: s_WZjWyahGgenQ3aDS87KHqP
          stance: supports
          locator: CBDB:464979
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（464979）
          source: &a1
            id: s_WZjWyahGgenQ3aDS87KHqP
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 464979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464979&o=json
            external_identifier: CBDB:464979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yfcH4eD8nVd8AZ7J7L3DHs
        subject_person_id: p_KEK51yejdZgi1udArjvmJ9
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
        - id: cs_EywAVapcLemF5ZuyY7Mp4R
          claim_id: c_yfcH4eD8nVd8AZ7J7L3DHs
          source_id: s_WZjWyahGgenQ3aDS87KHqP
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

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明（CBDB 464979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464979&o=json)
