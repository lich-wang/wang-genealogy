---
schema: wang-person/v1
id: p_A8PXq36iS6rDG12BLTAqft
status: active
merged_into: null
display_name: 王鳳坦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SL64x8yJ55VbLnkGTEqLQA
        subject_person_id: p_A8PXq36iS6rDG12BLTAqft
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳坦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JoFmLmE4cYiddY88EMtp6A
          claim_id: c_SL64x8yJ55VbLnkGTEqLQA
          source_id: s_c5E2NdDqQGUruJ6rtisyDL
          stance: supports
          locator: CBDB:640926
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640926）
          source: &a1
            id: s_c5E2NdDqQGUruJ6rtisyDL
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳坦（CBDB 640926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640926&o=json
            external_identifier: CBDB:640926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.413Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VcYEubFRfeTSvJCLaZ5kCy
        subject_person_id: p_A8PXq36iS6rDG12BLTAqft
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳坦，清人物。籍贯無錫，入仕監生，曾任同知、縣丞、知縣。（中国历代人物传记资料库 CBDB 640926）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l_7-bpsNoEMx7adXyBAd7z
          claim_id: c_VcYEubFRfeTSvJCLaZ5kCy
          source_id: s_c5E2NdDqQGUruJ6rtisyDL
          stance: supports
          locator: CBDB:640926
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

# 王鳳坦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳坦 | accepted |
| bio.summary | 王鳳坦，清人物。籍贯無錫，入仕監生，曾任同知、縣丞、知縣。（中国历代人物传记资料库 CBDB 640926） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳坦（CBDB 640926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640926&o=json)
