---
schema: wang-person/v1
id: p_ahRv1N5TihoSEHkJjgydBU
status: active
merged_into: null
display_name: 王槐生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mMGpCheEuegqDKt5X3HPP7
        subject_person_id: p_ahRv1N5TihoSEHkJjgydBU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wxBERugN8yzbMpxo9mNJQc
          claim_id: c_mMGpCheEuegqDKt5X3HPP7
          source_id: s_GavSZVK9jBHzhXXUjVumLy
          stance: supports
          locator: CBDB:638812
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638812）
          source: &a1
            id: s_GavSZVK9jBHzhXXUjVumLy
            source_type: api_record
            title: 中国历代人物传记资料库：王槐生（CBDB 638812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638812&o=json
            external_identifier: CBDB:638812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fjs4EKJoPvBxkB4qjJdHQE
        subject_person_id: p_ahRv1N5TihoSEHkJjgydBU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐生，清人物。籍贯元和，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 638812）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bUoOOvbDhnBCnN5GmHv5UA
          claim_id: c_fjs4EKJoPvBxkB4qjJdHQE
          source_id: s_GavSZVK9jBHzhXXUjVumLy
          stance: supports
          locator: CBDB:638812
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

# 王槐生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槐生 | accepted |
| bio.summary | 王槐生，清人物。籍贯元和，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 638812） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王槐生（CBDB 638812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638812&o=json)
