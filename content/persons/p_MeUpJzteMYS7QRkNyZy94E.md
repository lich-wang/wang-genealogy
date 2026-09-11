---
schema: wang-person/v1
id: p_MeUpJzteMYS7QRkNyZy94E
status: active
merged_into: null
display_name: 王弘學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6nNb82RQ9fCr1LtW8GHoz7
        subject_person_id: p_MeUpJzteMYS7QRkNyZy94E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x7VjFTszdkGp2gkj6zauZG
          claim_id: c_6nNb82RQ9fCr1LtW8GHoz7
          source_id: s_nCsc8JRaomk92vLE39BTWj
          stance: supports
          locator: CBDB:257396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257396）
          source: &a1
            id: s_nCsc8JRaomk92vLE39BTWj
            source_type: api_record
            title: 中国历代人物传记资料库：王弘學（CBDB 257396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257396&o=json
            external_identifier: CBDB:257396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.422Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_47hygJmi1EQw6qHSiqeud5
        subject_person_id: p_MeUpJzteMYS7QRkNyZy94E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘學，明人物。成化十七年進士，籍贯仙居。（中国历代人物传记资料库 CBDB 257396）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z5h8IDXRO6UNtp-1JDu5qc
          claim_id: c_47hygJmi1EQw6qHSiqeud5
          source_id: s_nCsc8JRaomk92vLE39BTWj
          stance: supports
          locator: CBDB:257396
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

# 王弘學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘學 | accepted |
| bio.summary | 王弘學，明人物。成化十七年進士，籍贯仙居。（中国历代人物传记资料库 CBDB 257396） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘學（CBDB 257396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257396&o=json)
