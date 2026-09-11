---
schema: wang-person/v1
id: p_b5h9AEjTeNUMt292Y9ELTc
status: active
merged_into: null
display_name: 王皞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Eecoqpw964wufg3tSsKue
        subject_person_id: p_b5h9AEjTeNUMt292Y9ELTc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aJsan7UrepZ4Yf2jebWHdE
          claim_id: c_2Eecoqpw964wufg3tSsKue
          source_id: s_7nL2TFiSURjxzBXh98WS7a
          stance: supports
          locator: CBDB:455139
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（455139）
          source: &a1
            id: s_7nL2TFiSURjxzBXh98WS7a
            source_type: api_record
            title: 中国历代人物传记资料库：王皞（CBDB 455139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455139&o=json
            external_identifier: CBDB:455139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.506Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rRX6Ge7PQA2z9sxY3xSbCH
        subject_person_id: p_b5h9AEjTeNUMt292Y9ELTc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皞，清人物。入仕考上會試/貢士，曾任知事。（中国历代人物传记资料库 CBDB 455139）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kvCNET9m5fvyyQkUwNSijB
          claim_id: c_rRX6Ge7PQA2z9sxY3xSbCH
          source_id: s_7nL2TFiSURjxzBXh98WS7a
          stance: supports
          locator: CBDB:455139
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

# 王皞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王皞 | accepted |
| bio.summary | 王皞，清人物。入仕考上會試/貢士，曾任知事。（中国历代人物传记资料库 CBDB 455139） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王皞（CBDB 455139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455139&o=json)
