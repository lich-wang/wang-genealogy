---
schema: wang-person/v1
id: p_QSEkkEB8qbex32MMKkXKip
status: active
merged_into: null
display_name: 王儀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TGCNTzGsLHBJD66ZjSwZ4b
        subject_person_id: p_QSEkkEB8qbex32MMKkXKip
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_43vJdWPckQrJh9WK7b9ERE
          claim_id: c_TGCNTzGsLHBJD66ZjSwZ4b
          source_id: s_U4fSZr5zaRQb3KFBcY5L1D
          stance: supports
          locator: CBDB:241971
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241971）
          source: &a1
            id: s_U4fSZr5zaRQb3KFBcY5L1D
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 241971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241971&o=json
            external_identifier: CBDB:241971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bip8iCCdc2FgZ576gQuobN
        subject_person_id: p_QSEkkEB8qbex32MMKkXKip
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀，明人物。成化二年進士，籍贯長興。（中国历代人物传记资料库 CBDB 241971）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_13MjHaxt76EAWzzIiwXFmQ
          claim_id: c_bip8iCCdc2FgZ576gQuobN
          source_id: s_U4fSZr5zaRQb3KFBcY5L1D
          stance: supports
          locator: CBDB:241971
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dZgNAuuM_45_s3flT_r9Q2
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QSEkkEB8qbex32MMKkXKip
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PwPJ6NLdOgBG3Y0gNSyDUc
          claim_id: c_dZgNAuuM_45_s3flT_r9Q2
          source_id: s_v0yPCUVfcC7vzNg-uPEKV-
          stance: supports
          locator: CBDB：兄弟 王俁（199224）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王儀 与 王俁 为同胞（CBDB 记「弟」），王俁 之父／母即 王儀 之父／母。
          source:
            id: s_v0yPCUVfcC7vzNg-uPEKV-
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 241971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241971&o=json
            external_identifier: CBDB:241971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tJVHjGjKc27ATYVAuaH8nP
        status: active
        display_name: 王瑄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0RcBLpcFaibBTVh6Xz_sUT
        subject_person_id: p_QSEkkEB8qbex32MMKkXKip
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YMz6wWHa7gpF5pohBzme4S
          claim_id: c_0RcBLpcFaibBTVh6Xz_sUT
          source_id: s_v0yPCUVfcC7vzNg-uPEKV-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199224 王俁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_v0yPCUVfcC7vzNg-uPEKV-
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 241971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241971&o=json
            external_identifier: CBDB:241971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wzpgCTfy9H3iqMXKhqaPfp
        status: active
        display_name: 王俁
        merged_into_person_id: null
---

# 王儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儀 | accepted |
| bio.summary | 王儀，明人物。成化二年進士，籍贯長興。（中国历代人物传记资料库 CBDB 241971） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tJVHjGjKc27ATYVAuaH8nP | 王瑄 | accepted |
| other | p_wzpgCTfy9H3iqMXKhqaPfp | 王俁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儀（CBDB 241971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241971&o=json)
