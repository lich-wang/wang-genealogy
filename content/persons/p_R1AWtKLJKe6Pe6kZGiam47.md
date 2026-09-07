---
schema: wang-person/v1
id: p_R1AWtKLJKe6Pe6kZGiam47
status: active
merged_into: null
display_name: 王愖
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n5zEWrrFQBJWQCBHfTHfeW
        subject_person_id: p_R1AWtKLJKe6Pe6kZGiam47
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愖（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175518 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_B14SBJPhtjcAwA7yzUVBaG
          claim_id: c_n5zEWrrFQBJWQCBHfTHfeW
          source_id: s_QbicAE4ciheoSksPx5VAXt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_QbicAE4ciheoSksPx5VAXt
            source_type: api_record
            title: 维基数据：王愖（Q45664321）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664321
            external_identifier: Q45664321
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
        - id: cs_hm32I7F55zE5DV0tf0Iede
          claim_id: c_n5zEWrrFQBJWQCBHfTHfeW
          source_id: s_QNtKr8JLon8QJCaqxBhhbV
          stance: supports
          locator: CBDB:175518
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QNtKr8JLon8QJCaqxBhhbV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愖（175518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175518&o=json
            external_identifier: CBDB:175518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:53.741Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GRs8R83RaU6j76MJ6Kc4Kn
        subject_person_id: p_R1AWtKLJKe6Pe6kZGiam47
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
        - id: cs_uJ6R9yYtfNGDGrNSS5dUPz
          claim_id: c_GRs8R83RaU6j76MJ6Kc4Kn
          source_id: s_QbicAE4ciheoSksPx5VAXt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_QbicAE4ciheoSksPx5VAXt
            source_type: api_record
            title: 维基数据：王愖（Q45664321）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664321
            external_identifier: Q45664321
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ecJCoEpCQf1iZ3DYMPrxe1
        subject_person_id: p_R1AWtKLJKe6Pe6kZGiam47
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愖
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8VcWKF7KAgvm9C9hF4k5yb
          claim_id: c_ecJCoEpCQf1iZ3DYMPrxe1
          source_id: s_QNtKr8JLon8QJCaqxBhhbV
          stance: supports
          locator: Q45664321
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_jmyH7hzNBwvCEM4DFAtTQa
          claim_id: c_ecJCoEpCQf1iZ3DYMPrxe1
          source_id: s_QbicAE4ciheoSksPx5VAXt
          stance: supports
          locator: Q45664321
          quotation: null
          interpretation_note: null
          source:
            id: s_QbicAE4ciheoSksPx5VAXt
            source_type: api_record
            title: 维基数据：王愖（Q45664321）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664321
            external_identifier: Q45664321
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uyQXE7r4G5aU4LBEWHaQ93
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R1AWtKLJKe6Pe6kZGiam47
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DSQGNneDw1MMMQmn4QuHca
          claim_id: c_uyQXE7r4G5aU4LBEWHaQ93
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_PF4FifkxBMbCVgPzvwSYR3
          claim_id: c_uyQXE7r4G5aU4LBEWHaQ93
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
        - id: cs_9P2LC52NPdmGwk6HKARfDS
          claim_id: c_uyQXE7r4G5aU4LBEWHaQ93
          source_id: s_QbicAE4ciheoSksPx5VAXt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QbicAE4ciheoSksPx5VAXt
            source_type: api_record
            title: 维基数据：王愖（Q45664321）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664321
            external_identifier: Q45664321
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
        - id: cs_TJzTb2MP6sWE7FioAMzQEk
          claim_id: c_uyQXE7r4G5aU4LBEWHaQ93
          source_id: s_QNtKr8JLon8QJCaqxBhhbV
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_QNtKr8JLon8QJCaqxBhhbV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愖（175518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175518&o=json
            external_identifier: CBDB:175518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:53.741Z
            metadata_json: null
      object_person:
        id: p_Ang9eiGuniGWoebR7bHwTe
        status: active
        display_name: 王源植
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王愖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王愖（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175518 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王愖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ang9eiGuniGWoebR7bHwTe | 王源植 | accepted |

## 外部来源

- [维基数据：王愖（Q45664321）](https://www.wikidata.org/wiki/Q45664321)
- [维基数据：王源植（Q45664050）](https://www.wikidata.org/wiki/Q45664050)
- [CBDB 中国历代人物传记资料库：王愖（175518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175518&o=json)
- [CBDB 中国历代人物传记资料库：王源植（175513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json)
