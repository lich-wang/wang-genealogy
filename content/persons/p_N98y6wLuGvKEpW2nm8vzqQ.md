---
schema: wang-person/v1
id: p_N98y6wLuGvKEpW2nm8vzqQ
status: active
merged_into: null
display_name: 王嘉議
cbdb_id: 229671
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cciGfAsH3n6vvYG2js4FJ4
        subject_person_id: p_N98y6wLuGvKEpW2nm8vzqQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉議，明人物。萬曆丙戌科進士進士，籍贯鄒平。（中国历代人物传记资料库 CBDB 229671）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_cM1qXenuXzfVm3FvqOr83k
          claim_id: c_cciGfAsH3n6vvYG2js4FJ4
          source_id: s_k8bBU1v7vHd94EbYR4CGBs
          stance: supports
          locator: CBDB:229671
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_k8bBU1v7vHd94EbYR4CGBs
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉議（CBDB 229671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229671&o=json
            external_identifier: CBDB:229671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rdM8aAXBZV8E36eWAjhX8j
        subject_person_id: p_N98y6wLuGvKEpW2nm8vzqQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉議
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jbATbX2j7duj2hyA1J9eHb
          claim_id: c_rdM8aAXBZV8E36eWAjhX8j
          source_id: s_k8bBU1v7vHd94EbYR4CGBs
          stance: supports
          locator: CBDB:229671
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_L8XuaB9Bf7x5KGQmxdXQcj
        status: active
        display_name: 王應祥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wOnrsJYWBkonYGeV0bAz56
        subject_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_N98y6wLuGvKEpW2nm8vzqQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WfQ4Ag1hn8RYhcjykD_frI
          claim_id: c_wOnrsJYWBkonYGeV0bAz56
          source_id: s_9saC7JOE8zjKcjj7gF2LyP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207214 王嘉謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_1wesYYym6K1XDJ5hKnvGQQ
        status: active
        display_name: 王嘉謨
        merged_into_person_id: null
---

# 王嘉議

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嘉議，明人物。萬曆丙戌科進士進士，籍贯鄒平。（中国历代人物传记资料库 CBDB 229671） | accepted |
| name.primary | 王嘉議 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L8XuaB9Bf7x5KGQmxdXQcj | 王應祥 | accepted |
| other | p_1wesYYym6K1XDJ5hKnvGQQ | 王嘉謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉議（CBDB 229671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229671&o=json)
