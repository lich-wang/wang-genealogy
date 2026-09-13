---
schema: wang-person/v1
id: p_nNM44KLpmjM3JH2WvQLbx2
status: active
merged_into: null
display_name: 王家礎
cbdb_id: 207591
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZhK3hHfERB4U4JgJ41R6G7
        subject_person_id: p_nNM44KLpmjM3JH2WvQLbx2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家礎（生于1561年），史料所见人物。本项目依据《中国历代人物传记资料库：王家礎（CBDB 207591）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ujOejsPHHEDoCEf7583Bzg
          claim_id: c_ZhK3hHfERB4U4JgJ41R6G7
          source_id: s_KQBfZ2cjrGeaddCAEDSm9T
          stance: supports
          locator: CBDB:207591
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KQBfZ2cjrGeaddCAEDSm9T
            source_type: api_record
            title: 中国历代人物传记资料库：王家礎（CBDB 207591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207591&o=json
            external_identifier: CBDB:207591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vRYGoVPUgPw4t6nNhw6xmP
        subject_person_id: p_nNM44KLpmjM3JH2WvQLbx2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1561年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1561-01-01
            latest: 1561-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_joct5QVzPq1adVxUpiYSP4
          claim_id: c_vRYGoVPUgPw4t6nNhw6xmP
          source_id: s_KQBfZ2cjrGeaddCAEDSm9T
          stance: supports
          locator: CBDB:207591
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1561
          source:
            id: s_KQBfZ2cjrGeaddCAEDSm9T
            source_type: api_record
            title: 中国历代人物传记资料库：王家礎（CBDB 207591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207591&o=json
            external_identifier: CBDB:207591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZJS7aJjd81dL5n9uWRi77Q
        subject_person_id: p_nNM44KLpmjM3JH2WvQLbx2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家礎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mWzz63i9JpqCgA8tPUWYVB
          claim_id: c_ZJS7aJjd81dL5n9uWRi77Q
          source_id: s_KQBfZ2cjrGeaddCAEDSm9T
          stance: supports
          locator: CBDB:207591
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1561
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_n4Y_lvuVs-dfK-6hYzoywi
        subject_person_id: p_NLK3MLLCWV39uoAkjLfgCa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nNM44KLpmjM3JH2WvQLbx2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TYXcmwAhTC61OtEPT_nmzm
          claim_id: c_n4Y_lvuVs-dfK-6hYzoywi
          source_id: s_ADnfSaYdZdx5PERZRMWuPE
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ADnfSaYdZdx5PERZRMWuPE
            source_type: api_record
            title: 中国历代人物传记资料库：王豸（CBDB 232658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232658&o=json
            external_identifier: CBDB:232658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NLK3MLLCWV39uoAkjLfgCa
        status: active
        display_name: 王豸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_L3VaDW79qNUXMIsBLz-PoM
        subject_person_id: p_Y7djPzAqLmAEHdsBaYr578
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nNM44KLpmjM3JH2WvQLbx2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iGag4ezYUHxl5S7Oi9k298
          claim_id: c_L3VaDW79qNUXMIsBLz-PoM
          source_id: s_DRty4eSQGMMQ5ZDuBR5tHU
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第四十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DRty4eSQGMMQ5ZDuBR5tHU
            source_type: api_record
            title: 中国历代人物传记资料库：王寰（CBDB 232656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232656&o=json
            external_identifier: CBDB:232656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Y7djPzAqLmAEHdsBaYr578
        status: active
        display_name: 王寰
        merged_into_person_id: null
    - claim:
        id: c_UNzqiErJ5NszVxQfqxroFg
        subject_person_id: p_tk5XB1fGig6R2c8qeCpFvw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nNM44KLpmjM3JH2WvQLbx2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_logMgBtK767T5iw2a2uupl
          claim_id: c_UNzqiErJ5NszVxQfqxroFg
          source_id: s_oSiFQXvAkCavnxrmTnKLVp
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第四十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oSiFQXvAkCavnxrmTnKLVp
            source_type: api_record
            title: 中国历代人物传记资料库：王得財（CBDB 232657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232657&o=json
            external_identifier: CBDB:232657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_tk5XB1fGig6R2c8qeCpFvw
        status: active
        display_name: 王得財
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王家礎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王家礎（生于1561年），史料所见人物。本项目依据《中国历代人物传记资料库：王家礎（CBDB 207591）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1561年 | accepted |
| name.primary | 王家礎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NLK3MLLCWV39uoAkjLfgCa | 王豸 | accepted |
| ancestors | p_Y7djPzAqLmAEHdsBaYr578 | 王寰 | accepted |
| ancestors | p_tk5XB1fGig6R2c8qeCpFvw | 王得財 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得財（CBDB 232657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232657&o=json)
- [中国历代人物传记资料库：王寰（CBDB 232656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232656&o=json)
- [中国历代人物传记资料库：王家礎（CBDB 207591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207591&o=json)
- [中国历代人物传记资料库：王豸（CBDB 232658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232658&o=json)
