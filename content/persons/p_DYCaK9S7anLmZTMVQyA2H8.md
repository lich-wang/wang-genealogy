---
schema: wang-person/v1
id: p_DYCaK9S7anLmZTMVQyA2H8
status: active
merged_into: null
display_name: 王燮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A1bXEwtySgL8y28FagvXrf
        subject_person_id: p_DYCaK9S7anLmZTMVQyA2H8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LhEXKHTv8MtMMRNzWsoXEx
          claim_id: c_A1bXEwtySgL8y28FagvXrf
          source_id: s_7KuoQNaG32HDp7Ag7tnHf4
          stance: supports
          locator: CBDB:697891
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697891）
          source: &a1
            id: s_7KuoQNaG32HDp7Ag7tnHf4
            source_type: api_record
            title: 中国历代人物传记资料库：王燮（CBDB 697891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697891&o=json
            external_identifier: CBDB:697891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.734Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KqP6jbDnCkNRUFWEcFj8gK
        subject_person_id: p_DYCaK9S7anLmZTMVQyA2H8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燮，清人物。籍贯武進，曾任縣丞。（中国历代人物传记资料库 CBDB 697891）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VQTDogXYoqM1tPLhEvBSR2
          claim_id: c_KqP6jbDnCkNRUFWEcFj8gK
          source_id: s_7KuoQNaG32HDp7Ag7tnHf4
          stance: supports
          locator: CBDB:697891
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

# 王燮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燮 | accepted |
| bio.summary | 王燮，清人物。籍贯武進，曾任縣丞。（中国历代人物传记资料库 CBDB 697891） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燮（CBDB 697891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697891&o=json)
