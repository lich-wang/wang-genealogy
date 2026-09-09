---
schema: wang-person/v1
id: p_3o7BjA5khGYGYF3Zm16SY2
status: active
merged_into: null
display_name: 王靜專
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w7VTmarJKn7tcdYkmCWcKV
        subject_person_id: p_3o7BjA5khGYGYF3Zm16SY2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜專
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R8xu3pi35aWgS3SNjiof2D
          claim_id: c_w7VTmarJKn7tcdYkmCWcKV
          source_id: s_UDGw59De89x1RLu7uSWWL5
          stance: supports
          locator: CBDB:640854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640854）
          source: &a1
            id: s_UDGw59De89x1RLu7uSWWL5
            source_type: api_record
            title: 中国历代人物传记资料库：王靜專（CBDB 640854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640854&o=json
            external_identifier: CBDB:640854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v5abziX5UoammZWaFGNk8Z
        subject_person_id: p_3o7BjA5khGYGYF3Zm16SY2
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
        - id: cs_pQu73V573EBr8zsDFtWsAB
          claim_id: c_v5abziX5UoammZWaFGNk8Z
          source_id: s_UDGw59De89x1RLu7uSWWL5
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

# 王靜專

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靜專 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王靜專（CBDB 640854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640854&o=json)
