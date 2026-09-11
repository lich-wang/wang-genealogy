---
schema: wang-person/v1
id: p_9Q7uhQC22fPEsN2oUu895D
status: active
merged_into: null
display_name: 王逢新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RghAyFBgyJMoSmTx7SvQ8V
        subject_person_id: p_9Q7uhQC22fPEsN2oUu895D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LpZD4CTLaFR8zswMzPvPNS
          claim_id: c_RghAyFBgyJMoSmTx7SvQ8V
          source_id: s_ELWnSPkXXBnjk3yJQLdEx7
          stance: supports
          locator: CBDB:640406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640406）
          source: &a1
            id: s_ELWnSPkXXBnjk3yJQLdEx7
            source_type: api_record
            title: 中国历代人物传记资料库：王逢新（CBDB 640406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640406&o=json
            external_identifier: CBDB:640406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_98fQa9cxzE3DGfWgyjvStQ
        subject_person_id: p_9Q7uhQC22fPEsN2oUu895D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢新，清人物。籍贯吳縣，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 640406）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sn4oCg67wPQspqjS_1xpw7
          claim_id: c_98fQa9cxzE3DGfWgyjvStQ
          source_id: s_ELWnSPkXXBnjk3yJQLdEx7
          stance: supports
          locator: CBDB:640406
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

# 王逢新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢新 | accepted |
| bio.summary | 王逢新，清人物。籍贯吳縣，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 640406） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逢新（CBDB 640406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640406&o=json)
