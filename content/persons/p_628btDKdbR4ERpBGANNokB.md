---
schema: wang-person/v1
id: p_628btDKdbR4ERpBGANNokB
status: active
merged_into: null
display_name: 王咸熙
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MQHtMJpJdDDtM9Qy66W1Fr
        subject_person_id: p_628btDKdbR4ERpBGANNokB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王咸熙，宋人物。CBDB 记录其籍贯记录为管城，身份包括富豪。中国历代人物传记资料库（CBDB）以人物编号 21947 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_A3spKTzPeJ5aTy72fb9VhD
          claim_id: c_MQHtMJpJdDDtM9Qy66W1Fr
          source_id: s_Gp4WBVyZNHoDcTHDjYXkGL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_Gp4WBVyZNHoDcTHDjYXkGL
            source_type: api_record
            title: 维基数据：王咸熙（Q45401562）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401562
            external_identifier: Q45401562
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_E-KykjnJ3NAgul4IiSURUN
          claim_id: c_MQHtMJpJdDDtM9Qy66W1Fr
          source_id: s_RY2uDCo42d26UVABT5UsPF
          stance: supports
          locator: CBDB:21947
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RY2uDCo42d26UVABT5UsPF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王咸熙（21947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21947&o=json
            external_identifier: CBDB:21947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:59.378Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_po9THNMt6rEFcATafq9U9L
        subject_person_id: p_628btDKdbR4ERpBGANNokB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王咸熙
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cDXSPQgLrvww3U7i39ZVbR
          claim_id: c_po9THNMt6rEFcATafq9U9L
          source_id: s_RY2uDCo42d26UVABT5UsPF
          stance: supports
          locator: Q45401562
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_rt6B5LkkLGhgp4SDijY3Si
          claim_id: c_po9THNMt6rEFcATafq9U9L
          source_id: s_Gp4WBVyZNHoDcTHDjYXkGL
          stance: supports
          locator: Q45401562
          quotation: null
          interpretation_note: null
          source:
            id: s_Gp4WBVyZNHoDcTHDjYXkGL
            source_type: api_record
            title: 维基数据：王咸熙（Q45401562）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401562
            external_identifier: Q45401562
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J4guTYQMr23k85EHJce8Ce
        subject_person_id: p_mDQwQDowHukUUJhyJA2Q4Z
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_628btDKdbR4ERpBGANNokB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4shkUxz1EB9cadYUEe2K2T
          claim_id: c_J4guTYQMr23k85EHJce8Ce
          source_id: s_ERXdoZiQwdbzcfqtnQe5F8
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_ERXdoZiQwdbzcfqtnQe5F8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王德用（1893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1893&o=json
            external_identifier: CBDB:1893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:33.922Z
            metadata_json: null
        - id: cs_dHuoTx5aqi5vD1EvVcUxg5
          claim_id: c_J4guTYQMr23k85EHJce8Ce
          source_id: s_81a22jZyFPFGnFLoTT9eP3
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_81a22jZyFPFGnFLoTT9eP3
            source_type: api_record
            title: 维基数据：王德用（Q10414172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414172
            external_identifier: Q10414172
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:43.212Z
            metadata_json: null
        - id: cs_nCoXa5XR1W1WLkxNCJ5NM8
          claim_id: c_J4guTYQMr23k85EHJce8Ce
          source_id: s_Gp4WBVyZNHoDcTHDjYXkGL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Gp4WBVyZNHoDcTHDjYXkGL
            source_type: api_record
            title: 维基数据：王咸熙（Q45401562）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401562
            external_identifier: Q45401562
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
      object_person:
        id: p_mDQwQDowHukUUJhyJA2Q4Z
        status: active
        display_name: 王德用
        merged_into_person_id: null
  children:
    - claim:
        id: c_qpXK9xJWUVZLQc7qhFveg2
        subject_person_id: p_628btDKdbR4ERpBGANNokB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KX3HaGwtHE9r1pvSuRLLHX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B9RCW74WWwyPz1VsM9p2JE
          claim_id: c_qpXK9xJWUVZLQc7qhFveg2
          source_id: s_dQp3ZyujbuE4phNXktFUSG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_dQp3ZyujbuE4phNXktFUSG
            source_type: api_record
            title: 维基数据：王渊（Q45363064）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363064
            external_identifier: Q45363064
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:08.871Z
            metadata_json: null
        - id: cs_f2Xa5RoJFRQbgL43yYiyJt
          claim_id: c_qpXK9xJWUVZLQc7qhFveg2
          source_id: s_Gp4WBVyZNHoDcTHDjYXkGL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_gDAfub7UoJzbF2pmDB9ty2
          claim_id: c_qpXK9xJWUVZLQc7qhFveg2
          source_id: s_RY2uDCo42d26UVABT5UsPF
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_KX3HaGwtHE9r1pvSuRLLHX
        status: active
        display_name: 王渊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王咸熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王咸熙，宋人物。CBDB 记录其籍贯记录为管城，身份包括富豪。中国历代人物传记资料库（CBDB）以人物编号 21947 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王咸熙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mDQwQDowHukUUJhyJA2Q4Z | 王德用 | accepted |
| children | p_KX3HaGwtHE9r1pvSuRLLHX | 王渊 | accepted |

## 外部来源

- [维基数据：王德用（Q10414172）](https://www.wikidata.org/wiki/Q10414172)
- [维基数据：王咸熙（Q45401562）](https://www.wikidata.org/wiki/Q45401562)
- [维基数据：王渊（Q45363064）](https://www.wikidata.org/wiki/Q45363064)
- [CBDB 中国历代人物传记资料库：王德用（1893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1893&o=json)
- [CBDB 中国历代人物传记资料库：王咸熙（21947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21947&o=json)
