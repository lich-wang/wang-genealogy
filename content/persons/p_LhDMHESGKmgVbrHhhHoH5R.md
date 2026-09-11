---
schema: wang-person/v1
id: p_LhDMHESGKmgVbrHhhHoH5R
status: active
merged_into: null
display_name: 王峻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g6dBMffeK7KSEgAi9LZRJW
        subject_person_id: p_LhDMHESGKmgVbrHhhHoH5R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cMj2MorijKhLdPVujC2j8s
          claim_id: c_g6dBMffeK7KSEgAi9LZRJW
          source_id: s_EjVW7z9ECb6mpJcZZAVrRa
          stance: supports
          locator: CBDB:478193
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（478193）
          source: &a1
            id: s_EjVW7z9ECb6mpJcZZAVrRa
            source_type: api_record
            title: 中国历代人物传记资料库：王峻（CBDB 478193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478193&o=json
            external_identifier: CBDB:478193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H2KAE9VaeUw8FZy4ZyNggb
        subject_person_id: p_LhDMHESGKmgVbrHhhHoH5R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峻，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 478193）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e7QQH0UoQg0ISp7kWSf7rt
          claim_id: c_H2KAE9VaeUw8FZy4ZyNggb
          source_id: s_EjVW7z9ECb6mpJcZZAVrRa
          stance: supports
          locator: CBDB:478193
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

# 王峻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王峻 | accepted |
| bio.summary | 王峻，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 478193） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王峻（CBDB 478193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478193&o=json)
