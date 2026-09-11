---
schema: wang-person/v1
id: p_PtC3Kraf3HCpSkMFS6nqkJ
status: active
merged_into: null
display_name: 王振
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_51xLYBSwChyNiMLxgNUp9n
        subject_person_id: p_PtC3Kraf3HCpSkMFS6nqkJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BNcGBaXW6tn7m9BAR1prYx
          claim_id: c_51xLYBSwChyNiMLxgNUp9n
          source_id: s_Nuqg3kLfjrTLK8kDtFjWcR
          stance: supports
          locator: CBDB:638119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638119）
          source: &a1
            id: s_Nuqg3kLfjrTLK8kDtFjWcR
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 638119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638119&o=json
            external_identifier: CBDB:638119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_saMS68PmK6FBWtQuKgCnAH
        subject_person_id: p_PtC3Kraf3HCpSkMFS6nqkJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振，清人物。籍贯寧夏，曾任典史。（中国历代人物传记资料库 CBDB 638119）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sc8s9Wsmguufo32P3no9B4
          claim_id: c_saMS68PmK6FBWtQuKgCnAH
          source_id: s_Nuqg3kLfjrTLK8kDtFjWcR
          stance: supports
          locator: CBDB:638119
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

# 王振

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振 | accepted |
| bio.summary | 王振，清人物。籍贯寧夏，曾任典史。（中国历代人物传记资料库 CBDB 638119） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振（CBDB 638119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638119&o=json)
