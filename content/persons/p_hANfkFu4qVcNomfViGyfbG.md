---
schema: wang-person/v1
id: p_hANfkFu4qVcNomfViGyfbG
status: active
merged_into: null
display_name: 王政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AbqJjzTeRixkMngDGfe34d
        subject_person_id: p_hANfkFu4qVcNomfViGyfbG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nsayqp9HJ2ynLAaUSJbNr8
          claim_id: c_AbqJjzTeRixkMngDGfe34d
          source_id: s_16WGTbkjudGNSozp3RXxFc
          stance: supports
          locator: CBDB:508644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508644）
          source: &a1
            id: s_16WGTbkjudGNSozp3RXxFc
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 508644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508644&o=json
            external_identifier: CBDB:508644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a4oVNfho1YFzKqNRV3xVFc
        subject_person_id: p_hANfkFu4qVcNomfViGyfbG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 508644）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ju88JxEJvZvXTLcZ1ir-Wc
          claim_id: c_a4oVNfho1YFzKqNRV3xVFc
          source_id: s_16WGTbkjudGNSozp3RXxFc
          stance: supports
          locator: CBDB:508644
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

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 508644） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 508644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508644&o=json)
