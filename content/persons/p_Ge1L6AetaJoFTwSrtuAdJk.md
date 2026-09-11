---
schema: wang-person/v1
id: p_Ge1L6AetaJoFTwSrtuAdJk
status: active
merged_into: null
display_name: 王光遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RHGhCVkFUeAVe4ECM5jBJL
        subject_person_id: p_Ge1L6AetaJoFTwSrtuAdJk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vyt8dNa4ZrfbSecbFX31MP
          claim_id: c_RHGhCVkFUeAVe4ECM5jBJL
          source_id: s_TPtNTWzGBMT9EXSCFbg3Cp
          stance: supports
          locator: CBDB:636281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636281）
          source: &a1
            id: s_TPtNTWzGBMT9EXSCFbg3Cp
            source_type: api_record
            title: 中国历代人物传记资料库：王光遠（CBDB 636281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636281&o=json
            external_identifier: CBDB:636281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rtrv2eDYaUx6AjNrRPKqXG
        subject_person_id: p_Ge1L6AetaJoFTwSrtuAdJk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光遠，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 636281）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OENeifHktqnXK7_HiNmVlm
          claim_id: c_rtrv2eDYaUx6AjNrRPKqXG
          source_id: s_TPtNTWzGBMT9EXSCFbg3Cp
          stance: supports
          locator: CBDB:636281
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
  descendants: []
  other: []
---

# 王光遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光遠 | accepted |
| bio.summary | 王光遠，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 636281） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光遠（CBDB 636281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636281&o=json)
