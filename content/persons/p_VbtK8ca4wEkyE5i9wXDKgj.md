---
schema: wang-person/v1
id: p_VbtK8ca4wEkyE5i9wXDKgj
status: active
merged_into: null
display_name: 王景章
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VDENcReAd1iKDNyVAVmE76
        subject_person_id: p_VbtK8ca4wEkyE5i9wXDKgj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZDVJ8p3PCCZvKjfBTQL6tU
          claim_id: c_VDENcReAd1iKDNyVAVmE76
          source_id: s_m8gLFS3draMBkGBcgYjfQE
          stance: supports
          locator: CBDB:17883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17883）
          source: &a1
            id: s_m8gLFS3draMBkGBcgYjfQE
            source_type: api_record
            title: 中国历代人物传记资料库：王景章（CBDB 17883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17883&o=json
            external_identifier: CBDB:17883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_69f3pW3LQf925ttYCw4Emq
        subject_person_id: p_VbtK8ca4wEkyE5i9wXDKgj
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
        - id: cs_V32J8HyQWA889cCqjF2Cdq
          claim_id: c_69f3pW3LQf925ttYCw4Emq
          source_id: s_m8gLFS3draMBkGBcgYjfQE
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
        id: c_jWnK6EwT950RSHFewyYSMG
        subject_person_id: p_6uHHdLk2mddn2TPMgCgBwY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VbtK8ca4wEkyE5i9wXDKgj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8MbILH9E8LUQ8OOGCvqWpy
          claim_id: c_jWnK6EwT950RSHFewyYSMG
          source_id: s_ZmtA4Y6QXvQkYTQAJYNLKF
          stance: supports
          locator: CBDB 双向互证（子 王景章 ⇄ 父 王軫）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ZmtA4Y6QXvQkYTQAJYNLKF
            source_type: api_record
            title: 中国历代人物传记资料库：王軫（CBDB 1776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1776&o=json
            external_identifier: CBDB:1776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6uHHdLk2mddn2TPMgCgBwY
        status: active
        display_name: 王軫
        merged_into_person_id: null
  children:
    - claim:
        id: c_9vmhwb9Jv4S9IazqhkcXoI
        subject_person_id: p_VbtK8ca4wEkyE5i9wXDKgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bZML6vfALwPWHt5tu3v86X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NFknCvwWmJFtg3tdakLxmz
          claim_id: c_9vmhwb9Jv4S9IazqhkcXoI
          source_id: s_m8gLFS3draMBkGBcgYjfQE
          stance: supports
          locator: CBDB 双向互证（子 王真臣 ⇄ 父 王景章）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_bZML6vfALwPWHt5tu3v86X
        status: active
        display_name: 王真臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景章 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6uHHdLk2mddn2TPMgCgBwY | 王軫 | accepted |
| children | p_bZML6vfALwPWHt5tu3v86X | 王真臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景章（CBDB 17883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17883&o=json)
- [中国历代人物传记资料库：王軫（CBDB 1776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1776&o=json)
