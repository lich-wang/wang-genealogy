---
schema: wang-person/v1
id: p_LtJ44Gm8BvQAajeZJNo8mV
status: active
merged_into: null
display_name: 王也先不華
cbdb_id: 35492
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Us8ZfR5mXMR7x24JFqHQFK
        subject_person_id: p_LtJ44Gm8BvQAajeZJNo8mV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王也先不華，元人物。中国历代人物传记资料库（CBDB）以人物编号 35492 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_2bHoJtsseTxpX8V9UnRGII
          claim_id: c_Us8ZfR5mXMR7x24JFqHQFK
          source_id: s_aQ3nP8iTCFgyA7EiJKrkCT
          stance: supports
          locator: CBDB:35492
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_aQ3nP8iTCFgyA7EiJKrkCT
            source_type: api_record
            title: 中国历代人物传记资料库：王也先不華（CBDB 35492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35492&o=json
            external_identifier: CBDB:35492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DRf62AY3fzPJXyHQ2DKXd1
        subject_person_id: p_LtJ44Gm8BvQAajeZJNo8mV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王也先不華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_T2LBRzeuRHBo756TwGFUBb
          claim_id: c_DRf62AY3fzPJXyHQ2DKXd1
          source_id: s_aQ3nP8iTCFgyA7EiJKrkCT
          stance: supports
          locator: CBDB:35492
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 元
          source:
            id: s_aQ3nP8iTCFgyA7EiJKrkCT
            source_type: api_record
            title: 中国历代人物传记资料库：王也先不華（CBDB 35492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35492&o=json
            external_identifier: CBDB:35492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_0pzMG_PuNcdftVE--_atBj
        subject_person_id: p_LtJ44Gm8BvQAajeZJNo8mV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QekMNcgGqmPdfnigDWL4MC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JL8SWrs2l0T6mk5Qk_rl4p
          claim_id: c_0pzMG_PuNcdftVE--_atBj
          source_id: s_nF9Gm2T8HCNVR6nhXHE9aN
          stance: supports
          locator: CBDB 双向互证（父 王也先不華 ⇄ 子 王翰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_nF9Gm2T8HCNVR6nhXHE9aN
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 35495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35495&o=json
            external_identifier: CBDB:35495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QekMNcgGqmPdfnigDWL4MC
        status: active
        display_name: 王翰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2jJOXrP4vor57kJaWFmcjn
        subject_person_id: p_LtJ44Gm8BvQAajeZJNo8mV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9jNpu2wDMR2yhPHtfZN1Up
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7w-IHsmMMDEYBQ-DoS-CH
          claim_id: c_2jJOXrP4vor57kJaWFmcjn
          source_id: s_i4niC9MMSGPHcpiGKB2rjP
          stance: supports
          locator: CBDB 双向互证（妻子 孫氏(王也先不華妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i4niC9MMSGPHcpiGKB2rjP
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王也先不華妻)（CBDB 35493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35493&o=json
            external_identifier: CBDB:35493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9jNpu2wDMR2yhPHtfZN1Up
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王也先不華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王也先不華，元人物。中国历代人物传记资料库（CBDB）以人物编号 35492 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王也先不華 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QekMNcgGqmPdfnigDWL4MC | 王翰 | accepted |
| spouses | p_9jNpu2wDMR2yhPHtfZN1Up | 孫氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王也先不華妻)（CBDB 35493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35493&o=json)
- [中国历代人物传记资料库：王翰（CBDB 35495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35495&o=json)
- [中国历代人物传记资料库：王也先不華（CBDB 35492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35492&o=json)
