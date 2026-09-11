---
schema: wang-person/v1
id: p_uK6f3zJHrJTFkMSZTViNpK
status: active
merged_into: null
display_name: 王鼎銘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YfMd9QDXzqK4hLA8XG65JG
        subject_person_id: p_uK6f3zJHrJTFkMSZTViNpK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ph4kMM78fQyk8RRy34y5wx
          claim_id: c_YfMd9QDXzqK4hLA8XG65JG
          source_id: s_PH9MVT6mUY7zCGUeaat8NL
          stance: supports
          locator: CBDB:69390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69390）
          source: &a1
            id: s_PH9MVT6mUY7zCGUeaat8NL
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎銘（CBDB 69390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69390&o=json
            external_identifier: CBDB:69390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qzM1WcshapD9FrRCvH3TZZ
        subject_person_id: p_uK6f3zJHrJTFkMSZTViNpK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1832年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tycRMaGkxjWH5Tf7pnshui
          claim_id: c_qzM1WcshapD9FrRCvH3TZZ
          source_id: s_PH9MVT6mUY7zCGUeaat8NL
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
        id: c_CLg1WS9JG5qYRE4TpVf5mU
        subject_person_id: p_uK6f3zJHrJTFkMSZTViNpK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎銘（卒于1832年），清人物。籍贯嶧縣，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任縣知縣。（中国历代人物传记资料库 CBDB 69390）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8O76OCreuQiy3rpbZPH2Ft
          claim_id: c_CLg1WS9JG5qYRE4TpVf5mU
          source_id: s_PH9MVT6mUY7zCGUeaat8NL
          stance: supports
          locator: CBDB:69390
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
  descendants:
    - claim:
        id: c_75zXH8RWO2_uV7eDD53JKb
        subject_person_id: p_uK6f3zJHrJTFkMSZTViNpK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zezzzdKE1RTk3SQticUuJW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YKC1aR-5ntIgq91OE2ppJF
          claim_id: c_75zXH8RWO2_uV7eDD53JKb
          source_id: s_PH9MVT6mUY7zCGUeaat8NL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13095：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zezzzdKE1RTk3SQticUuJW
        status: active
        display_name: 王映庚
        merged_into_person_id: null
    - claim:
        id: c_0WpHfig7LFCJdfSaVQIk2a
        subject_person_id: p_uK6f3zJHrJTFkMSZTViNpK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cjV9C9Yy1oEt8LQXAPK8qX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QMU35l2Ur_kXSJXgD1-MRw
          claim_id: c_0WpHfig7LFCJdfSaVQIk2a
          source_id: s_PH9MVT6mUY7zCGUeaat8NL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13095：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cjV9C9Yy1oEt8LQXAPK8qX
        status: active
        display_name: 王映軫
        merged_into_person_id: null
  other: []
---

# 王鼎銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎銘 | accepted |
| death.date | 1832年 | accepted |
| bio.summary | 王鼎銘（卒于1832年），清人物。籍贯嶧縣，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任縣知縣。（中国历代人物传记资料库 CBDB 69390） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_zezzzdKE1RTk3SQticUuJW | 王映庚 | accepted |
| descendants | p_cjV9C9Yy1oEt8LQXAPK8qX | 王映軫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎銘（CBDB 69390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69390&o=json)
