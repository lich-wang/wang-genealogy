---
schema: wang-person/v1
id: p_uCvRsvQN4Qg9LyRmLT3QPi
status: active
merged_into: null
display_name: 王仉曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rHNuvLYT9wJrCrfaU9xUyf
        subject_person_id: p_uCvRsvQN4Qg9LyRmLT3QPi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仉曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UP6DBME5ra54iVf8xXrkPG
          claim_id: c_rHNuvLYT9wJrCrfaU9xUyf
          source_id: s_L9xYZzaH3rsPz6gJ2usED9
          stance: supports
          locator: CBDB:635896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635896）
          source: &a1
            id: s_L9xYZzaH3rsPz6gJ2usED9
            source_type: api_record
            title: 中国历代人物传记资料库：王仉曾（CBDB 635896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635896&o=json
            external_identifier: CBDB:635896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PsGhEJCG4yYDECdtUEHUKp
        subject_person_id: p_uCvRsvQN4Qg9LyRmLT3QPi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仉曾，清人物。籍贯輝縣，曾任典史。（中国历代人物传记资料库 CBDB 635896）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xAhGwGvM1-eSSpfWSQosel
          claim_id: c_PsGhEJCG4yYDECdtUEHUKp
          source_id: s_L9xYZzaH3rsPz6gJ2usED9
          stance: supports
          locator: CBDB:635896
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

# 王仉曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仉曾 | accepted |
| bio.summary | 王仉曾，清人物。籍贯輝縣，曾任典史。（中国历代人物传记资料库 CBDB 635896） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仉曾（CBDB 635896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635896&o=json)
