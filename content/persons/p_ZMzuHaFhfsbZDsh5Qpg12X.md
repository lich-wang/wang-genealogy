---
schema: wang-person/v1
id: p_ZMzuHaFhfsbZDsh5Qpg12X
status: active
merged_into: null
display_name: 王述德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zBkPL3kmFDMWL9ZeQnSU34
        subject_person_id: p_ZMzuHaFhfsbZDsh5Qpg12X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uaf9Sm9JACJK3E2STQDuJz
          claim_id: c_zBkPL3kmFDMWL9ZeQnSU34
          source_id: s_J7Gj6EdTdZFC2ms5K4ZZvR
          stance: supports
          locator: CBDB:640395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640395）
          source: &a1
            id: s_J7Gj6EdTdZFC2ms5K4ZZvR
            source_type: api_record
            title: 中国历代人物传记资料库：王述德（CBDB 640395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640395&o=json
            external_identifier: CBDB:640395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.244Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K2nW9pXsw29EtsaLEWuBeL
        subject_person_id: p_ZMzuHaFhfsbZDsh5Qpg12X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述德，清人物。籍贯諸城，入仕副榜，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 640395）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wx5JZlPhco_B6I2Tv9_7MK
          claim_id: c_K2nW9pXsw29EtsaLEWuBeL
          source_id: s_J7Gj6EdTdZFC2ms5K4ZZvR
          stance: supports
          locator: CBDB:640395
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

# 王述德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述德 | accepted |
| bio.summary | 王述德，清人物。籍贯諸城，入仕副榜，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 640395） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王述德（CBDB 640395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640395&o=json)
