---
schema: wang-person/v1
id: p_ucgBCAvHB6ng18bpVarCSH
status: active
merged_into: null
display_name: 王栻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nh9ca1j4GjYHb1C6rfAC2C
        subject_person_id: p_ucgBCAvHB6ng18bpVarCSH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wLCF58mZLbrQfn8W3hFqYz
          claim_id: c_Nh9ca1j4GjYHb1C6rfAC2C
          source_id: s_wXS5c6BRRDqLqybhDVzoro
          stance: supports
          locator: CBDB:10719
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10719）
          source: &a1
            id: s_wXS5c6BRRDqLqybhDVzoro
            source_type: api_record
            title: 中国历代人物传记资料库：王栻（CBDB 10719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10719&o=json
            external_identifier: CBDB:10719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bj2jvRiGCHkrZ61ZAkMDjm
        subject_person_id: p_ucgBCAvHB6ng18bpVarCSH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栻，宋人物。籍贯金華，身份为良吏;循吏。（中国历代人物传记资料库 CBDB 10719）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nMXDJTgPGCQS3W4nXLRX6I
          claim_id: c_Bj2jvRiGCHkrZ61ZAkMDjm
          source_id: s_wXS5c6BRRDqLqybhDVzoro
          stance: supports
          locator: CBDB:10719
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3VQDr-q4MopjAqXSp27VUv
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ucgBCAvHB6ng18bpVarCSH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qu43OwLONXCYqGt7aANIJj
          claim_id: c_3VQDr-q4MopjAqXSp27VUv
          source_id: s_8iSLIANBOW_ETXLoeYxyo1
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10697）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_8iSLIANBOW_ETXLoeYxyo1
            source_type: api_record
            title: 中国历代人物传记资料库：王栻（CBDB 10719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10719&o=json
            external_identifier: CBDB:10719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UvehpGMJTzc9aejBRt9mWN
        status: active
        display_name: 王淮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王栻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王栻 | accepted |
| bio.summary | 王栻，宋人物。籍贯金華，身份为良吏;循吏。（中国历代人物传记资料库 CBDB 10719） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UvehpGMJTzc9aejBRt9mWN | 王淮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王栻（CBDB 10719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10719&o=json)
