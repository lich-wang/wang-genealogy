---
schema: wang-person/v1
id: p_5NfPimi3vZT5CJRvWzsC5Y
status: active
merged_into: null
display_name: 王
cbdb_id: 35032
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tCYfhQ2qqNSEhJnEj6NuGh
        subject_person_id: p_5NfPimi3vZT5CJRvWzsC5Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王（卒于1644年），明人物。CBDB 记录其籍贯记录为長垣。中国历代人物传记资料库（CBDB）以人物编号 35032 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_dqp7CitxETfgJVunD9c9wL
          claim_id: c_tCYfhQ2qqNSEhJnEj6NuGh
          source_id: s_CZGuuN89GPhMfNopghPrEu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CZGuuN89GPhMfNopghPrEu
            source_type: api_record
            title: 维基数据：王（Q45428567）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45428567
            external_identifier: Q45428567
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
        - id: cs_04P7IORw7PsUXKBwN9-Kka
          claim_id: c_tCYfhQ2qqNSEhJnEj6NuGh
          source_id: s_E9tVULtwBFQqdk3WBHbfwp
          stance: supports
          locator: CBDB:35032
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_E9tVULtwBFQqdk3WBHbfwp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王（35032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35032&o=json
            external_identifier: CBDB:35032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:39.120Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_x1AiLD2ADEo7kUgEUknzQQ
        subject_person_id: p_5NfPimi3vZT5CJRvWzsC5Y
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1644年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1644-01-01
            latest: 1644-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ab9oBh8QVwrASMiD822HvJ
          claim_id: c_x1AiLD2ADEo7kUgEUknzQQ
          source_id: s_CZGuuN89GPhMfNopghPrEu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CZGuuN89GPhMfNopghPrEu
            source_type: api_record
            title: 维基数据：王（Q45428567）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45428567
            external_identifier: Q45428567
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UnJ9QUFiQGNLh91bexRWD2
        subject_person_id: p_5NfPimi3vZT5CJRvWzsC5Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ioqXs72Z72FBqYTzJcAVAU
          claim_id: c_UnJ9QUFiQGNLh91bexRWD2
          source_id: s_E9tVULtwBFQqdk3WBHbfwp
          stance: supports
          locator: Q45428567
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_zt5icB4nG4LL6yPaw4LrFp
          claim_id: c_UnJ9QUFiQGNLh91bexRWD2
          source_id: s_CZGuuN89GPhMfNopghPrEu
          stance: supports
          locator: Q45428567
          quotation: null
          interpretation_note: null
          source:
            id: s_CZGuuN89GPhMfNopghPrEu
            source_type: api_record
            title: 维基数据：王（Q45428567）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45428567
            external_identifier: Q45428567
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NKfiGMnt159TPvAe4DBDkJ
        subject_person_id: p_EoTbL3uo57XEyKhjsS1QfY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_5NfPimi3vZT5CJRvWzsC5Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BrEJ3wtMBr8UqxrHqFDnLi
          claim_id: c_NKfiGMnt159TPvAe4DBDkJ
          source_id: s_1Bd4NU9RG5XFT6vedQ8hH2
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_1Bd4NU9RG5XFT6vedQ8hH2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王家楨（35031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35031&o=json
            external_identifier: CBDB:35031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:18.912Z
            metadata_json: null
        - id: cs_oJ54mcWYFHN2eMvPspnMJJ
          claim_id: c_NKfiGMnt159TPvAe4DBDkJ
          source_id: s_CJgLxuaPTtA36QJGwc1Lbp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CJgLxuaPTtA36QJGwc1Lbp
            source_type: api_record
            title: 维基数据：王家桢（Q15919186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15919186
            external_identifier: Q15919186
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:21.683Z
            metadata_json: null
        - id: cs_rsP8i5p3a4ELTtTMDkrBQu
          claim_id: c_NKfiGMnt159TPvAe4DBDkJ
          source_id: s_CZGuuN89GPhMfNopghPrEu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CZGuuN89GPhMfNopghPrEu
            source_type: api_record
            title: 维基数据：王（Q45428567）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45428567
            external_identifier: Q45428567
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
      object_person:
        id: p_EoTbL3uo57XEyKhjsS1QfY
        status: active
        display_name: 王家桢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王（卒于1644年），明人物。CBDB 记录其籍贯记录为長垣。中国历代人物传记资料库（CBDB）以人物编号 35032 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 1644年 | accepted |
| name.primary | 王 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EoTbL3uo57XEyKhjsS1QfY | 王家桢 | accepted |

## 外部来源

- [维基数据：王（Q45428567）](https://www.wikidata.org/wiki/Q45428567)
- [维基数据：王家桢（Q15919186）](https://www.wikidata.org/wiki/Q15919186)
- [CBDB 中国历代人物传记资料库：王（35032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35032&o=json)
- [CBDB 中国历代人物传记资料库：王家楨（35031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35031&o=json)
