---
schema: wang-person/v1
id: p_S3M8uwLotsiecZfWMnLEzr
status: active
merged_into: null
display_name: 王萬森
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FaBetJqNsVQwR7UTDSb6rP
        subject_person_id: p_S3M8uwLotsiecZfWMnLEzr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_47CXMeiDtWF7qMCrMwt7MJ
          claim_id: c_FaBetJqNsVQwR7UTDSb6rP
          source_id: s_o19vMoKBH4gqNxzEXoVNq6
          stance: supports
          locator: CBDB:640120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640120）
          source: &a1
            id: s_o19vMoKBH4gqNxzEXoVNq6
            source_type: api_record
            title: 中国历代人物传记资料库：王萬森（CBDB 640120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640120&o=json
            external_identifier: CBDB:640120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tPPA13X4uMhD73Di6q3xz2
        subject_person_id: p_S3M8uwLotsiecZfWMnLEzr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬森，清人物。籍贯通州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640120）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I2HFWW_wqgQswQ04h_5Wad
          claim_id: c_tPPA13X4uMhD73Di6q3xz2
          source_id: s_o19vMoKBH4gqNxzEXoVNq6
          stance: supports
          locator: CBDB:640120
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

# 王萬森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬森 | accepted |
| bio.summary | 王萬森，清人物。籍贯通州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640120） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬森（CBDB 640120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640120&o=json)
