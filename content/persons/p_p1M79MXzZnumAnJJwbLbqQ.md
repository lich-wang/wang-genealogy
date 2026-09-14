---
schema: wang-person/v1
id: p_p1M79MXzZnumAnJJwbLbqQ
status: active
merged_into: null
display_name: 王崇教
cbdb_id: 302982
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YSCLkxRSFFniYaU3YjtCTt
        subject_person_id: p_p1M79MXzZnumAnJJwbLbqQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇教，明人物。嘉靖二十年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 302982）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-WlMoKgnOJoI1CjjpwB-xx
          claim_id: c_YSCLkxRSFFniYaU3YjtCTt
          source_id: s_aeuvx39BLsj8gawHbBLFQs
          stance: supports
          locator: CBDB:302982
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aeuvx39BLsj8gawHbBLFQs
            source_type: api_record
            title: 中国历代人物传记资料库：王崇教（CBDB 302982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302982&o=json
            external_identifier: CBDB:302982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mNAZNVHoFH4fATegkpnhdQ
        subject_person_id: p_p1M79MXzZnumAnJJwbLbqQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇教
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2AGdFKS1zL4oQ7hxCoNKtH
          claim_id: c_mNAZNVHoFH4fATegkpnhdQ
          source_id: s_aeuvx39BLsj8gawHbBLFQs
          stance: supports
          locator: CBDB:302982
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wRVpQ_ufYhhfaT7nQS-LDG
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_p1M79MXzZnumAnJJwbLbqQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f7bxW1ZnarcBtVlst98hCY
          claim_id: c_wRVpQ_ufYhhfaT7nQS-LDG
          source_id: s_RfwlFHjKFQGzNTJGFs1733
          stance: supports
          locator: CBDB：兄弟 王崇古（124981）之父／母 王瑶
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇教 与 王崇古 为同胞（CBDB 记「兄」），王崇古 之父／母即 王崇教 之父／母。
          source:
            id: s_RfwlFHjKFQGzNTJGFs1733
            source_type: api_record
            title: 中国历代人物传记资料库：王崇教（CBDB 302982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302982&o=json
            external_identifier: CBDB:302982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YCdG7XtqNcYaExuN76xqKv
        status: active
        display_name: 王瑶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6QWiz0rYhDYwl-Vg2TzFin
        subject_person_id: p_CqGGoAHd4xav6yj4gHyTHE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p1M79MXzZnumAnJJwbLbqQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wR7QN_KZmZJiZTdHxO2XXu
          claim_id: c_6QWiz0rYhDYwl-Vg2TzFin
          source_id: s_RfwlFHjKFQGzNTJGFs1733
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124981 王崇古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RfwlFHjKFQGzNTJGFs1733
            source_type: api_record
            title: 中国历代人物传记资料库：王崇教（CBDB 302982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302982&o=json
            external_identifier: CBDB:302982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CqGGoAHd4xav6yj4gHyTHE
        status: active
        display_name: 王崇古
        merged_into_person_id: null
---

# 王崇教

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇教，明人物。嘉靖二十年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 302982） | accepted |
| name.primary | 王崇教 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YCdG7XtqNcYaExuN76xqKv | 王瑶 | accepted |
| other | p_CqGGoAHd4xav6yj4gHyTHE | 王崇古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇教（CBDB 302982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302982&o=json)
