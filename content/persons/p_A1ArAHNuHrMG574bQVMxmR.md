---
schema: wang-person/v1
id: p_A1ArAHNuHrMG574bQVMxmR
status: active
merged_into: null
display_name: 王星齋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kr3c32hUitXh8xCnfr1ZGQ
        subject_person_id: p_A1ArAHNuHrMG574bQVMxmR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星齋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MuA5HDLHd2EhaBpDNbJtVR
          claim_id: c_kr3c32hUitXh8xCnfr1ZGQ
          source_id: s_JLXXDs37mwvMzTwAMHEqD8
          stance: supports
          locator: CBDB:638403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638403）
          source: &a1
            id: s_JLXXDs37mwvMzTwAMHEqD8
            source_type: api_record
            title: 中国历代人物传记资料库：王星齋（CBDB 638403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638403&o=json
            external_identifier: CBDB:638403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5KytYBAJWEFPE4yWs7KHML
        subject_person_id: p_A1ArAHNuHrMG574bQVMxmR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星齋，清人物。籍贯商河，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638403）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U7YFZWr0yR64v-knYVVlqZ
          claim_id: c_5KytYBAJWEFPE4yWs7KHML
          source_id: s_JLXXDs37mwvMzTwAMHEqD8
          stance: supports
          locator: CBDB:638403
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

# 王星齋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王星齋 | accepted |
| bio.summary | 王星齋，清人物。籍贯商河，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638403） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王星齋（CBDB 638403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638403&o=json)
