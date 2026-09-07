---
schema: wang-person/v1
id: p_kbZqdFL8wjBpMydA4i7A54
status: active
merged_into: null
display_name: 王金刀
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s6H8kvJs74qTVDLU6fkhb5
        subject_person_id: p_kbZqdFL8wjBpMydA4i7A54
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金刀（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175603 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_mb2M8LxBLUykn1LyWzL7qs
          claim_id: c_s6H8kvJs74qTVDLU6fkhb5
          source_id: s_R9uGRjsck7FcawC5ZKcj7t
          stance: supports
          locator: null
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
        - id: cs_FFBZIkXiqxNPSGln99JJoB
          claim_id: c_s6H8kvJs74qTVDLU6fkhb5
          source_id: s_jNqwsGY9Xq4LD5vKPo5A2i
          stance: supports
          locator: CBDB:175603
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_o1BQ6SXGALXj2GEoPXeTKD
        subject_person_id: p_kbZqdFL8wjBpMydA4i7A54
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oB97s56Fe1AwP6riFYCns5
          claim_id: c_o1BQ6SXGALXj2GEoPXeTKD
          source_id: s_R9uGRjsck7FcawC5ZKcj7t
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6xvAJ4vE1eBbHBF3Lq2p4B
        subject_person_id: p_kbZqdFL8wjBpMydA4i7A54
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金刀
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YK5EaVQFPGM5BBNBjNb3Rt
          claim_id: c_6xvAJ4vE1eBbHBF3Lq2p4B
          source_id: s_jNqwsGY9Xq4LD5vKPo5A2i
          stance: supports
          locator: Q45668721
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_dWbK6CC4VzPQSgktSRM2ep
          claim_id: c_6xvAJ4vE1eBbHBF3Lq2p4B
          source_id: s_R9uGRjsck7FcawC5ZKcj7t
          stance: supports
          locator: Q45668721
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_KpqPC2j15z76Q3HFtSem9K
        status: active
        display_name: 王俶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王金刀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王金刀（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175603 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王金刀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KpqPC2j15z76Q3HFtSem9K | 王俶 | accepted |

## 外部来源

- [维基数据：王俶（Q45668672）](https://www.wikidata.org/wiki/Q45668672)
- [维基数据：王金刀（Q45668721）](https://www.wikidata.org/wiki/Q45668721)
- [CBDB 中国历代人物传记资料库：王俶（175602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175602&o=json)
- [CBDB 中国历代人物传记资料库：王金刀（175603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175603&o=json)
