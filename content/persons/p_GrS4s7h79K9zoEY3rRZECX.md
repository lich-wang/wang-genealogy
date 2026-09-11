---
schema: wang-person/v1
id: p_GrS4s7h79K9zoEY3rRZECX
status: active
merged_into: null
display_name: 王鴻岸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MHDM1ifEHfrKytdeZw5jL6
        subject_person_id: p_GrS4s7h79K9zoEY3rRZECX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻岸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bRvxkyvYL7AnWkri2t8ZBK
          claim_id: c_MHDM1ifEHfrKytdeZw5jL6
          source_id: s_8uXew2Kb7dPeQsxUiLfK8L
          stance: supports
          locator: CBDB:703822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703822）
          source: &a1
            id: s_8uXew2Kb7dPeQsxUiLfK8L
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻岸（CBDB 703822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703822&o=json
            external_identifier: CBDB:703822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pni5ZtUvRwjA56QKJtEMhL
        subject_person_id: p_GrS4s7h79K9zoEY3rRZECX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻岸，清人物。籍贯婺源。（中国历代人物传记资料库 CBDB 703822）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QR5GmvNPT2KstcKqx8hWcO
          claim_id: c_pni5ZtUvRwjA56QKJtEMhL
          source_id: s_8uXew2Kb7dPeQsxUiLfK8L
          stance: supports
          locator: CBDB:703822
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h9h8A3rMlTTKfiOc5hiy0D
        subject_person_id: p_Qef2MJ1jGD9JVkKPqn8JZy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GrS4s7h79K9zoEY3rRZECX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_giH6Vx4u_2QMkz1kPB4O7f
          claim_id: c_h9h8A3rMlTTKfiOc5hiy0D
          source_id: s_8uXew2Kb7dPeQsxUiLfK8L
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160985：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Qef2MJ1jGD9JVkKPqn8JZy
        status: active
        display_name: 王朝玬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鴻岸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻岸 | accepted |
| bio.summary | 王鴻岸，清人物。籍贯婺源。（中国历代人物传记资料库 CBDB 703822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Qef2MJ1jGD9JVkKPqn8JZy | 王朝玬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鴻岸（CBDB 703822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703822&o=json)
