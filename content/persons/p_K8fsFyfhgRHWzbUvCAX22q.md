---
schema: wang-person/v1
id: p_K8fsFyfhgRHWzbUvCAX22q
status: active
merged_into: null
display_name: 王逢元
cbdb_id: 175506
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7eDnSL7myqfXwT4Zd7zKf9
        subject_person_id: p_K8fsFyfhgRHWzbUvCAX22q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢元（卒于838年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175506）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_91LG763aEFNQbnmniAUm7S
          claim_id: c_7eDnSL7myqfXwT4Zd7zKf9
          source_id: s_pDPMd8zKT46EXVCQfKvYs7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_pDPMd8zKT46EXVCQfKvYs7
            source_type: api_record
            title: 维基数据：王逢元（Q45663658）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663658
            external_identifier: Q45663658
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_T6nChBQ_ZVFzi1RI3SLL8P
          claim_id: c_7eDnSL7myqfXwT4Zd7zKf9
          source_id: s_cRH4GBu4cCkKYABzKHVNPG
          stance: supports
          locator: CBDB:175506
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cRH4GBu4cCkKYABzKHVNPG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逢元（175506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175506&o=json
            external_identifier: CBDB:175506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.603Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Cd8nFGW3v56Dcq9Xkz5NNK
        subject_person_id: p_K8fsFyfhgRHWzbUvCAX22q
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 838年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0838-01-01
            latest: 0838-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J4Y4FE24QaV6EL7JCt6h8r
          claim_id: c_Cd8nFGW3v56Dcq9Xkz5NNK
          source_id: s_pDPMd8zKT46EXVCQfKvYs7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_pDPMd8zKT46EXVCQfKvYs7
            source_type: api_record
            title: 维基数据：王逢元（Q45663658）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663658
            external_identifier: Q45663658
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9hk1531C3M9G4yXah8Wvgr
        subject_person_id: p_K8fsFyfhgRHWzbUvCAX22q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢元
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_G6ou5WvPUDmp9RaJ4d6KBZ
          claim_id: c_9hk1531C3M9G4yXah8Wvgr
          source_id: s_pDPMd8zKT46EXVCQfKvYs7
          stance: supports
          locator: Q45663658
          quotation: null
          interpretation_note: null
          source:
            id: s_pDPMd8zKT46EXVCQfKvYs7
            source_type: api_record
            title: 维基数据：王逢元（Q45663658）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663658
            external_identifier: Q45663658
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_KmPsgtcy59zmgw5xoZikTa
          claim_id: c_9hk1531C3M9G4yXah8Wvgr
          source_id: s_cRH4GBu4cCkKYABzKHVNPG
          stance: supports
          locator: Q45663658
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EP67swHhKgmYayeS3vGebU
        subject_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K8fsFyfhgRHWzbUvCAX22q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_hEvuztKjPQCm3YGgGwRWxi
          claim_id: c_EP67swHhKgmYayeS3vGebU
          source_id: s_jz1b2dBq4xEU38JSCGt8LY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jz1b2dBq4xEU38JSCGt8LY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潤（175498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json
            external_identifier: CBDB:175498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.807Z
            metadata_json: null
        - id: cs_y7BaLZVcFL4fSfyQoJcM1H
          claim_id: c_EP67swHhKgmYayeS3vGebU
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_Yyh1KWU8P27Kb5kjkWajEA
          claim_id: c_EP67swHhKgmYayeS3vGebU
          source_id: s_pDPMd8zKT46EXVCQfKvYs7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pDPMd8zKT46EXVCQfKvYs7
            source_type: api_record
            title: 维基数据：王逢元（Q45663658）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663658
            external_identifier: Q45663658
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_eTCcMgPdhWM4EPtPeF6Pr5
          claim_id: c_EP67swHhKgmYayeS3vGebU
          source_id: s_cRH4GBu4cCkKYABzKHVNPG
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_cRH4GBu4cCkKYABzKHVNPG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逢元（175506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175506&o=json
            external_identifier: CBDB:175506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.603Z
            metadata_json: null
      object_person:
        id: p_nKXmXJSn1SSK6HeL7KRZPW
        status: active
        display_name: 王润
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逢元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王逢元（卒于838年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175506） | accepted |
| death.date | 838年 | accepted |
| name.primary | 王逢元 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nKXmXJSn1SSK6HeL7KRZPW | 王润 | accepted |

## 外部来源

- [维基数据：王逢元（Q45663658）](https://www.wikidata.org/wiki/Q45663658)
- [维基数据：王润（Q45663208）](https://www.wikidata.org/wiki/Q45663208)
- [CBDB 中国历代人物传记资料库：王逢元（175506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175506&o=json)
- [CBDB 中国历代人物传记资料库：王潤（175498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json)
