---
schema: wang-person/v1
id: p_feHB6yCj5oQAgw48eSQTGJ
status: active
merged_into: null
display_name: 王有材
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NUDKaHGKtHgXQffWVpmV6T
        subject_person_id: p_feHB6yCj5oQAgw48eSQTGJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GQHh2QCUGnV2oK7KHA6Feo
          claim_id: c_NUDKaHGKtHgXQffWVpmV6T
          source_id: s_2BzUVWVUa2LuJKJAyxToZ8
          stance: supports
          locator: CBDB:638590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638590）
          source: &a1
            id: s_2BzUVWVUa2LuJKJAyxToZ8
            source_type: api_record
            title: 中国历代人物传记资料库：王有材（CBDB 638590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638590&o=json
            external_identifier: CBDB:638590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A9GyYUE72FHQp42W2XGFtS
        subject_person_id: p_feHB6yCj5oQAgw48eSQTGJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有材，清人物。籍贯福州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638590）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2A9bKzjkd8bkbrkIxiRoZP
          claim_id: c_A9GyYUE72FHQp42W2XGFtS
          source_id: s_2BzUVWVUa2LuJKJAyxToZ8
          stance: supports
          locator: CBDB:638590
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

# 王有材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有材 | accepted |
| bio.summary | 王有材，清人物。籍贯福州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638590） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有材（CBDB 638590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638590&o=json)
