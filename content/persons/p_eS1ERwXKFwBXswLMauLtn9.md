---
schema: wang-person/v1
id: p_eS1ERwXKFwBXswLMauLtn9
status: active
merged_into: null
display_name: 王希齊
cbdb_id: 287987
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vLT72LuMuFqQc5hRbj97sm
        subject_person_id: p_eS1ERwXKFwBXswLMauLtn9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希齊，明人物。嘉靖八年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 287987）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_YNxLKwY3BY-mekS0XgXHri
          claim_id: c_vLT72LuMuFqQc5hRbj97sm
          source_id: s_ag8Zun6fEXHJyN1u7j8Snq
          stance: supports
          locator: CBDB:287987
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ag8Zun6fEXHJyN1u7j8Snq
            source_type: api_record
            title: 中国历代人物传记资料库：王希齊（CBDB 287987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287987&o=json
            external_identifier: CBDB:287987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4J6fLhWjDdjCTfgj2HcBso
        subject_person_id: p_eS1ERwXKFwBXswLMauLtn9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希齊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C3PgjhPNu2uFXbBFMHs16B
          claim_id: c_4J6fLhWjDdjCTfgj2HcBso
          source_id: s_ag8Zun6fEXHJyN1u7j8Snq
          stance: supports
          locator: CBDB:287987
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wk_nBZ7mh-Pyt06Xo_E9BX
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eS1ERwXKFwBXswLMauLtn9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xqUTBtx6THXWCm2PVP0KBS
          claim_id: c_wk_nBZ7mh-Pyt06Xo_E9BX
          source_id: s_SnKP_2QQEVvslT_QP320KV
          stance: supports
          locator: CBDB：兄弟 王希文（126543）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王希齊 与 王希文 为同胞（CBDB 记「弟」），王希文 之父／母即 王希齊 之父／母。
          source:
            id: s_SnKP_2QQEVvslT_QP320KV
            source_type: api_record
            title: 中国历代人物传记资料库：王希齊（CBDB 287987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287987&o=json
            external_identifier: CBDB:287987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4jND336KsTQjFJcBTReoib
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
        id: c_nR4cq-V-0mHBvI_AJXV1AL
        subject_person_id: p_eS1ERwXKFwBXswLMauLtn9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3fZiy2Z-rQ8fY88R1fiImO
          claim_id: c_nR4cq-V-0mHBvI_AJXV1AL
          source_id: s_SnKP_2QQEVvslT_QP320KV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126543 王希文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SnKP_2QQEVvslT_QP320KV
            source_type: api_record
            title: 中国历代人物传记资料库：王希齊（CBDB 287987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287987&o=json
            external_identifier: CBDB:287987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tz8uWFvWRBpp9FN5sbMR5o
        status: active
        display_name: 王希文
        merged_into_person_id: null
---

# 王希齊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希齊，明人物。嘉靖八年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 287987） | accepted |
| name.primary | 王希齊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4jND336KsTQjFJcBTReoib | 王瑄 | accepted |
| other | p_tz8uWFvWRBpp9FN5sbMR5o | 王希文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希齊（CBDB 287987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287987&o=json)
