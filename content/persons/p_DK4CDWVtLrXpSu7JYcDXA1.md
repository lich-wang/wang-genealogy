---
schema: wang-person/v1
id: p_DK4CDWVtLrXpSu7JYcDXA1
status: active
merged_into: null
display_name: 王巘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xR9R7AhSB8JLnTwsZuhp91
        subject_person_id: p_DK4CDWVtLrXpSu7JYcDXA1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eqWikr6PYPbFBPqw5m5dPA
          claim_id: c_xR9R7AhSB8JLnTwsZuhp91
          source_id: s_A7fNFfzPkYSJLLL8bvGy7d
          stance: supports
          locator: CBDB:168889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（168889）
          source: &a1
            id: s_A7fNFfzPkYSJLLL8bvGy7d
            source_type: api_record
            title: 中国历代人物传记资料库：王巘（CBDB 168889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168889&o=json
            external_identifier: CBDB:168889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pe6Km5S8CHUPy5UAoMcTCH
        subject_person_id: p_DK4CDWVtLrXpSu7JYcDXA1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巘，唐人物。籍贯咸陽，曾任縣令。（中国历代人物传记资料库 CBDB 168889）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZpsO8QBmTKLsB1hpoxLs-_
          claim_id: c_pe6Km5S8CHUPy5UAoMcTCH
          source_id: s_A7fNFfzPkYSJLLL8bvGy7d
          stance: supports
          locator: CBDB:168889
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LwQZEhoM3CCNuprWOah3kw
        subject_person_id: p_NjCutxXs9zS5t3DhqKeWT7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DK4CDWVtLrXpSu7JYcDXA1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O5VtMyD3GZjbM-7I0bKixa
          claim_id: c_LwQZEhoM3CCNuprWOah3kw
          source_id: s_A7fNFfzPkYSJLLL8bvGy7d
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NjCutxXs9zS5t3DhqKeWT7
        status: active
        display_name: 王仲周
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王巘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巘 | accepted |
| bio.summary | 王巘，唐人物。籍贯咸陽，曾任縣令。（中国历代人物传记资料库 CBDB 168889） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NjCutxXs9zS5t3DhqKeWT7 | 王仲周 | accepted |

## 外部来源

- [中国历代人物传记资料库：王巘（CBDB 168889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168889&o=json)
