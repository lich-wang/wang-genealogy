---
schema: wang-person/v1
id: p_qe21iK51grgXQR5j3MyvsM
status: active
merged_into: null
display_name: 王維
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sLgGdNnMWxD3dm3jsKCzAq
        subject_person_id: p_qe21iK51grgXQR5j3MyvsM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zpgXEDDN6kHPACmZkeDhqx
          claim_id: c_sLgGdNnMWxD3dm3jsKCzAq
          source_id: s_tqgWC5wnBdndH8PE6uKuZ7
          stance: supports
          locator: CBDB:20100
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（20100）
          source: &a1
            id: s_tqgWC5wnBdndH8PE6uKuZ7
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 20100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20100&o=json
            external_identifier: CBDB:20100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q7Sepx7eUhZw4PfxZtRE83
        subject_person_id: p_qe21iK51grgXQR5j3MyvsM
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
        - id: cs_Audq99RQs77yfKpxThFtmB
          claim_id: c_Q7Sepx7eUhZw4PfxZtRE83
          source_id: s_tqgWC5wnBdndH8PE6uKuZ7
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
  ancestors:
    - claim:
        id: c_BOYzEL6k7MIiQyU5PErDJX
        subject_person_id: p_g3jC5v38CshwF6ULsWugu8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qe21iK51grgXQR5j3MyvsM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_10gWiFDz94TZLRWulk0TBI
          claim_id: c_BOYzEL6k7MIiQyU5PErDJX
          source_id: s_1FyAe3rC6ErjuS6LgiXmy4
          stance: supports
          locator: CBDB 双向互证（孫 王維 ⇄ 祖父 王萬全）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_1FyAe3rC6ErjuS6LgiXmy4
            source_type: api_record
            title: 中国历代人物传记资料库：王萬全（CBDB 20097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20097&o=json
            external_identifier: CBDB:20097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_g3jC5v38CshwF6ULsWugu8
        status: active
        display_name: 王萬全
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王維

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_g3jC5v38CshwF6ULsWugu8 | 王萬全 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬全（CBDB 20097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20097&o=json)
- [中国历代人物传记资料库：王維（CBDB 20100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20100&o=json)
