---
schema: wang-person/v1
id: p_S3KVQDZtVGef9kj9DGD5B8
status: active
merged_into: null
display_name: 王嘉寀
cbdb_id: 209791
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_us1HyQG7FNwnLrLZKXYnX1
        subject_person_id: p_S3KVQDZtVGef9kj9DGD5B8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉寀，明人物。隆慶五年進士，籍贯潛山。（中国历代人物传记资料库 CBDB 209791）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_NKJgKvdaDMERXYRy4QWD05
          claim_id: c_us1HyQG7FNwnLrLZKXYnX1
          source_id: s_ufRCRCzd2yuefHT5TfHQve
          stance: supports
          locator: CBDB:209791
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ufRCRCzd2yuefHT5TfHQve
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉寀（CBDB 209791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209791&o=json
            external_identifier: CBDB:209791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3TC16ptZTFtsGp8GL3hmML
        subject_person_id: p_S3KVQDZtVGef9kj9DGD5B8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉寀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jWCLX22DjSFiVgTEdboNNR
          claim_id: c_3TC16ptZTFtsGp8GL3hmML
          source_id: s_ufRCRCzd2yuefHT5TfHQve
          stance: supports
          locator: CBDB:209791
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uueyvgA-WCfKiKPza6kzfA
        subject_person_id: p_1VkGu8uv668PXiV6BFFStb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S3KVQDZtVGef9kj9DGD5B8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dKOPUs2j3qm7kwdvLiqTZd
          claim_id: c_uueyvgA-WCfKiKPza6kzfA
          source_id: s_88I_gdoL39AK5ppR81VTnU
          stance: supports
          locator: CBDB：兄弟 王嘉柔（205854）之父／母 王漟
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉寀 与 王嘉柔 为同胞（CBDB 记「兄」），王嘉柔 之父／母即 王嘉寀 之父／母。
          source:
            id: s_88I_gdoL39AK5ppR81VTnU
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉寀（CBDB 209791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209791&o=json
            external_identifier: CBDB:209791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1VkGu8uv668PXiV6BFFStb
        status: active
        display_name: 王漟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bTTxs_g4VdToKsbj6smP4N
        subject_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_S3KVQDZtVGef9kj9DGD5B8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i4ZksKWOzUFUCq_hskA3B-
          claim_id: c_bTTxs_g4VdToKsbj6smP4N
          source_id: s_88I_gdoL39AK5ppR81VTnU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205854 王嘉柔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_88I_gdoL39AK5ppR81VTnU
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉寀（CBDB 209791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209791&o=json
            external_identifier: CBDB:209791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Eo3x5BVMmizyxxEaJmawa5
        status: active
        display_name: 王嘉柔
        merged_into_person_id: null
---

# 王嘉寀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嘉寀，明人物。隆慶五年進士，籍贯潛山。（中国历代人物传记资料库 CBDB 209791） | accepted |
| name.primary | 王嘉寀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1VkGu8uv668PXiV6BFFStb | 王漟 | accepted |
| other | p_Eo3x5BVMmizyxxEaJmawa5 | 王嘉柔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉寀（CBDB 209791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209791&o=json)
