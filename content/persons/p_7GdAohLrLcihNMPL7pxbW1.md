---
schema: wang-person/v1
id: p_7GdAohLrLcihNMPL7pxbW1
status: active
merged_into: null
display_name: 王棟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LSBuWUwDk2bSJgXeGtSZGP
        subject_person_id: p_7GdAohLrLcihNMPL7pxbW1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A45fmDRAcZPg42kxdUisCm
          claim_id: c_LSBuWUwDk2bSJgXeGtSZGP
          source_id: s_UVn8mELxLB3W9d5kisY6gz
          stance: supports
          locator: CBDB:23951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23951）
          source: &a1
            id: s_UVn8mELxLB3W9d5kisY6gz
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 23951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23951&o=json
            external_identifier: CBDB:23951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uhtZzNCYc7Qdk3mewx4uhs
        subject_person_id: p_7GdAohLrLcihNMPL7pxbW1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5rwAnNzYw5dwPmZGCHKJ2A
          claim_id: c_uhtZzNCYc7Qdk3mewx4uhs
          source_id: s_UVn8mELxLB3W9d5kisY6gz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Xhf1MeFeU0lX684nQ3HH1W
        subject_person_id: p_56F6KaXJUP5n34EkDM5DQ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7GdAohLrLcihNMPL7pxbW1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xbq-fbAvGZ3HFMiltCEEPo
          claim_id: c_Xhf1MeFeU0lX684nQ3HH1W
          source_id: s_BPfw2hPG3NyZQWGU9AMfaJ
          stance: supports
          locator: CBDB 双向互证（子 王棟 ⇄ 父 王戩）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_BPfw2hPG3NyZQWGU9AMfaJ
            source_type: api_record
            title: 中国历代人物传记资料库：王戩（CBDB 23950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23950&o=json
            external_identifier: CBDB:23950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_56F6KaXJUP5n34EkDM5DQ6
        status: active
        display_name: 王戩
        merged_into_person_id: null
  children:
    - claim:
        id: c_KAVAB1tfWsF6mLLqvZV3ZL
        subject_person_id: p_7GdAohLrLcihNMPL7pxbW1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9scMvZbY1QFgKzRKBWDHTa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YIJs-ljSIxNXRG8W1hS_DI
          claim_id: c_KAVAB1tfWsF6mLLqvZV3ZL
          source_id: s_UVn8mELxLB3W9d5kisY6gz
          stance: supports
          locator: CBDB 双向互证（子 王萬修 ⇄ 父 王棟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_9scMvZbY1QFgKzRKBWDHTa
        status: active
        display_name: 王萬修
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_56F6KaXJUP5n34EkDM5DQ6 | 王戩 | accepted |
| children | p_9scMvZbY1QFgKzRKBWDHTa | 王萬修 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 23951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23951&o=json)
- [中国历代人物传记资料库：王戩（CBDB 23950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23950&o=json)
