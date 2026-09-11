---
schema: wang-person/v1
id: p_D2oNcSP9ujVXCgNLvsNQq7
status: active
merged_into: null
display_name: 王璽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RHDw1aPYFRBrAhKnZdmNYZ
        subject_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5A9C6qHsTNi93kFEqEhqYQ
          claim_id: c_RHDw1aPYFRBrAhKnZdmNYZ
          source_id: s_kekNW4qJqBQs88vjAxByMp
          stance: supports
          locator: CBDB:201722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201722）
          source: &a1
            id: s_kekNW4qJqBQs88vjAxByMp
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 201722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201722&o=json
            external_identifier: CBDB:201722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ihHYTVPNq2kAsPBPiaraac
        subject_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1469年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YKznD2RVz7W1yY4Zt8DwK4
          claim_id: c_ihHYTVPNq2kAsPBPiaraac
          source_id: s_kekNW4qJqBQs88vjAxByMp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WNsBviQ8VodPBbquoepjYU
        subject_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽（生于1469年），明人物。明清進士進士，籍贯武驤左衛，入仕進士。（中国历代人物传记资料库 CBDB 201722）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_roXXZi-dXM9PEzNqVT9yTb
          claim_id: c_WNsBviQ8VodPBbquoepjYU
          source_id: s_kekNW4qJqBQs88vjAxByMp
          stance: supports
          locator: CBDB:201722
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_D9goLH_g1bu9QLZ4J6DviW
        subject_person_id: p_XD3H4oXhmaonPt6uhjPXrk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ivzd15dcnzn6HjBT2yBJ2k
          claim_id: c_D9goLH_g1bu9QLZ4J6DviW
          source_id: s_kekNW4qJqBQs88vjAxByMp
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XD3H4oXhmaonPt6uhjPXrk
        status: active
        display_name: 王卓越
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_29Z2xeqFsGB5MeUvJl3tzh
        subject_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_132hE535mH7wnjXqd1uQED
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YoOq3I1WwLGuuNmPL-KEUH
          claim_id: c_29Z2xeqFsGB5MeUvJl3tzh
          source_id: s_Na2tGSSgbugeO99xbnk7Yr
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Na2tGSSgbugeO99xbnk7Yr
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王璽妻)（CBDB 277150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277150&o=json
            external_identifier: CBDB:277150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_132hE535mH7wnjXqd1uQED
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_DC-4K8XJDjSw5JMl6LPQzU
        subject_person_id: p_5jPSJ5bRFDJFyiiYFvL8Jy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4rykiD8sXIuwUNFvBwH1iF
          claim_id: c_DC-4K8XJDjSw5JMl6LPQzU
          source_id: s_kekNW4qJqBQs88vjAxByMp
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5jPSJ5bRFDJFyiiYFvL8Jy
        status: active
        display_name: 王率賓
        merged_into_person_id: null
    - claim:
        id: c_L3Szoteuekgnbu942viFdJ
        subject_person_id: p_TfRE2PtormURx9X7QK28D9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F0bO--VZbZrxUlO8lJqpb3
          claim_id: c_L3Szoteuekgnbu942viFdJ
          source_id: s_kekNW4qJqBQs88vjAxByMp
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TfRE2PtormURx9X7QK28D9
        status: active
        display_name: 王其智
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| birth.date | 1469年 | accepted |
| bio.summary | 王璽（生于1469年），明人物。明清進士進士，籍贯武驤左衛，入仕進士。（中国历代人物传记资料库 CBDB 201722） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XD3H4oXhmaonPt6uhjPXrk | 王卓越 | accepted |
| spouses | p_132hE535mH7wnjXqd1uQED | 劉氏 | accepted |
| ancestors | p_5jPSJ5bRFDJFyiiYFvL8Jy | 王率賓 | accepted |
| ancestors | p_TfRE2PtormURx9X7QK28D9 | 王其智 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王璽妻)（CBDB 277150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277150&o=json)
- [中国历代人物传记资料库：王璽（CBDB 201722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201722&o=json)
