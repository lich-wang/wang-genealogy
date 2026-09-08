---
schema: wang-person/v1
id: p_hV4FccBsTXSAEpS7L3B7RC
status: active
merged_into: null
display_name: 仇氏
cbdb_id: 45817
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AgJJn7364kkwmDEYErJECW
        subject_person_id: p_hV4FccBsTXSAEpS7L3B7RC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 仇氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MLBwgo2azYQYzF6JsB529H
          claim_id: c_AgJJn7364kkwmDEYErJECW
          source_id: s_6ezW96pfXcpCbsKRDGy11Z
          stance: supports
          locator: Q65798709
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_6ezW96pfXcpCbsKRDGy11Z
            source_type: api_record
            title: 维基数据：仇氏（Q65798709）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65798709
            external_identifier: Q65798709
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_hW82vfPFf5ik7pTjZKCec4
          claim_id: c_AgJJn7364kkwmDEYErJECW
          source_id: s_pCkch84T5F5r32DwPJWrfa
          stance: supports
          locator: CBDB:45817
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_pCkch84T5F5r32DwPJWrfa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：仇氏（45817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45817&o=json
            external_identifier: CBDB:45817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LHKoVowQXuBGASp4H9oyWD
        subject_person_id: p_hV4FccBsTXSAEpS7L3B7RC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MTk1zakKvoc4HW2SfG5Ese
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pVnY9fBgD7JfGcEZ29zkme
          claim_id: c_LHKoVowQXuBGASp4H9oyWD
          source_id: s_6ezW96pfXcpCbsKRDGy11Z
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_hJ86BRGxHNJFU7NbFEKsTn
          claim_id: c_LHKoVowQXuBGASp4H9oyWD
          source_id: s_9haVnYnB1Mu8a5ABupm314
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_9haVnYnB1Mu8a5ABupm314
            source_type: api_record
            title: 维基数据：王渎（Q45363040）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363040
            external_identifier: Q45363040
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
        - id: cs_gkoYG1kTm1LVQDfDjL9ZFV
          claim_id: c_LHKoVowQXuBGASp4H9oyWD
          source_id: s_nTUESHyNaXX4A6ufpnau6R
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_nTUESHyNaXX4A6ufpnau6R
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瀆（3986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3986&o=json
            external_identifier: CBDB:3986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:12.219Z
            metadata_json: null
      object_person:
        id: p_MTk1zakKvoc4HW2SfG5Ese
        status: active
        display_name: 王渎
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 仇氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 仇氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_MTk1zakKvoc4HW2SfG5Ese | 王渎 | accepted |

## 外部来源

- [维基数据：仇氏（Q65798709）](https://www.wikidata.org/wiki/Q65798709)
- [维基数据：王渎（Q45363040）](https://www.wikidata.org/wiki/Q45363040)
- [CBDB 中国历代人物传记资料库：仇氏（45817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45817&o=json)
- [CBDB 中国历代人物传记资料库：王瀆（3986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3986&o=json)
