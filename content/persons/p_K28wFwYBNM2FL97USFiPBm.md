---
schema: wang-person/v1
id: p_K28wFwYBNM2FL97USFiPBm
status: active
merged_into: null
display_name: 王演
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F2BSbSNB7Z4HKAFriC3qPb
        subject_person_id: p_K28wFwYBNM2FL97USFiPBm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9vzyCvN6Lg829Wa2ecwzSz
          claim_id: c_F2BSbSNB7Z4HKAFriC3qPb
          source_id: s_dGP7wNXW9tQwgY21pRi1B8
          stance: supports
          locator: CBDB:482238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（482238）
          source: &a1
            id: s_dGP7wNXW9tQwgY21pRi1B8
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 482238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482238&o=json
            external_identifier: CBDB:482238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.718Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v7zjSQySCM3kzdzn7XdWvu
        subject_person_id: p_K28wFwYBNM2FL97USFiPBm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演，史料所见人物。本项目依据《中国历代人物传记资料库：王演（CBDB 482238）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-9aXOUFoA3TqlZ9jbS_Ajh
          claim_id: c_v7zjSQySCM3kzdzn7XdWvu
          source_id: s_dGP7wNXW9tQwgY21pRi1B8
          stance: supports
          locator: CBDB:482238
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王演

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王演 | accepted |
| bio.summary | 王演，史料所见人物。本项目依据《中国历代人物传记资料库：王演（CBDB 482238）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王演（CBDB 482238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482238&o=json)
