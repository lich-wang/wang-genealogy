---
schema: wang-person/v1
id: p_KpqPC2j15z76Q3HFtSem9K
status: active
merged_into: null
display_name: 王俶
cbdb_id: 175602
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mgzGGsNn1fc78D35Xe8cN9
        subject_person_id: p_KpqPC2j15z76Q3HFtSem9K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俶（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州刺史。中国历代人物传记资料库（CBDB）以人物编号 175602 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ZzPN7htA7ia9GZTCNezJXW
          claim_id: c_mgzGGsNn1fc78D35Xe8cN9
          source_id: s_7kXDCqpnt6ewqp27mbqWqD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7kXDCqpnt6ewqp27mbqWqD
            source_type: api_record
            title: 维基数据：王俶（Q45668672）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668672
            external_identifier: Q45668672
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_boDfpfhOfwv34-cBgvulsw
          claim_id: c_mgzGGsNn1fc78D35Xe8cN9
          source_id: s_u5UHwb2wZ2uPypoCMmhCiJ
          stance: supports
          locator: CBDB:175602
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_u5UHwb2wZ2uPypoCMmhCiJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俶（175602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175602&o=json
            external_identifier: CBDB:175602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.349Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hGUMmKFQDya5zRRt3dwmvE
        subject_person_id: p_KpqPC2j15z76Q3HFtSem9K
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 746年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0746-01-01
            latest: 0746-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6wiuKieRgqbTtF1VQn2RB5
          claim_id: c_hGUMmKFQDya5zRRt3dwmvE
          source_id: s_7kXDCqpnt6ewqp27mbqWqD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7kXDCqpnt6ewqp27mbqWqD
            source_type: api_record
            title: 维基数据：王俶（Q45668672）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668672
            external_identifier: Q45668672
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oVxpEfYGiLCUAaqMEK4gav
        subject_person_id: p_KpqPC2j15z76Q3HFtSem9K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZpNv4Z96doqsTTN9CWuXkn
          claim_id: c_oVxpEfYGiLCUAaqMEK4gav
          source_id: s_7kXDCqpnt6ewqp27mbqWqD
          stance: supports
          locator: Q45668672
          quotation: null
          interpretation_note: null
          source:
            id: s_7kXDCqpnt6ewqp27mbqWqD
            source_type: api_record
            title: 维基数据：王俶（Q45668672）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668672
            external_identifier: Q45668672
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_hM7e8caWKW3wdEKiAKGafr
          claim_id: c_oVxpEfYGiLCUAaqMEK4gav
          source_id: s_u5UHwb2wZ2uPypoCMmhCiJ
          stance: supports
          locator: Q45668672
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3S5E6q9Ey4xmJrevY62xW4
        subject_person_id: p_zKiyG8Et428Qshx93cGmXx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KpqPC2j15z76Q3HFtSem9K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kFixT3bwBpvCLg88hjEzRu
          claim_id: c_3S5E6q9Ey4xmJrevY62xW4
          source_id: s_3hPKehA9c7h47aCnSDEotF
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3hPKehA9c7h47aCnSDEotF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暟（175601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175601&o=json
            external_identifier: CBDB:175601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:37.992Z
            metadata_json: null
        - id: cs_vD85STKZYfdJJKKDsCGq5X
          claim_id: c_3S5E6q9Ey4xmJrevY62xW4
          source_id: s_LzjmjT3XXrsixH4sLE4GU9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_LzjmjT3XXrsixH4sLE4GU9
            source_type: api_record
            title: 维基数据：王暟（Q45668621）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668621
            external_identifier: Q45668621
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_A8ygRSUX8SdVCLe6MGGVrP
          claim_id: c_3S5E6q9Ey4xmJrevY62xW4
          source_id: s_7kXDCqpnt6ewqp27mbqWqD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7kXDCqpnt6ewqp27mbqWqD
            source_type: api_record
            title: 维基数据：王俶（Q45668672）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668672
            external_identifier: Q45668672
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_Ff3LEjgFT3LHZgLm1uw3aG
          claim_id: c_3S5E6q9Ey4xmJrevY62xW4
          source_id: s_u5UHwb2wZ2uPypoCMmhCiJ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_u5UHwb2wZ2uPypoCMmhCiJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俶（175602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175602&o=json
            external_identifier: CBDB:175602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.349Z
            metadata_json: null
      object_person:
        id: p_zKiyG8Et428Qshx93cGmXx
        status: active
        display_name: 王暟
        merged_into_person_id: null
  children:
    - claim:
        id: c_Z1KUSkJ7q9KMrJKm874JUp
        subject_person_id: p_KpqPC2j15z76Q3HFtSem9K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kbZqdFL8wjBpMydA4i7A54
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7HQhF4CiyLheE29Eaa3fcb
          claim_id: c_Z1KUSkJ7q9KMrJKm874JUp
          source_id: s_u5UHwb2wZ2uPypoCMmhCiJ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_u5UHwb2wZ2uPypoCMmhCiJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俶（175602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175602&o=json
            external_identifier: CBDB:175602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.349Z
            metadata_json: null
        - id: cs_jnDKiwjzZBaqzAQ9fZqxNM
          claim_id: c_Z1KUSkJ7q9KMrJKm874JUp
          source_id: s_7kXDCqpnt6ewqp27mbqWqD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7kXDCqpnt6ewqp27mbqWqD
            source_type: api_record
            title: 维基数据：王俶（Q45668672）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668672
            external_identifier: Q45668672
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_5PMa4KBKxgSh5Az4kZ7EN7
          claim_id: c_Z1KUSkJ7q9KMrJKm874JUp
          source_id: s_R9uGRjsck7FcawC5ZKcj7t
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_R9uGRjsck7FcawC5ZKcj7t
            source_type: api_record
            title: 维基数据：王金刀（Q45668721）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668721
            external_identifier: Q45668721
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.482Z
            metadata_json: null
        - id: cs_stXui14augba2B8Ho6xKHo
          claim_id: c_Z1KUSkJ7q9KMrJKm874JUp
          source_id: s_jNqwsGY9Xq4LD5vKPo5A2i
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jNqwsGY9Xq4LD5vKPo5A2i
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王金刀（175603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175603&o=json
            external_identifier: CBDB:175603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.675Z
            metadata_json: null
      object_person:
        id: p_kbZqdFL8wjBpMydA4i7A54
        status: active
        display_name: 王金刀
        merged_into_person_id: null
    - claim:
        id: c_ELcfaQDES776T8rQnTNXES
        subject_person_id: p_KpqPC2j15z76Q3HFtSem9K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WtKQyYX6aH8C33XPVE1n1V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_N2A5M9yW3KrJiazM54W9yZ
          claim_id: c_ELcfaQDES776T8rQnTNXES
          source_id: s_7kXDCqpnt6ewqp27mbqWqD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7kXDCqpnt6ewqp27mbqWqD
            source_type: api_record
            title: 维基数据：王俶（Q45668672）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668672
            external_identifier: Q45668672
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_bD8rw45gW1KiA76TRCpPES
          claim_id: c_ELcfaQDES776T8rQnTNXES
          source_id: s_u5UHwb2wZ2uPypoCMmhCiJ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_u5UHwb2wZ2uPypoCMmhCiJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俶（175602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175602&o=json
            external_identifier: CBDB:175602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.349Z
            metadata_json: null
        - id: cs_ix2MXcTPMYkD3vfHSdQwbN
          claim_id: c_ELcfaQDES776T8rQnTNXES
          source_id: s_Vsn3rBSWNY6Z3pWmMHQ7GE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Vsn3rBSWNY6Z3pWmMHQ7GE
            source_type: api_record
            title: 维基数据：王鼎子（Q45668771）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668771
            external_identifier: Q45668771
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
        - id: cs_6y1nPbXZJLR2Tc8Rqj9Jjd
          claim_id: c_ELcfaQDES776T8rQnTNXES
          source_id: s_VSFsc9q5QmQJAM9wACfyzB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VSFsc9q5QmQJAM9wACfyzB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鼎子（175604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175604&o=json
            external_identifier: CBDB:175604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.681Z
            metadata_json: null
      object_person:
        id: p_WtKQyYX6aH8C33XPVE1n1V
        status: active
        display_name: 王鼎子
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王俶（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州刺史。中国历代人物传记资料库（CBDB）以人物编号 175602 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王俶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zKiyG8Et428Qshx93cGmXx | 王暟 | accepted |
| children | p_kbZqdFL8wjBpMydA4i7A54 | 王金刀 | accepted |
| children | p_WtKQyYX6aH8C33XPVE1n1V | 王鼎子 | accepted |

## 外部来源

- [维基数据：王俶（Q45668672）](https://www.wikidata.org/wiki/Q45668672)
- [维基数据：王鼎子（Q45668771）](https://www.wikidata.org/wiki/Q45668771)
- [维基数据：王金刀（Q45668721）](https://www.wikidata.org/wiki/Q45668721)
- [维基数据：王暟（Q45668621）](https://www.wikidata.org/wiki/Q45668621)
- [CBDB 中国历代人物传记资料库：王俶（175602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175602&o=json)
- [CBDB 中国历代人物传记资料库：王鼎子（175604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175604&o=json)
- [CBDB 中国历代人物传记资料库：王金刀（175603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175603&o=json)
- [CBDB 中国历代人物传记资料库：王暟（175601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175601&o=json)
