---
schema: wang-person/v1
id: p_YGsySUortceY3jTkTWmVbj
status: active
merged_into: null
display_name: 王埈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bUKGKqv1ZDk44DPyL7UtGo
        subject_person_id: p_YGsySUortceY3jTkTWmVbj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埈
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kEifxXzgxTTJmfv5FKgUu4
          claim_id: c_bUKGKqv1ZDk44DPyL7UtGo
          source_id: s_vWAxvQ4L6EFhUGFmPDwfet
          stance: supports
          locator: Q45534616
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_vWAxvQ4L6EFhUGFmPDwfet
            source_type: api_record
            title: 维基数据：王埈（Q45534616）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45534616
            external_identifier: Q45534616
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_p33sdc753X2fJL2PAHfMmi
          claim_id: c_bUKGKqv1ZDk44DPyL7UtGo
          source_id: s_4YK6Pppa9NC6R1TCCg6JDV
          stance: supports
          locator: CBDB:226578
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_4YK6Pppa9NC6R1TCCg6JDV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王埈（226578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226578&o=json
            external_identifier: CBDB:226578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TZciVGigzP6nE9MuufRGXD
        subject_person_id: p_YGsySUortceY3jTkTWmVbj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 226578
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LHFhC87Ey9CFGNFbTKQApT
          claim_id: c_TZciVGigzP6nE9MuufRGXD
          source_id: s_vWAxvQ4L6EFhUGFmPDwfet
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ic3oKExnHCrpPLXXcfcCxL
        subject_person_id: p_YcgZGHB8b41JUksSD6hCbG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YGsySUortceY3jTkTWmVbj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3yKGxSJ8JHew82YwG5WFKz
          claim_id: c_ic3oKExnHCrpPLXXcfcCxL
          source_id: s_UEJCm4BifC222RfsPoT6b7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_UEJCm4BifC222RfsPoT6b7
            source_type: api_record
            title: 维基数据：王宗蓁（Q45528855）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45528855
            external_identifier: Q45528855
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:48.391Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97%E8%93%81
        - id: cs_vLiMRsEtAU4zmMPtwDhG13
          claim_id: c_ic3oKExnHCrpPLXXcfcCxL
          source_id: s_vWAxvQ4L6EFhUGFmPDwfet
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_FDEhWjoBiU4vDMwQXZKG2R
          claim_id: c_ic3oKExnHCrpPLXXcfcCxL
          source_id: s_csiJ837yS4LpHosWR4nuoi
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆丙戌科進士同年總錄
          source:
            id: s_csiJ837yS4LpHosWR4nuoi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗蓁（207031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207031&o=json
            external_identifier: CBDB:207031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:48.563Z
            metadata_json: null
      object_person:
        id: p_YcgZGHB8b41JUksSD6hCbG
        status: active
        display_name: 王宗蓁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王埈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王埈 | accepted |
| bio.summary | Ming dynasty person CBDB = 226578 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YcgZGHB8b41JUksSD6hCbG | 王宗蓁 | accepted |

## 外部来源

- [维基数据：王埈（Q45534616）](https://www.wikidata.org/wiki/Q45534616)
- [维基数据：王宗蓁（Q45528855）](https://www.wikidata.org/wiki/Q45528855)
- [CBDB 中国历代人物传记资料库：王埈（226578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226578&o=json)
- [CBDB 中国历代人物传记资料库：王宗蓁（207031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207031&o=json)
