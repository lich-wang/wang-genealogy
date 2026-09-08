---
schema: wang-person/v1
id: p_MVwmAa8XxVraY642kABvqG
status: active
merged_into: null
display_name: 王停停
cbdb_id: 158879
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_129SAEGBBEb5xFBj7QfyJy
        subject_person_id: p_MVwmAa8XxVraY642kABvqG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王停停，唐人物。中国历代人物传记资料库（CBDB）以人物编号 158879 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_w43dg2Qrm8Mhz7e8sHJNcm
          claim_id: c_129SAEGBBEb5xFBj7QfyJy
          source_id: s_JQAN3kQwet2zn9oBN3QM41
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_JQAN3kQwet2zn9oBN3QM41
            source_type: api_record
            title: 维基数据：王停停（Q45582648）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582648
            external_identifier: Q45582648
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:58.059Z
            metadata_json: null
        - id: cs_49aZk4fW6mqMyr5R56jbXj
          claim_id: c_129SAEGBBEb5xFBj7QfyJy
          source_id: s_ttgDPFKtcUuwgBiox4Wb12
          stance: supports
          locator: CBDB:158879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ttgDPFKtcUuwgBiox4Wb12
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王停停（158879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158879&o=json
            external_identifier: CBDB:158879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:58.199Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VMfMbQBNxp7ekycXKanFvJ
        subject_person_id: p_MVwmAa8XxVraY642kABvqG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王停停
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fGWSQKZP83ZmeJcvBF2zT7
          claim_id: c_VMfMbQBNxp7ekycXKanFvJ
          source_id: s_JQAN3kQwet2zn9oBN3QM41
          stance: supports
          locator: Q45582648
          quotation: null
          interpretation_note: null
          source:
            id: s_JQAN3kQwet2zn9oBN3QM41
            source_type: api_record
            title: 维基数据：王停停（Q45582648）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582648
            external_identifier: Q45582648
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:58.059Z
            metadata_json: null
        - id: cs_ta55WgZ13y8QZiSyosdL2b
          claim_id: c_VMfMbQBNxp7ekycXKanFvJ
          source_id: s_ttgDPFKtcUuwgBiox4Wb12
          stance: supports
          locator: Q45582648
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YTsNV89skQghthfdLApPjt
        subject_person_id: p_riJJsaXCL8C4KFLVPRybNk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MVwmAa8XxVraY642kABvqG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4Mh8spCmNRjqeTK1YD6oF6
          claim_id: c_YTsNV89skQghthfdLApPjt
          source_id: s_RFLhRAYBr7qDPqJtd88cAM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RFLhRAYBr7qDPqJtd88cAM
            source_type: api_record
            title: 维基数据：王翱（Q45546232）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45546232
            external_identifier: Q45546232
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:40.338Z
            metadata_json: null
        - id: cs_8G8JbtHhkP1NjVGVzMz6qh
          claim_id: c_YTsNV89skQghthfdLApPjt
          source_id: s_uWb2a9ZZyQqGyGvDK17RDm
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_uWb2a9ZZyQqGyGvDK17RDm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王翱（141842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141842&o=json
            external_identifier: CBDB:141842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:40.494Z
            metadata_json: null
        - id: cs_HZ7Qk57JGNGER1fLTNAv86
          claim_id: c_YTsNV89skQghthfdLApPjt
          source_id: s_JQAN3kQwet2zn9oBN3QM41
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JQAN3kQwet2zn9oBN3QM41
            source_type: api_record
            title: 维基数据：王停停（Q45582648）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582648
            external_identifier: Q45582648
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:58.059Z
            metadata_json: null
        - id: cs_HeWWw6LaDi6Dx8J37nLBzL
          claim_id: c_YTsNV89skQghthfdLApPjt
          source_id: s_ttgDPFKtcUuwgBiox4Wb12
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_ttgDPFKtcUuwgBiox4Wb12
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王停停（158879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158879&o=json
            external_identifier: CBDB:158879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:58.199Z
            metadata_json: null
      object_person:
        id: p_riJJsaXCL8C4KFLVPRybNk
        status: active
        display_name: 王翱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王停停

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王停停，唐人物。中国历代人物传记资料库（CBDB）以人物编号 158879 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王停停 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_riJJsaXCL8C4KFLVPRybNk | 王翱 | accepted |

## 外部来源

- [维基数据：王翱（Q45546232）](https://www.wikidata.org/wiki/Q45546232)
- [维基数据：王停停（Q45582648）](https://www.wikidata.org/wiki/Q45582648)
- [CBDB 中国历代人物传记资料库：王翱（141842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141842&o=json)
- [CBDB 中国历代人物传记资料库：王停停（158879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158879&o=json)
