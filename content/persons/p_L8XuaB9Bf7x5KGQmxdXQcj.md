---
schema: wang-person/v1
id: p_L8XuaB9Bf7x5KGQmxdXQcj
status: active
merged_into: null
display_name: 王應祥
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AE6iwQmB6MYLHMrXdek1G2
        subject_person_id: p_L8XuaB9Bf7x5KGQmxdXQcj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8zL1DrKDkKDL5RE329i5hN
          claim_id: c_AE6iwQmB6MYLHMrXdek1G2
          source_id: s_1B5GJS25ChxUtuqkHcLcoB
          stance: supports
          locator: CBDB:229667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229667）
          source: &a1
            id: s_1B5GJS25ChxUtuqkHcLcoB
            source_type: api_record
            title: 中国历代人物传记资料库：王應祥（CBDB 229667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229667&o=json
            external_identifier: CBDB:229667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QuNg3zUN2NnYBarDGi1bWD
        subject_person_id: p_L8XuaB9Bf7x5KGQmxdXQcj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應祥，明人物。萬曆丙戌科進士進士，籍贯鄒平，曾任京營左擊將軍都指揮僉事。（中国历代人物传记资料库 CBDB 229667）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FmuNuA2wXO5QUKphnCv188
          claim_id: c_QuNg3zUN2NnYBarDGi1bWD
          source_id: s_1B5GJS25ChxUtuqkHcLcoB
          stance: supports
          locator: CBDB:229667
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RzLY7fh88PRKo8j2ghgPHZ
        subject_person_id: p_L8XuaB9Bf7x5KGQmxdXQcj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bOibbdhsYrUG269BJ1K_fl
          claim_id: c_RzLY7fh88PRKo8j2ghgPHZ
          source_id: s_PjKW2LD3C685H4gfMHYoKL
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PjKW2LD3C685H4gfMHYoKL
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉謨（CBDB 207214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207214&o=json
            external_identifier: CBDB:207214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1wesYYym6K1XDJ5hKnvGQQ
        status: active
        display_name: 王嘉謨
        merged_into_person_id: null
    - claim:
        id: c_Lz6_KBNp13DGFPsuggOnjM
        subject_person_id: p_L8XuaB9Bf7x5KGQmxdXQcj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N98y6wLuGvKEpW2nm8vzqQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4eqEVQ5jkDwBgkJqM-b-5w
          claim_id: c_Lz6_KBNp13DGFPsuggOnjM
          source_id: s_9saC7JOE8zjKcjj7gF2LyP
          stance: supports
          locator: CBDB：兄弟 王嘉謨（207214）之父／母 王應祥
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉議 与 王嘉謨 为同胞（CBDB 记「兄」），王嘉謨 之父／母即 王嘉議 之父／母。
          source:
            id: s_9saC7JOE8zjKcjj7gF2LyP
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉議（CBDB 229671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229671&o=json
            external_identifier: CBDB:229671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N98y6wLuGvKEpW2nm8vzqQ
        status: active
        display_name: 王嘉議
        merged_into_person_id: null
    - claim:
        id: c_qZeLn5oe-FiiDDMsccGEGy
        subject_person_id: p_L8XuaB9Bf7x5KGQmxdXQcj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P4oDvKky3p11NpEDd81kpU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NEG3gfsSVdYpF3pnOdN-14
          claim_id: c_qZeLn5oe-FiiDDMsccGEGy
          source_id: s_Wu9KRAhpNF2sFW3LqpmO4S
          stance: supports
          locator: CBDB：兄弟 王嘉謨（207214）之父／母 王應祥
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉詔 与 王嘉謨 为同胞（CBDB 记「兄」），王嘉謨 之父／母即 王嘉詔 之父／母。
          source:
            id: s_Wu9KRAhpNF2sFW3LqpmO4S
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉詔（CBDB 229672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229672&o=json
            external_identifier: CBDB:229672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P4oDvKky3p11NpEDd81kpU
        status: active
        display_name: 王嘉詔
        merged_into_person_id: null
    - claim:
        id: c_9fPfN4vl4srd50Flny7S-o
        subject_person_id: p_L8XuaB9Bf7x5KGQmxdXQcj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rnJFD66CMv5ozbD1npW8J5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_13cEuk5CWBDsl_KyM4gTiG
          claim_id: c_9fPfN4vl4srd50Flny7S-o
          source_id: s_IU3U9X-7Y-NNiVNHI56hUL
          stance: supports
          locator: CBDB：兄弟 王嘉謨（207214）之父／母 王應祥
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉譔 与 王嘉謨 为同胞（CBDB 记「兄」），王嘉謨 之父／母即 王嘉譔 之父／母。
          source:
            id: s_IU3U9X-7Y-NNiVNHI56hUL
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉譔（CBDB 550656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550656&o=json
            external_identifier: CBDB:550656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rnJFD66CMv5ozbD1npW8J5
        status: active
        display_name: 王嘉譔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應祥 | accepted |
| bio.summary | 王應祥，明人物。萬曆丙戌科進士進士，籍贯鄒平，曾任京營左擊將軍都指揮僉事。（中国历代人物传记资料库 CBDB 229667） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1wesYYym6K1XDJ5hKnvGQQ | 王嘉謨 | accepted |
| children | p_N98y6wLuGvKEpW2nm8vzqQ | 王嘉議 | accepted |
| children | p_P4oDvKky3p11NpEDd81kpU | 王嘉詔 | accepted |
| children | p_rnJFD66CMv5ozbD1npW8J5 | 王嘉譔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉謨（CBDB 207214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207214&o=json)
- [中国历代人物传记资料库：王嘉議（CBDB 229671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229671&o=json)
- [中国历代人物传记资料库：王嘉詔（CBDB 229672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229672&o=json)
- [中国历代人物传记资料库：王嘉譔（CBDB 550656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550656&o=json)
- [中国历代人物传记资料库：王應祥（CBDB 229667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229667&o=json)
