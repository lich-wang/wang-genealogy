---
schema: wang-person/v1
id: p_FdFsC27rCQqXnuxamatWH8
status: active
merged_into: null
display_name: 王萬適
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JTC4eu98cp1BBM3EbA8EAN
        subject_person_id: p_FdFsC27rCQqXnuxamatWH8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬適
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G58AHwrwqcZz1CyLD3dnXe
          claim_id: c_JTC4eu98cp1BBM3EbA8EAN
          source_id: s_Kpk43bSi71zHe5eCWKJmb6
          stance: supports
          locator: CBDB:640124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640124）
          source: &a1
            id: s_Kpk43bSi71zHe5eCWKJmb6
            source_type: api_record
            title: 中国历代人物传记资料库：王萬適（CBDB 640124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640124&o=json
            external_identifier: CBDB:640124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xt4rCHLN8E3nJHLYxLzTdq
        subject_person_id: p_FdFsC27rCQqXnuxamatWH8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬適，清人物。籍贯西安，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640124）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k_1PbcsT-RJqxfpdvn21cL
          claim_id: c_Xt4rCHLN8E3nJHLYxLzTdq
          source_id: s_Kpk43bSi71zHe5eCWKJmb6
          stance: supports
          locator: CBDB:640124
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

# 王萬適

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬適 | accepted |
| bio.summary | 王萬適，清人物。籍贯西安，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640124） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬適（CBDB 640124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640124&o=json)
