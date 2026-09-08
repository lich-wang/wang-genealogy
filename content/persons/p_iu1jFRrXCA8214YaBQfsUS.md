---
schema: wang-person/v1
id: p_iu1jFRrXCA8214YaBQfsUS
status: active
merged_into: null
display_name: 王茂时
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cTBP1yKxSXQgSpW5LUfvz1
        subject_person_id: p_iu1jFRrXCA8214YaBQfsUS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂时
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fsriTErEna8gWa77m9vrjm
          claim_id: c_cTBP1yKxSXQgSpW5LUfvz1
          source_id: s_FEDBG1s9tKsBFCA8k6SY8T
          stance: supports
          locator: Q45422610
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_FEDBG1s9tKsBFCA8k6SY8T
            source_type: api_record
            title: 维基数据：王茂时（Q45422610）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45422610
            external_identifier: Q45422610
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_QL67AdQreA12UDqcF2Yf87
          claim_id: c_cTBP1yKxSXQgSpW5LUfvz1
          source_id: s_FXdMm8XDX8MKCSBFz9kSMi
          stance: supports
          locator: CBDB:33016
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_FXdMm8XDX8MKCSBFz9kSMi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王茂時（33016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33016&o=json
            external_identifier: CBDB:33016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_effxDQVagKKhmo5MM2b25G
        subject_person_id: p_iu1jFRrXCA8214YaBQfsUS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Tang dynasty person CBDB=33016
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E1iK4ifN16WJHBbz5w14si
          claim_id: c_effxDQVagKKhmo5MM2b25G
          source_id: s_FEDBG1s9tKsBFCA8k6SY8T
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
        id: c_Y6sHDgqxBUXMk5WE5mvyX5
        subject_person_id: p_JfWbDHNGFyJz6Cq8yoPLva
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iu1jFRrXCA8214YaBQfsUS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Et1yyK4pkZFztUFWyEXd1H
          claim_id: c_Y6sHDgqxBUXMk5WE5mvyX5
          source_id: s_e6LDhxKxZyo3PzSjXeRfWW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_e6LDhxKxZyo3PzSjXeRfWW
            source_type: api_record
            title: 维基数据：王崇基（Q45422606）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45422606
            external_identifier: Q45422606
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_sdiUU4YqxUeL7b3Jm9kWMt
          claim_id: c_Y6sHDgqxBUXMk5WE5mvyX5
          source_id: s_FEDBG1s9tKsBFCA8k6SY8T
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_gZ7iXRa1fgAfbqE31LdiTW
          claim_id: c_Y6sHDgqxBUXMk5WE5mvyX5
          source_id: s_n3ECn9A39xuG5r2gTrzvhQ
          stance: supports
          locator: 亲属关系：四子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_n3ECn9A39xuG5r2gTrzvhQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王崇基（33014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33014&o=json
            external_identifier: CBDB:33014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:14.405Z
            metadata_json: null
      object_person:
        id: p_JfWbDHNGFyJz6Cq8yoPLva
        status: active
        display_name: 王崇基
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王茂时

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂时 | accepted |
| bio.summary | Tang dynasty person CBDB=33016 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JfWbDHNGFyJz6Cq8yoPLva | 王崇基 | accepted |

## 外部来源

- [维基数据：王崇基（Q45422606）](https://www.wikidata.org/wiki/Q45422606)
- [维基数据：王茂时（Q45422610）](https://www.wikidata.org/wiki/Q45422610)
- [CBDB 中国历代人物传记资料库：王崇基（33014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33014&o=json)
- [CBDB 中国历代人物传记资料库：王茂時（33016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33016&o=json)
