---
schema: wang-person/v1
id: p_V7wnHykQVEtC1QyrbN7yT9
status: active
merged_into: null
display_name: 王雧
cbdb_id: 279557
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JVStSybYsYSAtU4d8HouiP
        subject_person_id: p_V7wnHykQVEtC1QyrbN7yT9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雧，明人物。正德十二年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 279557）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_s4Oaka_jL5yO9A9UyufZ86
          claim_id: c_JVStSybYsYSAtU4d8HouiP
          source_id: s_EpfLpeqNqSiX1pCiZ8FraG
          stance: supports
          locator: CBDB:279557
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EpfLpeqNqSiX1pCiZ8FraG
            source_type: api_record
            title: 中国历代人物传记资料库：王雧（CBDB 279557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279557&o=json
            external_identifier: CBDB:279557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_h3iFsp6N7JdWExZZnbCPoC
        subject_person_id: p_V7wnHykQVEtC1QyrbN7yT9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QDvPNW7LsHYrXfqM4KJrc3
          claim_id: c_h3iFsp6N7JdWExZZnbCPoC
          source_id: s_EpfLpeqNqSiX1pCiZ8FraG
          stance: supports
          locator: CBDB:279557
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eudtjfeDGmhzQz8_1S6yPY
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V7wnHykQVEtC1QyrbN7yT9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B6Yt3Flx4GHNrH3QVaQ5gm
          claim_id: c_eudtjfeDGmhzQz8_1S6yPY
          source_id: s_qNH7zDUiNmLMYFsVmSRx1a
          stance: supports
          locator: CBDB：兄弟 王臬（34721）之父／母 王瀚
          quotation: null
          interpretation_note: 由兄弟关系推断：王雧 与 王臬 为同胞（CBDB 记「兄」），王臬 之父／母即 王雧 之父／母。
          source:
            id: s_qNH7zDUiNmLMYFsVmSRx1a
            source_type: api_record
            title: 中国历代人物传记资料库：王雧（CBDB 279557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279557&o=json
            external_identifier: CBDB:279557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QN7EhCDtejfmZYbCTCBWyv
        status: active
        display_name: 王瀚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RdeDToSvxer9axiNWy_4k9
        subject_person_id: p_V7wnHykQVEtC1QyrbN7yT9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zk8wdgqob2t4thapMEEX0Q
          claim_id: c_RdeDToSvxer9axiNWy_4k9
          source_id: s_qNH7zDUiNmLMYFsVmSRx1a
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34721 王臬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qNH7zDUiNmLMYFsVmSRx1a
            source_type: api_record
            title: 中国历代人物传记资料库：王雧（CBDB 279557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279557&o=json
            external_identifier: CBDB:279557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
---

# 王雧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雧，明人物。正德十二年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 279557） | accepted |
| name.primary | 王雧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QN7EhCDtejfmZYbCTCBWyv | 王瀚 | accepted |
| other | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雧（CBDB 279557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279557&o=json)
