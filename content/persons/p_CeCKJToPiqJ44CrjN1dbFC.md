---
schema: wang-person/v1
id: p_CeCKJToPiqJ44CrjN1dbFC
status: active
merged_into: null
display_name: 王弘福
cbdb_id: 151252
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K31k62GhRkEwmEbfEStm9p
        subject_person_id: p_CeCKJToPiqJ44CrjN1dbFC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘福，唐人物。CBDB 记录其籍贯记录为萬年，曾任司農卿。中国历代人物传记资料库（CBDB）以人物编号 151252 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CB7HVPfYQX5xqTiEYN32p8
          claim_id: c_K31k62GhRkEwmEbfEStm9p
          source_id: s_5EoK36HE943L6gsZuQuBcL
          stance: supports
          locator: null
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
        - id: cs_oKMeMewjNc5TPIE-NMe41e
          claim_id: c_K31k62GhRkEwmEbfEStm9p
          source_id: s_s7WwRrcHmrMN4EFec4gnx7
          stance: supports
          locator: CBDB:151252
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_R47e2yrw4vpmKdzbfWWd2x
        subject_person_id: p_CeCKJToPiqJ44CrjN1dbFC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘福
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TETWjF8ZVBARdGJNNLGypZ
          claim_id: c_R47e2yrw4vpmKdzbfWWd2x
          source_id: s_s7WwRrcHmrMN4EFec4gnx7
          stance: supports
          locator: Q45485004
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_WR8nVJ3cEDZ2MvfTRp859A
          claim_id: c_R47e2yrw4vpmKdzbfWWd2x
          source_id: s_5EoK36HE943L6gsZuQuBcL
          stance: supports
          locator: Q45485004
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cypefaz2BA4nzZK7RNMMkn
        subject_person_id: p_BK7k2QcLRSfSmKmA6kf5hq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CeCKJToPiqJ44CrjN1dbFC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EcTcoYetG2VzoUNg7MUi8c
          claim_id: c_cypefaz2BA4nzZK7RNMMkn
          source_id: s_S8nRwGMbu7ksKGZji5Z1Xm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_S8nRwGMbu7ksKGZji5Z1Xm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王述（175929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175929&o=json
            external_identifier: CBDB:175929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:51.803Z
            metadata_json: null
        - id: cs_aPnw6FJRufKkQd3muNwkfb
          claim_id: c_cypefaz2BA4nzZK7RNMMkn
          source_id: s_5EoK36HE943L6gsZuQuBcL
          stance: supports
          locator: P22（父）
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
        - id: cs_fSnf1tdUsJt4KXKq1dzwX3
          claim_id: c_cypefaz2BA4nzZK7RNMMkn
          source_id: s_hzjzgaMSRzkZfwTpp2CZhB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hzjzgaMSRzkZfwTpp2CZhB
            source_type: api_record
            title: 维基数据：王长述（Q11573236）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573236
            external_identifier: Q11573236
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:58.606Z
            metadata_json: null
      object_person:
        id: p_BK7k2QcLRSfSmKmA6kf5hq
        status: active
        display_name: 王长述
        merged_into_person_id: null
    - claim:
        id: c_XbTOr9ARzKZKJkkStj-aYV
        subject_person_id: p_FT9RqRRd8aA6VTvUJwSsKh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CeCKJToPiqJ44CrjN1dbFC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j0psWqMsRMvDHN5MQCvqSa
          claim_id: c_XbTOr9ARzKZKJkkStj-aYV
          source_id: s_Z4fSgBune8n8AebnCNQ3RV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z4fSgBune8n8AebnCNQ3RV
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 175929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175929&o=json
            external_identifier: CBDB:175929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.205Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FT9RqRRd8aA6VTvUJwSsKh
        status: active
        display_name: 王述
        merged_into_person_id: null
  children:
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
        - id: cs_hJxDvfH91CmMLoPZv57RQ4
          claim_id: c_s69JxZkxNsxbyAu3L8fTgf
          source_id: s_s7WwRrcHmrMN4EFec4gnx7
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source: *a1
      object_person:
        id: p_ELimFJDuCmQgYQUz8JcHYB
        status: active
        display_name: 王将勗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘福，唐人物。CBDB 记录其籍贯记录为萬年，曾任司農卿。中国历代人物传记资料库（CBDB）以人物编号 151252 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王弘福 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BK7k2QcLRSfSmKmA6kf5hq | 王长述 | accepted |
| parents | p_FT9RqRRd8aA6VTvUJwSsKh | 王述 | accepted |
| children | p_ELimFJDuCmQgYQUz8JcHYB | 王将勗 | accepted |

## 外部来源

- [维基数据：王弘福（Q45485004）](https://www.wikidata.org/wiki/Q45485004)
- [维基数据：王将勗（Q45510314）](https://www.wikidata.org/wiki/Q45510314)
- [维基数据：王长述（Q11573236）](https://www.wikidata.org/wiki/Q11573236)
- [中国历代人物传记资料库：王述（CBDB 175929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175929&o=json)
- [CBDB 中国历代人物传记资料库：王弘福（151252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151252&o=json)
