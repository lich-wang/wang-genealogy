---
schema: wang-person/v1
id: p_S2nE4B3gA2JHrkDb19zW36
status: active
merged_into: null
display_name: 王鍾㒞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_btqjWLaC3DXCqiuymRF9Mv
        subject_person_id: p_S2nE4B3gA2JHrkDb19zW36
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾㒞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Jx7CEgmAzWW8tRhcoy59D
          claim_id: c_btqjWLaC3DXCqiuymRF9Mv
          source_id: s_o1oqwF3Q3z16kb1J51TcZV
          stance: supports
          locator: CBDB:640665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640665）
          source: &a1
            id: s_o1oqwF3Q3z16kb1J51TcZV
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾㒞（CBDB 640665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640665&o=json
            external_identifier: CBDB:640665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.325Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WpxCuLwpNDHWT1CBCAPqST
        subject_person_id: p_S2nE4B3gA2JHrkDb19zW36
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾㒞，清人物。籍贯寶坻，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 640665）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oueXUjymIGuxBSPJ-BgYPh
          claim_id: c_WpxCuLwpNDHWT1CBCAPqST
          source_id: s_o1oqwF3Q3z16kb1J51TcZV
          stance: supports
          locator: CBDB:640665
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

# 王鍾㒞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾㒞 | accepted |
| bio.summary | 王鍾㒞，清人物。籍贯寶坻，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 640665） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾㒞（CBDB 640665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640665&o=json)
