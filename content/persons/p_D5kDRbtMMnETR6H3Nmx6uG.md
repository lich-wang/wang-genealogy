---
schema: wang-person/v1
id: p_D5kDRbtMMnETR6H3Nmx6uG
status: active
merged_into: null
display_name: 王補
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_inbLmayG78fojfPmed99Lw
        subject_person_id: p_D5kDRbtMMnETR6H3Nmx6uG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王補
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aFTP8bP6UwfYb599HjXYbN
          claim_id: c_inbLmayG78fojfPmed99Lw
          source_id: s_7S7j6WySYSrrcu2Fc7L6dR
          stance: supports
          locator: CBDB:260649
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260649）
          source: &a1
            id: s_7S7j6WySYSrrcu2Fc7L6dR
            source_type: api_record
            title: 中国历代人物传记资料库：王補（CBDB 260649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260649&o=json
            external_identifier: CBDB:260649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rxgj4aSBxoap84EKkLth5B
        subject_person_id: p_D5kDRbtMMnETR6H3Nmx6uG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王補，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260649）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iu1t6EaIQGuMLP8m1oiMiJ
          claim_id: c_rxgj4aSBxoap84EKkLth5B
          source_id: s_7S7j6WySYSrrcu2Fc7L6dR
          stance: supports
          locator: CBDB:260649
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hwbSDYhwCCG3WbUf6QNSl9
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D5kDRbtMMnETR6H3Nmx6uG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3TT_eyMm-VPK8DlHf1sEgJ
          claim_id: c_hwbSDYhwCCG3WbUf6QNSl9
          source_id: s_CvgDSyG2QPSTQbPSUycX7s
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王補 与 王存忠 为同胞（CBDB 记「兄」），王存忠 之父／母即 王補 之父／母。
          source:
            id: s_CvgDSyG2QPSTQbPSUycX7s
            source_type: api_record
            title: 中国历代人物传记资料库：王補（CBDB 260649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260649&o=json
            external_identifier: CBDB:260649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zYsGWZ26RZr9NP9BPEi82D
        status: active
        display_name: 王永潮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_aq7UdahEUo_jdcx67NAsWu
        subject_person_id: p_D5kDRbtMMnETR6H3Nmx6uG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5npPN7xvOG3g7YLnN51fgk
          claim_id: c_aq7UdahEUo_jdcx67NAsWu
          source_id: s_CvgDSyG2QPSTQbPSUycX7s
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CvgDSyG2QPSTQbPSUycX7s
            source_type: api_record
            title: 中国历代人物传记资料库：王補（CBDB 260649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260649&o=json
            external_identifier: CBDB:260649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ybLqBE5H4AFTdmTJtgwy2w
        status: active
        display_name: 王存忠
        merged_into_person_id: null
---

# 王補

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王補 | accepted |
| bio.summary | 王補，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260649） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zYsGWZ26RZr9NP9BPEi82D | 王永潮 | accepted |
| other | p_ybLqBE5H4AFTdmTJtgwy2w | 王存忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王補（CBDB 260649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260649&o=json)
