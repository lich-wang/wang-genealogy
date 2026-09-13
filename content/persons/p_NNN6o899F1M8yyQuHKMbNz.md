---
schema: wang-person/v1
id: p_NNN6o899F1M8yyQuHKMbNz
status: active
merged_into: null
display_name: 王演疇
cbdb_id: 207468
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4HM9KQMNzJbXQGJCWoLv6d
        subject_person_id: p_NNN6o899F1M8yyQuHKMbNz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演疇（生于1565年），明人物。明清進士進士，籍贯彭澤，入仕進士，曾任知府、知縣、主事。（中国历代人物传记资料库 CBDB 207468）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mEa_JqHr_8qVYzAynqU89b
          claim_id: c_4HM9KQMNzJbXQGJCWoLv6d
          source_id: s_ehoLm2RB6MsXxien3fjEHK
          stance: supports
          locator: CBDB:207468
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ehoLm2RB6MsXxien3fjEHK
            source_type: api_record
            title: 中国历代人物传记资料库：王演疇（CBDB 207468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207468&o=json
            external_identifier: CBDB:207468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MPNy1kSr8DQEFyH84Ke9mH
        subject_person_id: p_NNN6o899F1M8yyQuHKMbNz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1565年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1565-01-01
            latest: 1565-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yeHebyUPhhnzTaH3CDK9oy
          claim_id: c_MPNy1kSr8DQEFyH84Ke9mH
          source_id: s_ehoLm2RB6MsXxien3fjEHK
          stance: supports
          locator: CBDB:207468
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1565
          source:
            id: s_ehoLm2RB6MsXxien3fjEHK
            source_type: api_record
            title: 中国历代人物传记资料库：王演疇（CBDB 207468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207468&o=json
            external_identifier: CBDB:207468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8NPconyYuJhMTL4m6NCaer
        subject_person_id: p_NNN6o899F1M8yyQuHKMbNz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演疇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_P3HQ28ZqAWL1GFgMa6bNYA
          claim_id: c_8NPconyYuJhMTL4m6NCaer
          source_id: s_ehoLm2RB6MsXxien3fjEHK
          stance: supports
          locator: CBDB:207468
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1565
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Me1kDbIajPwyGiw-TNbTML
        subject_person_id: p_PgLmsK4wd3z3BuDbC2kJpa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NNN6o899F1M8yyQuHKMbNz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hbYrytrQXa42oHIJxkXl_T
          claim_id: c_Me1kDbIajPwyGiw-TNbTML
          source_id: s_1ZNLxBLx8G64HPqrJxhbrP
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1ZNLxBLx8G64HPqrJxhbrP
            source_type: api_record
            title: 中国历代人物传记资料库：王錫圭（CBDB 232197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232197&o=json
            external_identifier: CBDB:232197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PgLmsK4wd3z3BuDbC2kJpa
        status: active
        display_name: 王錫圭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_tBlqGjHzUrNQ8KoEjKh5Zk
        subject_person_id: p_DsiqR9Zkwj55qnXkeZkz5A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NNN6o899F1M8yyQuHKMbNz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7qEpThL8ErF4iVTnUBJ3z7
          claim_id: c_tBlqGjHzUrNQ8KoEjKh5Zk
          source_id: s_k6W7c4J6Pd5EWDovQMGGtH
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第三十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_k6W7c4J6Pd5EWDovQMGGtH
            source_type: api_record
            title: 中国历代人物传记资料库：王應斗（CBDB 232195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232195&o=json
            external_identifier: CBDB:232195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DsiqR9Zkwj55qnXkeZkz5A
        status: active
        display_name: 王應斗
        merged_into_person_id: null
    - claim:
        id: c_gspYA6f3f3F-4XHOh1cxqF
        subject_person_id: p_Rh1A7Ueayko5J8fzSrKisQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NNN6o899F1M8yyQuHKMbNz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_50jIVPyUT_HhNgyXeIzljf
          claim_id: c_gspYA6f3f3F-4XHOh1cxqF
          source_id: s_qkyV72xVSmsqK22pZfWQM6
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qkyV72xVSmsqK22pZfWQM6
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳴（CBDB 232196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232196&o=json
            external_identifier: CBDB:232196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.688Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Rh1A7Ueayko5J8fzSrKisQ
        status: active
        display_name: 王一鳴
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王演疇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王演疇（生于1565年），明人物。明清進士進士，籍贯彭澤，入仕進士，曾任知府、知縣、主事。（中国历代人物传记资料库 CBDB 207468） | accepted |
| birth.date | 1565年 | accepted |
| name.primary | 王演疇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PgLmsK4wd3z3BuDbC2kJpa | 王錫圭 | accepted |
| ancestors | p_DsiqR9Zkwj55qnXkeZkz5A | 王應斗 | accepted |
| ancestors | p_Rh1A7Ueayko5J8fzSrKisQ | 王一鳴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錫圭（CBDB 232197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232197&o=json)
- [中国历代人物传记资料库：王演疇（CBDB 207468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207468&o=json)
- [中国历代人物传记资料库：王一鳴（CBDB 232196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232196&o=json)
- [中国历代人物传记资料库：王應斗（CBDB 232195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232195&o=json)
