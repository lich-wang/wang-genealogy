---
schema: wang-person/v1
id: p_vzCfY5P8EPpPuqcBKJVNdK
status: active
merged_into: null
display_name: 王谢老
cbdb_id: 175624
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qh1jT5tTZ4y5rzi8MqE1NM
        subject_person_id: p_vzCfY5P8EPpPuqcBKJVNdK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谢老（卒于857年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175624）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_hQA5BNGzKf2fmDPyeiY21r
          claim_id: c_qh1jT5tTZ4y5rzi8MqE1NM
          source_id: s_jF1wTPLdgMvg7oKNXgwxHE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jF1wTPLdgMvg7oKNXgwxHE
            source_type: api_record
            title: 维基数据：王谢老（Q45669734）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669734
            external_identifier: Q45669734
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.663Z
            metadata_json: null
        - id: cs_X0fLQYvEBbb_AHSnwVthQ3
          claim_id: c_qh1jT5tTZ4y5rzi8MqE1NM
          source_id: s_ssXJ6ihvaXGSMQ43geKku8
          stance: supports
          locator: CBDB:175624
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ssXJ6ihvaXGSMQ43geKku8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王謝老（175624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175624&o=json
            external_identifier: CBDB:175624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:07.837Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_N584fFw78HJ2BkWkFdriE8
        subject_person_id: p_vzCfY5P8EPpPuqcBKJVNdK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eiGs2NpzJtzc7XUH1SXGyq
          claim_id: c_N584fFw78HJ2BkWkFdriE8
          source_id: s_jF1wTPLdgMvg7oKNXgwxHE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jF1wTPLdgMvg7oKNXgwxHE
            source_type: api_record
            title: 维基数据：王谢老（Q45669734）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669734
            external_identifier: Q45669734
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.663Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xBCGM4Uh6vNbqq2ZmiKNXv
        subject_person_id: p_vzCfY5P8EPpPuqcBKJVNdK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谢老
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3JrAGtsGgzTiD9semeC5kN
          claim_id: c_xBCGM4Uh6vNbqq2ZmiKNXv
          source_id: s_jF1wTPLdgMvg7oKNXgwxHE
          stance: supports
          locator: Q45669734
          quotation: null
          interpretation_note: null
          source:
            id: s_jF1wTPLdgMvg7oKNXgwxHE
            source_type: api_record
            title: 维基数据：王谢老（Q45669734）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669734
            external_identifier: Q45669734
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.663Z
            metadata_json: null
        - id: cs_oW4A3LdSW47bwtfaPWKbud
          claim_id: c_xBCGM4Uh6vNbqq2ZmiKNXv
          source_id: s_ssXJ6ihvaXGSMQ43geKku8
          stance: supports
          locator: Q45669734
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XecfWrRFUwXYYNTDXGp5Dk
        subject_person_id: p_epoDmVwU2aQ9MXeKvgwabg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vzCfY5P8EPpPuqcBKJVNdK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_L5VJG2Zr6CjwK74Zdm1U7j
          claim_id: c_XecfWrRFUwXYYNTDXGp5Dk
          source_id: s_wanu2myQ7yuhKpoADZ7Psr
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wanu2myQ7yuhKpoADZ7Psr
            source_type: api_record
            title: 维基数据：王罕（Q45669640）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669640
            external_identifier: Q45669640
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_fYJWN6JdKExwbsiN4J7qjS
          claim_id: c_XecfWrRFUwXYYNTDXGp5Dk
          source_id: s_yfd7wRNFGqvCG1fcNyxVVn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_yfd7wRNFGqvCG1fcNyxVVn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王罕（175622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175622&o=json
            external_identifier: CBDB:175622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.270Z
            metadata_json: null
        - id: cs_gJwqau5GzntdrHnuj55Qhq
          claim_id: c_XecfWrRFUwXYYNTDXGp5Dk
          source_id: s_jF1wTPLdgMvg7oKNXgwxHE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jF1wTPLdgMvg7oKNXgwxHE
            source_type: api_record
            title: 维基数据：王谢老（Q45669734）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669734
            external_identifier: Q45669734
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.663Z
            metadata_json: null
        - id: cs_3K7BA4SsjReGiNEQ5yJZJW
          claim_id: c_XecfWrRFUwXYYNTDXGp5Dk
          source_id: s_ssXJ6ihvaXGSMQ43geKku8
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ssXJ6ihvaXGSMQ43geKku8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王謝老（175624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175624&o=json
            external_identifier: CBDB:175624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:07.837Z
            metadata_json: null
      object_person:
        id: p_epoDmVwU2aQ9MXeKvgwabg
        status: active
        display_name: 王罕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王谢老

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王谢老（卒于857年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175624） | accepted |
| death.date | 857年 | accepted |
| name.primary | 王谢老 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_epoDmVwU2aQ9MXeKvgwabg | 王罕 | accepted |

## 外部来源

- [维基数据：王罕（Q45669640）](https://www.wikidata.org/wiki/Q45669640)
- [维基数据：王谢老（Q45669734）](https://www.wikidata.org/wiki/Q45669734)
- [CBDB 中国历代人物传记资料库：王罕（175622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175622&o=json)
- [CBDB 中国历代人物传记资料库：王謝老（175624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175624&o=json)
