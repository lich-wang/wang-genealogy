---
schema: wang-person/v1
id: p_HE6TVhtyyADTmF4djSgNSa
status: active
merged_into: null
display_name: 王隆
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YMZYDuhLm6QH5W4BBNiaHJ
        subject_person_id: p_HE6TVhtyyADTmF4djSgNSa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oRLpvCefEk28BDeYx2q8RS
          claim_id: c_YMZYDuhLm6QH5W4BBNiaHJ
          source_id: s_UNtSBPbCcx55KBxzQ2rLSy
          stance: supports
          locator: CBDB:262125
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262125）
          source: &a1
            id: s_UNtSBPbCcx55KBxzQ2rLSy
            source_type: api_record
            title: 中国历代人物传记资料库：王隆（CBDB 262125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262125&o=json
            external_identifier: CBDB:262125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hWXr64JMyCFPxDR4BiNaYP
        subject_person_id: p_HE6TVhtyyADTmF4djSgNSa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆，明人物。景泰五年進士，籍贯長安。（中国历代人物传记资料库 CBDB 262125）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8WfQP2zqlMD0Mf3yNPu9PD
          claim_id: c_hWXr64JMyCFPxDR4BiNaYP
          source_id: s_UNtSBPbCcx55KBxzQ2rLSy
          stance: supports
          locator: CBDB:262125
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZsmpCqBXEASNqQ2TAjqyiD
        subject_person_id: p_Z6SSx6JCsA5rPQ9sKcT6Nz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HE6TVhtyyADTmF4djSgNSa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45f61TwLpaUcyli4QDvY_i
          claim_id: c_ZsmpCqBXEASNqQ2TAjqyiD
          source_id: s_qnl2qy7klXEJWEvqg_QA2j
          stance: supports
          locator: CBDB：兄弟 王臣（198359）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王隆 与 王臣 为同胞（CBDB 记「弟」），王臣 之父／母即 王隆 之父／母。
          source:
            id: s_qnl2qy7klXEJWEvqg_QA2j
            source_type: api_record
            title: 中国历代人物传记资料库：王隆（CBDB 262125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262125&o=json
            external_identifier: CBDB:262125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z6SSx6JCsA5rPQ9sKcT6Nz
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_j29yPNaKbdimze5KeKF3mL
        subject_person_id: p_HE6TVhtyyADTmF4djSgNSa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vfLJWcSYWHpLtF3oqEp42D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Db_1FJlW1-rQWAn95imOBl
          claim_id: c_j29yPNaKbdimze5KeKF3mL
          source_id: s_qnl2qy7klXEJWEvqg_QA2j
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198359 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qnl2qy7klXEJWEvqg_QA2j
            source_type: api_record
            title: 中国历代人物传记资料库：王隆（CBDB 262125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262125&o=json
            external_identifier: CBDB:262125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vfLJWcSYWHpLtF3oqEp42D
        status: active
        display_name: 王臣
        merged_into_person_id: null
---

# 王隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隆 | accepted |
| bio.summary | 王隆，明人物。景泰五年進士，籍贯長安。（中国历代人物传记资料库 CBDB 262125） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Z6SSx6JCsA5rPQ9sKcT6Nz | 王珪 | accepted |
| other | p_vfLJWcSYWHpLtF3oqEp42D | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王隆（CBDB 262125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262125&o=json)
