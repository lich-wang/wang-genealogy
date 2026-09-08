---
schema: wang-person/v1
id: p_DNBu7dKBcHTFT8EoXEHiXT
status: active
merged_into: null
display_name: 丁氏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xp9t8tNKtLSZfgQspaRf3G
        subject_person_id: p_DNBu7dKBcHTFT8EoXEHiXT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 丁氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GcWQPGKwDqW4CEF11XCZ12
          claim_id: c_xp9t8tNKtLSZfgQspaRf3G
          source_id: s_Gp3VAxCA4pAUQ4tcQCX6eX
          stance: supports
          locator: Q65904233
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_Gp3VAxCA4pAUQ4tcQCX6eX
            source_type: api_record
            title: 维基数据：丁氏（Q65904233）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65904233
            external_identifier: Q65904233
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_ZDHuA9P3V5zfCfj1AWB2sE
          claim_id: c_xp9t8tNKtLSZfgQspaRf3G
          source_id: s_Ghq5wA4jfXc1oHWe78vLC5
          stance: supports
          locator: CBDB:437904
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_Ghq5wA4jfXc1oHWe78vLC5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：丁氏（437904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437904&o=json
            external_identifier: CBDB:437904
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
        id: c_uQUEABqSDzYkq4GPPgJCGS
        subject_person_id: p_Djkmc4uicJBuT6DjuX7m7t
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_DNBu7dKBcHTFT8EoXEHiXT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PMDtS4J6t3E4Y3K4e8NEZA
          claim_id: c_uQUEABqSDzYkq4GPPgJCGS
          source_id: s_Gp3VAxCA4pAUQ4tcQCX6eX
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_hN8PpPSKL3mrbH3WAZhFZU
          claim_id: c_uQUEABqSDzYkq4GPPgJCGS
          source_id: s_LPKamJ78vzJUu4765xEYKj
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_LPKamJ78vzJUu4765xEYKj
            source_type: api_record
            title: 维基数据：王稌（Q65903516）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903516
            external_identifier: Q65903516
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
            metadata_json: null
        - id: cs_KuTG2QFgqdJddxmgatQKsb
          claim_id: c_uQUEABqSDzYkq4GPPgJCGS
          source_id: s_DifVCfdMFb5K6Mo67xCm1z
          stance: supports
          locator: 亲属关系：第一任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_DifVCfdMFb5K6Mo67xCm1z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王稌（437664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437664&o=json
            external_identifier: CBDB:437664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:09.885Z
            metadata_json: null
      object_person:
        id: p_Djkmc4uicJBuT6DjuX7m7t
        status: active
        display_name: 王稌
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 丁氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 丁氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Djkmc4uicJBuT6DjuX7m7t | 王稌 | accepted |

## 外部来源

- [维基数据：丁氏（Q65904233）](https://www.wikidata.org/wiki/Q65904233)
- [维基数据：王稌（Q65903516）](https://www.wikidata.org/wiki/Q65903516)
- [CBDB 中国历代人物传记资料库：丁氏（437904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437904&o=json)
- [CBDB 中国历代人物传记资料库：王稌（437664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437664&o=json)
