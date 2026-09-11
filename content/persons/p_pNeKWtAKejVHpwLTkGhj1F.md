---
schema: wang-person/v1
id: p_pNeKWtAKejVHpwLTkGhj1F
status: active
merged_into: null
display_name: 王傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nDcj4ACmTKt4EUDD1mme5T
        subject_person_id: p_pNeKWtAKejVHpwLTkGhj1F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HYgVKdvWpaF87TQ2mAExzn
          claim_id: c_nDcj4ACmTKt4EUDD1mme5T
          source_id: s_s1AuHE35Zz2QxiNpgihxos
          stance: supports
          locator: CBDB:457249
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457249）
          source: &a1
            id: s_s1AuHE35Zz2QxiNpgihxos
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 457249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457249&o=json
            external_identifier: CBDB:457249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rrJmGtL8Bvx7UMDqMYYmNs
        subject_person_id: p_pNeKWtAKejVHpwLTkGhj1F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑，清人物。曾任副將。（中国历代人物传记资料库 CBDB 457249）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mgYQ7CFedjpeGlBwRf-5zH
          claim_id: c_rrJmGtL8Bvx7UMDqMYYmNs
          source_id: s_s1AuHE35Zz2QxiNpgihxos
          stance: supports
          locator: CBDB:457249
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

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | 王傑，清人物。曾任副將。（中国历代人物传记资料库 CBDB 457249） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 457249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457249&o=json)
