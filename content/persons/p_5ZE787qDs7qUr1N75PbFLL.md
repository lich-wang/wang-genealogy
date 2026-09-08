---
schema: wang-person/v1
id: p_5ZE787qDs7qUr1N75PbFLL
status: active
merged_into: null
display_name: 王正甫
cbdb_id: 24469
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZeNMS2ofaYXDDS2CM4uTRL
        subject_person_id: p_5ZE787qDs7qUr1N75PbFLL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正甫，宋人物。CBDB 记录其籍贯记录为咸平，曾任教官。中国历代人物传记资料库（CBDB）以人物编号 24469 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_cFXhCaWvtdph5UJ5iA7MsM
          claim_id: c_ZeNMS2ofaYXDDS2CM4uTRL
          source_id: s_s3VXNJ8WF6oGs85EQK6fWE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_s3VXNJ8WF6oGs85EQK6fWE
            source_type: api_record
            title: 维基数据：王正甫（Q45406236）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45406236
            external_identifier: Q45406236
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:05.625Z
            metadata_json: null
        - id: cs_W635AvjI5kaq89k0ytmlqV
          claim_id: c_ZeNMS2ofaYXDDS2CM4uTRL
          source_id: s_kvk2gYQ9jemHz6N4CciRAC
          stance: supports
          locator: CBDB:24469
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kvk2gYQ9jemHz6N4CciRAC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王正甫（24469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24469&o=json
            external_identifier: CBDB:24469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:05.768Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kEZtiCdkRSU5rgKPGw8MRM
        subject_person_id: p_5ZE787qDs7qUr1N75PbFLL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正甫
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7BEuCtrsY91zQS2b5Hhgzn
          claim_id: c_kEZtiCdkRSU5rgKPGw8MRM
          source_id: s_kvk2gYQ9jemHz6N4CciRAC
          stance: supports
          locator: Q45406236
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_BF1i7kGuoxGS6k2Ap5oiyu
          claim_id: c_kEZtiCdkRSU5rgKPGw8MRM
          source_id: s_s3VXNJ8WF6oGs85EQK6fWE
          stance: supports
          locator: Q45406236
          quotation: null
          interpretation_note: null
          source:
            id: s_s3VXNJ8WF6oGs85EQK6fWE
            source_type: api_record
            title: 维基数据：王正甫（Q45406236）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45406236
            external_identifier: Q45406236
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:05.625Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8vvtErh6ogchM28AXXuSoA
        subject_person_id: p_Hy3oL9P7FfBor4frFk5Jm5
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_5ZE787qDs7qUr1N75PbFLL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n2wL4Ac1KjPMmRu4a53n3X
          claim_id: c_8vvtErh6ogchM28AXXuSoA
          source_id: s_s3VXNJ8WF6oGs85EQK6fWE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_s3VXNJ8WF6oGs85EQK6fWE
            source_type: api_record
            title: 维基数据：王正甫（Q45406236）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45406236
            external_identifier: Q45406236
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:05.625Z
            metadata_json: null
        - id: cs_rgqBTGtzhAVBmmm8MLVZKM
          claim_id: c_8vvtErh6ogchM28AXXuSoA
          source_id: s_KaWCfUWNUAhuBv5aBM1qS9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KaWCfUWNUAhuBv5aBM1qS9
            source_type: api_record
            title: 维基数据：王拱辰（Q15932959）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15932959
            external_identifier: Q15932959
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
        - id: cs_u3Ty9zYWxYWyCYgtb19QqH
          claim_id: c_8vvtErh6ogchM28AXXuSoA
          source_id: s_ibHb7Z4nqpDXdLqQbGdB7v
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ibHb7Z4nqpDXdLqQbGdB7v
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王拱辰（1847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json
            external_identifier: CBDB:1847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:52.110Z
            metadata_json: null
      object_person:
        id: p_Hy3oL9P7FfBor4frFk5Jm5
        status: active
        display_name: 王拱辰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正甫，宋人物。CBDB 记录其籍贯记录为咸平，曾任教官。中国历代人物传记资料库（CBDB）以人物编号 24469 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王正甫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hy3oL9P7FfBor4frFk5Jm5 | 王拱辰 | accepted |

## 外部来源

- [维基数据：王拱辰（Q15932959）](https://www.wikidata.org/wiki/Q15932959)
- [维基数据：王正甫（Q45406236）](https://www.wikidata.org/wiki/Q45406236)
- [CBDB 中国历代人物传记资料库：王拱辰（1847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json)
- [CBDB 中国历代人物传记资料库：王正甫（24469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24469&o=json)
