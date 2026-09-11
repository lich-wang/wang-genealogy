---
schema: wang-person/v1
id: p_pLV6cz66E76E4Waw8pUCTE
status: active
merged_into: null
display_name: 王福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ssfr6qYMU2A9QhiAQEVPWw
        subject_person_id: p_pLV6cz66E76E4Waw8pUCTE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jr29vE4s5qNVJeQgqdoBob
          claim_id: c_Ssfr6qYMU2A9QhiAQEVPWw
          source_id: s_vRbUnA4uN87ALxUA2EAF7g
          stance: supports
          locator: CBDB:486120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（486120）
          source: &a1
            id: s_vRbUnA4uN87ALxUA2EAF7g
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 486120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486120&o=json
            external_identifier: CBDB:486120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hgqf4A47azGP5ytoZiDjBp
        subject_person_id: p_pLV6cz66E76E4Waw8pUCTE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。曾任正千戶。（中国历代人物传记资料库 CBDB 486120）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fRlen6l152oDo3tDDBIOUD
          claim_id: c_Hgqf4A47azGP5ytoZiDjBp
          source_id: s_vRbUnA4uN87ALxUA2EAF7g
          stance: supports
          locator: CBDB:486120
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

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。曾任正千戶。（中国历代人物传记资料库 CBDB 486120） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 486120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486120&o=json)
