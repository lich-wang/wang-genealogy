---
schema: wang-person/v1
id: p_5464s2G4GdtNBoUC9P3xLm
status: active
merged_into: null
display_name: 王宣齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tze8yyixgCc3L7YomF91iu
        subject_person_id: p_5464s2G4GdtNBoUC9P3xLm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8rTaizaLFmJSP5C4gio8BX
          claim_id: c_Tze8yyixgCc3L7YomF91iu
          source_id: s_AeWhCWNXE9mU6xN4Mh1fpD
          stance: supports
          locator: CBDB:637155
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637155）
          source: &a1
            id: s_AeWhCWNXE9mU6xN4Mh1fpD
            source_type: api_record
            title: 中国历代人物传记资料库：王宣齢（CBDB 637155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637155&o=json
            external_identifier: CBDB:637155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3j67gtycHnMRf14UybanE3
        subject_person_id: p_5464s2G4GdtNBoUC9P3xLm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣齢，清人物。籍贯昌平州，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 637155）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8Hj9ocu_igPT3dFWIkRT3k
          claim_id: c_3j67gtycHnMRf14UybanE3
          source_id: s_AeWhCWNXE9mU6xN4Mh1fpD
          stance: supports
          locator: CBDB:637155
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

# 王宣齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣齢 | accepted |
| bio.summary | 王宣齢，清人物。籍贯昌平州，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 637155） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宣齢（CBDB 637155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637155&o=json)
