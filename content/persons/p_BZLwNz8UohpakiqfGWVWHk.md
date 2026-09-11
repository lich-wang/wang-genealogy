---
schema: wang-person/v1
id: p_BZLwNz8UohpakiqfGWVWHk
status: active
merged_into: null
display_name: 王正容
cbdb_id: 203299
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XagzcB8mDe8cYg5gaL9QWX
        subject_person_id: p_BZLwNz8UohpakiqfGWVWHk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正容（生于1511年），明人物。中国历代人物传记资料库（CBDB）以人物编号 203299 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_NuRYrk0ekD6erqU6950vMb
          claim_id: c_XagzcB8mDe8cYg5gaL9QWX
          source_id: s_dCsSZMbjYnjE1YjRKQqirS
          stance: supports
          locator: CBDB:203299
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_dCsSZMbjYnjE1YjRKQqirS
            source_type: api_record
            title: 中国历代人物传记资料库：王正容（CBDB 203299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203299&o=json
            external_identifier: CBDB:203299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ocDD1MfN4aJUR7vpvZRrdn
        subject_person_id: p_BZLwNz8UohpakiqfGWVWHk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1511-01-01
            latest: 1511-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f9v7eVCdRPD76DBARwATvs
          claim_id: c_ocDD1MfN4aJUR7vpvZRrdn
          source_id: s_dCsSZMbjYnjE1YjRKQqirS
          stance: supports
          locator: CBDB:203299
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1511
          source:
            id: s_dCsSZMbjYnjE1YjRKQqirS
            source_type: api_record
            title: 中国历代人物传记资料库：王正容（CBDB 203299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203299&o=json
            external_identifier: CBDB:203299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_o4qgdYBcQ8VAcZXBBBJTuf
        subject_person_id: p_BZLwNz8UohpakiqfGWVWHk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正容
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aM21JZPkxSFhqZvZoG78qP
          claim_id: c_o4qgdYBcQ8VAcZXBBBJTuf
          source_id: s_dCsSZMbjYnjE1YjRKQqirS
          stance: supports
          locator: CBDB:203299
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1511
          source:
            id: s_dCsSZMbjYnjE1YjRKQqirS
            source_type: api_record
            title: 中国历代人物传记资料库：王正容（CBDB 203299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203299&o=json
            external_identifier: CBDB:203299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_O6cofNqnvmuOMPk7T8DksF
        subject_person_id: p_2W13YFD4n2ezyjYiLrXP91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BZLwNz8UohpakiqfGWVWHk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Mt5sUd1pmQgM5H3i14qYu
          claim_id: c_O6cofNqnvmuOMPk7T8DksF
          source_id: s_pY6Y4LvAdcNT1PAoV4NALw
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第六十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pY6Y4LvAdcNT1PAoV4NALw
            source_type: api_record
            title: 中国历代人物传记资料库：王克勤（CBDB 302733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302733&o=json
            external_identifier: CBDB:302733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2W13YFD4n2ezyjYiLrXP91
        status: active
        display_name: 王克勤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_uvXkhPg4n2xw9XMo5n-aLT
        subject_person_id: p_GGCaECuJCMzjCXy5KJMYEQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BZLwNz8UohpakiqfGWVWHk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TbLxG4yjf5TsKl4T2uvevT
          claim_id: c_uvXkhPg4n2xw9XMo5n-aLT
          source_id: s_g4aiCyrwgSs6vLoBXi8Njp
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第六十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g4aiCyrwgSs6vLoBXi8Njp
            source_type: api_record
            title: 中国历代人物传记资料库：王應軫（CBDB 302732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302732&o=json
            external_identifier: CBDB:302732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GGCaECuJCMzjCXy5KJMYEQ
        status: active
        display_name: 王應軫
        merged_into_person_id: null
    - claim:
        id: c_mL5MyZ5v4t-Xvo32IbO_qb
        subject_person_id: p_gGh9F3FDDzRxJFGB6vA1Sx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BZLwNz8UohpakiqfGWVWHk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rwirMmHvdX29t827TdqqnV
          claim_id: c_mL5MyZ5v4t-Xvo32IbO_qb
          source_id: s_c7zGMgdooX8oYy58nD7ZEC
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第六十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_c7zGMgdooX8oYy58nD7ZEC
            source_type: api_record
            title: 中国历代人物传记资料库：王尚志（CBDB 302731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302731&o=json
            external_identifier: CBDB:302731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gGh9F3FDDzRxJFGB6vA1Sx
        status: active
        display_name: 王尚志
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王正容

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正容（生于1511年），明人物。中国历代人物传记资料库（CBDB）以人物编号 203299 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1511年 | accepted |
| name.primary | 王正容 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2W13YFD4n2ezyjYiLrXP91 | 王克勤 | accepted |
| ancestors | p_GGCaECuJCMzjCXy5KJMYEQ | 王應軫 | accepted |
| ancestors | p_gGh9F3FDDzRxJFGB6vA1Sx | 王尚志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克勤（CBDB 302733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302733&o=json)
- [中国历代人物传记资料库：王尚志（CBDB 302731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302731&o=json)
- [中国历代人物传记资料库：王應軫（CBDB 302732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302732&o=json)
- [中国历代人物传记资料库：王正容（CBDB 203299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203299&o=json)
