---
schema: wang-person/v1
id: p_zdceqcwzbsWCyvZVY3nEuE
status: active
merged_into: null
display_name: 王承華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jbBkFfRuBJKAbgfLK6DbFL
        subject_person_id: p_zdceqcwzbsWCyvZVY3nEuE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KNBCZ92Y4SD1aErLkoHMt5
          claim_id: c_jbBkFfRuBJKAbgfLK6DbFL
          source_id: s_eksjDoFKQEa5GuKxiTfHQL
          stance: supports
          locator: CBDB:638105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638105）
          source: &a1
            id: s_eksjDoFKQEa5GuKxiTfHQL
            source_type: api_record
            title: 中国历代人物传记资料库：王承華（CBDB 638105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638105&o=json
            external_identifier: CBDB:638105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.525Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vva9K5JYSQG9hbY1wcrnwe
        subject_person_id: p_zdceqcwzbsWCyvZVY3nEuE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承華，清人物。籍贯華亭，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638105）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uDMyTvm63GpLR08X2eqkVu
          claim_id: c_vva9K5JYSQG9hbY1wcrnwe
          source_id: s_eksjDoFKQEa5GuKxiTfHQL
          stance: supports
          locator: CBDB:638105
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

# 王承華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承華 | accepted |
| bio.summary | 王承華，清人物。籍贯華亭，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承華（CBDB 638105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638105&o=json)
