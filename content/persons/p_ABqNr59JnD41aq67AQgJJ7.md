---
schema: wang-person/v1
id: p_ABqNr59JnD41aq67AQgJJ7
status: active
merged_into: null
display_name: 王葆林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DEF9PFNEPh2WKiDw9KhAJv
        subject_person_id: p_ABqNr59JnD41aq67AQgJJ7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rr7Puuq2QkPX4ew2yXVdqs
          claim_id: c_DEF9PFNEPh2WKiDw9KhAJv
          source_id: s_nbq8Q45GG8nxuoip3sg4nQ
          stance: supports
          locator: CBDB:640134
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640134）
          source: &a1
            id: s_nbq8Q45GG8nxuoip3sg4nQ
            source_type: api_record
            title: 中国历代人物传记资料库：王葆林（CBDB 640134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640134&o=json
            external_identifier: CBDB:640134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5gTJziJCMnGgLYe8c7mLF1
        subject_person_id: p_ABqNr59JnD41aq67AQgJJ7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王葆林，清人物。籍贯汾陽，入仕監生: 例監(附監生)，曾任經歷。（中国历代人物传记资料库 CBDB 640134）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j1B8nVeTecU1duE_RN78En
          claim_id: c_5gTJziJCMnGgLYe8c7mLF1
          source_id: s_nbq8Q45GG8nxuoip3sg4nQ
          stance: supports
          locator: CBDB:640134
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

# 王葆林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葆林 | accepted |
| bio.summary | 王葆林，清人物。籍贯汾陽，入仕監生: 例監(附監生)，曾任經歷。（中国历代人物传记资料库 CBDB 640134） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王葆林（CBDB 640134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640134&o=json)
