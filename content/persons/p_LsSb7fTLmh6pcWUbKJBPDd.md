---
schema: wang-person/v1
id: p_LsSb7fTLmh6pcWUbKJBPDd
status: active
merged_into: null
display_name: 王陞官
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_om6GxZD9LwARiTqmRZmAdi
        subject_person_id: p_LsSb7fTLmh6pcWUbKJBPDd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陞官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b6XPJNwmtJJwtDgLj7y5w1
          claim_id: c_om6GxZD9LwARiTqmRZmAdi
          source_id: s_Eu39gUL5ty6LxEsv2hTthW
          stance: supports
          locator: CBDB:640765
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640765）
          source: &a1
            id: s_Eu39gUL5ty6LxEsv2hTthW
            source_type: api_record
            title: 中国历代人物传记资料库：王陞官（CBDB 640765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640765&o=json
            external_identifier: CBDB:640765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_thth3tDQXthG79VcUmwuRS
        subject_person_id: p_LsSb7fTLmh6pcWUbKJBPDd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陞官，清人物。籍贯宛平，曾任都司、藍翎侍衛。（中国历代人物传记资料库 CBDB 640765）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-08dLzy4BQvLwsXer2sgyh
          claim_id: c_thth3tDQXthG79VcUmwuRS
          source_id: s_Eu39gUL5ty6LxEsv2hTthW
          stance: supports
          locator: CBDB:640765
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

# 王陞官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陞官 | accepted |
| bio.summary | 王陞官，清人物。籍贯宛平，曾任都司、藍翎侍衛。（中国历代人物传记资料库 CBDB 640765） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王陞官（CBDB 640765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640765&o=json)
