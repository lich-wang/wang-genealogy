---
schema: wang-person/v1
id: p_NhJEuRkw8RUmufbhCLgHKX
status: active
merged_into: null
display_name: 王存禮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eafBXESByf7x5K6pUrbdJW
        subject_person_id: p_NhJEuRkw8RUmufbhCLgHKX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uy9DXigMAtkT3tNZYGnKSg
          claim_id: c_eafBXESByf7x5K6pUrbdJW
          source_id: s_4f9ZNVrVDKa6EuGDgqZWF8
          stance: supports
          locator: CBDB:168658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（168658）
          source: &a1
            id: s_4f9ZNVrVDKa6EuGDgqZWF8
            source_type: api_record
            title: 中国历代人物传记资料库：王存禮（CBDB 168658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168658&o=json
            external_identifier: CBDB:168658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DEfXy3VmxrEraSuw2mLLiu
        subject_person_id: p_NhJEuRkw8RUmufbhCLgHKX
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
        - id: cs_MyDoLgrcut1RRaM7k5Fhor
          claim_id: c_DEfXy3VmxrEraSuw2mLLiu
          source_id: s_4f9ZNVrVDKa6EuGDgqZWF8
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
        id: c_WjQX3zqMw9m9-R7AcAE6_6
        subject_person_id: p_SHe13yjmVoW5sTUP3iaJYy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NhJEuRkw8RUmufbhCLgHKX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AZ-O18EVdjpaHtPA06AmBU
          claim_id: c_WjQX3zqMw9m9-R7AcAE6_6
          source_id: s_4f9ZNVrVDKa6EuGDgqZWF8
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Qianfu22：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SHe13yjmVoW5sTUP3iaJYy
        status: active
        display_name: 王公操
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王存禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存禮 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SHe13yjmVoW5sTUP3iaJYy | 王公操 | accepted |

## 外部来源

- [中国历代人物传记资料库：王存禮（CBDB 168658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168658&o=json)
