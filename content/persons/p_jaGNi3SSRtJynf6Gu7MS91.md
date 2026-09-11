---
schema: wang-person/v1
id: p_jaGNi3SSRtJynf6Gu7MS91
status: active
merged_into: null
display_name: 王詵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1PQdsSLB7P6ckG8FVrRi59
        subject_person_id: p_jaGNi3SSRtJynf6Gu7MS91
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rzdkg9hxVCYohh37c4831c
          claim_id: c_1PQdsSLB7P6ckG8FVrRi59
          source_id: s_uHj44KjyYWVn9HKByDF7jS
          stance: supports
          locator: CBDB:157637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157637）
          source: &a1
            id: s_uHj44KjyYWVn9HKByDF7jS
            source_type: api_record
            title: 中国历代人物传记资料库：王詵（CBDB 157637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157637&o=json
            external_identifier: CBDB:157637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hwNRhj9eJ3tt2dScmw8Vjz
        subject_person_id: p_jaGNi3SSRtJynf6Gu7MS91
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
        - id: cs_81eGwwGfgVZf3VdyoLstUo
          claim_id: c_hwNRhj9eJ3tt2dScmw8Vjz
          source_id: s_uHj44KjyYWVn9HKByDF7jS
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
        id: c_HGWqICmnQmfRg5Oob0UrVd
        subject_person_id: p_kW6BHpFnPbBsA8JbJBRAGy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jaGNi3SSRtJynf6Gu7MS91
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYk6S8fY02Rz8shajRo4Ds
          claim_id: c_HGWqICmnQmfRg5Oob0UrVd
          source_id: s_uHj44KjyYWVn9HKByDF7jS
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

# 王詵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詵 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kW6BHpFnPbBsA8JbJBRAGy | 王師正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詵（CBDB 157637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157637&o=json)
