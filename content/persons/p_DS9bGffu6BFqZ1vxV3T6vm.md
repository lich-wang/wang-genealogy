---
schema: wang-person/v1
id: p_DS9bGffu6BFqZ1vxV3T6vm
status: active
merged_into: null
display_name: 王求
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tNoXik94ph49NLg4EnqTLE
        subject_person_id: p_DS9bGffu6BFqZ1vxV3T6vm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王求（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175620 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_E5V1boKEnJrswDbG8fSdxN
          claim_id: c_tNoXik94ph49NLg4EnqTLE
          source_id: s_jjTomyEVtAAh6RXaBBnwys
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jjTomyEVtAAh6RXaBBnwys
            source_type: api_record
            title: 维基数据：王求（Q45669543）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669543
            external_identifier: Q45669543
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
        - id: cs_wvuGj2qI-2Od6QRVJ594kV
          claim_id: c_tNoXik94ph49NLg4EnqTLE
          source_id: s_WxJKMfqKB4PjZ1pBN9FhBS
          stance: supports
          locator: CBDB:175620
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WxJKMfqKB4PjZ1pBN9FhBS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王求（175620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175620&o=json
            external_identifier: CBDB:175620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:45.575Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_J8bgm7baeQuSc2iMnfBewp
        subject_person_id: p_DS9bGffu6BFqZ1vxV3T6vm
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
        - id: cs_WYETAK4VtvuwHFAnNHhqTz
          claim_id: c_J8bgm7baeQuSc2iMnfBewp
          source_id: s_jjTomyEVtAAh6RXaBBnwys
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jjTomyEVtAAh6RXaBBnwys
            source_type: api_record
            title: 维基数据：王求（Q45669543）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669543
            external_identifier: Q45669543
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ao64E9FF4u6o3HTKCYu1Hj
        subject_person_id: p_DS9bGffu6BFqZ1vxV3T6vm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王求
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CEQa2WFLRSYHPRFeEf1S4A
          claim_id: c_ao64E9FF4u6o3HTKCYu1Hj
          source_id: s_jjTomyEVtAAh6RXaBBnwys
          stance: supports
          locator: Q45669543
          quotation: null
          interpretation_note: null
          source:
            id: s_jjTomyEVtAAh6RXaBBnwys
            source_type: api_record
            title: 维基数据：王求（Q45669543）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669543
            external_identifier: Q45669543
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
        - id: cs_MLSEuX7eMmPKCkQ5BsjhwJ
          claim_id: c_ao64E9FF4u6o3HTKCYu1Hj
          source_id: s_WxJKMfqKB4PjZ1pBN9FhBS
          stance: supports
          locator: Q45669543
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_m7k6Xs4xgDNStcZ9ojssQo
        subject_person_id: p_33KokniZL21s1thwAaox5M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DS9bGffu6BFqZ1vxV3T6vm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9C6YG6zXEqM6dRmLrvJLLc
          claim_id: c_m7k6Xs4xgDNStcZ9ojssQo
          source_id: s_wERXsoni44ApD73ugMJToC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wERXsoni44ApD73ugMJToC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和及（175617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175617&o=json
            external_identifier: CBDB:175617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.528Z
            metadata_json: null
        - id: cs_oX65qBTHnDhqyi9qkbuA6U
          claim_id: c_m7k6Xs4xgDNStcZ9ojssQo
          source_id: s_m5BPSZX3Gs1WTn7X9usBWq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_m5BPSZX3Gs1WTn7X9usBWq
            source_type: api_record
            title: 维基数据：王和及（Q45669401）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669401
            external_identifier: Q45669401
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_BhHbfm55fLJ26JL52zJ6UK
          claim_id: c_m7k6Xs4xgDNStcZ9ojssQo
          source_id: s_jjTomyEVtAAh6RXaBBnwys
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jjTomyEVtAAh6RXaBBnwys
            source_type: api_record
            title: 维基数据：王求（Q45669543）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669543
            external_identifier: Q45669543
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
        - id: cs_prLNS329iMid8C39B63KAX
          claim_id: c_m7k6Xs4xgDNStcZ9ojssQo
          source_id: s_WxJKMfqKB4PjZ1pBN9FhBS
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_WxJKMfqKB4PjZ1pBN9FhBS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王求（175620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175620&o=json
            external_identifier: CBDB:175620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:45.575Z
            metadata_json: null
      object_person:
        id: p_33KokniZL21s1thwAaox5M
        status: active
        display_name: 王和及
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王求

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王求（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175620 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王求 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_33KokniZL21s1thwAaox5M | 王和及 | accepted |

## 外部来源

- [维基数据：王和及（Q45669401）](https://www.wikidata.org/wiki/Q45669401)
- [维基数据：王求（Q45669543）](https://www.wikidata.org/wiki/Q45669543)
- [CBDB 中国历代人物传记资料库：王和及（175617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175617&o=json)
- [CBDB 中国历代人物传记资料库：王求（175620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175620&o=json)
