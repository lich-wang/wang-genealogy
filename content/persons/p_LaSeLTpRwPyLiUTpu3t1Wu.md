---
schema: wang-person/v1
id: p_LaSeLTpRwPyLiUTpu3t1Wu
status: active
merged_into: null
display_name: 王文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Syc27tyu8QG162jkVcuQh7
        subject_person_id: p_LaSeLTpRwPyLiUTpu3t1Wu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5py8ojoqot5649iDQRHCZT
          claim_id: c_Syc27tyu8QG162jkVcuQh7
          source_id: s_YE2t6HhKmVKG6AMNhFq8Lu
          stance: supports
          locator: CBDB:261012
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261012）
          source: &a1
            id: s_YE2t6HhKmVKG6AMNhFq8Lu
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 261012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261012&o=json
            external_identifier: CBDB:261012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.533Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QwQxQPfhGa9iUXhQV1xSsh
        subject_person_id: p_LaSeLTpRwPyLiUTpu3t1Wu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 261012）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xJCScswWoZmwuiZNVkx58I
          claim_id: c_QwQxQPfhGa9iUXhQV1xSsh
          source_id: s_YE2t6HhKmVKG6AMNhFq8Lu
          stance: supports
          locator: CBDB:261012
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_o0_81sYHwEaJoFmC-uVcAM
        subject_person_id: p_LaSeLTpRwPyLiUTpu3t1Wu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WfV9B4ZNGa1u8RHNsdFJs6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ObLgRoLaizzWcG-luPq5V5
          claim_id: c_o0_81sYHwEaJoFmC-uVcAM
          source_id: s_YE2t6HhKmVKG6AMNhFq8Lu
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WfV9B4ZNGa1u8RHNsdFJs6
        status: active
        display_name: 王瑩
        merged_into_person_id: null
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | 王文，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 261012） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_WfV9B4ZNGa1u8RHNsdFJs6 | 王瑩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文（CBDB 261012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261012&o=json)
