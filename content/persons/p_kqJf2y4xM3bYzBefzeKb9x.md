---
schema: wang-person/v1
id: p_kqJf2y4xM3bYzBefzeKb9x
status: active
merged_into: null
display_name: 王世林
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c5AJ3Eey9ts6gaxtcbbgnV
        subject_person_id: p_kqJf2y4xM3bYzBefzeKb9x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GQpuKavsZ9yGKJ3oNsKQ2b
          claim_id: c_c5AJ3Eey9ts6gaxtcbbgnV
          source_id: s_6n3cganvSS6dSCTiYezVZY
          stance: supports
          locator: CBDB:691495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691495）
          source: &a1
            id: s_6n3cganvSS6dSCTiYezVZY
            source_type: api_record
            title: 中国历代人物传记资料库：王世林（CBDB 691495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691495&o=json
            external_identifier: CBDB:691495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t7QA8i4ZN4eHiyNjL12qkP
        subject_person_id: p_kqJf2y4xM3bYzBefzeKb9x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JXWxJSmEH8Hnwvh9xQYYuC
          claim_id: c_t7QA8i4ZN4eHiyNjL12qkP
          source_id: s_6n3cganvSS6dSCTiYezVZY
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
        id: c_858hjDQfzw5sShbCdHgk4g
        subject_person_id: p_bNEbmxn5W35REjWEe7CiZv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kqJf2y4xM3bYzBefzeKb9x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sjQsNxrxhZSZhq86WPuKVx
          claim_id: c_858hjDQfzw5sShbCdHgk4g
          source_id: s_YGnBtTHVaZ2Y1z7kZoGjTn
          stance: supports
          locator: CBDB 双向互证（子 王世林 ⇄ 父 王紱）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_YGnBtTHVaZ2Y1z7kZoGjTn
            source_type: api_record
            title: 中国历代人物传记资料库：王紱（CBDB 691494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691494&o=json
            external_identifier: CBDB:691494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.609Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bNEbmxn5W35REjWEe7CiZv
        status: active
        display_name: 王紱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世林 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bNEbmxn5W35REjWEe7CiZv | 王紱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紱（CBDB 691494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691494&o=json)
- [中国历代人物传记资料库：王世林（CBDB 691495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691495&o=json)
