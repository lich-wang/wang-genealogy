---
schema: wang-person/v1
id: p_RS2W3n49bW5BA66yaN5W5m
status: active
merged_into: null
display_name: 王永江
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nawr9usNXB3NsfG5x8z4jf
        subject_person_id: p_RS2W3n49bW5BA66yaN5W5m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永江
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nV5UmVw8oUw1gcoif7G8CE
          claim_id: c_nawr9usNXB3NsfG5x8z4jf
          source_id: s_F4HPkAkFwB4UYszZvtxPLh
          stance: supports
          locator: CBDB:71505
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71505）
          source: &a1
            id: s_F4HPkAkFwB4UYszZvtxPLh
            source_type: api_record
            title: 中国历代人物传记资料库：王永江（CBDB 71505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71505&o=json
            external_identifier: CBDB:71505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JDE3LLBqVRowWZ7LHnptp2
        subject_person_id: p_RS2W3n49bW5BA66yaN5W5m
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1872年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zGCxEYMYVySdBENZJ8qkmJ
          claim_id: c_JDE3LLBqVRowWZ7LHnptp2
          source_id: s_F4HPkAkFwB4UYszZvtxPLh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_66RdN4kqFYG88HxYbV1YoA
        subject_person_id: p_RS2W3n49bW5BA66yaN5W5m
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1927年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PsAanPsvTs3LhCUphQivp7
          claim_id: c_66RdN4kqFYG88HxYbV1YoA
          source_id: s_F4HPkAkFwB4UYszZvtxPLh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P2FehwMUe7mny7ND2A7VHy
        subject_person_id: p_RS2W3n49bW5BA66yaN5W5m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永江（1872年—1927年），中華民國人物。籍贯金州廳。（中国历代人物传记资料库 CBDB 71505）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N36QfXTegf-pkcM0d7Bi0W
          claim_id: c_P2FehwMUe7mny7ND2A7VHy
          source_id: s_F4HPkAkFwB4UYszZvtxPLh
          stance: supports
          locator: CBDB:71505
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

# 王永江

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永江 | accepted |
| birth.date | 1872年 | accepted |
| death.date | 1927年 | accepted |
| bio.summary | 王永江（1872年—1927年），中華民國人物。籍贯金州廳。（中国历代人物传记资料库 CBDB 71505） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永江（CBDB 71505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71505&o=json)
