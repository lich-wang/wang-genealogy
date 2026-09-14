---
schema: wang-person/v1
id: p_7kTVFUC7XFEmstH2h6JYzx
status: active
merged_into: null
display_name: 王鈍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q6Qg4Gu2EAHG2F6TNwvCMz
        subject_person_id: p_7kTVFUC7XFEmstH2h6JYzx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_frRLGdSMgC8GLwF5D3nf6v
          claim_id: c_q6Qg4Gu2EAHG2F6TNwvCMz
          source_id: s_4LDZvyKpnqneHt1TmCtx36
          stance: supports
          locator: CBDB:261342
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261342）
          source: &a1
            id: s_4LDZvyKpnqneHt1TmCtx36
            source_type: api_record
            title: 中国历代人物传记资料库：王鈍（CBDB 261342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261342&o=json
            external_identifier: CBDB:261342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xoPcdZGg9GzkH5wVxQomG8
        subject_person_id: p_7kTVFUC7XFEmstH2h6JYzx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈍，明人物。弘治三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 261342）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jrh0zsnX4j8W0HoDCQ8RyP
          claim_id: c_xoPcdZGg9GzkH5wVxQomG8
          source_id: s_4LDZvyKpnqneHt1TmCtx36
          stance: supports
          locator: CBDB:261342
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VK54GxMw4bwlx8MOc9kWng
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7kTVFUC7XFEmstH2h6JYzx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ua5zFx9V2R9bD4GQCErkCh
          claim_id: c_VK54GxMw4bwlx8MOc9kWng
          source_id: s_ZDKKq7SAv_k5G8HHKNRxSC
          stance: supports
          locator: CBDB：兄弟 王惠（200679）之父／母 王東溪
          quotation: null
          interpretation_note: 由兄弟关系推断：王鈍 与 王惠 为同胞（CBDB 记「弟」），王惠 之父／母即 王鈍 之父／母。
          source:
            id: s_ZDKKq7SAv_k5G8HHKNRxSC
            source_type: api_record
            title: 中国历代人物传记资料库：王鈍（CBDB 261342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261342&o=json
            external_identifier: CBDB:261342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xJckw5M7s3953PwfjKtPgj
        status: active
        display_name: 王東溪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZbW4eR0oSh0DiEyDMvupsK
        subject_person_id: p_7kTVFUC7XFEmstH2h6JYzx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ewLuTPqlO2lG-hjxYHesc0
          claim_id: c_ZbW4eR0oSh0DiEyDMvupsK
          source_id: s_ZDKKq7SAv_k5G8HHKNRxSC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200679 王惠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZDKKq7SAv_k5G8HHKNRxSC
            source_type: api_record
            title: 中国历代人物传记资料库：王鈍（CBDB 261342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261342&o=json
            external_identifier: CBDB:261342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        status: active
        display_name: 王惠
        merged_into_person_id: null
---

# 王鈍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈍 | accepted |
| bio.summary | 王鈍，明人物。弘治三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 261342） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xJckw5M7s3953PwfjKtPgj | 王東溪 | accepted |
| other | p_Z5nYxV4Tqg6P2c2jCvDNPx | 王惠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈍（CBDB 261342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261342&o=json)
