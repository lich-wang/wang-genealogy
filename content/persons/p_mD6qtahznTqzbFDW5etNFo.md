---
schema: wang-person/v1
id: p_mD6qtahznTqzbFDW5etNFo
status: active
merged_into: null
display_name: 王炳同
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dw94r2o4a6GV2JHG5VQUE6
        subject_person_id: p_mD6qtahznTqzbFDW5etNFo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳同
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Yk175JQGHoZp3rpHfQkjyW
          claim_id: c_dw94r2o4a6GV2JHG5VQUE6
          source_id: s_joYbX3PtjxaWvGGc2h52wB
          stance: supports
          locator: CBDB:71908
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71908）
          source: &a1
            id: s_joYbX3PtjxaWvGGc2h52wB
            source_type: api_record
            title: 中国历代人物传记资料库：王炳同（CBDB 71908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71908&o=json
            external_identifier: CBDB:71908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sEBF5iLSf2RMBszBkW6AyD
        subject_person_id: p_mD6qtahznTqzbFDW5etNFo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1801年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CUGMz1wfyz1KTg9BH7vGf3
          claim_id: c_sEBF5iLSf2RMBszBkW6AyD
          source_id: s_joYbX3PtjxaWvGGc2h52wB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1AHGfC6songZDTWWHepKut
        subject_person_id: p_mD6qtahznTqzbFDW5etNFo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳同（生于1801年），清人物。籍贯文水。（中国历代人物传记资料库 CBDB 71908）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0cGCkssFokeaylwk10QT4b
          claim_id: c_1AHGfC6songZDTWWHepKut
          source_id: s_joYbX3PtjxaWvGGc2h52wB
          stance: supports
          locator: CBDB:71908
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

# 王炳同

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳同 | accepted |
| birth.date | 1801年 | accepted |
| bio.summary | 王炳同（生于1801年），清人物。籍贯文水。（中国历代人物传记资料库 CBDB 71908） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳同（CBDB 71908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71908&o=json)
