---
schema: wang-person/v1
id: p_sBrMrhYiBBDUN4Hikr4deA
status: active
merged_into: null
display_name: 王曮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jEEcJTei5Lp6BjHF7vV9XQ
        subject_person_id: p_sBrMrhYiBBDUN4Hikr4deA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f4ALMpF1SiQv9h8YDMmt78
          claim_id: c_jEEcJTei5Lp6BjHF7vV9XQ
          source_id: s_yZADfc6gEm28syB6nZcVCh
          stance: supports
          locator: CBDB:1924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1924）
          source: &a1
            id: s_yZADfc6gEm28syB6nZcVCh
            source_type: api_record
            title: 中国历代人物传记资料库：王曮（CBDB 1924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1924&o=json
            external_identifier: CBDB:1924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zEViM4HF8J3C4uuPLG3TQk
        subject_person_id: p_sBrMrhYiBBDUN4Hikr4deA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1175年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xHvb3y2SCwYv2tA9ao8iFo
          claim_id: c_zEViM4HF8J3C4uuPLG3TQk
          source_id: s_yZADfc6gEm28syB6nZcVCh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RcNqT2QqbqQWQwGyPGbgJe
        subject_person_id: p_sBrMrhYiBBDUN4Hikr4deA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王曮（卒于1175年），宋人物。籍贯江都，身份为史學家，入仕科舉制舉: 博學鴻詞/博學宏詞科，曾任軍器監主簿、右朝奉大夫、右朝請郎。（中国历代人物传记资料库 CBDB 1924）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XsvXrYqOK854Mfy0w-8LF2
          claim_id: c_RcNqT2QqbqQWQwGyPGbgJe
          source_id: s_yZADfc6gEm28syB6nZcVCh
          stance: supports
          locator: CBDB:1924
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

# 王曮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曮 | accepted |
| death.date | 1175年 | accepted |
| bio.summary | 王曮（卒于1175年），宋人物。籍贯江都，身份为史學家，入仕科舉制舉: 博學鴻詞/博學宏詞科，曾任軍器監主簿、右朝奉大夫、右朝請郎。（中国历代人物传记资料库 CBDB 1924） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曮（CBDB 1924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1924&o=json)
