---
schema: wang-person/v1
id: p_WtKQyYX6aH8C33XPVE1n1V
status: active
merged_into: null
display_name: 王鼎子
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RmDGYczpnfH76SDHruUScs
        subject_person_id: p_WtKQyYX6aH8C33XPVE1n1V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎子（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175604 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MeqeZGBo4jVQ57HQQKCA6C
          claim_id: c_RmDGYczpnfH76SDHruUScs
          source_id: s_Vsn3rBSWNY6Z3pWmMHQ7GE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Vsn3rBSWNY6Z3pWmMHQ7GE
            source_type: api_record
            title: 维基数据：王鼎子（Q45668771）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668771
            external_identifier: Q45668771
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
        - id: cs_GhMsX9rCJ7XUoqPuFwoXxm
          claim_id: c_RmDGYczpnfH76SDHruUScs
          source_id: s_VSFsc9q5QmQJAM9wACfyzB
          stance: supports
          locator: CBDB:175604
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VSFsc9q5QmQJAM9wACfyzB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鼎子（175604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175604&o=json
            external_identifier: CBDB:175604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.681Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_shtYA3drxB17yc61iaDEAm
        subject_person_id: p_WtKQyYX6aH8C33XPVE1n1V
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R8PuDzxjy83YMa3Di38BHZ
          claim_id: c_shtYA3drxB17yc61iaDEAm
          source_id: s_Vsn3rBSWNY6Z3pWmMHQ7GE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Vsn3rBSWNY6Z3pWmMHQ7GE
            source_type: api_record
            title: 维基数据：王鼎子（Q45668771）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668771
            external_identifier: Q45668771
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5NoftY9mK6XQ7x29xj65rF
        subject_person_id: p_WtKQyYX6aH8C33XPVE1n1V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎子
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3AzGkJcu2hQBduu72f9yy8
          claim_id: c_5NoftY9mK6XQ7x29xj65rF
          source_id: s_Vsn3rBSWNY6Z3pWmMHQ7GE
          stance: supports
          locator: Q45668771
          quotation: null
          interpretation_note: null
          source:
            id: s_Vsn3rBSWNY6Z3pWmMHQ7GE
            source_type: api_record
            title: 维基数据：王鼎子（Q45668771）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668771
            external_identifier: Q45668771
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
        - id: cs_FSUoE3QBSF1pQY1eyMJXF4
          claim_id: c_5NoftY9mK6XQ7x29xj65rF
          source_id: s_VSFsc9q5QmQJAM9wACfyzB
          stance: supports
          locator: Q45668771
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ELcfaQDES776T8rQnTNXES
        subject_person_id: p_KpqPC2j15z76Q3HFtSem9K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WtKQyYX6aH8C33XPVE1n1V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_N2A5M9yW3KrJiazM54W9yZ
          claim_id: c_ELcfaQDES776T8rQnTNXES
          source_id: s_7kXDCqpnt6ewqp27mbqWqD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7kXDCqpnt6ewqp27mbqWqD
            source_type: api_record
            title: 维基数据：王俶（Q45668672）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668672
            external_identifier: Q45668672
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_bD8rw45gW1KiA76TRCpPES
          claim_id: c_ELcfaQDES776T8rQnTNXES
          source_id: s_u5UHwb2wZ2uPypoCMmhCiJ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_u5UHwb2wZ2uPypoCMmhCiJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俶（175602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175602&o=json
            external_identifier: CBDB:175602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.349Z
            metadata_json: null
        - id: cs_ix2MXcTPMYkD3vfHSdQwbN
          claim_id: c_ELcfaQDES776T8rQnTNXES
          source_id: s_Vsn3rBSWNY6Z3pWmMHQ7GE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Vsn3rBSWNY6Z3pWmMHQ7GE
            source_type: api_record
            title: 维基数据：王鼎子（Q45668771）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668771
            external_identifier: Q45668771
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
        - id: cs_6y1nPbXZJLR2Tc8Rqj9Jjd
          claim_id: c_ELcfaQDES776T8rQnTNXES
          source_id: s_VSFsc9q5QmQJAM9wACfyzB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VSFsc9q5QmQJAM9wACfyzB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鼎子（175604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175604&o=json
            external_identifier: CBDB:175604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.681Z
            metadata_json: null
      object_person:
        id: p_KpqPC2j15z76Q3HFtSem9K
        status: active
        display_name: 王俶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鼎子

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鼎子（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175604 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王鼎子 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KpqPC2j15z76Q3HFtSem9K | 王俶 | accepted |

## 外部来源

- [维基数据：王俶（Q45668672）](https://www.wikidata.org/wiki/Q45668672)
- [维基数据：王鼎子（Q45668771）](https://www.wikidata.org/wiki/Q45668771)
- [CBDB 中国历代人物传记资料库：王俶（175602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175602&o=json)
- [CBDB 中国历代人物传记资料库：王鼎子（175604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175604&o=json)
