---
schema: wang-person/v1
id: p_fmFzhAjduymGbkCjtQ3i8K
status: active
merged_into: null
display_name: 王师锡
cbdb_id: 38062
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kjybu98ZTE43utFwEvVRE2
        subject_person_id: p_fmFzhAjduymGbkCjtQ3i8K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师锡，宋人物。CBDB 记录其籍贯记录为臨川，身份包括孝子/孝女。中国历代人物传记资料库（CBDB）以人物编号 38062 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_k4BHjbYFdWR2xRLVPdT3jb
          claim_id: c_Kjybu98ZTE43utFwEvVRE2
          source_id: s_NaFSGS7KZNqF8z54ojzNh5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_NaFSGS7KZNqF8z54ojzNh5
            source_type: api_record
            title: 维基数据：王师锡（Q45430321）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45430321
            external_identifier: Q45430321
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:15.720Z
            metadata_json: null
        - id: cs_7g3dKeNAbsM90OJxFaO14D
          claim_id: c_Kjybu98ZTE43utFwEvVRE2
          source_id: s_dhVYBZAkGHgwB7QXooe82M
          stance: supports
          locator: CBDB:38062
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dhVYBZAkGHgwB7QXooe82M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師錫（38062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38062&o=json
            external_identifier: CBDB:38062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:15.887Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cuzRQNuJko5aZ8hfKhjr86
        subject_person_id: p_fmFzhAjduymGbkCjtQ3i8K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师锡
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AnHMP2vrh1tZo81VXufhGS
          claim_id: c_cuzRQNuJko5aZ8hfKhjr86
          source_id: s_NaFSGS7KZNqF8z54ojzNh5
          stance: supports
          locator: Q45430321
          quotation: null
          interpretation_note: null
          source:
            id: s_NaFSGS7KZNqF8z54ojzNh5
            source_type: api_record
            title: 维基数据：王师锡（Q45430321）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45430321
            external_identifier: Q45430321
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:15.720Z
            metadata_json: null
        - id: cs_NjfHMvrwaqTdJAKAdPxyiN
          claim_id: c_cuzRQNuJko5aZ8hfKhjr86
          source_id: s_dhVYBZAkGHgwB7QXooe82M
          stance: supports
          locator: Q45430321
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CjqMakEjuLHk8TTj88q41J
        subject_person_id: p_o255NHVLtnzoPr2i5G4ntm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fmFzhAjduymGbkCjtQ3i8K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6iQNWYCwgtxEF5VXKk2UZD
          claim_id: c_CjqMakEjuLHk8TTj88q41J
          source_id: s_3Y9DQdDPm6vSqf3LqpD5ei
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_3Y9DQdDPm6vSqf3LqpD5ei
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王貫之（3965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3965&o=json
            external_identifier: CBDB:3965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:43.471Z
            metadata_json: null
        - id: cs_iGcXFiP8XKXGbk3BEAHk9H
          claim_id: c_CjqMakEjuLHk8TTj88q41J
          source_id: s_un7dCG7hRi14hUeg4EsewE
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_un7dCG7hRi14hUeg4EsewE
            source_type: api_record
            title: 维基数据：王贯之（Q45362986）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362986
            external_identifier: Q45362986
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:43.280Z
            metadata_json: null
        - id: cs_QwQwDbPsToAUf1babj1FYW
          claim_id: c_CjqMakEjuLHk8TTj88q41J
          source_id: s_NaFSGS7KZNqF8z54ojzNh5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NaFSGS7KZNqF8z54ojzNh5
            source_type: api_record
            title: 维基数据：王师锡（Q45430321）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45430321
            external_identifier: Q45430321
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:15.720Z
            metadata_json: null
        - id: cs_CZncH5WbFAsnCBTxDRn54d
          claim_id: c_CjqMakEjuLHk8TTj88q41J
          source_id: s_dhVYBZAkGHgwB7QXooe82M
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_dhVYBZAkGHgwB7QXooe82M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師錫（38062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38062&o=json
            external_identifier: CBDB:38062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:15.887Z
            metadata_json: null
      object_person:
        id: p_o255NHVLtnzoPr2i5G4ntm
        status: active
        display_name: 王贯之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王师锡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王师锡，宋人物。CBDB 记录其籍贯记录为臨川，身份包括孝子/孝女。中国历代人物传记资料库（CBDB）以人物编号 38062 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王师锡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_o255NHVLtnzoPr2i5G4ntm | 王贯之 | accepted |

## 外部来源

- [维基数据：王贯之（Q45362986）](https://www.wikidata.org/wiki/Q45362986)
- [维基数据：王师锡（Q45430321）](https://www.wikidata.org/wiki/Q45430321)
- [CBDB 中国历代人物传记资料库：王貫之（3965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3965&o=json)
- [CBDB 中国历代人物传记资料库：王師錫（38062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38062&o=json)
