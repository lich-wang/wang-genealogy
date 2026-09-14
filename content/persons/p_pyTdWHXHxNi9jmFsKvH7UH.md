---
schema: wang-person/v1
id: p_pyTdWHXHxNi9jmFsKvH7UH
status: active
merged_into: null
display_name: 王嘉輅
cbdb_id: 297022
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RJhzM9BkKBdsCknkA4GdMm
        subject_person_id: p_pyTdWHXHxNi9jmFsKvH7UH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉輅，明人物。嘉靖十四年進士，籍贯宜賓。（中国历代人物传记资料库 CBDB 297022）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IaL9jGBLDlndRWirpBjFaU
          claim_id: c_RJhzM9BkKBdsCknkA4GdMm
          source_id: s_c3BcLZswwhHF4atD1RtLre
          stance: supports
          locator: CBDB:297022
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_c3BcLZswwhHF4atD1RtLre
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉輅（CBDB 297022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297022&o=json
            external_identifier: CBDB:297022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_82DCnC5NTthkr4WemCjgM2
        subject_person_id: p_pyTdWHXHxNi9jmFsKvH7UH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉輅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LbCJT1WN2uKxpMDWME7Uco
          claim_id: c_82DCnC5NTthkr4WemCjgM2
          source_id: s_c3BcLZswwhHF4atD1RtLre
          stance: supports
          locator: CBDB:297022
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5FPqTnO8A-lUxG9JkW9ieD
        subject_person_id: p_a6D7qHy2jxWGfawEs3gBYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pyTdWHXHxNi9jmFsKvH7UH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z1gMSVDH8lvgok_XRKcudE
          claim_id: c_5FPqTnO8A-lUxG9JkW9ieD
          source_id: s_LSwJNc_-akCQrTy5qhpdqU
          stance: supports
          locator: CBDB：兄弟 王嘉元（202937）之父／母 王璧
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉輅 与 王嘉元 为同胞（CBDB 记「兄」），王嘉元 之父／母即 王嘉輅 之父／母。
          source:
            id: s_LSwJNc_-akCQrTy5qhpdqU
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉輅（CBDB 297022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297022&o=json
            external_identifier: CBDB:297022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_a6D7qHy2jxWGfawEs3gBYP
        status: active
        display_name: 王璧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wdZ89KdYy1bIcu223R2git
        subject_person_id: p_5zhGEimBSRibG2X8DZoDuG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pyTdWHXHxNi9jmFsKvH7UH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wREf14NdGgerT8TQ-2an7X
          claim_id: c_wdZ89KdYy1bIcu223R2git
          source_id: s_LSwJNc_-akCQrTy5qhpdqU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202937 王嘉元）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LSwJNc_-akCQrTy5qhpdqU
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉輅（CBDB 297022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297022&o=json
            external_identifier: CBDB:297022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5zhGEimBSRibG2X8DZoDuG
        status: active
        display_name: 王嘉元
        merged_into_person_id: null
---

# 王嘉輅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嘉輅，明人物。嘉靖十四年進士，籍贯宜賓。（中国历代人物传记资料库 CBDB 297022） | accepted |
| name.primary | 王嘉輅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_a6D7qHy2jxWGfawEs3gBYP | 王璧 | accepted |
| other | p_5zhGEimBSRibG2X8DZoDuG | 王嘉元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉輅（CBDB 297022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297022&o=json)
