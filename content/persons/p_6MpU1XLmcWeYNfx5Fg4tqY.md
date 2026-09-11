---
schema: wang-person/v1
id: p_6MpU1XLmcWeYNfx5Fg4tqY
status: active
merged_into: null
display_name: 王開祉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ihA463nXYjyL567CPZHzHw
        subject_person_id: p_6MpU1XLmcWeYNfx5Fg4tqY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開祉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hg8idWhgkN59Mea5DEeDNn
          claim_id: c_ihA463nXYjyL567CPZHzHw
          source_id: s_P7PoT4htNZN7N2cNMdBiFR
          stance: supports
          locator: CBDB:640752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640752）
          source: &a1
            id: s_P7PoT4htNZN7N2cNMdBiFR
            source_type: api_record
            title: 中国历代人物传记资料库：王開祉（CBDB 640752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640752&o=json
            external_identifier: CBDB:640752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MHye3Mxu6w6z36Dp9JyVmu
        subject_person_id: p_6MpU1XLmcWeYNfx5Fg4tqY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開祉，清人物。籍贯蘇州府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640752）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k3HUPJo-3DVrNdnN0bu89q
          claim_id: c_MHye3Mxu6w6z36Dp9JyVmu
          source_id: s_P7PoT4htNZN7N2cNMdBiFR
          stance: supports
          locator: CBDB:640752
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

# 王開祉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開祉 | accepted |
| bio.summary | 王開祉，清人物。籍贯蘇州府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640752） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開祉（CBDB 640752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640752&o=json)
