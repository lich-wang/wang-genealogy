---
schema: wang-person/v1
id: p_ELimFJDuCmQgYQUz8JcHYB
status: active
merged_into: null
display_name: 王将勗
cbdb_id: 194048
revision: 2
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
          source: &a2
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
  parents:
    - claim:
        id: c_s69JxZkxNsxbyAu3L8fTgf
        subject_person_id: p_CeCKJToPiqJ44CrjN1dbFC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ELimFJDuCmQgYQUz8JcHYB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s4g99H2C9VCHH78M3q5mZH
          claim_id: c_s69JxZkxNsxbyAu3L8fTgf
          source_id: s_5EoK36HE943L6gsZuQuBcL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5EoK36HE943L6gsZuQuBcL
            source_type: api_record
            title: 维基数据：王弘福（Q45485004）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45485004
            external_identifier: Q45485004
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:15.427Z
            metadata_json: null
        - id: cs_dwEqGNA1eUBDp9EFWH1QDo
          claim_id: c_s69JxZkxNsxbyAu3L8fTgf
          source_id: s_7bxB2L41VCZBskr62oKt5P
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_hJxDvfH91CmMLoPZv57RQ4
          claim_id: c_s69JxZkxNsxbyAu3L8fTgf
          source_id: s_s7WwRrcHmrMN4EFec4gnx7
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_s7WwRrcHmrMN4EFec4gnx7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王弘福（151252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151252&o=json
            external_identifier: CBDB:151252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:15.607Z
            metadata_json: null
      object_person:
        id: p_CeCKJToPiqJ44CrjN1dbFC
        status: active
        display_name: 王弘福
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_7wGur8m996P1JspXYLpc15
        subject_person_id: p_ELimFJDuCmQgYQUz8JcHYB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YJUfQmozBnpgzDZHV6jrGh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LEnzwNDCgN5QfiKXGTE4Bq
          claim_id: c_7wGur8m996P1JspXYLpc15
          source_id: s_7bxB2L41VCZBskr62oKt5P
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_5MqXZ4JWnHVeMRfLY9DHQ6
          claim_id: c_7wGur8m996P1JspXYLpc15
          source_id: s_TMRDHAUSbWoFpWkt5oCG1k
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_TMRDHAUSbWoFpWkt5oCG1k
            source_type: api_record
            title: 维基数据：李氏（Q65802952）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65802952
            external_identifier: Q65802952
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_6iXso3da9NsTRCHTxSucgj
          claim_id: c_7wGur8m996P1JspXYLpc15
          source_id: s_1HjBNJSAiFFvcNMcDTE7mi
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source: *a1
      object_person:
        id: p_YJUfQmozBnpgzDZHV6jrGh
        status: active
        display_name: 李氏
        merged_into_person_id: null
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
| parents | p_CeCKJToPiqJ44CrjN1dbFC | 王弘福 | accepted |
| spouses | p_YJUfQmozBnpgzDZHV6jrGh | 李氏 | accepted |

## 外部来源

- [维基数据：李氏（Q65802952）](https://www.wikidata.org/wiki/Q65802952)
- [维基数据：王弘福（Q45485004）](https://www.wikidata.org/wiki/Q45485004)
- [维基数据：王将勗（Q45510314）](https://www.wikidata.org/wiki/Q45510314)
- [CBDB 中国历代人物传记资料库：王弘福（151252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151252&o=json)
- [CBDB 中国历代人物传记资料库：王將勗（194048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194048&o=json)
