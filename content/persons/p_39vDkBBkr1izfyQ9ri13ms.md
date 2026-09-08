---
schema: wang-person/v1
id: p_39vDkBBkr1izfyQ9ri13ms
status: active
merged_into: null
display_name: 王福郊
cbdb_id: 30884
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fQV8CQWm8412cWzE6DyVZc
        subject_person_id: p_39vDkBBkr1izfyQ9ri13ms
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福郊，唐人物。CBDB 记录其籍贯记录为龍門。中国历代人物传记资料库（CBDB）以人物编号 30884 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Bedt1i5cu3eeqWURMZB2Hn
          claim_id: c_fQV8CQWm8412cWzE6DyVZc
          source_id: s_igBP4fY1zXPQFL5fjhyuv1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_igBP4fY1zXPQFL5fjhyuv1
            source_type: api_record
            title: 维基数据：王福郊（Q45418705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418705
            external_identifier: Q45418705
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
        - id: cs_DZPdVAfC5N6_jw4JXLdcas
          claim_id: c_fQV8CQWm8412cWzE6DyVZc
          source_id: s_FEy6FexLjNKQ1SuxkYXKYF
          stance: supports
          locator: CBDB:30884
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FEy6FexLjNKQ1SuxkYXKYF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王福郊（30884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30884&o=json
            external_identifier: CBDB:30884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:09:57.713Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rBTgXiwc2ED1QYGQ6nmdKR
        subject_person_id: p_39vDkBBkr1izfyQ9ri13ms
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福郊
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JBd7Cs2vCyNNqDcHmEdvVy
          claim_id: c_rBTgXiwc2ED1QYGQ6nmdKR
          source_id: s_FEy6FexLjNKQ1SuxkYXKYF
          stance: supports
          locator: Q45418705
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_NdxdgykKx6LqXwR6GV3CZ6
          claim_id: c_rBTgXiwc2ED1QYGQ6nmdKR
          source_id: s_igBP4fY1zXPQFL5fjhyuv1
          stance: supports
          locator: Q45418705
          quotation: null
          interpretation_note: null
          source:
            id: s_igBP4fY1zXPQFL5fjhyuv1
            source_type: api_record
            title: 维基数据：王福郊（Q45418705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418705
            external_identifier: Q45418705
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uQYMz7sSq4APAUHU8dCs7B
        subject_person_id: p_g8yjPAazS4duEjdSoPu22v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_39vDkBBkr1izfyQ9ri13ms
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9NzQmWEH1LRAZH3iKzkexu
          claim_id: c_uQYMz7sSq4APAUHU8dCs7B
          source_id: s_rxH1mb4ysDMZcdEp858Epm
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_rxH1mb4ysDMZcdEp858Epm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王通（11965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11965&o=json
            external_identifier: CBDB:11965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:43.425Z
            metadata_json: null
        - id: cs_iC5yNcHjPdrfUByW5qA256
          claim_id: c_uQYMz7sSq4APAUHU8dCs7B
          source_id: s_XEyVmsJi464FkLSXdRq3Hb
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XEyVmsJi464FkLSXdRq3Hb
            source_type: api_record
            title: 维基数据：王通（Q11573223）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573223
            external_identifier: Q11573223
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:43.288Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%9A_(%E9%9A%8B%E6%9C%9D)
        - id: cs_ar3yPrR2CDtVPpcBXbe7i4
          claim_id: c_uQYMz7sSq4APAUHU8dCs7B
          source_id: s_igBP4fY1zXPQFL5fjhyuv1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_igBP4fY1zXPQFL5fjhyuv1
            source_type: api_record
            title: 维基数据：王福郊（Q45418705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418705
            external_identifier: Q45418705
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
        - id: cs_1xfqaqGWiF1p6E7NQ8BLdy
          claim_id: c_uQYMz7sSq4APAUHU8dCs7B
          source_id: s_FEy6FexLjNKQ1SuxkYXKYF
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_FEy6FexLjNKQ1SuxkYXKYF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王福郊（30884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30884&o=json
            external_identifier: CBDB:30884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:09:57.713Z
            metadata_json: null
      object_person:
        id: p_g8yjPAazS4duEjdSoPu22v
        status: active
        display_name: 王通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王福郊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王福郊，唐人物。CBDB 记录其籍贯记录为龍門。中国历代人物传记资料库（CBDB）以人物编号 30884 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王福郊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g8yjPAazS4duEjdSoPu22v | 王通 | accepted |

## 外部来源

- [维基数据：王福郊（Q45418705）](https://www.wikidata.org/wiki/Q45418705)
- [维基数据：王通（Q11573223）](https://www.wikidata.org/wiki/Q11573223)
- [CBDB 中国历代人物传记资料库：王福郊（30884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30884&o=json)
- [CBDB 中国历代人物传记资料库：王通（11965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11965&o=json)
