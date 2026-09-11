---
schema: wang-person/v1
id: p_QpyM9VFEY5YMqvL4Kb3WVn
status: active
merged_into: null
display_name: 王文奎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z3Yy6mPgvFWgpcNrAofoHK
        subject_person_id: p_QpyM9VFEY5YMqvL4Kb3WVn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zm6cjaCQqMCGG8J27kxjGi
          claim_id: c_z3Yy6mPgvFWgpcNrAofoHK
          source_id: s_HjHDhujtrE4k4GFXyFDgK2
          stance: supports
          locator: CBDB:304736
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304736）
          source: &a1
            id: s_HjHDhujtrE4k4GFXyFDgK2
            source_type: api_record
            title: 中国历代人物传记资料库：王文奎（CBDB 304736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304736&o=json
            external_identifier: CBDB:304736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.733Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1MEntJVon7v5pURRKkpuWQ
        subject_person_id: p_QpyM9VFEY5YMqvL4Kb3WVn
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
        - id: cs_gB2Pwp51BMbz5R7t4EjG1G
          claim_id: c_1MEntJVon7v5pURRKkpuWQ
          source_id: s_HjHDhujtrE4k4GFXyFDgK2
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
  descendants:
    - claim:
        id: c_AZd81Yct9R4H4FdBdDg64R
        subject_person_id: p_QpyM9VFEY5YMqvL4Kb3WVn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PdBPJVHqizEMUoTmb638jr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R79RMi8Ebp7WJvaYZ2qX7f
          claim_id: c_AZd81Yct9R4H4FdBdDg64R
          source_id: s_HjHDhujtrE4k4GFXyFDgK2
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百四十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PdBPJVHqizEMUoTmb638jr
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  other: []
---

# 王文奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文奎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_PdBPJVHqizEMUoTmb638jr | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文奎（CBDB 304736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304736&o=json)
