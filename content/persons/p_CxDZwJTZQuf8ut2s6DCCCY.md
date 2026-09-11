---
schema: wang-person/v1
id: p_CxDZwJTZQuf8ut2s6DCCCY
status: active
merged_into: null
display_name: 王弁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CCMLCywgtkJ2q8byPrhKxB
        subject_person_id: p_CxDZwJTZQuf8ut2s6DCCCY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AAs1eiENUgGzDvGef2yu3Q
          claim_id: c_CCMLCywgtkJ2q8byPrhKxB
          source_id: s_GcRaQdEKpzsrBmGZERADjX
          stance: supports
          locator: CBDB:22203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22203）
          source: &a1
            id: s_GcRaQdEKpzsrBmGZERADjX
            source_type: api_record
            title: 中国历代人物传记资料库：王弁（CBDB 22203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22203&o=json
            external_identifier: CBDB:22203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BicRVxepGnorZrgD6bBQ5Z
        subject_person_id: p_CxDZwJTZQuf8ut2s6DCCCY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弁，宋人物。籍贯侯官，入仕恩蔭、蔭補，曾任將作監主簿。（中国历代人物传记资料库 CBDB 22203）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7b1p_woxLIC-uAZ8lkmopl
          claim_id: c_BicRVxepGnorZrgD6bBQ5Z
          source_id: s_GcRaQdEKpzsrBmGZERADjX
          stance: supports
          locator: CBDB:22203
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AuLdY9yPxc1fHnI0zir3Am
        subject_person_id: p_epomT3DrAzh2aXobBoSETt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CxDZwJTZQuf8ut2s6DCCCY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1peApUA8YBF4WASC3rfdkl
          claim_id: c_AuLdY9yPxc1fHnI0zir3Am
          source_id: s_GcRaQdEKpzsrBmGZERADjX
          stance: supports
          locator: CBDB 双向互证（父 王居政 ⇄ 子 王弁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_epomT3DrAzh2aXobBoSETt
        status: active
        display_name: 王居政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弁 | accepted |
| bio.summary | 王弁，宋人物。籍贯侯官，入仕恩蔭、蔭補，曾任將作監主簿。（中国历代人物传记资料库 CBDB 22203） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_epomT3DrAzh2aXobBoSETt | 王居政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弁（CBDB 22203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22203&o=json)
