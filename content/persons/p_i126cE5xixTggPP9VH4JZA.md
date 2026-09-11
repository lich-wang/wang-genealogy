---
schema: wang-person/v1
id: p_i126cE5xixTggPP9VH4JZA
status: active
merged_into: null
display_name: 王乙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B56Rq4TExn83omgovjKGFP
        subject_person_id: p_i126cE5xixTggPP9VH4JZA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HNnct3ydvR7KHvAF41A7Zp
          claim_id: c_B56Rq4TExn83omgovjKGFP
          source_id: s_oCL9f2n41B72fxXJEDyaGs
          stance: supports
          locator: CBDB:12356
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12356）
          source: &a1
            id: s_oCL9f2n41B72fxXJEDyaGs
            source_type: api_record
            title: 中国历代人物传记资料库：王乙（CBDB 12356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12356&o=json
            external_identifier: CBDB:12356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.599Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sagD2WqoCBYCf4EPbqyJEu
        subject_person_id: p_i126cE5xixTggPP9VH4JZA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乙，宋人物。籍贯咸平。（中国历代人物传记资料库 CBDB 12356）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ySwxyfW6jm4t3A5m5iIetu
          claim_id: c_sagD2WqoCBYCf4EPbqyJEu
          source_id: s_oCL9f2n41B72fxXJEDyaGs
          stance: supports
          locator: CBDB:12356
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f5BTh7LzohDczQz7mx9EqI
        subject_person_id: p_PwEB9MfJmRz2oGwTFBuXo7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i126cE5xixTggPP9VH4JZA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3XJEkfj1MyFmRfsnzkGUMl
          claim_id: c_f5BTh7LzohDczQz7mx9EqI
          source_id: s_oCL9f2n41B72fxXJEDyaGs
          stance: supports
          locator: CBDB 双向互证（父 王睦 ⇄ 子 王乙）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_PwEB9MfJmRz2oGwTFBuXo7
        status: active
        display_name: 王睦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王乙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乙 | accepted |
| bio.summary | 王乙，宋人物。籍贯咸平。（中国历代人物传记资料库 CBDB 12356） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PwEB9MfJmRz2oGwTFBuXo7 | 王睦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王乙（CBDB 12356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12356&o=json)
