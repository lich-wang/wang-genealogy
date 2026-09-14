---
schema: wang-person/v1
id: p_S21V1QtRVNHD8arYZz2Tbo
status: active
merged_into: null
display_name: 王睡之
cbdb_id: 384594
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7BcHgyJbi3Q8YX2P6PXYpv
        subject_person_id: p_S21V1QtRVNHD8arYZz2Tbo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睡之，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 384594）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_sHXV8riLGshvVMxxnRtZlv
          claim_id: c_7BcHgyJbi3Q8YX2P6PXYpv
          source_id: s_18hUvD5UCAiLAwK36NtQPM
          stance: supports
          locator: CBDB:384594
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_18hUvD5UCAiLAwK36NtQPM
            source_type: api_record
            title: 中国历代人物传记资料库：王睡之（CBDB 384594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384594&o=json
            external_identifier: CBDB:384594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:21.809Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MjqSEYGUaNBE1tN3HKab4e
        subject_person_id: p_S21V1QtRVNHD8arYZz2Tbo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睡之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_g4QKFcmmJFuM2tbKEqcv7w
          claim_id: c_MjqSEYGUaNBE1tN3HKab4e
          source_id: s_18hUvD5UCAiLAwK36NtQPM
          stance: supports
          locator: CBDB:384594
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4801-4900）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wBdvoGNNADzLdDqKzFbn_c
        subject_person_id: p_CvkqbHiKU1yv5J5yN1sDim
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S21V1QtRVNHD8arYZz2Tbo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zNnUXcyhCmqrI2tcyyLCbr
          claim_id: c_wBdvoGNNADzLdDqKzFbn_c
          source_id: s_waNdnAWGu0tY6BWrRcusgG
          stance: supports
          locator: CBDB：兄弟 王益之（22239）之父／母 王师古
          quotation: null
          interpretation_note: 由兄弟关系推断：王睡之 与 王益之 为同胞（CBDB 记「兄」），王益之 之父／母即 王睡之 之父／母。
          source:
            id: s_waNdnAWGu0tY6BWrRcusgG
            source_type: api_record
            title: 中国历代人物传记资料库：王睡之（CBDB 384594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384594&o=json
            external_identifier: CBDB:384594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CvkqbHiKU1yv5J5yN1sDim
        status: active
        display_name: 王师古
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_U6rpeGRTB9ONJqGYwCRj-e
        subject_person_id: p_S21V1QtRVNHD8arYZz2Tbo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tvnrFsvHvQUKrNdzPoHEVm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KAZiOrLAoFECpW_piSVGgd
          claim_id: c_U6rpeGRTB9ONJqGYwCRj-e
          source_id: s_waNdnAWGu0tY6BWrRcusgG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 22239 王益之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_waNdnAWGu0tY6BWrRcusgG
            source_type: api_record
            title: 中国历代人物传记资料库：王睡之（CBDB 384594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384594&o=json
            external_identifier: CBDB:384594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tvnrFsvHvQUKrNdzPoHEVm
        status: active
        display_name: 王益之
        merged_into_person_id: null
---

# 王睡之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王睡之，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 384594） | accepted |
| name.primary | 王睡之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CvkqbHiKU1yv5J5yN1sDim | 王师古 | accepted |
| other | p_tvnrFsvHvQUKrNdzPoHEVm | 王益之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王睡之（CBDB 384594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384594&o=json)
