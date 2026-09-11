---
schema: wang-person/v1
id: p_gj3ChVRNgLFZeWoHhoG72X
status: active
merged_into: null
display_name: 王嶽揚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J5UoQjFkPkXc8gT1JfYtFb
        subject_person_id: p_gj3ChVRNgLFZeWoHhoG72X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶽揚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RoRunDjsetaU9aoUMPpnkz
          claim_id: c_J5UoQjFkPkXc8gT1JfYtFb
          source_id: s_9WnZ84GvcQGk91gpcEcbPv
          stance: supports
          locator: CBDB:456948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456948）
          source: &a1
            id: s_9WnZ84GvcQGk91gpcEcbPv
            source_type: api_record
            title: 中国历代人物传记资料库：王嶽揚（CBDB 456948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456948&o=json
            external_identifier: CBDB:456948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JD2GHmGMhJo2T7eGSKk6m9
        subject_person_id: p_gj3ChVRNgLFZeWoHhoG72X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶽揚，清人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 456948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iR6vb8w9EFHxM6y4tYXuTy
          claim_id: c_JD2GHmGMhJo2T7eGSKk6m9
          source_id: s_9WnZ84GvcQGk91gpcEcbPv
          stance: supports
          locator: CBDB:456948
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

# 王嶽揚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶽揚 | accepted |
| bio.summary | 王嶽揚，清人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 456948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嶽揚（CBDB 456948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456948&o=json)
