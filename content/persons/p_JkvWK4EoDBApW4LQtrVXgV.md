---
schema: wang-person/v1
id: p_JkvWK4EoDBApW4LQtrVXgV
status: active
merged_into: null
display_name: 王尚明
cbdb_id: 269875
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bbRqecVjbA3YUiknxNjRHu
        subject_person_id: p_JkvWK4EoDBApW4LQtrVXgV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚明，明人物。弘治十五年進士，籍贯郟縣。（中国历代人物传记资料库 CBDB 269875）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hbNdXFhoyr4BRNb0YHJfZV
          claim_id: c_bbRqecVjbA3YUiknxNjRHu
          source_id: s_cvMnEREQunHRxnTkT2Y6jw
          stance: supports
          locator: CBDB:269875
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cvMnEREQunHRxnTkT2Y6jw
            source_type: api_record
            title: 中国历代人物传记资料库：王尚明（CBDB 269875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269875&o=json
            external_identifier: CBDB:269875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kch65bD4d9fweBPs4Zf3xs
        subject_person_id: p_JkvWK4EoDBApW4LQtrVXgV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_P7K43h4QLjvxkz1rsK6H3t
          claim_id: c_kch65bD4d9fweBPs4Zf3xs
          source_id: s_cvMnEREQunHRxnTkT2Y6jw
          stance: supports
          locator: CBDB:269875
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3Slq1C_mz-n8-bAj9f0wrp
        subject_person_id: p_BGWgef2Z8E8vPL41NM62UK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JkvWK4EoDBApW4LQtrVXgV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t86HQlPY-TWuPLrj49W2GS
          claim_id: c_3Slq1C_mz-n8-bAj9f0wrp
          source_id: s_wPhjlsuGgEPcmjoxiOMWyi
          stance: supports
          locator: CBDB：兄弟 王尚絅（126574）之父／母 王璇
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚明 与 王尚絅 为同胞（CBDB 记「兄」），王尚絅 之父／母即 王尚明 之父／母。
          source:
            id: s_wPhjlsuGgEPcmjoxiOMWyi
            source_type: api_record
            title: 中国历代人物传记资料库：王尚明（CBDB 269875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269875&o=json
            external_identifier: CBDB:269875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BGWgef2Z8E8vPL41NM62UK
        status: active
        display_name: 王璇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MeDnxETmdNQUuVHuLEcG4Y
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JkvWK4EoDBApW4LQtrVXgV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ic5R_IreC-eLPg0QidceFD
          claim_id: c_MeDnxETmdNQUuVHuLEcG4Y
          source_id: s_wPhjlsuGgEPcmjoxiOMWyi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126574 王尚絅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wPhjlsuGgEPcmjoxiOMWyi
            source_type: api_record
            title: 中国历代人物传记资料库：王尚明（CBDB 269875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269875&o=json
            external_identifier: CBDB:269875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ec1dckj7YLUcRUGq2Dbkdc
        status: active
        display_name: 王尚絅
        merged_into_person_id: null
---

# 王尚明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王尚明，明人物。弘治十五年進士，籍贯郟縣。（中国历代人物传记资料库 CBDB 269875） | accepted |
| name.primary | 王尚明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BGWgef2Z8E8vPL41NM62UK | 王璇 | accepted |
| other | p_Ec1dckj7YLUcRUGq2Dbkdc | 王尚絅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚明（CBDB 269875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269875&o=json)
