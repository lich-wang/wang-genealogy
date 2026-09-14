---
schema: wang-person/v1
id: p_5fr5i6aUxfem5HbVkKJ9sw
status: active
merged_into: null
display_name: 王傑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5BadExcjCdcqLMUHw7SWwQ
        subject_person_id: p_5fr5i6aUxfem5HbVkKJ9sw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LNqAmfBDm6N8zuv7QCdLxS
          claim_id: c_5BadExcjCdcqLMUHw7SWwQ
          source_id: s_VcF4rrFAK4Df2Hu8TyCRR3
          stance: supports
          locator: CBDB:288688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288688）
          source: &a1
            id: s_VcF4rrFAK4Df2Hu8TyCRR3
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 288688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288688&o=json
            external_identifier: CBDB:288688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tPsQPLSVQ9cJF7nhxZpEtZ
        subject_person_id: p_5fr5i6aUxfem5HbVkKJ9sw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑，明人物。嘉靖八年進士，籍贯婺源。（中国历代人物传记资料库 CBDB 288688）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w5WdmesTyFkQIyxrllShAe
          claim_id: c_tPsQPLSVQ9cJF7nhxZpEtZ
          source_id: s_VcF4rrFAK4Df2Hu8TyCRR3
          stance: supports
          locator: CBDB:288688
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2DKCjMhf3ppW0059WRPzRZ
        subject_person_id: p_BnBLKLfaqxcVPEz4Mit3Zc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5fr5i6aUxfem5HbVkKJ9sw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_59J8TNoNkt_qiri7XWnTRe
          claim_id: c_2DKCjMhf3ppW0059WRPzRZ
          source_id: s_9y_1do6w0CogBiBeTcLRhI
          stance: supports
          locator: CBDB：兄弟 王鉅（202468）之父／母 王齊玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王鉅 为同胞（CBDB 记「弟」），王鉅 之父／母即 王傑 之父／母。
          source:
            id: s_9y_1do6w0CogBiBeTcLRhI
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 288688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288688&o=json
            external_identifier: CBDB:288688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BnBLKLfaqxcVPEz4Mit3Zc
        status: active
        display_name: 王齊玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_z1v__cNRAqi_7-5zd0A_w5
        subject_person_id: p_5fr5i6aUxfem5HbVkKJ9sw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hdA2EX5rq1DHua8Wnk5XqK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qWwq_fkFEm9GWlKCkJMxIr
          claim_id: c_z1v__cNRAqi_7-5zd0A_w5
          source_id: s_9y_1do6w0CogBiBeTcLRhI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202468 王鉅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9y_1do6w0CogBiBeTcLRhI
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 288688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288688&o=json
            external_identifier: CBDB:288688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hdA2EX5rq1DHua8Wnk5XqK
        status: active
        display_name: 王鉅
        merged_into_person_id: null
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | 王傑，明人物。嘉靖八年進士，籍贯婺源。（中国历代人物传记资料库 CBDB 288688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BnBLKLfaqxcVPEz4Mit3Zc | 王齊玉 | accepted |
| other | p_hdA2EX5rq1DHua8Wnk5XqK | 王鉅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 288688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288688&o=json)
