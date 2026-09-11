---
schema: wang-person/v1
id: p_Gv4Fhua6TT6Z1k2hYi4nKo
status: active
merged_into: null
display_name: 王運峻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sKhzhistLnMsf2Ku2tSZbS
        subject_person_id: p_Gv4Fhua6TT6Z1k2hYi4nKo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運峻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XyydsGjwQdSX9dhmCDxKLG
          claim_id: c_sKhzhistLnMsf2Ku2tSZbS
          source_id: s_ofGey6gLuLtCU5kRqJFJGB
          stance: supports
          locator: CBDB:640438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640438）
          source: &a1
            id: s_ofGey6gLuLtCU5kRqJFJGB
            source_type: api_record
            title: 中国历代人物传记资料库：王運峻（CBDB 640438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640438&o=json
            external_identifier: CBDB:640438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZUmaD5JF1wjvUssnMpaUyv
        subject_person_id: p_Gv4Fhua6TT6Z1k2hYi4nKo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運峻，清人物。籍贯桂林府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640438）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_28vl5b3oEVkOwNxrfziMtw
          claim_id: c_ZUmaD5JF1wjvUssnMpaUyv
          source_id: s_ofGey6gLuLtCU5kRqJFJGB
          stance: supports
          locator: CBDB:640438
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

# 王運峻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運峻 | accepted |
| bio.summary | 王運峻，清人物。籍贯桂林府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640438） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運峻（CBDB 640438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640438&o=json)
