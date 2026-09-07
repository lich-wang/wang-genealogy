---
schema: wang-person/v1
id: p_Bxf4gH2xyWjLA2FCR3BhN7
status: active
merged_into: null
display_name: 王松龄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tXbNQF53ZF4A2UKCVgi3XF
        subject_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松龄，宋人物。CBDB 记录其籍贯记录为鉅野，曾任縣丞。中国历代人物传记资料库（CBDB）以人物编号 36706 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_agHMTZNKEvft8tCHoRs7JC
          claim_id: c_tXbNQF53ZF4A2UKCVgi3XF
          source_id: s_HL9c8H9GGz9vuWNZQPLLbQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_HL9c8H9GGz9vuWNZQPLLbQ
            source_type: api_record
            title: 维基数据：王松龄（Q45427492）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45427492
            external_identifier: Q45427492
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:17.362Z
            metadata_json: null
        - id: cs_KfO92iGIIzpusqq2YY18Xj
          claim_id: c_tXbNQF53ZF4A2UKCVgi3XF
          source_id: s_AX6PgDBCeaR1gEucMkzDv9
          stance: supports
          locator: CBDB:36706
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QaGv94t78n7vuf4UayJZsD
        subject_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松龄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1CgG1AAh15JhtzMSRCMx6Z
          claim_id: c_QaGv94t78n7vuf4UayJZsD
          source_id: s_HL9c8H9GGz9vuWNZQPLLbQ
          stance: supports
          locator: Q45427492
          quotation: null
          interpretation_note: null
          source:
            id: s_HL9c8H9GGz9vuWNZQPLLbQ
            source_type: api_record
            title: 维基数据：王松龄（Q45427492）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45427492
            external_identifier: Q45427492
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:17.362Z
            metadata_json: null
        - id: cs_3L3myd5nrPDiJ5fX4jbNEH
          claim_id: c_QaGv94t78n7vuf4UayJZsD
          source_id: s_AX6PgDBCeaR1gEucMkzDv9
          stance: supports
          locator: Q45427492
          quotation: null
          interpretation_note: null
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

# 王松龄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王松龄，宋人物。CBDB 记录其籍贯记录为鉅野，曾任縣丞。中国历代人物传记资料库（CBDB）以人物编号 36706 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王松龄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王松龄（Q45427492）](https://www.wikidata.org/wiki/Q45427492)
- [CBDB 中国历代人物传记资料库：王松齡（36706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36706&o=json)
