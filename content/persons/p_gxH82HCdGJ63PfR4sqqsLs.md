---
schema: wang-person/v1
id: p_gxH82HCdGJ63PfR4sqqsLs
status: active
merged_into: null
display_name: 王學韓
cbdb_id: 303179
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9GYMc4Asn24PMG3JLncNeS
        subject_person_id: p_gxH82HCdGJ63PfR4sqqsLs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學韓，明人物。嘉靖二十年進士，籍贯澤州。（中国历代人物传记资料库 CBDB 303179）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_WB76kY16OvL95EwpiGa28_
          claim_id: c_9GYMc4Asn24PMG3JLncNeS
          source_id: s_qp1QKnfajhE2Xt54cYiuqw
          stance: supports
          locator: CBDB:303179
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qp1QKnfajhE2Xt54cYiuqw
            source_type: api_record
            title: 中国历代人物传记资料库：王學韓（CBDB 303179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303179&o=json
            external_identifier: CBDB:303179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UpwaSu5pXTkVBSu3gj7Edi
        subject_person_id: p_gxH82HCdGJ63PfR4sqqsLs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學韓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Z1rihqex82WEv7hEodbtM4
          claim_id: c_UpwaSu5pXTkVBSu3gj7Edi
          source_id: s_qp1QKnfajhE2Xt54cYiuqw
          stance: supports
          locator: CBDB:303179
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WfkWU_mzKCBOB1wH-w-RQ-
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gxH82HCdGJ63PfR4sqqsLs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eg_miSgNJnUgx9_rmrwEK3
          claim_id: c_WfkWU_mzKCBOB1wH-w-RQ-
          source_id: s_IJz3PLQYaBUEVf-OU6tGgG
          stance: supports
          locator: CBDB：兄弟 王學柳（203329）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學韓 与 王學柳 为同胞（CBDB 记「弟」），王學柳 之父／母即 王學韓 之父／母。
          source:
            id: s_IJz3PLQYaBUEVf-OU6tGgG
            source_type: api_record
            title: 中国历代人物传记资料库：王學韓（CBDB 303179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303179&o=json
            external_identifier: CBDB:303179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xnVNk7Yn6e863HGsnbGHpw
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EReL0yxj1kPDv1RNjN0-o2
        subject_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gxH82HCdGJ63PfR4sqqsLs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kvbzYNpR_C6lg-hhX-4h0Q
          claim_id: c_EReL0yxj1kPDv1RNjN0-o2
          source_id: s_IJz3PLQYaBUEVf-OU6tGgG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203329 王學柳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IJz3PLQYaBUEVf-OU6tGgG
            source_type: api_record
            title: 中国历代人物传记资料库：王學韓（CBDB 303179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303179&o=json
            external_identifier: CBDB:303179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U7JNj2nXJh2KN7f9tg3Czd
        status: active
        display_name: 王學柳
        merged_into_person_id: null
---

# 王學韓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學韓，明人物。嘉靖二十年進士，籍贯澤州。（中国历代人物传记资料库 CBDB 303179） | accepted |
| name.primary | 王學韓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xnVNk7Yn6e863HGsnbGHpw | 王相 | accepted |
| other | p_U7JNj2nXJh2KN7f9tg3Czd | 王學柳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學韓（CBDB 303179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303179&o=json)
