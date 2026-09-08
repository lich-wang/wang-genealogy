---
schema: wang-person/v1
id: p_sQ5BkZRhs6GYEqAHihQgAv
status: active
merged_into: null
display_name: 王镛
cbdb_id: 21994
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1QwQGvENHpFbinmT4EhPrj
        subject_person_id: p_sQ5BkZRhs6GYEqAHihQgAv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王镛，宋人物。CBDB 记录其籍贯记录为臨海。中国历代人物传记资料库（CBDB）以人物编号 21994 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SZX3vqfS7MMt25XkbS58Vr
          claim_id: c_1QwQGvENHpFbinmT4EhPrj
          source_id: s_TDBszTHpXYWQvffJUGujep
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_TDBszTHpXYWQvffJUGujep
            source_type: api_record
            title: 维基数据：王镛（Q45401650）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401650
            external_identifier: Q45401650
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:17.572Z
            metadata_json: null
        - id: cs_u2R2FpTzf2z9fHLWqXYxcc
          claim_id: c_1QwQGvENHpFbinmT4EhPrj
          source_id: s_Lbqq7VMqXcuNY5MFnfYWVZ
          stance: supports
          locator: CBDB:21994
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Lbqq7VMqXcuNY5MFnfYWVZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鏞（21994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21994&o=json
            external_identifier: CBDB:21994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:17.742Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZzEcc6snz1KyN4kPThzbQc
        subject_person_id: p_sQ5BkZRhs6GYEqAHihQgAv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王镛
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_G3nkSVNbt4aa35qzkTk8Vr
          claim_id: c_ZzEcc6snz1KyN4kPThzbQc
          source_id: s_TDBszTHpXYWQvffJUGujep
          stance: supports
          locator: Q45401650
          quotation: null
          interpretation_note: null
          source:
            id: s_TDBszTHpXYWQvffJUGujep
            source_type: api_record
            title: 维基数据：王镛（Q45401650）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401650
            external_identifier: Q45401650
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:17.572Z
            metadata_json: null
        - id: cs_jgvtKA1Bjr2ZTcXDAjvG1q
          claim_id: c_ZzEcc6snz1KyN4kPThzbQc
          source_id: s_Lbqq7VMqXcuNY5MFnfYWVZ
          stance: supports
          locator: Q45401650
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1E4ZoG9MPc9173tpGufuqz
        subject_person_id: p_EWAx1K1Zcs56idxSXpA1ot
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_sQ5BkZRhs6GYEqAHihQgAv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2SZYvN3rgM7hyAFFT41b5G
          claim_id: c_1E4ZoG9MPc9173tpGufuqz
          source_id: s_TDBszTHpXYWQvffJUGujep
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_TDBszTHpXYWQvffJUGujep
            source_type: api_record
            title: 维基数据：王镛（Q45401650）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401650
            external_identifier: Q45401650
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:17.572Z
            metadata_json: null
        - id: cs_AYi64YPTuLZUQTCRi27h1N
          claim_id: c_1E4ZoG9MPc9173tpGufuqz
          source_id: s_kh4vsvPos18srjSBh8r915
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kh4vsvPos18srjSBh8r915
            source_type: api_record
            title: 维基数据：王之望（Q16077412）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077412
            external_identifier: Q16077412
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:56.805Z
            metadata_json: null
        - id: cs_JeXbdK6396KPHQxuyGUggA
          claim_id: c_1E4ZoG9MPc9173tpGufuqz
          source_id: s_bVAFY7MNcm3gZny5izDbqD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bVAFY7MNcm3gZny5izDbqD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之望（1787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1787&o=json
            external_identifier: CBDB:1787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:10.266Z
            metadata_json: null
      object_person:
        id: p_EWAx1K1Zcs56idxSXpA1ot
        status: active
        display_name: 王之望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王镛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王镛，宋人物。CBDB 记录其籍贯记录为臨海。中国历代人物传记资料库（CBDB）以人物编号 21994 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王镛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EWAx1K1Zcs56idxSXpA1ot | 王之望 | accepted |

## 外部来源

- [维基数据：王镛（Q45401650）](https://www.wikidata.org/wiki/Q45401650)
- [维基数据：王之望（Q16077412）](https://www.wikidata.org/wiki/Q16077412)
- [CBDB 中国历代人物传记资料库：王鏞（21994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21994&o=json)
- [CBDB 中国历代人物传记资料库：王之望（1787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1787&o=json)
