---
schema: wang-person/v1
id: p_D1uiKtejcBKo45taEXSY3A
status: active
merged_into: null
display_name: 王某順
cbdb_id: 192001
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wjqsx4DsvwFWedYWuVK3cu
        subject_person_id: p_D1uiKtejcBKo45taEXSY3A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某順（卒于754年），史料所见人物。本项目依据《中国历代人物传记资料库：王某順（CBDB 192001）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_RitrMtDZbGdFObH_q722ZW
          claim_id: c_wjqsx4DsvwFWedYWuVK3cu
          source_id: s_pDLiu76X1dwkY9p51Zen7p
          stance: supports
          locator: CBDB:192001
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_pDLiu76X1dwkY9p51Zen7p
            source_type: api_record
            title: 中国历代人物传记资料库：王某順（CBDB 192001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192001&o=json
            external_identifier: CBDB:192001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nmC2qeouXBfMti2MpCC7W9
        subject_person_id: p_D1uiKtejcBKo45taEXSY3A
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 754年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0754-01-01
            latest: 0754-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cEqEY6i1LWK2QVSzhrwRVE
          claim_id: c_nmC2qeouXBfMti2MpCC7W9
          source_id: s_pDLiu76X1dwkY9p51Zen7p
          stance: supports
          locator: CBDB:192001
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 754
          source:
            id: s_pDLiu76X1dwkY9p51Zen7p
            source_type: api_record
            title: 中国历代人物传记资料库：王某順（CBDB 192001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192001&o=json
            external_identifier: CBDB:192001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3iArT6xuVPxK1SNevdSkU4
        subject_person_id: p_D1uiKtejcBKo45taEXSY3A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oCsN99AKZon5YiNMnNRUAc
          claim_id: c_3iArT6xuVPxK1SNevdSkU4
          source_id: s_pDLiu76X1dwkY9p51Zen7p
          stance: supports
          locator: CBDB:192001
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 754
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_md45y1yFWAcX00admrY1qt
        subject_person_id: p_D1uiKtejcBKo45taEXSY3A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jh0vVtRy7Bv2ovBQRpdYOK
          claim_id: c_md45y1yFWAcX00admrY1qt
          source_id: s_F4AnebQmkt32k7zkvanzLD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F4AnebQmkt32k7zkvanzLD
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 145741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145741&o=json
            external_identifier: CBDB:145741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9B5ANk8vxa7D7phY5dTTsm
        status: active
        display_name: 王恭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王某順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王某順（卒于754年），史料所见人物。本项目依据《中国历代人物传记资料库：王某順（CBDB 192001）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 754年 | accepted |
| name.primary | 王某順 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9B5ANk8vxa7D7phY5dTTsm | 王恭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 145741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145741&o=json)
- [中国历代人物传记资料库：王某順（CBDB 192001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192001&o=json)
