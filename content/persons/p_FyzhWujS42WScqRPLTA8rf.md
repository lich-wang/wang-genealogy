---
schema: wang-person/v1
id: p_FyzhWujS42WScqRPLTA8rf
status: active
merged_into: null
display_name: 王譔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fFj3R2sV8brspE7zsWHZQ6
        subject_person_id: p_FyzhWujS42WScqRPLTA8rf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王譔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t5U1BtiyeJ4uB8GNX8HJoj
          claim_id: c_fFj3R2sV8brspE7zsWHZQ6
          source_id: s_JMuu3sVHzGuP3Z6KUJ3FUV
          stance: supports
          locator: CBDB:157636
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157636）
          source: &a1
            id: s_JMuu3sVHzGuP3Z6KUJ3FUV
            source_type: api_record
            title: 中国历代人物传记资料库：王譔（CBDB 157636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157636&o=json
            external_identifier: CBDB:157636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uBesJaeAnMXzjSAKGyC3mf
        subject_person_id: p_FyzhWujS42WScqRPLTA8rf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sWJgJn5T8525zLYkM3jHGX
          claim_id: c_uBesJaeAnMXzjSAKGyC3mf
          source_id: s_JMuu3sVHzGuP3Z6KUJ3FUV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1CUAUYRIWOEA9l17LFyJ97
        subject_person_id: p_kW6BHpFnPbBsA8JbJBRAGy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FyzhWujS42WScqRPLTA8rf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MrPK1FsQ6l6twSimMG2151
          claim_id: c_1CUAUYRIWOEA9l17LFyJ97
          source_id: s_JMuu3sVHzGuP3Z6KUJ3FUV
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 15：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kW6BHpFnPbBsA8JbJBRAGy
        status: active
        display_name: 王師正
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王譔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王譔 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kW6BHpFnPbBsA8JbJBRAGy | 王師正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王譔（CBDB 157636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157636&o=json)
