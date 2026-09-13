---
schema: wang-person/v1
id: p_K3XKcP84rHZS5ai2u38EgQ
status: active
merged_into: null
display_name: 王纲
cbdb_id: 175378
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z1QARS9iHcK2MB4haic7sT
        subject_person_id: p_K3XKcP84rHZS5ai2u38EgQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纲（卒于770年），唐人物。籍贯臨沂，曾任丞。（中国历代人物传记资料库 CBDB 175378）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_b52E8oDvS4qWPm2mVyHei4
          claim_id: c_z1QARS9iHcK2MB4haic7sT
          source_id: s_6NVMvEEY9KoE67EpXBd3qB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6NVMvEEY9KoE67EpXBd3qB
            source_type: api_record
            title: 维基数据：王纲（Q45656248）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656248
            external_identifier: Q45656248
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_bK1jzxsogCyr-VMn9go-Gp
          claim_id: c_z1QARS9iHcK2MB4haic7sT
          source_id: s_P4XJeB1vn3trkTHkKVLp8K
          stance: supports
          locator: CBDB:175378
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_P4XJeB1vn3trkTHkKVLp8K
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綱（175378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175378&o=json
            external_identifier: CBDB:175378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:52.259Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KWdWSsPECZtac9mRf3eBGq
        subject_person_id: p_K3XKcP84rHZS5ai2u38EgQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 770年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0770-01-01
            latest: 0770-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AyZ42tCNzfQmbHTwCD6kC4
          claim_id: c_KWdWSsPECZtac9mRf3eBGq
          source_id: s_6NVMvEEY9KoE67EpXBd3qB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6NVMvEEY9KoE67EpXBd3qB
            source_type: api_record
            title: 维基数据：王纲（Q45656248）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656248
            external_identifier: Q45656248
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gnqJ2v4yrnToM5FM3qoLK6
        subject_person_id: p_K3XKcP84rHZS5ai2u38EgQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纲
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Vs8bPptLUcPPoDYBALbiip
          claim_id: c_gnqJ2v4yrnToM5FM3qoLK6
          source_id: s_6NVMvEEY9KoE67EpXBd3qB
          stance: supports
          locator: Q45656248
          quotation: null
          interpretation_note: null
          source:
            id: s_6NVMvEEY9KoE67EpXBd3qB
            source_type: api_record
            title: 维基数据：王纲（Q45656248）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656248
            external_identifier: Q45656248
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_q7yH1ntCWr7DWom4b8kx2M
          claim_id: c_gnqJ2v4yrnToM5FM3qoLK6
          source_id: s_P4XJeB1vn3trkTHkKVLp8K
          stance: supports
          locator: Q45656248
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vkMwj3RF6C5Cn1TABVrgxA
        subject_person_id: p_8Gs2T4C5jw8oPYS3DAfCUG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K3XKcP84rHZS5ai2u38EgQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PnL2nd81aGsswfxWH5mNSV
          claim_id: c_vkMwj3RF6C5Cn1TABVrgxA
          source_id: s_mUjqkukQ9LG2Zn69Qye22Z
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_mUjqkukQ9LG2Zn69Qye22Z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昱（175376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175376&o=json
            external_identifier: CBDB:175376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.828Z
            metadata_json: null
        - id: cs_Zu3D6GtSuc79UvWqZ5iag9
          claim_id: c_vkMwj3RF6C5Cn1TABVrgxA
          source_id: s_a52jCCKNJxjWcq4UawS6B5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_a52jCCKNJxjWcq4UawS6B5
            source_type: api_record
            title: 维基数据：王昱（Q45656128）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656128
            external_identifier: Q45656128
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.652Z
            metadata_json: null
        - id: cs_hJ5dv6a2GZy3ptTC8ndzb7
          claim_id: c_vkMwj3RF6C5Cn1TABVrgxA
          source_id: s_6NVMvEEY9KoE67EpXBd3qB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6NVMvEEY9KoE67EpXBd3qB
            source_type: api_record
            title: 维基数据：王纲（Q45656248）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656248
            external_identifier: Q45656248
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_uoQ6L4qsVgSB55ab3GBxnp
          claim_id: c_vkMwj3RF6C5Cn1TABVrgxA
          source_id: s_P4XJeB1vn3trkTHkKVLp8K
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_P4XJeB1vn3trkTHkKVLp8K
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綱（175378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175378&o=json
            external_identifier: CBDB:175378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:52.259Z
            metadata_json: null
      object_person:
        id: p_8Gs2T4C5jw8oPYS3DAfCUG
        status: active
        display_name: 王昱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王纲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王纲（卒于770年），唐人物。籍贯臨沂，曾任丞。（中国历代人物传记资料库 CBDB 175378） | accepted |
| death.date | 770年 | accepted |
| name.primary | 王纲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8Gs2T4C5jw8oPYS3DAfCUG | 王昱 | accepted |

## 外部来源

- [维基数据：王纲（Q45656248）](https://www.wikidata.org/wiki/Q45656248)
- [维基数据：王昱（Q45656128）](https://www.wikidata.org/wiki/Q45656128)
- [CBDB 中国历代人物传记资料库：王綱（175378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175378&o=json)
- [CBDB 中国历代人物传记资料库：王昱（175376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175376&o=json)
