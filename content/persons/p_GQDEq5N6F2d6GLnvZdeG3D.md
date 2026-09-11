---
schema: wang-person/v1
id: p_GQDEq5N6F2d6GLnvZdeG3D
status: active
merged_into: null
display_name: 王元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rkiT7SiDTpkCPaorP1FH9T
        subject_person_id: p_GQDEq5N6F2d6GLnvZdeG3D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NJxQbhyN7cVMEbCNPn5mam
          claim_id: c_rkiT7SiDTpkCPaorP1FH9T
          source_id: s_6zoQLJCFABTgGZkECcYtQ3
          stance: supports
          locator: CBDB:491340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491340）
          source: &a1
            id: s_6zoQLJCFABTgGZkECcYtQ3
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 491340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491340&o=json
            external_identifier: CBDB:491340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_whq1GfKRaK94XkwqMX9Vj4
        subject_person_id: p_GQDEq5N6F2d6GLnvZdeG3D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 491340）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7OpJIwRgiuGQGM0eeM5dmg
          claim_id: c_whq1GfKRaK94XkwqMX9Vj4
          source_id: s_6zoQLJCFABTgGZkECcYtQ3
          stance: supports
          locator: CBDB:491340
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

# 王元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元 | accepted |
| bio.summary | 王元，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 491340） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元（CBDB 491340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491340&o=json)
