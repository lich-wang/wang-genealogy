---
schema: wang-person/v1
id: p_WqA6oseexUT2vcPHGrcLMK
status: active
merged_into: null
display_name: 王訪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2C29amhQAFBC9d4aN2jsUc
        subject_person_id: p_WqA6oseexUT2vcPHGrcLMK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_suxuT24rFHnjLL49DS7FNr
          claim_id: c_2C29amhQAFBC9d4aN2jsUc
          source_id: s_1zvV29dTD8EkcxgCEf4GTi
          stance: supports
          locator: CBDB:305878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（305878）
          source: &a1
            id: s_1zvV29dTD8EkcxgCEf4GTi
            source_type: api_record
            title: 中国历代人物传记资料库：王訪（CBDB 305878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305878&o=json
            external_identifier: CBDB:305878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QSEXx8s4D5H5rsjWB6MDYe
        subject_person_id: p_WqA6oseexUT2vcPHGrcLMK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訪，明人物。嘉靖二十三年進士，籍贯成都右衛。（中国历代人物传记资料库 CBDB 305878）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UMfYPaEN1tiGGtqKF3aYJ4
          claim_id: c_QSEXx8s4D5H5rsjWB6MDYe
          source_id: s_1zvV29dTD8EkcxgCEf4GTi
          stance: supports
          locator: CBDB:305878
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nQ-EVxzVekSD3Cyqh-Wjw0
        subject_person_id: p_aUMLg4XvZD3aBryzgJdguC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WqA6oseexUT2vcPHGrcLMK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8vFJWVXxmswmiz7FkqHEbm
          claim_id: c_nQ-EVxzVekSD3Cyqh-Wjw0
          source_id: s_NkD3R1JBYBDi2zWxW7mOFr
          stance: supports
          locator: CBDB：兄弟 王詢（126740）之父／母 王轍
          quotation: null
          interpretation_note: 由兄弟关系推断：王訪 与 王詢 为同胞（CBDB 记「兄」），王詢 之父／母即 王訪 之父／母。
          source:
            id: s_NkD3R1JBYBDi2zWxW7mOFr
            source_type: api_record
            title: 中国历代人物传记资料库：王訪（CBDB 305878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305878&o=json
            external_identifier: CBDB:305878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aUMLg4XvZD3aBryzgJdguC
        status: active
        display_name: 王轍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_db8LAjntrA2M-I82xxOHGT
        subject_person_id: p_FxddjLjfdguMnGe5Jwbuyj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WqA6oseexUT2vcPHGrcLMK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L3wRg7LX6C5D9UKKTKqFts
          claim_id: c_db8LAjntrA2M-I82xxOHGT
          source_id: s_NkD3R1JBYBDi2zWxW7mOFr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126740 王詢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NkD3R1JBYBDi2zWxW7mOFr
            source_type: api_record
            title: 中国历代人物传记资料库：王訪（CBDB 305878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305878&o=json
            external_identifier: CBDB:305878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FxddjLjfdguMnGe5Jwbuyj
        status: active
        display_name: 王詢
        merged_into_person_id: null
---

# 王訪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訪 | accepted |
| bio.summary | 王訪，明人物。嘉靖二十三年進士，籍贯成都右衛。（中国历代人物传记资料库 CBDB 305878） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aUMLg4XvZD3aBryzgJdguC | 王轍 | accepted |
| other | p_FxddjLjfdguMnGe5Jwbuyj | 王詢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訪（CBDB 305878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305878&o=json)
