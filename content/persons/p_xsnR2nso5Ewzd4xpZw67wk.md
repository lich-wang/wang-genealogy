---
schema: wang-person/v1
id: p_xsnR2nso5Ewzd4xpZw67wk
status: active
merged_into: null
display_name: 王师迥
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YhsEkn7MZyS2VJEms1rbW4
        subject_person_id: p_xsnR2nso5Ewzd4xpZw67wk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师迥（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175426 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RTdELfZqqkcRSzZDK2PWEW
          claim_id: c_YhsEkn7MZyS2VJEms1rbW4
          source_id: s_Da5DUKEZAyMJPrUD3ELUSP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Da5DUKEZAyMJPrUD3ELUSP
            source_type: api_record
            title: 维基数据：王师迥（Q45658939）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658939
            external_identifier: Q45658939
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
        - id: cs_pZuBM7042dOMD18U2WKlIC
          claim_id: c_YhsEkn7MZyS2VJEms1rbW4
          source_id: s_g4XdD45X1fLb3gj5kKjD3z
          stance: supports
          locator: CBDB:175426
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g4XdD45X1fLb3gj5kKjD3z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師迥（175426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175426&o=json
            external_identifier: CBDB:175426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:07.101Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_o88qBJtNjF9rSmeBF1fBqf
        subject_person_id: p_xsnR2nso5Ewzd4xpZw67wk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gM6pd7bXKYH5vK272L4UHy
          claim_id: c_o88qBJtNjF9rSmeBF1fBqf
          source_id: s_Da5DUKEZAyMJPrUD3ELUSP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Da5DUKEZAyMJPrUD3ELUSP
            source_type: api_record
            title: 维基数据：王师迥（Q45658939）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658939
            external_identifier: Q45658939
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FDdpbJtp93cFW1H416YDFw
        subject_person_id: p_xsnR2nso5Ewzd4xpZw67wk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师迥
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EY5nadVrCzqVYUDw31QT1G
          claim_id: c_FDdpbJtp93cFW1H416YDFw
          source_id: s_Da5DUKEZAyMJPrUD3ELUSP
          stance: supports
          locator: Q45658939
          quotation: null
          interpretation_note: null
          source:
            id: s_Da5DUKEZAyMJPrUD3ELUSP
            source_type: api_record
            title: 维基数据：王师迥（Q45658939）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658939
            external_identifier: Q45658939
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
        - id: cs_xhMEyJFXCMwikV2KcSmKKW
          claim_id: c_FDdpbJtp93cFW1H416YDFw
          source_id: s_g4XdD45X1fLb3gj5kKjD3z
          stance: supports
          locator: Q45658939
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NxGnAHyJHzDqJ5NtkAX3Ju
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xsnR2nso5Ewzd4xpZw67wk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_M9DFmQFRws4TQ2og8RuYPa
          claim_id: c_NxGnAHyJHzDqJ5NtkAX3Ju
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6HC9Tz6usZG9tpzmYrAfiQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json
            external_identifier: CBDB:175425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.862Z
            metadata_json: null
        - id: cs_aunKQxempqGSMhYGxQUpwM
          claim_id: c_NxGnAHyJHzDqJ5NtkAX3Ju
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_q2HM3LSwn2hCoD23EH61RQ
            source_type: api_record
            title: 维基数据：王迺（Q45658880）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658880
            external_identifier: Q45658880
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_WjYVaw9NWCdwyYKdcd5kr9
          claim_id: c_NxGnAHyJHzDqJ5NtkAX3Ju
          source_id: s_Da5DUKEZAyMJPrUD3ELUSP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Da5DUKEZAyMJPrUD3ELUSP
            source_type: api_record
            title: 维基数据：王师迥（Q45658939）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658939
            external_identifier: Q45658939
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
        - id: cs_GGDWZRUJbgn9rfn7prFp8K
          claim_id: c_NxGnAHyJHzDqJ5NtkAX3Ju
          source_id: s_g4XdD45X1fLb3gj5kKjD3z
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_g4XdD45X1fLb3gj5kKjD3z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師迥（175426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175426&o=json
            external_identifier: CBDB:175426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:07.101Z
            metadata_json: null
      object_person:
        id: p_R43S4tSNhE9EYwSxHQi8DK
        status: active
        display_name: 王迺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王师迥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王师迥（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175426 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 894年 | accepted |
| name.primary | 王师迥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R43S4tSNhE9EYwSxHQi8DK | 王迺 | accepted |

## 外部来源

- [维基数据：王迺（Q45658880）](https://www.wikidata.org/wiki/Q45658880)
- [维基数据：王师迥（Q45658939）](https://www.wikidata.org/wiki/Q45658939)
- [CBDB 中国历代人物传记资料库：王迺（175425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json)
- [CBDB 中国历代人物传记资料库：王師迥（175426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175426&o=json)
