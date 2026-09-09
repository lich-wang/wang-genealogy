---
schema: wang-person/v1
id: p_V5FBmRxupdWUxE9LxixBJK
status: active
merged_into: null
display_name: 王宗古
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1VTSEtgs657U9va2vL9z9x
        subject_person_id: p_V5FBmRxupdWUxE9LxixBJK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_78rgaADZUVDSBeZRLA1Pyr
          claim_id: c_1VTSEtgs657U9va2vL9z9x
          source_id: s_BarYQ4uo6s8BA6FoeouhBo
          stance: supports
          locator: CBDB:26287
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26287）
          source: &a1
            id: s_BarYQ4uo6s8BA6FoeouhBo
            source_type: api_record
            title: 中国历代人物传记资料库：王宗古（CBDB 26287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26287&o=json
            external_identifier: CBDB:26287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GQRx4PoGHax6EDMF6BPwaY
        subject_person_id: p_V5FBmRxupdWUxE9LxixBJK
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
        - id: cs_bnw4h987axBDiEQDLBcW3B
          claim_id: c_GQRx4PoGHax6EDMF6BPwaY
          source_id: s_BarYQ4uo6s8BA6FoeouhBo
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

# 王宗古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗古 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗古（CBDB 26287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26287&o=json)
