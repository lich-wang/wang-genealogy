---
schema: wang-person/v1
id: p_yvMz5vquiVpHH7qBwkd3k7
status: active
merged_into: null
display_name: 王廷伊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_baALCiu16gU14AeMCo1NNQ
        subject_person_id: p_yvMz5vquiVpHH7qBwkd3k7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷伊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mLEHDBhNtCgoXHZ4o8ETKa
          claim_id: c_baALCiu16gU14AeMCo1NNQ
          source_id: s_NMACG5taYH6EXVudkmdLKx
          stance: supports
          locator: CBDB:476056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476056）
          source: &a1
            id: s_NMACG5taYH6EXVudkmdLKx
            source_type: api_record
            title: 中国历代人物传记资料库：王廷伊（CBDB 476056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476056&o=json
            external_identifier: CBDB:476056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JDg4sE3ZKL2wKCQYjXWbSq
        subject_person_id: p_yvMz5vquiVpHH7qBwkd3k7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷伊，清人物。籍贯介休，入仕鄉貢舉人，曾任兵部郎中、鄉試考官、知縣。（中国历代人物传记资料库 CBDB 476056）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zGpuxKWd0_aubrI0P1YawL
          claim_id: c_JDg4sE3ZKL2wKCQYjXWbSq
          source_id: s_NMACG5taYH6EXVudkmdLKx
          stance: supports
          locator: CBDB:476056
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

# 王廷伊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷伊 | accepted |
| bio.summary | 王廷伊，清人物。籍贯介休，入仕鄉貢舉人，曾任兵部郎中、鄉試考官、知縣。（中国历代人物传记资料库 CBDB 476056） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷伊（CBDB 476056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476056&o=json)
