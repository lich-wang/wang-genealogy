---
schema: wang-person/v1
id: p_WuuMRwdj1RrX1yztZ8C39m
status: active
merged_into: null
display_name: 王金城
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KHjdtwetwXg7uxWY3Y3Fcp
        subject_person_id: p_WuuMRwdj1RrX1yztZ8C39m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金城
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B5BgFjYsD2XRPm66kj4hUk
          claim_id: c_KHjdtwetwXg7uxWY3Y3Fcp
          source_id: s_pDAG32yTyCctjFBVs2bEyU
          stance: supports
          locator: CBDB:640510
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640510）
          source: &a1
            id: s_pDAG32yTyCctjFBVs2bEyU
            source_type: api_record
            title: 中国历代人物传记资料库：王金城（CBDB 640510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640510&o=json
            external_identifier: CBDB:640510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_unqef3Rz8x2g6ydFEjrxqG
        subject_person_id: p_WuuMRwdj1RrX1yztZ8C39m
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
        - id: cs_Nb9AF2fdghM1mvjq66Kmzs
          claim_id: c_unqef3Rz8x2g6ydFEjrxqG
          source_id: s_pDAG32yTyCctjFBVs2bEyU
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

# 王金城

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金城 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金城（CBDB 640510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640510&o=json)
