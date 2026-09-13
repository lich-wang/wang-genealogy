---
schema: wang-person/v1
id: p_xQgm5Xc54SJxf3Gpfe37YB
status: active
merged_into: null
display_name: 王佺期
cbdb_id: 175374
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4a2ZrVmbBTueK2eVxxJEgZ
        subject_person_id: p_xQgm5Xc54SJxf3Gpfe37YB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佺期（卒于770年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175374）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_HQg47rgwkMfDC9WW83MhCV
          claim_id: c_4a2ZrVmbBTueK2eVxxJEgZ
          source_id: s_Gp1154XhD6svMzG7v43K87
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Gp1154XhD6svMzG7v43K87
            source_type: api_record
            title: 维基数据：王佺期（Q45656006）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656006
            external_identifier: Q45656006
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.306Z
            metadata_json: null
        - id: cs_gyGWtkvra7IRkxWdIiIdKl
          claim_id: c_4a2ZrVmbBTueK2eVxxJEgZ
          source_id: s_fFddpiWE7Psfv9MJgCcYuW
          stance: supports
          locator: CBDB:175374
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fFddpiWE7Psfv9MJgCcYuW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佺期（175374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175374&o=json
            external_identifier: CBDB:175374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:50.486Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uyH4DRgUDMRDQVsPAZdiQX
        subject_person_id: p_xQgm5Xc54SJxf3Gpfe37YB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 770年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0770-01-01
            latest: 0770-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DD3MBz5qgAEqdB3qSRfL81
          claim_id: c_uyH4DRgUDMRDQVsPAZdiQX
          source_id: s_Gp1154XhD6svMzG7v43K87
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Gp1154XhD6svMzG7v43K87
            source_type: api_record
            title: 维基数据：王佺期（Q45656006）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656006
            external_identifier: Q45656006
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.306Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dHL19UPJN82dSo5NJapBP9
        subject_person_id: p_xQgm5Xc54SJxf3Gpfe37YB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佺期
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8HxBpnQqtYDWBg46ZEw1Bs
          claim_id: c_dHL19UPJN82dSo5NJapBP9
          source_id: s_fFddpiWE7Psfv9MJgCcYuW
          stance: supports
          locator: Q45656006
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_P4FQJAGCH8QN3dfRyAkYFz
          claim_id: c_dHL19UPJN82dSo5NJapBP9
          source_id: s_Gp1154XhD6svMzG7v43K87
          stance: supports
          locator: Q45656006
          quotation: null
          interpretation_note: null
          source:
            id: s_Gp1154XhD6svMzG7v43K87
            source_type: api_record
            title: 维基数据：王佺期（Q45656006）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656006
            external_identifier: Q45656006
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.306Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fT8VJBt3q1AVGK27A4KUL7
        subject_person_id: p_NQbvRb1nM7Q9W6mBE1QPGm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xQgm5Xc54SJxf3Gpfe37YB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_F6naZgUmX6LK4GKPGDCrx5
          claim_id: c_fT8VJBt3q1AVGK27A4KUL7
          source_id: s_1GvDnEMNFL7bVjG46Cxc2S
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1GvDnEMNFL7bVjG46Cxc2S
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏（175372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175372&o=json
            external_identifier: CBDB:175372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.794Z
            metadata_json: null
        - id: cs_vLYt66r8Uj2ERJDRz5DgJY
          claim_id: c_fT8VJBt3q1AVGK27A4KUL7
          source_id: s_NsDg765wETB2ibwwY2Lj5e
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_NsDg765wETB2ibwwY2Lj5e
            source_type: api_record
            title: 维基数据：王晏（Q45655886）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655886
            external_identifier: Q45655886
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.652Z
            metadata_json: null
        - id: cs_sHzstai5v86ykLT4a4xm66
          claim_id: c_fT8VJBt3q1AVGK27A4KUL7
          source_id: s_Gp1154XhD6svMzG7v43K87
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Gp1154XhD6svMzG7v43K87
            source_type: api_record
            title: 维基数据：王佺期（Q45656006）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656006
            external_identifier: Q45656006
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.306Z
            metadata_json: null
        - id: cs_H2EHK7sJ3XN6XB9VKMEdPa
          claim_id: c_fT8VJBt3q1AVGK27A4KUL7
          source_id: s_fFddpiWE7Psfv9MJgCcYuW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_fFddpiWE7Psfv9MJgCcYuW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佺期（175374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175374&o=json
            external_identifier: CBDB:175374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:50.486Z
            metadata_json: null
      object_person:
        id: p_NQbvRb1nM7Q9W6mBE1QPGm
        status: active
        display_name: 王晏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佺期

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王佺期（卒于770年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175374） | accepted |
| death.date | 770年 | accepted |
| name.primary | 王佺期 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NQbvRb1nM7Q9W6mBE1QPGm | 王晏 | accepted |

## 外部来源

- [维基数据：王佺期（Q45656006）](https://www.wikidata.org/wiki/Q45656006)
- [维基数据：王晏（Q45655886）](https://www.wikidata.org/wiki/Q45655886)
- [CBDB 中国历代人物传记资料库：王佺期（175374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175374&o=json)
- [CBDB 中国历代人物传记资料库：王晏（175372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175372&o=json)
