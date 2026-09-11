---
schema: wang-person/v1
id: p_DrCs6FuWrCKmbupj5kMk3h
status: active
merged_into: null
display_name: 王礧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fxmzjLHa6SvgUDymSHeV1h
        subject_person_id: p_DrCs6FuWrCKmbupj5kMk3h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王礧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dc2LN5SzUzJ7MoGAfFAwFf
          claim_id: c_fxmzjLHa6SvgUDymSHeV1h
          source_id: s_ti7ZqHC4vNom4mM3oJh2Jy
          stance: supports
          locator: CBDB:639558
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639558）
          source: &a1
            id: s_ti7ZqHC4vNom4mM3oJh2Jy
            source_type: api_record
            title: 中国历代人物传记资料库：王礧（CBDB 639558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639558&o=json
            external_identifier: CBDB:639558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KbYGh3yrEtQbfsG49gHVPQ
        subject_person_id: p_DrCs6FuWrCKmbupj5kMk3h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王礧，清人物。籍贯邵武，曾任知縣。（中国历代人物传记资料库 CBDB 639558）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jCaJw3MUXypnxAiO0J9rxF
          claim_id: c_KbYGh3yrEtQbfsG49gHVPQ
          source_id: s_ti7ZqHC4vNom4mM3oJh2Jy
          stance: supports
          locator: CBDB:639558
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

# 王礧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王礧 | accepted |
| bio.summary | 王礧，清人物。籍贯邵武，曾任知縣。（中国历代人物传记资料库 CBDB 639558） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王礧（CBDB 639558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639558&o=json)
