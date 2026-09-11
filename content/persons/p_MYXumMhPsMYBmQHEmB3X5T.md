---
schema: wang-person/v1
id: p_MYXumMhPsMYBmQHEmB3X5T
status: active
merged_into: null
display_name: 王良佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VXBMU7wGB2RKqg3yYC3QmU
        subject_person_id: p_MYXumMhPsMYBmQHEmB3X5T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xt6q3zuHe876LiD9CQzeo9
          claim_id: c_VXBMU7wGB2RKqg3yYC3QmU
          source_id: s_BxBBCcpQGdxw4TPfcPS9x3
          stance: supports
          locator: CBDB:696596
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696596）
          source: &a1
            id: s_BxBBCcpQGdxw4TPfcPS9x3
            source_type: api_record
            title: 中国历代人物传记资料库：王良佐（CBDB 696596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696596&o=json
            external_identifier: CBDB:696596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8siq6bgbLc9JjPPZgEw2rf
        subject_person_id: p_MYXumMhPsMYBmQHEmB3X5T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王良佐，明人物。籍贯益陽，入仕貢生: 選貢(優貢 after 1628)，曾任縣丞。（中国历代人物传记资料库 CBDB 696596）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uIRA-vjbnPyhgwxZNRbfHg
          claim_id: c_8siq6bgbLc9JjPPZgEw2rf
          source_id: s_BxBBCcpQGdxw4TPfcPS9x3
          stance: supports
          locator: CBDB:696596
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

# 王良佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良佐 | accepted |
| bio.summary | 王良佐，明人物。籍贯益陽，入仕貢生: 選貢(優貢 after 1628)，曾任縣丞。（中国历代人物传记资料库 CBDB 696596） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良佐（CBDB 696596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696596&o=json)
