---
schema: wang-person/v1
id: p_zkDYwd29LScc5MrymJwHNf
status: active
merged_into: null
display_name: 王箴翼
cbdb_id: 35056
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BAau8JturnfTwco1CX1RAH
        subject_person_id: p_zkDYwd29LScc5MrymJwHNf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箴翼，清人物。籍贯寶應。（中国历代人物传记资料库 CBDB 35056）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-FtnX9sZkPeSYaSTXB2xlA
          claim_id: c_BAau8JturnfTwco1CX1RAH
          source_id: s_DKkL1G3uJCWE1appkT1hqZ
          stance: supports
          locator: CBDB:35056
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DKkL1G3uJCWE1appkT1hqZ
            source_type: api_record
            title: 中国历代人物传记资料库：王箴翼（CBDB 35056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35056&o=json
            external_identifier: CBDB:35056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SVAq4otCpotQDsqxFvmL9y
        subject_person_id: p_zkDYwd29LScc5MrymJwHNf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箴翼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5TZLE3xRpq4idH54fLgpwy
          claim_id: c_SVAq4otCpotQDsqxFvmL9y
          source_id: s_DKkL1G3uJCWE1appkT1hqZ
          stance: supports
          locator: CBDB:35056
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
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
          source:
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
      object_person:
        id: p_RDcKjrKBaYqkBvE1BonEBB
        status: active
        display_name: 王式丹
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王箴翼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王箴翼，清人物。籍贯寶應。（中国历代人物传记资料库 CBDB 35056） | accepted |
| name.primary | 王箴翼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_RDcKjrKBaYqkBvE1BonEBB | 王式丹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王式丹（CBDB 35053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35053&o=json)
- [中国历代人物传记资料库：王箴翼（CBDB 35056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35056&o=json)
