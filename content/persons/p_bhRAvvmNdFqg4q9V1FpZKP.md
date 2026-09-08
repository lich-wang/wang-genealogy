---
schema: wang-person/v1
id: p_bhRAvvmNdFqg4q9V1FpZKP
status: active
merged_into: null
display_name: 王叔凤
cbdb_id: 175503
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qk9TnKbnbrfjJr9i4bREAb
        subject_person_id: p_bhRAvvmNdFqg4q9V1FpZKP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔凤（卒于875年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175503 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Y7UeA4HtHMJorM2ggyb7Qi
          claim_id: c_Qk9TnKbnbrfjJr9i4bREAb
          source_id: s_pLbrJd8Mg5rjaE3XpmPFvg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_pLbrJd8Mg5rjaE3XpmPFvg
            source_type: api_record
            title: 维基数据：王叔凤（Q45663489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663489
            external_identifier: Q45663489
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json: null
        - id: cs_yi1QdPp3C8pQRv9LMDRg4R
          claim_id: c_Qk9TnKbnbrfjJr9i4bREAb
          source_id: s_fk4vKbcjtzduTNEvF7Y4Fr
          stance: supports
          locator: CBDB:175503
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fk4vKbcjtzduTNEvF7Y4Fr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王叔鳳（175503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175503&o=json
            external_identifier: CBDB:175503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:06.041Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kCvDMCf79CmUuCsWiE3tG3
        subject_person_id: p_bhRAvvmNdFqg4q9V1FpZKP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 875年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0875-01-01
            latest: 0875-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Ao4RuWxXMRupyJEYGbqTX
          claim_id: c_kCvDMCf79CmUuCsWiE3tG3
          source_id: s_pLbrJd8Mg5rjaE3XpmPFvg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_pLbrJd8Mg5rjaE3XpmPFvg
            source_type: api_record
            title: 维基数据：王叔凤（Q45663489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663489
            external_identifier: Q45663489
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jkvM9jLRAjeme9dQNDDMs1
        subject_person_id: p_bhRAvvmNdFqg4q9V1FpZKP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔凤
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nx3Ewqs89fHiLvg6P3fKwr
          claim_id: c_jkvM9jLRAjeme9dQNDDMs1
          source_id: s_pLbrJd8Mg5rjaE3XpmPFvg
          stance: supports
          locator: Q45663489
          quotation: null
          interpretation_note: null
          source:
            id: s_pLbrJd8Mg5rjaE3XpmPFvg
            source_type: api_record
            title: 维基数据：王叔凤（Q45663489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663489
            external_identifier: Q45663489
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json: null
        - id: cs_qLadBnbM8H3jVx32y8kWZF
          claim_id: c_jkvM9jLRAjeme9dQNDDMs1
          source_id: s_fk4vKbcjtzduTNEvF7Y4Fr
          stance: supports
          locator: Q45663489
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_suVnKHX82Lv74cjwoyPh73
        subject_person_id: p_TyJ2M3ZheRX5T2BF68hTVk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bhRAvvmNdFqg4q9V1FpZKP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3FKuM1mDnJStwJJZeqvhRw
          claim_id: c_suVnKHX82Lv74cjwoyPh73
          source_id: s_w6Eqp9zJRFFLrBraexCCYD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_w6Eqp9zJRFFLrBraexCCYD
            source_type: api_record
            title: 维基数据：王源中（Q16903986）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16903986
            external_identifier: Q16903986
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.578Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BA%90%E4%B8%AD
        - id: cs_8Xcm7mECK7c5KipkUzUCx5
          claim_id: c_suVnKHX82Lv74cjwoyPh73
          source_id: s_obzovB79XtaLoD1NBN8fF4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_obzovB79XtaLoD1NBN8fF4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源中（175500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175500&o=json
            external_identifier: CBDB:175500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:41.738Z
            metadata_json: null
        - id: cs_R9tL6wKTpPmqnHaKoU2Pbi
          claim_id: c_suVnKHX82Lv74cjwoyPh73
          source_id: s_pLbrJd8Mg5rjaE3XpmPFvg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pLbrJd8Mg5rjaE3XpmPFvg
            source_type: api_record
            title: 维基数据：王叔凤（Q45663489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663489
            external_identifier: Q45663489
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json: null
        - id: cs_M6UCYPkFm7RE2TjK4RNFE4
          claim_id: c_suVnKHX82Lv74cjwoyPh73
          source_id: s_fk4vKbcjtzduTNEvF7Y4Fr
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_fk4vKbcjtzduTNEvF7Y4Fr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王叔鳳（175503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175503&o=json
            external_identifier: CBDB:175503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:06.041Z
            metadata_json: null
      object_person:
        id: p_TyJ2M3ZheRX5T2BF68hTVk
        status: active
        display_name: 王源中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王叔凤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王叔凤（卒于875年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175503 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 875年 | accepted |
| name.primary | 王叔凤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TyJ2M3ZheRX5T2BF68hTVk | 王源中 | accepted |

## 外部来源

- [维基数据：王叔凤（Q45663489）](https://www.wikidata.org/wiki/Q45663489)
- [维基数据：王源中（Q16903986）](https://www.wikidata.org/wiki/Q16903986)
- [CBDB 中国历代人物传记资料库：王叔鳳（175503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175503&o=json)
- [CBDB 中国历代人物传记资料库：王源中（175500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175500&o=json)
