---
schema: wang-person/v1
id: p_APb1dB5rHsGTFbFG32SEjC
status: active
merged_into: null
display_name: 王琰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YsRzuk9R8Ct9mD1n1pWPYX
        subject_person_id: p_APb1dB5rHsGTFbFG32SEjC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1bggVLPSHonPDNFPyQuWkA
          claim_id: c_YsRzuk9R8Ct9mD1n1pWPYX
          source_id: s_Myzxvf7Qbh2539YGBaTUDZ
          stance: supports
          locator: CBDB:261018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261018）
          source: &a1
            id: s_Myzxvf7Qbh2539YGBaTUDZ
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 261018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261018&o=json
            external_identifier: CBDB:261018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qFxT1VLrMafUZzP3Dt7wvY
        subject_person_id: p_APb1dB5rHsGTFbFG32SEjC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰，明人物。弘治三年進士，籍贯山陽。（中国历代人物传记资料库 CBDB 261018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EMGApS6OMAGqveU5QmbNPc
          claim_id: c_qFxT1VLrMafUZzP3Dt7wvY
          source_id: s_Myzxvf7Qbh2539YGBaTUDZ
          stance: supports
          locator: CBDB:261018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VC8GtcyxuF1nS2xL6rQg06
        subject_person_id: p_SQbqrU6uRV1rZFhGVtQz9b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_APb1dB5rHsGTFbFG32SEjC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FufuSm1--_3qR6onCsk8x3
          claim_id: c_VC8GtcyxuF1nS2xL6rQg06
          source_id: s_zPB67k22VwI4guj5GXH1M6
          stance: supports
          locator: CBDB：兄弟 王瑩（200655）之父／母 王稶
          quotation: null
          interpretation_note: 由兄弟关系推断：王琰 与 王瑩 为同胞（CBDB 记「兄」），王瑩 之父／母即 王琰 之父／母。
          source:
            id: s_zPB67k22VwI4guj5GXH1M6
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 261018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261018&o=json
            external_identifier: CBDB:261018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SQbqrU6uRV1rZFhGVtQz9b
        status: active
        display_name: 王稶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZcBOFq9n8CTgTSWVeJ41PP
        subject_person_id: p_APb1dB5rHsGTFbFG32SEjC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WfV9B4ZNGa1u8RHNsdFJs6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZF9rUfLn281-Oku--pExb4
          claim_id: c_ZcBOFq9n8CTgTSWVeJ41PP
          source_id: s_zPB67k22VwI4guj5GXH1M6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200655 王瑩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zPB67k22VwI4guj5GXH1M6
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 261018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261018&o=json
            external_identifier: CBDB:261018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WfV9B4ZNGa1u8RHNsdFJs6
        status: active
        display_name: 王瑩
        merged_into_person_id: null
---

# 王琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琰 | accepted |
| bio.summary | 王琰，明人物。弘治三年進士，籍贯山陽。（中国历代人物传记资料库 CBDB 261018） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SQbqrU6uRV1rZFhGVtQz9b | 王稶 | accepted |
| other | p_WfV9B4ZNGa1u8RHNsdFJs6 | 王瑩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琰（CBDB 261018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261018&o=json)
