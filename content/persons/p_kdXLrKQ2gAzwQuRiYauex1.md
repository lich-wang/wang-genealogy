---
schema: wang-person/v1
id: p_kdXLrKQ2gAzwQuRiYauex1
status: active
merged_into: null
display_name: 王中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZL82DEvm9vwCyVHiSwW2UG
        subject_person_id: p_kdXLrKQ2gAzwQuRiYauex1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PYuv4xrCXmf971s8n1dmvm
          claim_id: c_ZL82DEvm9vwCyVHiSwW2UG
          source_id: s_oy8hhir39AjHSELw4N2vBL
          stance: supports
          locator: Q45431137
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_oy8hhir39AjHSELw4N2vBL
            source_type: api_record
            title: 维基数据：王中（Q45431137）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431137
            external_identifier: Q45431137
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_CQhZS3FriDnZu44riAiHWE
          claim_id: c_ZL82DEvm9vwCyVHiSwW2UG
          source_id: s_dN8PShRs6Urg3ecpyySLb3
          stance: supports
          locator: CBDB:37776
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_dN8PShRs6Urg3ecpyySLb3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王中（37776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37776&o=json
            external_identifier: CBDB:37776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cfbjFajbEK1LwoCEePzGTF
        subject_person_id: p_kdXLrKQ2gAzwQuRiYauex1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: person, CBDB = 37776
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SHfUvLqpEDb1kCF1YefY3S
          claim_id: c_cfbjFajbEK1LwoCEePzGTF
          source_id: s_oy8hhir39AjHSELw4N2vBL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ottJFFdrPBbDJMDqj2FayQ
        subject_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_kdXLrKQ2gAzwQuRiYauex1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZgeBoYnwedK79fzy8TWJLs
          claim_id: c_ottJFFdrPBbDJMDqj2FayQ
          source_id: s_AX6PgDBCeaR1gEucMkzDv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_AX6PgDBCeaR1gEucMkzDv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王松齡（36706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36706&o=json
            external_identifier: CBDB:36706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:17.536Z
            metadata_json: null
      object_person:
        id: p_Bxf4gH2xyWjLA2FCR3BhN7
        status: active
        display_name: 王松龄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中 | accepted |
| bio.summary | person, CBDB = 37776 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Bxf4gH2xyWjLA2FCR3BhN7 | 王松龄 | accepted |

## 外部来源

- [维基数据：王中（Q45431137）](https://www.wikidata.org/wiki/Q45431137)
- [CBDB 中国历代人物传记资料库：王松齡（36706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36706&o=json)
- [CBDB 中国历代人物传记资料库：王中（37776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37776&o=json)
