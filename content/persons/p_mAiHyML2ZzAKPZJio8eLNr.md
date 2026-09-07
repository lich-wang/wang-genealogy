---
schema: wang-person/v1
id: p_mAiHyML2ZzAKPZJio8eLNr
status: active
merged_into: null
display_name: 王镈
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KoiDQ32atV2Ty9eGNhjC5s
        subject_person_id: p_mAiHyML2ZzAKPZJio8eLNr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王镈（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175478 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DNY47dxxuzEaLYhiFurpo9
          claim_id: c_KoiDQ32atV2Ty9eGNhjC5s
          source_id: s_2QAmWGNm2BsHRb1tg7JuBr
          stance: supports
          locator: null
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
        - id: cs_NCNDAV8JAi9RfyEvtJo0rQ
          claim_id: c_KoiDQ32atV2Ty9eGNhjC5s
          source_id: s_ioz6NCNv2vsDVekwjeJmZi
          stance: supports
          locator: CBDB:175478
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_A98kD81Cr7QJNzu2RZ9fnw
        subject_person_id: p_mAiHyML2ZzAKPZJio8eLNr
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
        - id: cs_wygMt18AQrSMMp1CdLx9nF
          claim_id: c_A98kD81Cr7QJNzu2RZ9fnw
          source_id: s_2QAmWGNm2BsHRb1tg7JuBr
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_D9v7Ta784eeM6q8JsBFjom
        subject_person_id: p_mAiHyML2ZzAKPZJio8eLNr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王镈
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_M2WhWRzLfqKzf2XwLqrtHh
          claim_id: c_D9v7Ta784eeM6q8JsBFjom
          source_id: s_ioz6NCNv2vsDVekwjeJmZi
          stance: supports
          locator: Q45662044
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_f95VUYqrf6Da251R8kVDa4
          claim_id: c_D9v7Ta784eeM6q8JsBFjom
          source_id: s_2QAmWGNm2BsHRb1tg7JuBr
          stance: supports
          locator: Q45662044
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_dWczLwq2nt4NbhEboLi4hv
        status: active
        display_name: 王逵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王镈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王镈（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175478 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王镈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dWczLwq2nt4NbhEboLi4hv | 王逵 | accepted |

## 外部来源

- [维基数据：王镈（Q45662044）](https://www.wikidata.org/wiki/Q45662044)
- [维基数据：王逵（Q45576024）](https://www.wikidata.org/wiki/Q45576024)
- [CBDB 中国历代人物传记资料库：王鎛（175478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175478&o=json)
- [CBDB 中国历代人物传记资料库：王逵（158714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158714&o=json)
