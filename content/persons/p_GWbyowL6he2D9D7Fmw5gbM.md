---
schema: wang-person/v1
id: p_GWbyowL6he2D9D7Fmw5gbM
status: active
merged_into: null
display_name: 王洪舒
cbdb_id: 280886
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WNDrAnC3Cw5vaGTuEM5Vjr
        subject_person_id: p_GWbyowL6he2D9D7Fmw5gbM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪舒，明人物。景泰五年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 280886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2IsvpGQM1ObR_WZD_U52wB
          claim_id: c_WNDrAnC3Cw5vaGTuEM5Vjr
          source_id: s_cLRLhwoar194YBgPRLKdcP
          stance: supports
          locator: CBDB:280886
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cLRLhwoar194YBgPRLKdcP
            source_type: api_record
            title: 中国历代人物传记资料库：王洪舒（CBDB 280886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280886&o=json
            external_identifier: CBDB:280886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dcAd7qLXTXpd13NzAqvPk7
        subject_person_id: p_GWbyowL6he2D9D7Fmw5gbM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪舒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Q3bGphCoMNWjGz9b1tTMjk
          claim_id: c_dcAd7qLXTXpd13NzAqvPk7
          source_id: s_cLRLhwoar194YBgPRLKdcP
          stance: supports
          locator: CBDB:280886
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_deC8lnaZUvE7OkWWWpT7m6
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GWbyowL6he2D9D7Fmw5gbM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YOy-IXW-Mgc1_-KsEcKECa
          claim_id: c_deC8lnaZUvE7OkWWWpT7m6
          source_id: s_R7z3CE64-tcE6oDCpw_hfp
          stance: supports
          locator: CBDB：兄弟 王度（198501）之父／母 王嘉謀
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪舒 与 王度 为同胞（CBDB 记「弟」），王度 之父／母即 王洪舒 之父／母。
          source:
            id: s_R7z3CE64-tcE6oDCpw_hfp
            source_type: api_record
            title: 中国历代人物传记资料库：王洪舒（CBDB 280886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280886&o=json
            external_identifier: CBDB:280886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E31oomNBRBVCzfypYEt5JV
        status: active
        display_name: 王嘉謀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_t4dGqZlvaNyc6yuxTX_Lyw
        subject_person_id: p_GWbyowL6he2D9D7Fmw5gbM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q53o_M1VwVAJFFGwRg4Xii
          claim_id: c_t4dGqZlvaNyc6yuxTX_Lyw
          source_id: s_R7z3CE64-tcE6oDCpw_hfp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198501 王度）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R7z3CE64-tcE6oDCpw_hfp
            source_type: api_record
            title: 中国历代人物传记资料库：王洪舒（CBDB 280886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280886&o=json
            external_identifier: CBDB:280886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J9N7hzaFrJkzxknueiQ82Y
        status: active
        display_name: 王度
        merged_into_person_id: null
---

# 王洪舒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王洪舒，明人物。景泰五年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 280886） | accepted |
| name.primary | 王洪舒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_E31oomNBRBVCzfypYEt5JV | 王嘉謀 | accepted |
| other | p_J9N7hzaFrJkzxknueiQ82Y | 王度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪舒（CBDB 280886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280886&o=json)
