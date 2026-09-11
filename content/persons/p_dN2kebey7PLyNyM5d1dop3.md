---
schema: wang-person/v1
id: p_dN2kebey7PLyNyM5d1dop3
status: active
merged_into: null
display_name: 王漢卿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_No5gDAJTfJGa83HouZL5J4
        subject_person_id: p_dN2kebey7PLyNyM5d1dop3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6WzmTjcFMf2Yp2pNkBwRi6
          claim_id: c_No5gDAJTfJGa83HouZL5J4
          source_id: s_p1QSbnmmZXpn4CTe2hQd5H
          stance: supports
          locator: CBDB:26111
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26111）
          source: &a1
            id: s_p1QSbnmmZXpn4CTe2hQd5H
            source_type: api_record
            title: 中国历代人物传记资料库：王漢卿（CBDB 26111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26111&o=json
            external_identifier: CBDB:26111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Q3Z6nMuHf4BGJxjeo29P2
        subject_person_id: p_dN2kebey7PLyNyM5d1dop3
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
        - id: cs_FrGrnZ2YJtDdZKyEwQ4PcK
          claim_id: c_7Q3Z6nMuHf4BGJxjeo29P2
          source_id: s_p1QSbnmmZXpn4CTe2hQd5H
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
        id: c_bBWxcCT4xpGcHd2I3338ux
        subject_person_id: p_1LS5H2BVbcx2CqPovKEQND
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dN2kebey7PLyNyM5d1dop3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mcLB5DWGOgEysDg51C1c5X
          claim_id: c_bBWxcCT4xpGcHd2I3338ux
          source_id: s_p1QSbnmmZXpn4CTe2hQd5H
          stance: supports
          locator: CBDB 双向互证（祖父 王仁贍 ⇄ 孫 王漢卿）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_1LS5H2BVbcx2CqPovKEQND
        status: active
        display_name: 王仁贍
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王漢卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢卿 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_1LS5H2BVbcx2CqPovKEQND | 王仁贍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漢卿（CBDB 26111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26111&o=json)
