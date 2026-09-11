---
schema: wang-person/v1
id: p_Eg4noAN23ZMYbedVY91MsQ
status: active
merged_into: null
display_name: 王道新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J6J6pH8c5jnT2xJECN389k
        subject_person_id: p_Eg4noAN23ZMYbedVY91MsQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tbWxRqL3rD2gUnMjM3HH64
          claim_id: c_J6J6pH8c5jnT2xJECN389k
          source_id: s_stRTx8dApUf7iGA4xsQE7g
          stance: supports
          locator: CBDB:61049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61049）
          source: &a1
            id: s_stRTx8dApUf7iGA4xsQE7g
            source_type: api_record
            title: 中国历代人物传记资料库：王道新（CBDB 61049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61049&o=json
            external_identifier: CBDB:61049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oGM8aQQa6CsfTB2erfHKd1
        subject_person_id: p_Eg4noAN23ZMYbedVY91MsQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道新，清人物。曾任茶馬御史、府推官。（中国历代人物传记资料库 CBDB 61049）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8SO-kQ5Ht17zQPR_C7PCrn
          claim_id: c_oGM8aQQa6CsfTB2erfHKd1
          source_id: s_stRTx8dApUf7iGA4xsQE7g
          stance: supports
          locator: CBDB:61049
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

# 王道新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道新 | accepted |
| bio.summary | 王道新，清人物。曾任茶馬御史、府推官。（中国历代人物传记资料库 CBDB 61049） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道新（CBDB 61049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61049&o=json)
