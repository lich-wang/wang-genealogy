---
schema: wang-person/v1
id: p_CVwNugtPLMKx2eABoAcjQ3
status: active
merged_into: null
display_name: 王耿光
cbdb_id: 302575
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5irePBbutAHnEEE4AV94yj
        subject_person_id: p_CVwNugtPLMKx2eABoAcjQ3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耿光，明人物。CBDB 记录其籍贯记录为新城。中国历代人物传记资料库（CBDB）以人物编号 302575 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_mYTekxngNYb71NbubFWP4P
          claim_id: c_5irePBbutAHnEEE4AV94yj
          source_id: s_BaAZc4Uf49RJDM6y27MpqX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_BaAZc4Uf49RJDM6y27MpqX
            source_type: api_record
            title: 维基数据：王耿光（Q45610509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45610509
            external_identifier: Q45610509
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
        - id: cs_m9Q7tybTlFNRqQwihJvMR6
          claim_id: c_5irePBbutAHnEEE4AV94yj
          source_id: s_hTDdzpcddKCDXkg8rzbesv
          stance: supports
          locator: CBDB:302575
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hTDdzpcddKCDXkg8rzbesv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王耿光（302575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302575&o=json
            external_identifier: CBDB:302575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:20.680Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oFJ7QwRj23JabUF3F412jC
        subject_person_id: p_CVwNugtPLMKx2eABoAcjQ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耿光
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_theZ1Qu6aVTkkAWviinFYu
          claim_id: c_oFJ7QwRj23JabUF3F412jC
          source_id: s_BaAZc4Uf49RJDM6y27MpqX
          stance: supports
          locator: Q45610509
          quotation: null
          interpretation_note: null
          source:
            id: s_BaAZc4Uf49RJDM6y27MpqX
            source_type: api_record
            title: 维基数据：王耿光（Q45610509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45610509
            external_identifier: Q45610509
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
        - id: cs_yAZ63jL4x3YdbmqYuH3KDA
          claim_id: c_oFJ7QwRj23JabUF3F412jC
          source_id: s_hTDdzpcddKCDXkg8rzbesv
          stance: supports
          locator: Q45610509
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_17QZSPwXaa7Hizzokvq4X7
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CVwNugtPLMKx2eABoAcjQ3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tbau1mBgUSQT1qEzpBLxzA
          claim_id: c_17QZSPwXaa7Hizzokvq4X7
          source_id: s_WQuJfewNt1rKQX9Pq57QHd
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_WQuJfewNt1rKQX9Pq57QHd
            source_type: api_record
            title: 维基数据：王麟（Q45450873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450873
            external_identifier: Q45450873
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_kgUa6m5DKzx92d9dWUuMGM
          claim_id: c_17QZSPwXaa7Hizzokvq4X7
          source_id: s_BaAZc4Uf49RJDM6y27MpqX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_dFBcsKbnFVcHN4YTvXeRwY
        status: active
        display_name: 王麟
        merged_into_person_id: null
  children:
    - claim:
        id: c_w5M4xcFNWk4cMvDo1CoDYD
        subject_person_id: p_CVwNugtPLMKx2eABoAcjQ3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r4bDJ5wYvDErHFhriwozvb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s7kQ3UGwzKzdRfmR9EPB7y
          claim_id: c_w5M4xcFNWk4cMvDo1CoDYD
          source_id: s_rp2362z5WDUfmk5KaysXbi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_rp2362z5WDUfmk5KaysXbi
            source_type: api_record
            title: 维基数据：王之都（Q16075337）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075337
            external_identifier: Q16075337
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E9%83%BD
        - id: cs_PgRvYVpJ5MoSahrKQLEjtA
          claim_id: c_w5M4xcFNWk4cMvDo1CoDYD
          source_id: s_BaAZc4Uf49RJDM6y27MpqX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_r4bDJ5wYvDErHFhriwozvb
        status: active
        display_name: 王之都
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王耿光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王耿光，明人物。CBDB 记录其籍贯记录为新城。中国历代人物传记资料库（CBDB）以人物编号 302575 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王耿光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dFBcsKbnFVcHN4YTvXeRwY | 王麟 | accepted |
| children | p_r4bDJ5wYvDErHFhriwozvb | 王之都 | accepted |

## 外部来源

- [维基数据：王耿光（Q45610509）](https://www.wikidata.org/wiki/Q45610509)
- [维基数据：王麟（Q45450873）](https://www.wikidata.org/wiki/Q45450873)
- [维基数据：王之都（Q16075337）](https://www.wikidata.org/wiki/Q16075337)
- [CBDB 中国历代人物传记资料库：王耿光（302575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302575&o=json)
