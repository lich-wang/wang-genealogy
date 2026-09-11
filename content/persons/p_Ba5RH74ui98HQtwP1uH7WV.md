---
schema: wang-person/v1
id: p_Ba5RH74ui98HQtwP1uH7WV
status: active
merged_into: null
display_name: 王作乂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FR6QQcq1MMC4aogeDdFK9A
        subject_person_id: p_Ba5RH74ui98HQtwP1uH7WV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作乂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sXfbTo8GFE8oDpj8dZTKjP
          claim_id: c_FR6QQcq1MMC4aogeDdFK9A
          source_id: s_AdCWBqPxrg5VrFAAq55Lju
          stance: supports
          locator: CBDB:635997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635997）
          source: &a1
            id: s_AdCWBqPxrg5VrFAAq55Lju
            source_type: api_record
            title: 中国历代人物传记资料库：王作乂（CBDB 635997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635997&o=json
            external_identifier: CBDB:635997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sKHa5ArKRU5NFheqrMHr3f
        subject_person_id: p_Ba5RH74ui98HQtwP1uH7WV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作乂，清人物。籍贯臨榆，入仕附貢生，曾任郎中。（中国历代人物传记资料库 CBDB 635997）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IH543JwUW10gQ_ls6wl8rx
          claim_id: c_sKHa5ArKRU5NFheqrMHr3f
          source_id: s_AdCWBqPxrg5VrFAAq55Lju
          stance: supports
          locator: CBDB:635997
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

# 王作乂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作乂 | accepted |
| bio.summary | 王作乂，清人物。籍贯臨榆，入仕附貢生，曾任郎中。（中国历代人物传记资料库 CBDB 635997） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作乂（CBDB 635997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635997&o=json)
