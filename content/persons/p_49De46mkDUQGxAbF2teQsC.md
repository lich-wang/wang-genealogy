---
schema: wang-person/v1
id: p_49De46mkDUQGxAbF2teQsC
status: active
merged_into: null
display_name: 王彦规
cbdb_id: 175418
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zYsc1bC2shw2Skua84vKzm
        subject_person_id: p_49De46mkDUQGxAbF2teQsC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彦规（卒于931年），史料所见人物。本项目依据《王彦规》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_wSKfafl7E7E9lx40O9oYR-
          claim_id: c_zYsc1bC2shw2Skua84vKzm
          source_id: s_aLnhGcZZtYuaAyZo8v5YY2
          stance: supports
          locator: Q45658468
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_aLnhGcZZtYuaAyZo8v5YY2
            source_type: api_record
            title: 维基数据：王彦规（Q45658468）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658468
            external_identifier: Q45658468
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.616Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Nnj1p4pmnnnhN3csYWprTr
        subject_person_id: p_49De46mkDUQGxAbF2teQsC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 931年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0931-01-01
            latest: 0931-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Xv7Aikng6UTT1THUfCL1W
          claim_id: c_Nnj1p4pmnnnhN3csYWprTr
          source_id: s_aLnhGcZZtYuaAyZo8v5YY2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_aLnhGcZZtYuaAyZo8v5YY2
            source_type: api_record
            title: 维基数据：王彦规（Q45658468）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658468
            external_identifier: Q45658468
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.616Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xQDtg7EW7u6TGgec3bPh7k
        subject_person_id: p_49De46mkDUQGxAbF2teQsC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彦规
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PEZsjD8j8YgF2LhP2VG8Df
          claim_id: c_xQDtg7EW7u6TGgec3bPh7k
          source_id: s_ShTuqqWmWUJHp92wkrMt7a
          stance: supports
          locator: Q45658468
          quotation: null
          interpretation_note: null
          source:
            id: s_ShTuqqWmWUJHp92wkrMt7a
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥規（175418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175418&o=json
            external_identifier: CBDB:175418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.929Z
            metadata_json: null
        - id: cs_dbQZDDucpNpCbnEnNHV3RX
          claim_id: c_xQDtg7EW7u6TGgec3bPh7k
          source_id: s_aLnhGcZZtYuaAyZo8v5YY2
          stance: supports
          locator: Q45658468
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TZMxQBsPoKCEhNM8dmK4BB
        subject_person_id: p_EfKCuLgqrSjtEomjPoc4j2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_49De46mkDUQGxAbF2teQsC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_55wfFTA85wrp6vjxaPKkpe
          claim_id: c_TZMxQBsPoKCEhNM8dmK4BB
          source_id: s_icShKtqHWZEY2X5u6JmSre
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_icShKtqHWZEY2X5u6JmSre
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知蘊（145209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json
            external_identifier: CBDB:145209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.266Z
            metadata_json: null
        - id: cs_LLTePQGTPyR34NTntPUs7f
          claim_id: c_TZMxQBsPoKCEhNM8dmK4BB
          source_id: s_RiHeTEyTNCmKY6xwnMqwrP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RiHeTEyTNCmKY6xwnMqwrP
            source_type: api_record
            title: 维基数据：王知蕴（Q45450093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450093
            external_identifier: Q45450093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.115Z
            metadata_json: null
        - id: cs_Hdz5MQAbSP5S3WXKrmJ1t1
          claim_id: c_TZMxQBsPoKCEhNM8dmK4BB
          source_id: s_aLnhGcZZtYuaAyZo8v5YY2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_aLnhGcZZtYuaAyZo8v5YY2
            source_type: api_record
            title: 维基数据：王彦规（Q45658468）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658468
            external_identifier: Q45658468
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.616Z
            metadata_json: null
        - id: cs_SW5sMMP4Sw9bGBY9pLNTLd
          claim_id: c_TZMxQBsPoKCEhNM8dmK4BB
          source_id: s_ShTuqqWmWUJHp92wkrMt7a
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ShTuqqWmWUJHp92wkrMt7a
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥規（175418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175418&o=json
            external_identifier: CBDB:175418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.929Z
            metadata_json: null
      object_person:
        id: p_EfKCuLgqrSjtEomjPoc4j2
        status: active
        display_name: 王知蕴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彦规

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彦规（卒于931年），史料所见人物。本项目依据《王彦规》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 931年 | accepted |
| name.primary | 王彦规 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EfKCuLgqrSjtEomjPoc4j2 | 王知蕴 | accepted |

## 外部来源

- [维基数据：王彦规（Q45658468）](https://www.wikidata.org/wiki/Q45658468)
- [维基数据：王知蕴（Q45450093）](https://www.wikidata.org/wiki/Q45450093)
- [CBDB 中国历代人物传记资料库：王彥規（175418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175418&o=json)
- [CBDB 中国历代人物传记资料库：王知蘊（145209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json)
