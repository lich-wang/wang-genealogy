---
schema: wang-person/v1
id: p_KDeaYWkRgcZJD6ZmDTMD4t
status: active
merged_into: null
display_name: 王大經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1cNjHk2ZZLBTqf2pjKLeZx
        subject_person_id: p_KDeaYWkRgcZJD6ZmDTMD4t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HiRAxmq9EsrUt82QBwGmDW
          claim_id: c_1cNjHk2ZZLBTqf2pjKLeZx
          source_id: s_4G1u6rWktcTZCH2gsBzQvj
          stance: supports
          locator: CBDB:472351
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472351）
          source: &a1
            id: s_4G1u6rWktcTZCH2gsBzQvj
            source_type: api_record
            title: 中国历代人物传记资料库：王大經（CBDB 472351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472351&o=json
            external_identifier: CBDB:472351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L24EuwjxMLXca4Q1DeFU4Q
        subject_person_id: p_KDeaYWkRgcZJD6ZmDTMD4t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大經，清人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 472351）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uJ7XVwcxE2Ur0mL5G2Vk77
          claim_id: c_L24EuwjxMLXca4Q1DeFU4Q
          source_id: s_4G1u6rWktcTZCH2gsBzQvj
          stance: supports
          locator: CBDB:472351
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

# 王大經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大經 | accepted |
| bio.summary | 王大經，清人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 472351） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大經（CBDB 472351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472351&o=json)
