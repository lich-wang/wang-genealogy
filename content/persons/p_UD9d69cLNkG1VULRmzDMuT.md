---
schema: wang-person/v1
id: p_UD9d69cLNkG1VULRmzDMuT
status: active
merged_into: null
display_name: 王正忠
cbdb_id: 288239
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n77Zyyhu6H7PSgDNNFeHQK
        subject_person_id: p_UD9d69cLNkG1VULRmzDMuT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正忠，明人物。嘉靖八年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 288239）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_h61z6CdomHIPOf9vn-_xvm
          claim_id: c_n77Zyyhu6H7PSgDNNFeHQK
          source_id: s_t8d4nNAkh9Qn99NhfXRw8F
          stance: supports
          locator: CBDB:288239
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_t8d4nNAkh9Qn99NhfXRw8F
            source_type: api_record
            title: 中国历代人物传记资料库：王正忠（CBDB 288239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288239&o=json
            external_identifier: CBDB:288239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4F9XyoL56c46wYANrf2wE7
        subject_person_id: p_UD9d69cLNkG1VULRmzDMuT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RJCBAGSmcX7KF852nQAWVe
          claim_id: c_4F9XyoL56c46wYANrf2wE7
          source_id: s_t8d4nNAkh9Qn99NhfXRw8F
          stance: supports
          locator: CBDB:288239
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N461UIuvgGG581Qq1RS07I
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UD9d69cLNkG1VULRmzDMuT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pw-04ja-nPMntKNLfaaWj_
          claim_id: c_N461UIuvgGG581Qq1RS07I
          source_id: s_TSMiPLl2ZmZZEXUmAAu1HQ
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正忠 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正忠 之父／母。
          source:
            id: s_TSMiPLl2ZmZZEXUmAAu1HQ
            source_type: api_record
            title: 中国历代人物传记资料库：王正忠（CBDB 288239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288239&o=json
            external_identifier: CBDB:288239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HjMSGWaaseFRH9Rnqfpx53
        status: active
        display_name: 王守礼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Er2ISpNgvX1RzpsLavpXxG
        subject_person_id: p_UD9d69cLNkG1VULRmzDMuT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qfyAqTA3PGUUXcgAsCUJEh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tYty0NA97MR-w0UfxxMgnm
          claim_id: c_Er2ISpNgvX1RzpsLavpXxG
          source_id: s_TSMiPLl2ZmZZEXUmAAu1HQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202442 王正思）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TSMiPLl2ZmZZEXUmAAu1HQ
            source_type: api_record
            title: 中国历代人物传记资料库：王正忠（CBDB 288239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288239&o=json
            external_identifier: CBDB:288239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qfyAqTA3PGUUXcgAsCUJEh
        status: active
        display_name: 王正思
        merged_into_person_id: null
---

# 王正忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正忠，明人物。嘉靖八年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 288239） | accepted |
| name.primary | 王正忠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HjMSGWaaseFRH9Rnqfpx53 | 王守礼 | accepted |
| other | p_qfyAqTA3PGUUXcgAsCUJEh | 王正思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王正忠（CBDB 288239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288239&o=json)
