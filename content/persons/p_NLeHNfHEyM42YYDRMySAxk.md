---
schema: wang-person/v1
id: p_NLeHNfHEyM42YYDRMySAxk
status: active
merged_into: null
display_name: 王鍈
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z48h3Qi4rQH7JrFwbi9sTU
        subject_person_id: p_NLeHNfHEyM42YYDRMySAxk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4RZr4bR4Gn5f6ZbEhMGxDa
          claim_id: c_Z48h3Qi4rQH7JrFwbi9sTU
          source_id: s_Y864NKvzqzGBzyeqce9mgx
          stance: supports
          locator: CBDB:309981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309981）
          source: &a1
            id: s_Y864NKvzqzGBzyeqce9mgx
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 309981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309981&o=json
            external_identifier: CBDB:309981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EdmCQDitcfHVptGj5xBP3s
        subject_person_id: p_NLeHNfHEyM42YYDRMySAxk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍈，明人物。嘉靖二十六年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 309981）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JPaKbN_fwmSbIFODNSbAc2
          claim_id: c_EdmCQDitcfHVptGj5xBP3s
          source_id: s_Y864NKvzqzGBzyeqce9mgx
          stance: supports
          locator: CBDB:309981
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KMknSP9n1JH0wizQPBgEyA
        subject_person_id: p_YosdMcUNtRPKhCPMJYVZTM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NLeHNfHEyM42YYDRMySAxk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hx_XhegW3Hzwf9rMn0NdNo
          claim_id: c_KMknSP9n1JH0wizQPBgEyA
          source_id: s_sderxlj34yVjQzfzCO6Tby
          stance: supports
          locator: CBDB：兄弟 王鈴（203785）之父／母 王堂
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍈 与 王鈴 为同胞（CBDB 记「兄」），王鈴 之父／母即 王鍈 之父／母。
          source:
            id: s_sderxlj34yVjQzfzCO6Tby
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 309981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309981&o=json
            external_identifier: CBDB:309981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YosdMcUNtRPKhCPMJYVZTM
        status: active
        display_name: 王堂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jVl6_vKj5PNuAapiO_g_qZ
        subject_person_id: p_NLeHNfHEyM42YYDRMySAxk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zCPZcY2xcN9dUGQk5upMkt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6o8Cr42ZrPAIzGkgi-Qw7p
          claim_id: c_jVl6_vKj5PNuAapiO_g_qZ
          source_id: s_sderxlj34yVjQzfzCO6Tby
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203785 王鈴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sderxlj34yVjQzfzCO6Tby
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 309981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309981&o=json
            external_identifier: CBDB:309981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zCPZcY2xcN9dUGQk5upMkt
        status: active
        display_name: 王鈴
        merged_into_person_id: null
---

# 王鍈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍈 | accepted |
| bio.summary | 王鍈，明人物。嘉靖二十六年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 309981） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YosdMcUNtRPKhCPMJYVZTM | 王堂 | accepted |
| other | p_zCPZcY2xcN9dUGQk5upMkt | 王鈴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍈（CBDB 309981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309981&o=json)
