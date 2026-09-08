---
schema: wang-person/v1
id: p_dWczLwq2nt4NbhEboLi4hv
status: active
merged_into: null
display_name: 王逵
cbdb_id: 158714
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6EUqNPXJotM9Uh3ctXEGCh
        subject_person_id: p_dWczLwq2nt4NbhEboLi4hv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵，唐人物。CBDB 记录其籍贯记录为咸陽，曾任殿中少監。中国历代人物传记资料库（CBDB）以人物编号 158714 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_k8p3Y8VQm9Ja33PVZm7tDK
          claim_id: c_6EUqNPXJotM9Uh3ctXEGCh
          source_id: s_JQDw4kqPSC6ASxARvw3uXR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_JQDw4kqPSC6ASxARvw3uXR
            source_type: api_record
            title: 维基数据：王逵（Q45576024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45576024
            external_identifier: Q45576024
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.595Z
            metadata_json: null
        - id: cs_LGfTrJVM0isNPRANvb9sQP
          claim_id: c_6EUqNPXJotM9Uh3ctXEGCh
          source_id: s_BZNF1EvpB2BuXDND8wBw9s
          stance: supports
          locator: CBDB:158714
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BZNF1EvpB2BuXDND8wBw9s
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逵（158714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158714&o=json
            external_identifier: CBDB:158714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:22.737Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b1dzJGHxUKHBY3YxkD41kL
        subject_person_id: p_dWczLwq2nt4NbhEboLi4hv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2k7RerTnURyU6585EjdxSu
          claim_id: c_b1dzJGHxUKHBY3YxkD41kL
          source_id: s_JQDw4kqPSC6ASxARvw3uXR
          stance: supports
          locator: Q45576024
          quotation: null
          interpretation_note: null
          source:
            id: s_JQDw4kqPSC6ASxARvw3uXR
            source_type: api_record
            title: 维基数据：王逵（Q45576024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45576024
            external_identifier: Q45576024
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.595Z
            metadata_json: null
        - id: cs_oZPPF8D1rjPxpxV23rbTfL
          claim_id: c_b1dzJGHxUKHBY3YxkD41kL
          source_id: s_BZNF1EvpB2BuXDND8wBw9s
          stance: supports
          locator: Q45576024
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hQfGPdtFedizCQ47pm576n
        subject_person_id: p_MSdU233nM5wdxC7iCwusHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dWczLwq2nt4NbhEboLi4hv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4jftKuRFbAwMPyChWt7PJn
          claim_id: c_hQfGPdtFedizCQ47pm576n
          source_id: s_HhevPEBLU4JGud3etd1upo
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HhevPEBLU4JGud3etd1upo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（175470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json
            external_identifier: CBDB:175470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.082Z
            metadata_json: null
        - id: cs_rXa58HaHGJCvn43y8DDW6h
          claim_id: c_hQfGPdtFedizCQ47pm576n
          source_id: s_4fQBPy6QqzcQHB5fC9SqkK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4fQBPy6QqzcQHB5fC9SqkK
            source_type: api_record
            title: 维基数据：王澄（Q45661568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661568
            external_identifier: Q45661568
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_j3ptk3ZgiKZbtKBjEFEV4v
          claim_id: c_hQfGPdtFedizCQ47pm576n
          source_id: s_JQDw4kqPSC6ASxARvw3uXR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JQDw4kqPSC6ASxARvw3uXR
            source_type: api_record
            title: 维基数据：王逵（Q45576024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45576024
            external_identifier: Q45576024
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.595Z
            metadata_json: null
        - id: cs_LaK21tcc72LnvhT2C1bcxN
          claim_id: c_hQfGPdtFedizCQ47pm576n
          source_id: s_BZNF1EvpB2BuXDND8wBw9s
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_BZNF1EvpB2BuXDND8wBw9s
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逵（158714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158714&o=json
            external_identifier: CBDB:158714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:22.737Z
            metadata_json: null
      object_person:
        id: p_MSdU233nM5wdxC7iCwusHu
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children:
    - claim:
        id: c_9afGkeX7y7M3i7qPMGUg52
        subject_person_id: p_dWczLwq2nt4NbhEboLi4hv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_muf5LSh6aGkW56UNfBDJFd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_k3pmPsPNLrvWnQheHdRuAX
          claim_id: c_9afGkeX7y7M3i7qPMGUg52
          source_id: s_BZNF1EvpB2BuXDND8wBw9s
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_BZNF1EvpB2BuXDND8wBw9s
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逵（158714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158714&o=json
            external_identifier: CBDB:158714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:22.737Z
            metadata_json: null
        - id: cs_nFD1WF9LCaimAVXyWTp7r2
          claim_id: c_9afGkeX7y7M3i7qPMGUg52
          source_id: s_JQDw4kqPSC6ASxARvw3uXR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_JQDw4kqPSC6ASxARvw3uXR
            source_type: api_record
            title: 维基数据：王逵（Q45576024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45576024
            external_identifier: Q45576024
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.595Z
            metadata_json: null
        - id: cs_sRm3yrkDNu5tJnDgfVmVHY
          claim_id: c_9afGkeX7y7M3i7qPMGUg52
          source_id: s_WdfoqDExZ36pYmQmWydMP9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_WdfoqDExZ36pYmQmWydMP9
            source_type: api_record
            title: 维基数据：王锡（Q45661985）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661985
            external_identifier: Q45661985
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:48.183Z
            metadata_json: null
        - id: cs_74FYLr3KjvQcBfUXgjL3fz
          claim_id: c_9afGkeX7y7M3i7qPMGUg52
          source_id: s_JBxNvLUnRisg9z4d6Zawdj
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_JBxNvLUnRisg9z4d6Zawdj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王錫（175477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175477&o=json
            external_identifier: CBDB:175477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:48.328Z
            metadata_json: null
      object_person:
        id: p_muf5LSh6aGkW56UNfBDJFd
        status: active
        display_name: 王锡
        merged_into_person_id: null
    - claim:
        id: c_F4wBQUhzuHxRWzZMNEXnFQ
        subject_person_id: p_dWczLwq2nt4NbhEboLi4hv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mAiHyML2ZzAKPZJio8eLNr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ERY2ff4swwuXnjgyJWkv9j
          claim_id: c_F4wBQUhzuHxRWzZMNEXnFQ
          source_id: s_BZNF1EvpB2BuXDND8wBw9s
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_BZNF1EvpB2BuXDND8wBw9s
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逵（158714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158714&o=json
            external_identifier: CBDB:158714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:22.737Z
            metadata_json: null
        - id: cs_UWs2j83ST6hcN9BfDqkQe1
          claim_id: c_F4wBQUhzuHxRWzZMNEXnFQ
          source_id: s_JQDw4kqPSC6ASxARvw3uXR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_JQDw4kqPSC6ASxARvw3uXR
            source_type: api_record
            title: 维基数据：王逵（Q45576024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45576024
            external_identifier: Q45576024
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.595Z
            metadata_json: null
        - id: cs_P2NvQXEqBBQ9tNrqowPd6y
          claim_id: c_F4wBQUhzuHxRWzZMNEXnFQ
          source_id: s_2QAmWGNm2BsHRb1tg7JuBr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_2QAmWGNm2BsHRb1tg7JuBr
            source_type: api_record
            title: 维基数据：王镈（Q45662044）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662044
            external_identifier: Q45662044
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:48.184Z
            metadata_json: null
        - id: cs_3ZP6Qv6Nj2kwNwrzaVo1U2
          claim_id: c_F4wBQUhzuHxRWzZMNEXnFQ
          source_id: s_ioz6NCNv2vsDVekwjeJmZi
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ioz6NCNv2vsDVekwjeJmZi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鎛（175478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175478&o=json
            external_identifier: CBDB:175478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:48.503Z
            metadata_json: null
      object_person:
        id: p_mAiHyML2ZzAKPZJio8eLNr
        status: active
        display_name: 王镈
        merged_into_person_id: null
    - claim:
        id: c_yyBj6Wrko7x52Hgeh5DuKa
        subject_person_id: p_dWczLwq2nt4NbhEboLi4hv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wn3DDwEXQhybnycoMUfyCt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_mKRk5AR4inn6oQKsjqFiL9
          claim_id: c_yyBj6Wrko7x52Hgeh5DuKa
          source_id: s_JQDw4kqPSC6ASxARvw3uXR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_JQDw4kqPSC6ASxARvw3uXR
            source_type: api_record
            title: 维基数据：王逵（Q45576024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45576024
            external_identifier: Q45576024
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.595Z
            metadata_json: null
        - id: cs_nWvuauADNG8Q9xhTDhAWZy
          claim_id: c_yyBj6Wrko7x52Hgeh5DuKa
          source_id: s_BZNF1EvpB2BuXDND8wBw9s
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_BZNF1EvpB2BuXDND8wBw9s
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逵（158714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158714&o=json
            external_identifier: CBDB:158714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:22.737Z
            metadata_json: null
        - id: cs_ooNiVRVkM4jQuZBPLKT51S
          claim_id: c_yyBj6Wrko7x52Hgeh5DuKa
          source_id: s_D2qYYMEW7SGjDZP2NJFG8H
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_D2qYYMEW7SGjDZP2NJFG8H
            source_type: api_record
            title: 维基数据：王炼（Q45661924）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661924
            external_identifier: Q45661924
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
        - id: cs_9PoWBvfb4LydGtZwWDueaq
          claim_id: c_yyBj6Wrko7x52Hgeh5DuKa
          source_id: s_FP1g3bE7pB13sreLjsNnTE
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FP1g3bE7pB13sreLjsNnTE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鍊（175476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175476&o=json
            external_identifier: CBDB:175476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:04.265Z
            metadata_json: null
      object_person:
        id: p_wn3DDwEXQhybnycoMUfyCt
        status: active
        display_name: 王炼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王逵，唐人物。CBDB 记录其籍贯记录为咸陽，曾任殿中少監。中国历代人物传记资料库（CBDB）以人物编号 158714 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王逵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MSdU233nM5wdxC7iCwusHu | 王澄 | accepted |
| children | p_muf5LSh6aGkW56UNfBDJFd | 王锡 | accepted |
| children | p_mAiHyML2ZzAKPZJio8eLNr | 王镈 | accepted |
| children | p_wn3DDwEXQhybnycoMUfyCt | 王炼 | accepted |

## 外部来源

- [维基数据：王镈（Q45662044）](https://www.wikidata.org/wiki/Q45662044)
- [维基数据：王澄（Q45661568）](https://www.wikidata.org/wiki/Q45661568)
- [维基数据：王逵（Q45576024）](https://www.wikidata.org/wiki/Q45576024)
- [维基数据：王炼（Q45661924）](https://www.wikidata.org/wiki/Q45661924)
- [维基数据：王锡（Q45661985）](https://www.wikidata.org/wiki/Q45661985)
- [CBDB 中国历代人物传记资料库：王鎛（175478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175478&o=json)
- [CBDB 中国历代人物传记资料库：王澄（175470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json)
- [CBDB 中国历代人物传记资料库：王逵（158714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158714&o=json)
- [CBDB 中国历代人物传记资料库：王鍊（175476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175476&o=json)
- [CBDB 中国历代人物传记资料库：王錫（175477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175477&o=json)
