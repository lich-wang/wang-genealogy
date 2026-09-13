---
schema: wang-person/v1
id: p_tDGonAWba3r6S3bw5VpSS8
status: active
merged_into: null
display_name: 王笕
cbdb_id: 175625
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DdfuVwuNvu4AG66tPr25ti
        subject_person_id: p_tDGonAWba3r6S3bw5VpSS8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王笕（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175625）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_9UDakT7HZbc7dqysBCqa3t
          claim_id: c_DdfuVwuNvu4AG66tPr25ti
          source_id: s_hQg9v84UcaQGPWueBgGPFi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_hQg9v84UcaQGPWueBgGPFi
            source_type: api_record
            title: 维基数据：王笕（Q45669781）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669781
            external_identifier: Q45669781
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_DsURFbd45PVD1W7CUCpqxX
          claim_id: c_DdfuVwuNvu4AG66tPr25ti
          source_id: s_6v8hHnM94Rp1WCM4GU6J9w
          stance: supports
          locator: CBDB:175625
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6v8hHnM94Rp1WCM4GU6J9w
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王筧（175625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175625&o=json
            external_identifier: CBDB:175625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.275Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1qDGxoKaCBT2JMnYpb8Dii
        subject_person_id: p_tDGonAWba3r6S3bw5VpSS8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KXC2FGQfuoEQTTp5bxq1ai
          claim_id: c_1qDGxoKaCBT2JMnYpb8Dii
          source_id: s_hQg9v84UcaQGPWueBgGPFi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_hQg9v84UcaQGPWueBgGPFi
            source_type: api_record
            title: 维基数据：王笕（Q45669781）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669781
            external_identifier: Q45669781
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S5Zip2knGpmiBkeUib59gY
        subject_person_id: p_tDGonAWba3r6S3bw5VpSS8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王笕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3fyc382UAAcPk82y3n2i1s
          claim_id: c_S5Zip2knGpmiBkeUib59gY
          source_id: s_6v8hHnM94Rp1WCM4GU6J9w
          stance: supports
          locator: Q45669781
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_thTfinX7reP26drCkZKT51
          claim_id: c_S5Zip2knGpmiBkeUib59gY
          source_id: s_hQg9v84UcaQGPWueBgGPFi
          stance: supports
          locator: Q45669781
          quotation: null
          interpretation_note: null
          source:
            id: s_hQg9v84UcaQGPWueBgGPFi
            source_type: api_record
            title: 维基数据：王笕（Q45669781）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669781
            external_identifier: Q45669781
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2JALCwuNcrrmEZV8XsnnG3
        subject_person_id: p_23foehJQLDEs5RDFCrfjor
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tDGonAWba3r6S3bw5VpSS8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Mq7SeWHN73VfBLHiJMqtxR
          claim_id: c_2JALCwuNcrrmEZV8XsnnG3
          source_id: s_7LD1gMiGQkjeJwpT5zAGPD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7LD1gMiGQkjeJwpT5zAGPD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和友（175621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json
            external_identifier: CBDB:175621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.517Z
            metadata_json: null
        - id: cs_TKhe5u89g1vsyPJdXTbkXB
          claim_id: c_2JALCwuNcrrmEZV8XsnnG3
          source_id: s_vqrPHSCb5pHgvC2azHnXzg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vqrPHSCb5pHgvC2azHnXzg
            source_type: api_record
            title: 维基数据：王和友（Q45669592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669592
            external_identifier: Q45669592
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_TRzuB8JuLDNx44v4Jbpzg8
          claim_id: c_2JALCwuNcrrmEZV8XsnnG3
          source_id: s_hQg9v84UcaQGPWueBgGPFi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hQg9v84UcaQGPWueBgGPFi
            source_type: api_record
            title: 维基数据：王笕（Q45669781）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669781
            external_identifier: Q45669781
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_tAE2MzxhuboRjguQBkCP9s
          claim_id: c_2JALCwuNcrrmEZV8XsnnG3
          source_id: s_6v8hHnM94Rp1WCM4GU6J9w
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6v8hHnM94Rp1WCM4GU6J9w
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王筧（175625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175625&o=json
            external_identifier: CBDB:175625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.275Z
            metadata_json: null
      object_person:
        id: p_23foehJQLDEs5RDFCrfjor
        status: active
        display_name: 王和友
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王笕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王笕（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175625） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王笕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_23foehJQLDEs5RDFCrfjor | 王和友 | accepted |

## 外部来源

- [维基数据：王和友（Q45669592）](https://www.wikidata.org/wiki/Q45669592)
- [维基数据：王笕（Q45669781）](https://www.wikidata.org/wiki/Q45669781)
- [CBDB 中国历代人物传记资料库：王和友（175621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json)
- [CBDB 中国历代人物传记资料库：王筧（175625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175625&o=json)
