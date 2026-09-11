---
schema: wang-person/v1
id: p_D5j3yWq3e8GU84DQw5SxGW
status: active
merged_into: null
display_name: 王有慶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gPyyeJEwRa8H6wcZPwRJzk
        subject_person_id: p_D5j3yWq3e8GU84DQw5SxGW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_faDDvJZgcmC1cL5DsKC8hD
          claim_id: c_gPyyeJEwRa8H6wcZPwRJzk
          source_id: s_j3oejmwbUYxDX8YbqxTsrd
          stance: supports
          locator: CBDB:703012
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703012）
          source: &a1
            id: s_j3oejmwbUYxDX8YbqxTsrd
            source_type: api_record
            title: 中国历代人物传记资料库：王有慶（CBDB 703012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703012&o=json
            external_identifier: CBDB:703012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u6MrQDGNeG4QP9EVnDBvWZ
        subject_person_id: p_D5j3yWq3e8GU84DQw5SxGW
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
        - id: cs_hWdPgD4VmwpdrH3FAaUVrK
          claim_id: c_u6MrQDGNeG4QP9EVnDBvWZ
          source_id: s_j3oejmwbUYxDX8YbqxTsrd
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
        id: c_5NYEME1PrS--dwQmddSEoR
        subject_person_id: p_ZR8Da315QkM4RAzgHysMFz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D5j3yWq3e8GU84DQw5SxGW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EqBrqt8D34GtYY3cDt-Cxh
          claim_id: c_5NYEME1PrS--dwQmddSEoR
          source_id: s_j3oejmwbUYxDX8YbqxTsrd
          stance: supports
          locator: "元和唯亭志: 二十卷，lgid=179066：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZR8Da315QkM4RAzgHysMFz
        status: active
        display_name: 王仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王有慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有慶 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZR8Da315QkM4RAzgHysMFz | 王仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王有慶（CBDB 703012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703012&o=json)
