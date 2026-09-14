---
schema: wang-person/v1
id: p_XZG26mpDUSriVA7354o1a8
status: active
merged_into: null
display_name: 王澤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nVwEfhD7kVBdzpRXueGBMQ
        subject_person_id: p_XZG26mpDUSriVA7354o1a8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2BnLiiDZ4m367icnrynyhf
          claim_id: c_nVwEfhD7kVBdzpRXueGBMQ
          source_id: s_farZuWeYsj7zWs8LPsNXEU
          stance: supports
          locator: CBDB:211382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211382）
          source: &a1
            id: s_farZuWeYsj7zWs8LPsNXEU
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 211382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211382&o=json
            external_identifier: CBDB:211382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.031Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1ii6EtuGYERTX8EtD73X3b
        subject_person_id: p_XZG26mpDUSriVA7354o1a8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤，明人物。隆慶五年進士，籍贯富順。（中国历代人物传记资料库 CBDB 211382）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DxZF6jxCD98R1vKEscPAvE
          claim_id: c_1ii6EtuGYERTX8EtD73X3b
          source_id: s_farZuWeYsj7zWs8LPsNXEU
          stance: supports
          locator: CBDB:211382
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Rqiv43Pqx1X1N60-EkT-fJ
        subject_person_id: p_LfFs8i9gooDeZuUy7XnMeR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XZG26mpDUSriVA7354o1a8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uoko1F2WfnhttbTL3uTLat
          claim_id: c_Rqiv43Pqx1X1N60-EkT-fJ
          source_id: s_mGXUNm6IQfs9lNGVog_6w4
          stance: supports
          locator: CBDB：兄弟 王湘（205964）之父／母 王三至
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤 与 王湘 为同胞（CBDB 记「兄」），王湘 之父／母即 王澤 之父／母。
          source:
            id: s_mGXUNm6IQfs9lNGVog_6w4
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 211382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211382&o=json
            external_identifier: CBDB:211382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LfFs8i9gooDeZuUy7XnMeR
        status: active
        display_name: 王三至
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5IR_MH8HBCpSqiUDyUCWBv
        subject_person_id: p_JpKAwvv1MK7gdEG1QmEGyd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XZG26mpDUSriVA7354o1a8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gvT2VnzfMuvLvwU3LcBVYL
          claim_id: c_5IR_MH8HBCpSqiUDyUCWBv
          source_id: s_mGXUNm6IQfs9lNGVog_6w4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205964 王湘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mGXUNm6IQfs9lNGVog_6w4
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 211382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211382&o=json
            external_identifier: CBDB:211382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JpKAwvv1MK7gdEG1QmEGyd
        status: active
        display_name: 王湘
        merged_into_person_id: null
---

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| bio.summary | 王澤，明人物。隆慶五年進士，籍贯富順。（中国历代人物传记资料库 CBDB 211382） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LfFs8i9gooDeZuUy7XnMeR | 王三至 | accepted |
| other | p_JpKAwvv1MK7gdEG1QmEGyd | 王湘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澤（CBDB 211382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211382&o=json)
