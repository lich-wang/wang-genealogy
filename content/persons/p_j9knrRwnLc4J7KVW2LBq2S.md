---
schema: wang-person/v1
id: p_j9knrRwnLc4J7KVW2LBq2S
status: active
merged_into: null
display_name: 王衢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8AeVr4NGb77e4p5ePA638S
        subject_person_id: p_j9knrRwnLc4J7KVW2LBq2S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_93kaM1pEcLrFyEzrPwJhqp
          claim_id: c_8AeVr4NGb77e4p5ePA638S
          source_id: s_NBi4Avq1K1RypeYuN6NDH4
          stance: supports
          locator: CBDB:533004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（533004）
          source: &a1
            id: s_NBi4Avq1K1RypeYuN6NDH4
            source_type: api_record
            title: 中国历代人物传记资料库：王衢（CBDB 533004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533004&o=json
            external_identifier: CBDB:533004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZtLt6BPmWhMYz5M9UgvBsk
        subject_person_id: p_j9knrRwnLc4J7KVW2LBq2S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衢，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 533004）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UJ0Q1b6LcbVjAkIsy34b-W
          claim_id: c_ZtLt6BPmWhMYz5M9UgvBsk
          source_id: s_NBi4Avq1K1RypeYuN6NDH4
          stance: supports
          locator: CBDB:533004
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

# 王衢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衢 | accepted |
| bio.summary | 王衢，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 533004） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衢（CBDB 533004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533004&o=json)
