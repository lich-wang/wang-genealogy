---
schema: wang-person/v1
id: p_J3kNgcmfksKaeMJdBmVRbE
status: active
merged_into: null
display_name: 王格
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D8pq1sPa5s5P43QKX39VmW
        subject_person_id: p_J3kNgcmfksKaeMJdBmVRbE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王格
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RLCu8x7136zZpKnrDyBQD7
          claim_id: c_D8pq1sPa5s5P43QKX39VmW
          source_id: s_Qm3UQQ6PtS8pEZfJaP5BDE
          stance: supports
          locator: CBDB:18819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18819）
          source: &a1
            id: s_Qm3UQQ6PtS8pEZfJaP5BDE
            source_type: api_record
            title: 中国历代人物传记资料库：王格（CBDB 18819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18819&o=json
            external_identifier: CBDB:18819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xJ1W6F2FoXeXsbeFHCbX4A
        subject_person_id: p_J3kNgcmfksKaeMJdBmVRbE
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
        - id: cs_Z5kKxPzMk3ZMLMysoH9Mr1
          claim_id: c_xJ1W6F2FoXeXsbeFHCbX4A
          source_id: s_Qm3UQQ6PtS8pEZfJaP5BDE
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

# 王格

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王格 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王格（CBDB 18819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18819&o=json)
