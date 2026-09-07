---
schema: wang-person/v1
id: p_pnAwQYPJDQVui1PAGN872g
status: active
merged_into: null
display_name: 吴氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VvB4KBsJYQbPZcBBHEkuvB
        subject_person_id: p_pnAwQYPJDQVui1PAGN872g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴氏（998年—1063年），王益妻。维基数据以独立条目 Q45364102 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Rq93e7vFHhJASrNgeXUHTs
          claim_id: c_VvB4KBsJYQbPZcBBHEkuvB
          source_id: s_zKwNMGBkJFScDyMUNoLTX6
          stance: supports
          locator: Q45364102
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_zKwNMGBkJFScDyMUNoLTX6
            source_type: api_record
            title: 維基數據：吴氏（Q45364102）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364102
            external_identifier: Q45364102
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:56.564Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nvPeo2x13NFZVZ5bxsJXjQ
        subject_person_id: p_pnAwQYPJDQVui1PAGN872g
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 998年
            calendar_note: 維基數據 P569 結構化日期，精度：年
            earliest: 0998-01-01
            latest: 0998-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Mxaed2v6NPAtB2jpkPynf
          claim_id: c_nvPeo2x13NFZVZ5bxsJXjQ
          source_id: s_zKwNMGBkJFScDyMUNoLTX6
          stance: supports
          locator: Q45364102
          quotation: null
          interpretation_note: null
          source:
            id: s_zKwNMGBkJFScDyMUNoLTX6
            source_type: api_record
            title: 維基數據：吴氏（Q45364102）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364102
            external_identifier: Q45364102
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:56.564Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mFshVBxvRg3giXz7b7CCsw
        subject_person_id: p_pnAwQYPJDQVui1PAGN872g
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1063年
            calendar_note: 維基數據 P570 結構化日期，精度：年
            earliest: 1063-01-01
            latest: 1063-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Fx4wEKgGduEer3Fcgpf8rQ
          claim_id: c_mFshVBxvRg3giXz7b7CCsw
          source_id: s_zKwNMGBkJFScDyMUNoLTX6
          stance: supports
          locator: Q45364102
          quotation: null
          interpretation_note: null
          source:
            id: s_zKwNMGBkJFScDyMUNoLTX6
            source_type: api_record
            title: 維基數據：吴氏（Q45364102）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364102
            external_identifier: Q45364102
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:56.564Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gzhUe9Wy2ew9pXEAbXBkQU
        subject_person_id: p_pnAwQYPJDQVui1PAGN872g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pE7AF4jB9V3Q2DTTCTK4NK
          claim_id: c_gzhUe9Wy2ew9pXEAbXBkQU
          source_id: s_zKwNMGBkJFScDyMUNoLTX6
          stance: supports
          locator: Q45364102
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_69k8MnHXNY1JeExPe3abdX
        subject_person_id: p_TCJasuo9M43ytz26ea5oSn
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pnAwQYPJDQVui1PAGN872g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Ed4L1yRiJZ5HxVtjaU3QJ5
          claim_id: c_69k8MnHXNY1JeExPe3abdX
          source_id: s_zKwNMGBkJFScDyMUNoLTX6
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_zKwNMGBkJFScDyMUNoLTX6
            source_type: api_record
            title: 維基數據：吴氏（Q45364102）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364102
            external_identifier: Q45364102
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:56.564Z
            metadata_json: null
        - id: cs_RVkE4dJmpRYDHdbfH4gMoE
          claim_id: c_69k8MnHXNY1JeExPe3abdX
          source_id: s_RcEL59cJV9N9h52CGk5rEv
          stance: supports
          locator: 亲属关系：第二任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_RcEL59cJV9N9h52CGk5rEv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益（7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:19.208Z
            metadata_json: null
        - id: cs_ntrbGqxN5nK9UnZdVsRtjL
          claim_id: c_69k8MnHXNY1JeExPe3abdX
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
        - id: cs_uNLwuH3zCqxyE2vBtXCH7F
          claim_id: c_69k8MnHXNY1JeExPe3abdX
          source_id: s_r5nsHi5ehqynTitrhsvRwN
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_r5nsHi5ehqynTitrhsvRwN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳氏（5134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5134&o=json
            external_identifier: CBDB:5134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:18.162Z
            metadata_json: null
      object_person:
        id: p_TCJasuo9M43ytz26ea5oSn
        status: active
        display_name: 王益
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吴氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 吴氏（998年—1063年），王益妻。维基数据以独立条目 Q45364102 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| birth.date | 998年 | accepted |
| death.date | 1063年 | accepted |
| name.primary | 吴氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_TCJasuo9M43ytz26ea5oSn | 王益 | accepted |

## 外部来源

- [維基數據：王益（Q45365249）](https://www.wikidata.org/wiki/Q45365249)
- [維基數據：吴氏（Q45364102）](https://www.wikidata.org/wiki/Q45364102)
- [CBDB 中国历代人物传记资料库：王益（7082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json)
- [CBDB 中国历代人物传记资料库：吳氏（5134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5134&o=json)
