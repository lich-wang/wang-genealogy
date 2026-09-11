---
schema: wang-person/v1
id: p_RDcKjrKBaYqkBvE1BonEBB
status: active
merged_into: null
display_name: 王式丹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LFb1xN6yXuyKLe78MfS8Yu
        subject_person_id: p_RDcKjrKBaYqkBvE1BonEBB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式丹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9du5dXnHaRmCCUwcHtjCHP
          claim_id: c_LFb1xN6yXuyKLe78MfS8Yu
          source_id: s_rFiBcNR62hJzJN5hxBZfk9
          stance: supports
          locator: CBDB:35053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35053）
          source: &a1
            id: s_rFiBcNR62hJzJN5hxBZfk9
            source_type: api_record
            title: 中国历代人物传记资料库：王式丹（CBDB 35053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35053&o=json
            external_identifier: CBDB:35053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.109Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_erWTAsqPkMzQL55cuo1P2x
        subject_person_id: p_RDcKjrKBaYqkBvE1BonEBB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1645年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hSRvyUWd86x4KKVTbzjbLr
          claim_id: c_erWTAsqPkMzQL55cuo1P2x
          source_id: s_rFiBcNR62hJzJN5hxBZfk9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZCpHhkg62eZnVxHLccEYhE
        subject_person_id: p_RDcKjrKBaYqkBvE1BonEBB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1718年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2YppNMBHyNqUgy3rsLPAww
          claim_id: c_ZCpHhkg62eZnVxHLccEYhE
          source_id: s_rFiBcNR62hJzJN5hxBZfk9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XKGP7RQ2xh7vHwMv4zB8g5
        subject_person_id: p_RDcKjrKBaYqkBvE1BonEBB
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
        - id: cs_CLxubmDsPG7rUJ62BHkE2P
          claim_id: c_XKGP7RQ2xh7vHwMv4zB8g5
          source_id: s_rFiBcNR62hJzJN5hxBZfk9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants:
    - claim:
        id: c_bQeNPSMbBBEKIAL6c38RHu
        subject_person_id: p_RDcKjrKBaYqkBvE1BonEBB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UDXBmceRLhUBfq8Xtjxmsv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fDv5UbxQCrbEnbsp2lbtGO
          claim_id: c_bQeNPSMbBBEKIAL6c38RHu
          source_id: s_rFiBcNR62hJzJN5hxBZfk9
          stance: supports
          locator: CBDB 双向互证（孫 王箴輿 ⇄ 祖父 王式丹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_UDXBmceRLhUBfq8Xtjxmsv
        status: active
        display_name: 王箴輿
        merged_into_person_id: null
    - claim:
        id: c_qs0fbIUCrQFLRSuuc6lBBt
        subject_person_id: p_RDcKjrKBaYqkBvE1BonEBB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zkDYwd29LScc5MrymJwHNf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6rlRI1aKNcnNZm-N4NYVSv
          claim_id: c_qs0fbIUCrQFLRSuuc6lBBt
          source_id: s_rFiBcNR62hJzJN5hxBZfk9
          stance: supports
          locator: CBDB 双向互证（孫 王箴翼 ⇄ 祖父 王式丹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_zkDYwd29LScc5MrymJwHNf
        status: active
        display_name: 王箴翼
        merged_into_person_id: null
  other: []
---

# 王式丹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式丹 | accepted |
| birth.date | 1645年 | accepted |
| death.date | 1718年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_UDXBmceRLhUBfq8Xtjxmsv | 王箴輿 | accepted |
| descendants | p_zkDYwd29LScc5MrymJwHNf | 王箴翼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王式丹（CBDB 35053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35053&o=json)
