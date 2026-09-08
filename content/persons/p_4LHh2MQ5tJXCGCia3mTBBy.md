---
schema: wang-person/v1
id: p_4LHh2MQ5tJXCGCia3mTBBy
status: active
merged_into: null
display_name: 陈金凤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tr7ACjWPZ4SGVPAFUR7DbY
        subject_person_id: p_4LHh2MQ5tJXCGCia3mTBBy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈金凤
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1yCPeTiYQudKLKGXd7A8DU
          claim_id: c_tr7ACjWPZ4SGVPAFUR7DbY
          source_id: s_HLfiaGNLNuQZ5Tao236Erz
          stance: supports
          locator: Q4561923
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_HLfiaGNLNuQZ5Tao236Erz
            source_type: api_record
            title: 维基数据：陈金凤（Q4561923）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4561923
            external_identifier: Q4561923
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%99%B3%E9%87%91%E9%B3%B3
        - id: cs_nkSD2mLufHZVTUtPHPDQoq
          claim_id: c_tr7ACjWPZ4SGVPAFUR7DbY
          source_id: s_FwNL6au9oXg6168eSvZy8F
          stance: supports
          locator: CBDB:93612
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_FwNL6au9oXg6168eSvZy8F
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳金鳳（93612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=93612&o=json
            external_identifier: CBDB:93612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_irT5JpGKfDAb2h9SCs6T9r
        subject_person_id: p_4LHh2MQ5tJXCGCia3mTBBy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BXK4dNohPJQTYjtEjv756p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1R9RnF5RaWp2LjkpNskufF
          claim_id: c_irT5JpGKfDAb2h9SCs6T9r
          source_id: s_HLfiaGNLNuQZ5Tao236Erz
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_awCCVyw4NQ3adDeG2x6ZCC
          claim_id: c_irT5JpGKfDAb2h9SCs6T9r
          source_id: s_jXmk1TLmajvZF3VibGyjd5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_jXmk1TLmajvZF3VibGyjd5
            source_type: api_record
            title: 维基数据：王延钧（Q2109927）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2109927
            external_identifier: Q2109927
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:00.764Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E9%88%9E
      object_person:
        id: p_BXK4dNohPJQTYjtEjv756p
        status: active
        display_name: 王延钧
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陈金凤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陈金凤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BXK4dNohPJQTYjtEjv756p | 王延钧 | accepted |

## 外部来源

- [维基数据：陈金凤（Q4561923）](https://www.wikidata.org/wiki/Q4561923)
- [维基数据：王延钧（Q2109927）](https://www.wikidata.org/wiki/Q2109927)
- [CBDB 中国历代人物传记资料库：陳金鳳（93612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=93612&o=json)
