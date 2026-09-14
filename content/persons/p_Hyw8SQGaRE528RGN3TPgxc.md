---
schema: wang-person/v1
id: p_Hyw8SQGaRE528RGN3TPgxc
status: active
merged_into: null
display_name: 王榮
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6bGwgWKEKcs4cExq749RgL
        subject_person_id: p_Hyw8SQGaRE528RGN3TPgxc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BfKYcBx2MEAhQNnbegi9qk
          claim_id: c_6bGwgWKEKcs4cExq749RgL
          source_id: s_CCe2diTS36EQM8NfrvSx2X
          stance: supports
          locator: CBDB:268115
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268115）
          source: &a1
            id: s_CCe2diTS36EQM8NfrvSx2X
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 268115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268115&o=json
            external_identifier: CBDB:268115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KHy6u8ESGiMSQyjuP1d2FM
        subject_person_id: p_Hyw8SQGaRE528RGN3TPgxc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 268115）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7-lFhGgBT-O3lbJVTAGvWs
          claim_id: c_KHy6u8ESGiMSQyjuP1d2FM
          source_id: s_CCe2diTS36EQM8NfrvSx2X
          stance: supports
          locator: CBDB:268115
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jySBw50Z3qMGthZ0WMGJpk
        subject_person_id: p_Hyw8SQGaRE528RGN3TPgxc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cuoocx9FVbq3j8KTAiGKVC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IuOz77tOIAMpxISvieEPnj
          claim_id: c_jySBw50Z3qMGthZ0WMGJpk
          source_id: s_CCe2diTS36EQM8NfrvSx2X
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Cuoocx9FVbq3j8KTAiGKVC
        status: active
        display_name: 王春
        merged_into_person_id: null
    - claim:
        id: c_JhUUGIgT813ptn9O-UnpjA
        subject_person_id: p_Hyw8SQGaRE528RGN3TPgxc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LSAQbntELyjPo3DMMA6Fjf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P--n3GaGYhsE78hp6JUwOF
          claim_id: c_JhUUGIgT813ptn9O-UnpjA
          source_id: s_WQJ6QgmXq3305Vim6U-YyP
          stance: supports
          locator: CBDB：兄弟 王春（201159）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王舂 与 王春 为同胞（CBDB 记「兄」），王春 之父／母即 王舂 之父／母。
          source:
            id: s_WQJ6QgmXq3305Vim6U-YyP
            source_type: api_record
            title: 中国历代人物传记资料库：王舂（CBDB 268121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268121&o=json
            external_identifier: CBDB:268121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LSAQbntELyjPo3DMMA6Fjf
        status: active
        display_name: 王舂
        merged_into_person_id: null
    - claim:
        id: c_3I7siLshbkyF7m0NrFRZcp
        subject_person_id: p_Hyw8SQGaRE528RGN3TPgxc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iQRRkNTQZeiWjjut1TEC1d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-wj1UF3ZmNOSwAc-xXCuWt
          claim_id: c_3I7siLshbkyF7m0NrFRZcp
          source_id: s_5h_GU_EPESG8MoBNiCAobg
          stance: supports
          locator: CBDB：兄弟 王春（201159）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王泰 与 王春 为同胞（CBDB 记「弟」），王春 之父／母即 王泰 之父／母。
          source:
            id: s_5h_GU_EPESG8MoBNiCAobg
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 268120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268120&o=json
            external_identifier: CBDB:268120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iQRRkNTQZeiWjjut1TEC1d
        status: active
        display_name: 王泰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | 王榮，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 268115） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Cuoocx9FVbq3j8KTAiGKVC | 王春 | accepted |
| children | p_LSAQbntELyjPo3DMMA6Fjf | 王舂 | accepted |
| children | p_iQRRkNTQZeiWjjut1TEC1d | 王泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舂（CBDB 268121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268121&o=json)
- [中国历代人物传记资料库：王榮（CBDB 268115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268115&o=json)
- [中国历代人物传记资料库：王泰（CBDB 268120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268120&o=json)
