---
schema: wang-person/v1
id: p_3HbG7JXXtPKukrdr9i2R2p
status: active
merged_into: null
display_name: 王韶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8zFd4BFL4zVXFE48tk5Uov
        subject_person_id: p_3HbG7JXXtPKukrdr9i2R2p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2FWAzb3jqsSmqkBD5HUq3B
          claim_id: c_8zFd4BFL4zVXFE48tk5Uov
          source_id: s_8EZKKN6B3ewFrNACM4tGBs
          stance: supports
          locator: CBDB:19903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19903）
          source: &a1
            id: s_8EZKKN6B3ewFrNACM4tGBs
            source_type: api_record
            title: 中国历代人物传记资料库：王韶（CBDB 19903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19903&o=json
            external_identifier: CBDB:19903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g8GAsLyQz8WipUroyMGdC4
        subject_person_id: p_3HbG7JXXtPKukrdr9i2R2p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为吳越人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YtiV4fpgMmtnBDeTXWL47E
          claim_id: c_g8GAsLyQz8WipUroyMGdC4
          source_id: s_8EZKKN6B3ewFrNACM4tGBs
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
        id: c_YGWI-WOxB-st9RctBo9uR-
        subject_person_id: p_2tQQbiMGFszWkvDF8QvDzV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3HbG7JXXtPKukrdr9i2R2p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K6QJeX4MPsnBk7RWabpET_
          claim_id: c_YGWI-WOxB-st9RctBo9uR-
          source_id: s_RrEjtT4UQdbCjSbh6msTjs
          stance: supports
          locator: CBDB 双向互证（子 王韶 ⇄ 父 王紳）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_RrEjtT4UQdbCjSbh6msTjs
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 19902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19902&o=json
            external_identifier: CBDB:19902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.753Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2tQQbiMGFszWkvDF8QvDzV
        status: active
        display_name: 王紳
        merged_into_person_id: null
  children:
    - claim:
        id: c_ATMvgRpCjNbqVzWErhBT-s
        subject_person_id: p_3HbG7JXXtPKukrdr9i2R2p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VJppnzH8QEnRzy4cuHqGDc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_95xQlpQsEVPPGcjaEPbi1N
          claim_id: c_ATMvgRpCjNbqVzWErhBT-s
          source_id: s_8EZKKN6B3ewFrNACM4tGBs
          stance: supports
          locator: CBDB 双向互证（子 王文亮 ⇄ 父 王韶）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_VJppnzH8QEnRzy4cuHqGDc
        status: active
        display_name: 王文亮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韶 | accepted |
| bio.summary | CBDB 记载为吳越人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2tQQbiMGFszWkvDF8QvDzV | 王紳 | accepted |
| children | p_VJppnzH8QEnRzy4cuHqGDc | 王文亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王韶（CBDB 19903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19903&o=json)
- [中国历代人物传记资料库：王紳（CBDB 19902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19902&o=json)
