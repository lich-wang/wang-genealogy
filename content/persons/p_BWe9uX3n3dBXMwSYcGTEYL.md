---
schema: wang-person/v1
id: p_BWe9uX3n3dBXMwSYcGTEYL
status: active
merged_into: null
display_name: 王邦直
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jYtCWPM6Za2zbVV3bp2guC
        subject_person_id: p_BWe9uX3n3dBXMwSYcGTEYL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1PzF4xLZv6AuoU2Sfc1uq3
          claim_id: c_jYtCWPM6Za2zbVV3bp2guC
          source_id: s_Tdmto7rpiW3Djo8T3YrcKg
          stance: supports
          locator: CBDB:439031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（439031）
          source: &a1
            id: s_Tdmto7rpiW3Djo8T3YrcKg
            source_type: api_record
            title: 中国历代人物传记资料库：王邦直（CBDB 439031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439031&o=json
            external_identifier: CBDB:439031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pbdvxN13gxsDEqhuppE31F
        subject_person_id: p_BWe9uX3n3dBXMwSYcGTEYL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1513年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oNvCvNoSv8bAwWLQoAGb4x
          claim_id: c_pbdvxN13gxsDEqhuppE31F
          source_id: s_Tdmto7rpiW3Djo8T3YrcKg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Cq74PczPBaCSdJZM2RNYxC
        subject_person_id: p_BWe9uX3n3dBXMwSYcGTEYL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1600年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_diJCz1bvEnaBzErPR9iU15
          claim_id: c_Cq74PczPBaCSdJZM2RNYxC
          source_id: s_Tdmto7rpiW3Djo8T3YrcKg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aBUPFsZgzWDDT2yF9x1wn9
        subject_person_id: p_BWe9uX3n3dBXMwSYcGTEYL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王邦直（1513年—1600年），明人物。籍贯即墨，入仕貢生: 歲貢、常貢、挨貢，曾任縣丞。（中国历代人物传记资料库 CBDB 439031）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QPh9AQkbVVXEsAF4VimQBC
          claim_id: c_aBUPFsZgzWDDT2yF9x1wn9
          source_id: s_Tdmto7rpiW3Djo8T3YrcKg
          stance: supports
          locator: CBDB:439031
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王邦直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦直 | accepted |
| birth.date | 1513年 | accepted |
| death.date | 1600年 | accepted |
| bio.summary | 王邦直（1513年—1600年），明人物。籍贯即墨，入仕貢生: 歲貢、常貢、挨貢，曾任縣丞。（中国历代人物传记资料库 CBDB 439031） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦直（CBDB 439031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439031&o=json)
