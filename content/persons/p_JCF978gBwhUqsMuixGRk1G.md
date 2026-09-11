---
schema: wang-person/v1
id: p_JCF978gBwhUqsMuixGRk1G
status: active
merged_into: null
display_name: 王鉁基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_voYa8WJFo7bpCXMCKP6U8y
        subject_person_id: p_JCF978gBwhUqsMuixGRk1G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉁基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1RdEyPPPw1oP6h4F6fVSra
          claim_id: c_voYa8WJFo7bpCXMCKP6U8y
          source_id: s_mhgNNHfyGxPtascpGCzMX3
          stance: supports
          locator: CBDB:640553
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640553）
          source: &a1
            id: s_mhgNNHfyGxPtascpGCzMX3
            source_type: api_record
            title: 中国历代人物传记资料库：王鉁基（CBDB 640553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640553&o=json
            external_identifier: CBDB:640553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pS8Crdmi7VVziTrArVeiB3
        subject_person_id: p_JCF978gBwhUqsMuixGRk1G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉁基，清人物。籍贯富平，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640553）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3GFRKGXCj1zxEiqNbpDhaF
          claim_id: c_pS8Crdmi7VVziTrArVeiB3
          source_id: s_mhgNNHfyGxPtascpGCzMX3
          stance: supports
          locator: CBDB:640553
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

# 王鉁基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉁基 | accepted |
| bio.summary | 王鉁基，清人物。籍贯富平，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640553） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉁基（CBDB 640553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640553&o=json)
