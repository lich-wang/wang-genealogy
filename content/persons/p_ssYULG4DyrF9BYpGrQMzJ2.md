---
schema: wang-person/v1
id: p_ssYULG4DyrF9BYpGrQMzJ2
status: active
merged_into: null
display_name: 王錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8vP55cEz7jVoApm21GUV2W
        subject_person_id: p_ssYULG4DyrF9BYpGrQMzJ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fyjL8C7QEMFiUdryASZ7zJ
          claim_id: c_8vP55cEz7jVoApm21GUV2W
          source_id: s_MVYcDUNpmNPLHQZHPRd3ca
          stance: supports
          locator: CBDB:71252
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71252）
          source: &a1
            id: s_MVYcDUNpmNPLHQZHPRd3ca
            source_type: api_record
            title: 中国历代人物传记资料库：王錫（CBDB 71252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71252&o=json
            external_identifier: CBDB:71252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UvHhJmcJ5rLASViTB6Ams5
        subject_person_id: p_ssYULG4DyrF9BYpGrQMzJ2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1801年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kpVptWNPQECHy3gcdmXeTC
          claim_id: c_UvHhJmcJ5rLASViTB6Ams5
          source_id: s_MVYcDUNpmNPLHQZHPRd3ca
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aAUXBA6snQ945EeUkjH7Km
        subject_person_id: p_ssYULG4DyrF9BYpGrQMzJ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫（生于1801年），清人物。籍贯河州。（中国历代人物传记资料库 CBDB 71252）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6sRxBlT2uXzGl7UbfemP_H
          claim_id: c_aAUXBA6snQ945EeUkjH7Km
          source_id: s_MVYcDUNpmNPLHQZHPRd3ca
          stance: supports
          locator: CBDB:71252
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

# 王錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫 | accepted |
| birth.date | 1801年 | accepted |
| bio.summary | 王錫（生于1801年），清人物。籍贯河州。（中国历代人物传记资料库 CBDB 71252） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫（CBDB 71252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71252&o=json)
