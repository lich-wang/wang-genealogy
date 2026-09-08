---
schema: wang-person/v1
id: p_jFftUJLto7JyNUjk4eFWEU
status: active
merged_into: null
display_name: 王承泰
cbdb_id: 191754
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MK5e2daC8WbmG4EW62TQ1T
        subject_person_id: p_jFftUJLto7JyNUjk4eFWEU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承泰（卒于846年），唐人物。CBDB 记录其籍贯记录为岐州，曾任觀察推官。中国历代人物传记资料库（CBDB）以人物编号 191754 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CJUnvgYKymAaXviNd4mXFG
          claim_id: c_MK5e2daC8WbmG4EW62TQ1T
          source_id: s_FPuyS76amnvd2TLPmjQtGs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_FPuyS76amnvd2TLPmjQtGs
            source_type: api_record
            title: 维基数据：王承泰（Q45668336）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668336
            external_identifier: Q45668336
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:35.373Z
            metadata_json: null
        - id: cs_TitRXbYeLK6GjnaLFK5Hkb
          claim_id: c_MK5e2daC8WbmG4EW62TQ1T
          source_id: s_vKS4ZdHfHhBWg3ibaP4AUe
          stance: supports
          locator: CBDB:191754
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vKS4ZdHfHhBWg3ibaP4AUe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承泰（191754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191754&o=json
            external_identifier: CBDB:191754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:35.517Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hZWFhUk9ECHQuDCi3XpUXZ
        subject_person_id: p_jFftUJLto7JyNUjk4eFWEU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 846年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0846-01-01
            latest: 0846-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CHTWdfLgBaE7iA6HB24j1S
          claim_id: c_hZWFhUk9ECHQuDCi3XpUXZ
          source_id: s_FPuyS76amnvd2TLPmjQtGs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FPuyS76amnvd2TLPmjQtGs
            source_type: api_record
            title: 维基数据：王承泰（Q45668336）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668336
            external_identifier: Q45668336
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:35.373Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xEe4wtucApMthrEVDyViyP
        subject_person_id: p_jFftUJLto7JyNUjk4eFWEU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承泰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8WUJfK8X3NCae3cwqgXAxt
          claim_id: c_xEe4wtucApMthrEVDyViyP
          source_id: s_vKS4ZdHfHhBWg3ibaP4AUe
          stance: supports
          locator: Q45668336
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_JgdzDXk5PuXevFBcKh5aFS
          claim_id: c_xEe4wtucApMthrEVDyViyP
          source_id: s_FPuyS76amnvd2TLPmjQtGs
          stance: supports
          locator: Q45668336
          quotation: null
          interpretation_note: null
          source:
            id: s_FPuyS76amnvd2TLPmjQtGs
            source_type: api_record
            title: 维基数据：王承泰（Q45668336）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668336
            external_identifier: Q45668336
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:35.373Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Sdyq4Pyy12YUjW9gwC36rR
        subject_person_id: p_X1UCfgUyoJHi8W8xdH58BE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jFftUJLto7JyNUjk4eFWEU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VJH1C8fT9YNDT5iC8sPGnQ
          claim_id: c_Sdyq4Pyy12YUjW9gwC36rR
          source_id: s_uNFQmZbjnbMWfFpWUMCosA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uNFQmZbjnbMWfFpWUMCosA
            source_type: api_record
            title: 维基数据：王士真（Q20026517）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q20026517
            external_identifier: Q20026517
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:26.496Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E7%9C%9F
        - id: cs_zkGyawtC2cev1G4b2LZY93
          claim_id: c_Sdyq4Pyy12YUjW9gwC36rR
          source_id: s_FPuyS76amnvd2TLPmjQtGs
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_zj95FSj79bLcQzfPX51Prq
          claim_id: c_Sdyq4Pyy12YUjW9gwC36rR
          source_id: s_8JcMUxTCwkNV6cEXnmYv9n
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8JcMUxTCwkNV6cEXnmYv9n
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士真（169076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169076&o=json
            external_identifier: CBDB:169076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:26.669Z
            metadata_json: null
      object_person:
        id: p_X1UCfgUyoJHi8W8xdH58BE
        status: active
        display_name: 王士真
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承泰（卒于846年），唐人物。CBDB 记录其籍贯记录为岐州，曾任觀察推官。中国历代人物传记资料库（CBDB）以人物编号 191754 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 846年 | accepted |
| name.primary | 王承泰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X1UCfgUyoJHi8W8xdH58BE | 王士真 | accepted |

## 外部来源

- [维基数据：王承泰（Q45668336）](https://www.wikidata.org/wiki/Q45668336)
- [维基数据：王士真（Q20026517）](https://www.wikidata.org/wiki/Q20026517)
- [CBDB 中国历代人物传记资料库：王承泰（191754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191754&o=json)
- [CBDB 中国历代人物传记资料库：王士真（169076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169076&o=json)
