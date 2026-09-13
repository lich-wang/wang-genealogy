---
schema: wang-person/v1
id: p_Y3wRCa6Nb255jiaw4aNbxF
status: active
merged_into: null
display_name: 王仕亨
cbdb_id: 254338
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TDRatK1D6mxpn4H25JfiPm
        subject_person_id: p_Y3wRCa6Nb255jiaw4aNbxF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕亨，史料所见人物。本项目依据《中国历代人物传记资料库：王仕亨（CBDB 254338）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_4d8-uua0Ehdee1XgPZOtub
          claim_id: c_TDRatK1D6mxpn4H25JfiPm
          source_id: s_X81Ka48za8KJTxLkEbceCD
          stance: supports
          locator: CBDB:254338
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_X81Ka48za8KJTxLkEbceCD
            source_type: api_record
            title: 中国历代人物传记资料库：王仕亨（CBDB 254338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254338&o=json
            external_identifier: CBDB:254338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GFsxxyV4TEuMQ4vC8cf647
        subject_person_id: p_Y3wRCa6Nb255jiaw4aNbxF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TZ7zQaxwKju2JuQzspYRBo
          claim_id: c_GFsxxyV4TEuMQ4vC8cf647
          source_id: s_X81Ka48za8KJTxLkEbceCD
          stance: supports
          locator: CBDB:254338
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FoS5x0NzEPNBRPz_ltp3Rn
        subject_person_id: p_Y3wRCa6Nb255jiaw4aNbxF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6eJaArFM13Rb6lQRTsLXIV
          claim_id: c_FoS5x0NzEPNBRPz_ltp3Rn
          source_id: s_srAnw7NJCmjSg2UeHn9GXe
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_srAnw7NJCmjSg2UeHn9GXe
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 200153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200153&o=json
            external_identifier: CBDB:200153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jHwZfHWM4vMLPpm1ZfMXFt
        status: active
        display_name: 王彝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仕亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仕亨，史料所见人物。本项目依据《中国历代人物传记资料库：王仕亨（CBDB 254338）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仕亨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jHwZfHWM4vMLPpm1ZfMXFt | 王彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仕亨（CBDB 254338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254338&o=json)
- [中国历代人物传记资料库：王彝（CBDB 200153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200153&o=json)
