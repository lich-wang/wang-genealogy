---
schema: wang-person/v1
id: p_W2oCgnB2LnqS9b8DXCcwJg
status: active
merged_into: null
display_name: 王楷
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uGmCXySdPh5avh9chSTR8j
        subject_person_id: p_W2oCgnB2LnqS9b8DXCcwJg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JGcBwCmb3sGNi7wM7bTdfm
          claim_id: c_uGmCXySdPh5avh9chSTR8j
          source_id: s_aGjFqkJ9CXEJyADTxqXCov
          stance: supports
          locator: CBDB:279552
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279552）
          source: &a1
            id: s_aGjFqkJ9CXEJyADTxqXCov
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 279552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279552&o=json
            external_identifier: CBDB:279552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oGeGfLbJXJ8s6QCpYHd8eB
        subject_person_id: p_W2oCgnB2LnqS9b8DXCcwJg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷，明人物。正德十二年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 279552）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cekGJBiGraMtwoHA8uCU61
          claim_id: c_oGeGfLbJXJ8s6QCpYHd8eB
          source_id: s_aGjFqkJ9CXEJyADTxqXCov
          stance: supports
          locator: CBDB:279552
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HB5idgGp__4EO_kCVIoJoL
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W2oCgnB2LnqS9b8DXCcwJg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7jaUEepHbDz7LXjGVKNa4
          claim_id: c_HB5idgGp__4EO_kCVIoJoL
          source_id: s_8R9Oal2X8Xh2KpsV4n2565
          stance: supports
          locator: CBDB：兄弟 王臬（34721）之父／母 王瀚
          quotation: null
          interpretation_note: 由兄弟关系推断：王楷 与 王臬 为同胞（CBDB 记「兄」），王臬 之父／母即 王楷 之父／母。
          source:
            id: s_8R9Oal2X8Xh2KpsV4n2565
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 279552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279552&o=json
            external_identifier: CBDB:279552
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
        id: c_adVrOe8NOWpMmtqIywDMsg
        subject_person_id: p_W2oCgnB2LnqS9b8DXCcwJg
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
        - id: cs_-2_QGIQgS6LUYUAKeoq8DB
          claim_id: c_adVrOe8NOWpMmtqIywDMsg
          source_id: s_8R9Oal2X8Xh2KpsV4n2565
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34721 王臬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8R9Oal2X8Xh2KpsV4n2565
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 279552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279552&o=json
            external_identifier: CBDB:279552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
---

# 王楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楷 | accepted |
| bio.summary | 王楷，明人物。正德十二年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 279552） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QN7EhCDtejfmZYbCTCBWyv | 王瀚 | accepted |
| other | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楷（CBDB 279552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279552&o=json)
