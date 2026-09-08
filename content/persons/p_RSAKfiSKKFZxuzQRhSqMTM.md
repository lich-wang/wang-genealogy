---
schema: wang-person/v1
id: p_RSAKfiSKKFZxuzQRhSqMTM
status: active
merged_into: null
display_name: 王該
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qjd6Umi1TvoANxu76u72AW
        subject_person_id: p_RSAKfiSKKFZxuzQRhSqMTM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王該，宋人物。CBDB 记录其籍贯记录为鄞縣，入仕记录为科舉: 進士(籠統)，曾任縣令。中国历代人物传记资料库（CBDB）以人物编号 19871 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_hQhW4cF2of3cyRKFQCka3E
          claim_id: c_Qjd6Umi1TvoANxu76u72AW
          source_id: s_GA2Q6kAHDBMKodmEHJRzdS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_GA2Q6kAHDBMKodmEHJRzdS
            source_type: api_record
            title: 维基数据：王該（Q45393587）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45393587
            external_identifier: Q45393587
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:23.183Z
            metadata_json: null
        - id: cs_GXXAkm1AROvC14rQcmQjhj
          claim_id: c_Qjd6Umi1TvoANxu76u72AW
          source_id: s_q9CQXYZKq7kZ9UqfPTts8g
          stance: supports
          locator: CBDB:19871
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_q9CQXYZKq7kZ9UqfPTts8g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王該（19871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19871&o=json
            external_identifier: CBDB:19871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:23.352Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uDfqkHVtm3gpSGDDSsNjNr
        subject_person_id: p_RSAKfiSKKFZxuzQRhSqMTM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王該
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_E3VKx3wWBT3JCdzD5hQYnS
          claim_id: c_uDfqkHVtm3gpSGDDSsNjNr
          source_id: s_GA2Q6kAHDBMKodmEHJRzdS
          stance: supports
          locator: Q45393587
          quotation: null
          interpretation_note: null
          source:
            id: s_GA2Q6kAHDBMKodmEHJRzdS
            source_type: api_record
            title: 维基数据：王該（Q45393587）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45393587
            external_identifier: Q45393587
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:23.183Z
            metadata_json: null
        - id: cs_HD8hDuGHNxS3M2inWYEmwF
          claim_id: c_uDfqkHVtm3gpSGDDSsNjNr
          source_id: s_q9CQXYZKq7kZ9UqfPTts8g
          stance: supports
          locator: Q45393587
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children:
    - claim:
        id: c_iqHToNAgUNnReXCrokaoQU
        subject_person_id: p_RSAKfiSKKFZxuzQRhSqMTM
        claim_kind: relationship
        predicate: kinship.adoptive_parent_of
        object_person_id: p_2Ge6JQzDf7ZE1r4PiPMp7d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1JsQWMP7aAzuWKDbv3Dy1e
          claim_id: c_iqHToNAgUNnReXCrokaoQU
          source_id: s_s8e2GrHySbFNGmd4EWzwzL
          stance: supports
          locator: 亲属关系：嗣父
          quotation: null
          interpretation_note: CBDB 注明此条来源：郝若貝數據（代碼調整）
          source:
            id: s_s8e2GrHySbFNGmd4EWzwzL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珩（19873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19873&o=json
            external_identifier: CBDB:19873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:26.647Z
            metadata_json: null
      object_person:
        id: p_2Ge6JQzDf7ZE1r4PiPMp7d
        status: active
        display_name: 王珩
        merged_into_person_id: null
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王該

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王該，宋人物。CBDB 记录其籍贯记录为鄞縣，入仕记录为科舉: 進士(籠統)，曾任縣令。中国历代人物传记资料库（CBDB）以人物编号 19871 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王該 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| adoptive_children | p_2Ge6JQzDf7ZE1r4PiPMp7d | 王珩 | accepted |

## 外部来源

- [维基数据：王該（Q45393587）](https://www.wikidata.org/wiki/Q45393587)
- [CBDB 中国历代人物传记资料库：王該（19871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19871&o=json)
- [CBDB 中国历代人物传记资料库：王珩（19873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19873&o=json)
