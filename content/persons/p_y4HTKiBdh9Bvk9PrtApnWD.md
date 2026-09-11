---
schema: wang-person/v1
id: p_y4HTKiBdh9Bvk9PrtApnWD
status: active
merged_into: null
display_name: 王元輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fBfLQTifCDsL4Q2QxJR6RM
        subject_person_id: p_y4HTKiBdh9Bvk9PrtApnWD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i3feVMK9YWAC4Kj5hNpdR7
          claim_id: c_fBfLQTifCDsL4Q2QxJR6RM
          source_id: s_F4e42YjXD6xYtoJ6HnsAnm
          stance: supports
          locator: CBDB:465155
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465155）
          source: &a1
            id: s_F4e42YjXD6xYtoJ6HnsAnm
            source_type: api_record
            title: 中国历代人物传记资料库：王元輔（CBDB 465155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465155&o=json
            external_identifier: CBDB:465155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dFpHD4UAfe43UNfh8k7gCi
        subject_person_id: p_y4HTKiBdh9Bvk9PrtApnWD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王元輔，清人物。入仕貢生: 拔貢，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 465155）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XTppx-ZUS6sffrlXFtjx4z
          claim_id: c_dFpHD4UAfe43UNfh8k7gCi
          source_id: s_F4e42YjXD6xYtoJ6HnsAnm
          stance: supports
          locator: CBDB:465155
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

# 王元輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元輔 | accepted |
| bio.summary | 王元輔，清人物。入仕貢生: 拔貢，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 465155） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元輔（CBDB 465155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465155&o=json)
