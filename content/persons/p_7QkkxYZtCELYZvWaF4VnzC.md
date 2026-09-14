---
schema: wang-person/v1
id: p_7QkkxYZtCELYZvWaF4VnzC
status: active
merged_into: null
display_name: 王三槐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9GLgB8XktdguakwoAx83Ps
        subject_person_id: p_7QkkxYZtCELYZvWaF4VnzC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YPTj7FszBAzNfhgnVFCXs6
          claim_id: c_9GLgB8XktdguakwoAx83Ps
          source_id: s_jbk2oHjZf8x5qgpX18QrTg
          stance: supports
          locator: CBDB:279880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279880）
          source: &a1
            id: s_jbk2oHjZf8x5qgpX18QrTg
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 279880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279880&o=json
            external_identifier: CBDB:279880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K5BgUdEgt7b4ibczFXiGjZ
        subject_person_id: p_7QkkxYZtCELYZvWaF4VnzC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三槐，明人物。正德十二年進士，籍贯曹州。（中国历代人物传记资料库 CBDB 279880）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wc_EdD_7SxfmzGZelJEZAL
          claim_id: c_K5BgUdEgt7b4ibczFXiGjZ
          source_id: s_jbk2oHjZf8x5qgpX18QrTg
          stance: supports
          locator: CBDB:279880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p6ALYhWgcAsGOeMsEQNNuJ
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7QkkxYZtCELYZvWaF4VnzC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7czPFBqJEdxwa2SNxVBgOR
          claim_id: c_p6ALYhWgcAsGOeMsEQNNuJ
          source_id: s_Qql9mVd-jN06EQJWb8ir3b
          stance: supports
          locator: CBDB：兄弟 王三錫（126453）之父／母 王瑞
          quotation: null
          interpretation_note: 由兄弟关系推断：王三槐 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王三槐 之父／母。
          source:
            id: s_Qql9mVd-jN06EQJWb8ir3b
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 279880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279880&o=json
            external_identifier: CBDB:279880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NUN9V2WpcJELAKS3hvUbxx
        status: active
        display_name: 王瑞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_30snCIOHF8QqA-ilFpF7iS
        subject_person_id: p_7QkkxYZtCELYZvWaF4VnzC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HkNX6H623Y1z9EYnBdcJJC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VsG0thbGVJyRt1jAuhhlrD
          claim_id: c_30snCIOHF8QqA-ilFpF7iS
          source_id: s_Qql9mVd-jN06EQJWb8ir3b
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126453 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Qql9mVd-jN06EQJWb8ir3b
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 279880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279880&o=json
            external_identifier: CBDB:279880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HkNX6H623Y1z9EYnBdcJJC
        status: active
        display_name: 王三錫
        merged_into_person_id: null
---

# 王三槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三槐 | accepted |
| bio.summary | 王三槐，明人物。正德十二年進士，籍贯曹州。（中国历代人物传记资料库 CBDB 279880） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NUN9V2WpcJELAKS3hvUbxx | 王瑞 | accepted |
| other | p_HkNX6H623Y1z9EYnBdcJJC | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三槐（CBDB 279880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279880&o=json)
