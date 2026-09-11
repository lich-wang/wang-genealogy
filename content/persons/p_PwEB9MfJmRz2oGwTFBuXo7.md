---
schema: wang-person/v1
id: p_PwEB9MfJmRz2oGwTFBuXo7
status: active
merged_into: null
display_name: 王睦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gRb1iikZKZjjcmRAFrLLqU
        subject_person_id: p_PwEB9MfJmRz2oGwTFBuXo7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h3p4hrPFMxwFg5SfR7X2yJ
          claim_id: c_gRb1iikZKZjjcmRAFrLLqU
          source_id: s_PFcFRK2twJSZQMhYQfDWGw
          stance: supports
          locator: CBDB:12355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12355）
          source: &a1
            id: s_PFcFRK2twJSZQMhYQfDWGw
            source_type: api_record
            title: 中国历代人物传记资料库：王睦（CBDB 12355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12355&o=json
            external_identifier: CBDB:12355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BGQWSTJUDikkAtCqcKPDxs
        subject_person_id: p_PwEB9MfJmRz2oGwTFBuXo7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SiqgFn4nr5VtpJ2xnAZR8t
          claim_id: c_BGQWSTJUDikkAtCqcKPDxs
          source_id: s_PFcFRK2twJSZQMhYQfDWGw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ib9-M1oGYJE9-K5ghUPNX_
        subject_person_id: p_7Dfh7tesPGSK4MKyFJLHck
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PwEB9MfJmRz2oGwTFBuXo7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2D8OkTdK9vNnB-kgmegvXb
          claim_id: c_ib9-M1oGYJE9-K5ghUPNX_
          source_id: s_KEu2taW9JquufFjkZ9T4Lo
          stance: supports
          locator: CBDB 双向互证（子 王睦 ⇄ 父 王沔）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_KEu2taW9JquufFjkZ9T4Lo
            source_type: api_record
            title: 中国历代人物传记资料库：王沔（CBDB 1853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1853&o=json
            external_identifier: CBDB:1853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7Dfh7tesPGSK4MKyFJLHck
        status: active
        display_name: 王沔
        merged_into_person_id: null
  children:
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
          source:
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
      object_person:
        id: p_i126cE5xixTggPP9VH4JZA
        status: active
        display_name: 王乙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王睦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王睦 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7Dfh7tesPGSK4MKyFJLHck | 王沔 | accepted |
| children | p_i126cE5xixTggPP9VH4JZA | 王乙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王沔（CBDB 1853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1853&o=json)
- [中国历代人物传记资料库：王睦（CBDB 12355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12355&o=json)
- [中国历代人物传记资料库：王乙（CBDB 12356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12356&o=json)
