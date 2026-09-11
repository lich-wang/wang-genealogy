---
schema: wang-person/v1
id: p_Sv82H9pGS9cLuyVyxBPi3A
status: active
merged_into: null
display_name: 王廷墀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7UuLkSzFSGf4SX2YS7ZSp5
        subject_person_id: p_Sv82H9pGS9cLuyVyxBPi3A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷墀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_deWYseyVDyA8szfn1CxqfC
          claim_id: c_7UuLkSzFSGf4SX2YS7ZSp5
          source_id: s_puvKhRydRCwVMLwHmrvruu
          stance: supports
          locator: CBDB:637490
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637490）
          source: &a1
            id: s_puvKhRydRCwVMLwHmrvruu
            source_type: api_record
            title: 中国历代人物传记资料库：王廷墀（CBDB 637490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637490&o=json
            external_identifier: CBDB:637490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1A1na9HR6Qvpzrea1KTWpU
        subject_person_id: p_Sv82H9pGS9cLuyVyxBPi3A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷墀，清人物。籍贯上元，入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 637490）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fbN9F-svB6qdcBL3matm8d
          claim_id: c_1A1na9HR6Qvpzrea1KTWpU
          source_id: s_puvKhRydRCwVMLwHmrvruu
          stance: supports
          locator: CBDB:637490
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

# 王廷墀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷墀 | accepted |
| bio.summary | 王廷墀，清人物。籍贯上元，入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 637490） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷墀（CBDB 637490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637490&o=json)
