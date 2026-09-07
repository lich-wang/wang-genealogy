---
schema: wang-person/v1
id: p_ELimFJDuCmQgYQUz8JcHYB
status: active
merged_into: null
display_name: 王将勗
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dCMo9DxAGWaqWMSrPuAGMT
        subject_person_id: p_ELimFJDuCmQgYQUz8JcHYB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王将勗（卒于701年），唐人物。CBDB 记录其籍贯记录为萬年。中国历代人物传记资料库（CBDB）以人物编号 194048 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XjBiPWQ9Kva39unjHme65T
          claim_id: c_dCMo9DxAGWaqWMSrPuAGMT
          source_id: s_7bxB2L41VCZBskr62oKt5P
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7bxB2L41VCZBskr62oKt5P
            source_type: api_record
            title: 维基数据：王将勗（Q45510314）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45510314
            external_identifier: Q45510314
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
        - id: cs_Q2g-c07MqYpQLoMfYAoCUp
          claim_id: c_dCMo9DxAGWaqWMSrPuAGMT
          source_id: s_1HjBNJSAiFFvcNMcDTE7mi
          stance: supports
          locator: CBDB:194048
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1HjBNJSAiFFvcNMcDTE7mi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王將勗（194048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194048&o=json
            external_identifier: CBDB:194048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:38.980Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tfu93Hx4dfg3U6akM8AsFe
        subject_person_id: p_ELimFJDuCmQgYQUz8JcHYB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 701年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0701-01-01
            latest: 0701-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n5FA9th2DTuo8y1JJ2ouT6
          claim_id: c_tfu93Hx4dfg3U6akM8AsFe
          source_id: s_7bxB2L41VCZBskr62oKt5P
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7bxB2L41VCZBskr62oKt5P
            source_type: api_record
            title: 维基数据：王将勗（Q45510314）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45510314
            external_identifier: Q45510314
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mTqUJvuY2TgyEAU95a9kCS
        subject_person_id: p_ELimFJDuCmQgYQUz8JcHYB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王将勗
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6PCdrQbJ6BRyi2NnDQFSJi
          claim_id: c_mTqUJvuY2TgyEAU95a9kCS
          source_id: s_1HjBNJSAiFFvcNMcDTE7mi
          stance: supports
          locator: Q45510314
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_EjYyqhN7bwqGPuMiNUziJH
          claim_id: c_mTqUJvuY2TgyEAU95a9kCS
          source_id: s_7bxB2L41VCZBskr62oKt5P
          stance: supports
          locator: Q45510314
          quotation: null
          interpretation_note: null
          source:
            id: s_7bxB2L41VCZBskr62oKt5P
            source_type: api_record
            title: 维基数据：王将勗（Q45510314）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45510314
            external_identifier: Q45510314
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
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

# 王将勗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王将勗（卒于701年），唐人物。CBDB 记录其籍贯记录为萬年。中国历代人物传记资料库（CBDB）以人物编号 194048 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 701年 | accepted |
| name.primary | 王将勗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王将勗（Q45510314）](https://www.wikidata.org/wiki/Q45510314)
- [CBDB 中国历代人物传记资料库：王將勗（194048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194048&o=json)
