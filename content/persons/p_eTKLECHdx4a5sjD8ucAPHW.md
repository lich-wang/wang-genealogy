---
schema: wang-person/v1
id: p_eTKLECHdx4a5sjD8ucAPHW
status: active
merged_into: null
display_name: 王致
cbdb_id: 226581
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eBEtFi2GbkpKgZRdXM33EH
        subject_person_id: p_eTKLECHdx4a5sjD8ucAPHW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hX38kGjiK6kQjqjATZ5RRT
          claim_id: c_eBEtFi2GbkpKgZRdXM33EH
          source_id: s_kxrMMhQagujc2MiZCJzE5T
          stance: supports
          locator: Q45534807
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_kxrMMhQagujc2MiZCJzE5T
            source_type: api_record
            title: 维基数据：王致（Q45534807）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45534807
            external_identifier: Q45534807
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_bWu3DUknHo3bpdvw8MhwJj
          claim_id: c_eBEtFi2GbkpKgZRdXM33EH
          source_id: s_pS9doZtJ5XxfQFcUp8E7TS
          stance: supports
          locator: CBDB:226581
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_pS9doZtJ5XxfQFcUp8E7TS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王致（226581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226581&o=json
            external_identifier: CBDB:226581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nFQtf6vQtxQmWJJ45aE6hU
        subject_person_id: p_eTKLECHdx4a5sjD8ucAPHW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 226581
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RRsd4QM2m3j1uvcRu35HD6
          claim_id: c_nFQtf6vQtxQmWJJ45aE6hU
          source_id: s_kxrMMhQagujc2MiZCJzE5T
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
        id: c_QZwyQPWwgc6dEipp7GLKCV
        subject_person_id: p_YcgZGHB8b41JUksSD6hCbG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eTKLECHdx4a5sjD8ucAPHW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dDKeKJDx1D7aSN6EfC76Tk
          claim_id: c_QZwyQPWwgc6dEipp7GLKCV
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
        - id: cs_LTXwKsg7ymc7weJ9uJ1T7K
          claim_id: c_QZwyQPWwgc6dEipp7GLKCV
          source_id: s_kxrMMhQagujc2MiZCJzE5T
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_NDTm3CpioCNQdFgUYVzCN2
          claim_id: c_QZwyQPWwgc6dEipp7GLKCV
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

# 王致

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致 | accepted |
| bio.summary | Ming dynasty person CBDB = 226581 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YcgZGHB8b41JUksSD6hCbG | 王宗蓁 | accepted |

## 外部来源

- [维基数据：王致（Q45534807）](https://www.wikidata.org/wiki/Q45534807)
- [维基数据：王宗蓁（Q45528855）](https://www.wikidata.org/wiki/Q45528855)
- [CBDB 中国历代人物传记资料库：王致（226581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226581&o=json)
- [CBDB 中国历代人物传记资料库：王宗蓁（207031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207031&o=json)
