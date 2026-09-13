---
schema: wang-person/v1
id: p_eDMQCgCV7Pas3zdeuj3KE2
status: active
merged_into: null
display_name: 王翘
cbdb_id: 193294
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4HmK9bCFeLwLW5EhcXDuoz
        subject_person_id: p_eDMQCgCV7Pas3zdeuj3KE2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翘（卒于862年），唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 193294）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_rsA3tJDP6Z43rE24x9pKDq
          claim_id: c_4HmK9bCFeLwLW5EhcXDuoz
          source_id: s_DTLzUXRk4EaPsrbfefdin1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_DTLzUXRk4EaPsrbfefdin1
            source_type: api_record
            title: 维基数据：王翘（Q45472680）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45472680
            external_identifier: Q45472680
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:38.390Z
            metadata_json: null
        - id: cs_SIm4fRmeP1DQIS9IP5boCr
          claim_id: c_4HmK9bCFeLwLW5EhcXDuoz
          source_id: s_B3cpVp9wjUDAUSzSM1Kj1j
          stance: supports
          locator: CBDB:193294
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_B3cpVp9wjUDAUSzSM1Kj1j
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王翹（193294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193294&o=json
            external_identifier: CBDB:193294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:38.551Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dg9rsPzQrN6zF82wmHUnda
        subject_person_id: p_eDMQCgCV7Pas3zdeuj3KE2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 862年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0862-01-01
            latest: 0862-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Uxs6YjwFCCTcp5F2vNcbt3
          claim_id: c_dg9rsPzQrN6zF82wmHUnda
          source_id: s_DTLzUXRk4EaPsrbfefdin1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_DTLzUXRk4EaPsrbfefdin1
            source_type: api_record
            title: 维基数据：王翘（Q45472680）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45472680
            external_identifier: Q45472680
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:38.390Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NyB2A9y5w1YwKEPzT7S7W6
        subject_person_id: p_eDMQCgCV7Pas3zdeuj3KE2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翘
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_X1k67qqm5cRJ63A1gb62U5
          claim_id: c_NyB2A9y5w1YwKEPzT7S7W6
          source_id: s_B3cpVp9wjUDAUSzSM1Kj1j
          stance: supports
          locator: Q45472680
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_dg4HQjtd5nRSTorx4XseQx
          claim_id: c_NyB2A9y5w1YwKEPzT7S7W6
          source_id: s_DTLzUXRk4EaPsrbfefdin1
          stance: supports
          locator: Q45472680
          quotation: null
          interpretation_note: null
          source:
            id: s_DTLzUXRk4EaPsrbfefdin1
            source_type: api_record
            title: 维基数据：王翘（Q45472680）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45472680
            external_identifier: Q45472680
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:38.390Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Dek23LErAnBDUB6PRK7HPm
        subject_person_id: p_saaECjeVK4P193bjeUAPMi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eDMQCgCV7Pas3zdeuj3KE2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BGieB2yRBrCfd4G4KHRYdw
          claim_id: c_Dek23LErAnBDUB6PRK7HPm
          source_id: s_StMUDSYowhGJX93fCnxVTc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_StMUDSYowhGJX93fCnxVTc
            source_type: api_record
            title: 维基数据：王略（Q45582459）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582459
            external_identifier: Q45582459
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
        - id: cs_gr3FGpnsqe4wDyoxC6qjMn
          claim_id: c_Dek23LErAnBDUB6PRK7HPm
          source_id: s_9USFL5tt9dE3CPDEbeNHfo
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9USFL5tt9dE3CPDEbeNHfo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王略（158876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158876&o=json
            external_identifier: CBDB:158876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:22.750Z
            metadata_json: null
        - id: cs_QFYoyTi4ptz3mRf6y52PjT
          claim_id: c_Dek23LErAnBDUB6PRK7HPm
          source_id: s_DTLzUXRk4EaPsrbfefdin1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_DTLzUXRk4EaPsrbfefdin1
            source_type: api_record
            title: 维基数据：王翘（Q45472680）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45472680
            external_identifier: Q45472680
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:38.390Z
            metadata_json: null
        - id: cs_516yJVFhQdSD7UBSQqBSFi
          claim_id: c_Dek23LErAnBDUB6PRK7HPm
          source_id: s_B3cpVp9wjUDAUSzSM1Kj1j
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_B3cpVp9wjUDAUSzSM1Kj1j
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王翹（193294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193294&o=json
            external_identifier: CBDB:193294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:38.551Z
            metadata_json: null
      object_person:
        id: p_saaECjeVK4P193bjeUAPMi
        status: active
        display_name: 王略
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王翘（卒于862年），唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 193294） | accepted |
| death.date | 862年 | accepted |
| name.primary | 王翘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_saaECjeVK4P193bjeUAPMi | 王略 | accepted |

## 外部来源

- [维基数据：王略（Q45582459）](https://www.wikidata.org/wiki/Q45582459)
- [维基数据：王翘（Q45472680）](https://www.wikidata.org/wiki/Q45472680)
- [CBDB 中国历代人物传记资料库：王略（158876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158876&o=json)
- [CBDB 中国历代人物传记资料库：王翹（193294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193294&o=json)
