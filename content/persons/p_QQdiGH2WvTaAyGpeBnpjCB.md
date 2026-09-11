---
schema: wang-person/v1
id: p_QQdiGH2WvTaAyGpeBnpjCB
status: active
merged_into: null
display_name: 王垣
cbdb_id: 514419
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sZbZK7jWScqQ8A1fkSJk7R
        subject_person_id: p_QQdiGH2WvTaAyGpeBnpjCB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垣，清人物。中国历代人物传记资料库（CBDB）以人物编号 514419 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_0tA6lpwc-dW3aTCi2YPZtP
          claim_id: c_sZbZK7jWScqQ8A1fkSJk7R
          source_id: s_jwj3A1c2JgZqGSufgSk55Y
          stance: supports
          locator: CBDB:514419
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_jwj3A1c2JgZqGSufgSk55Y
            source_type: api_record
            title: 中国历代人物传记资料库：王垣（CBDB 514419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514419&o=json
            external_identifier: CBDB:514419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uo3y14Pc5B1rGkPxeLLCPL
        subject_person_id: p_QQdiGH2WvTaAyGpeBnpjCB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pwjE12hdcyPSeCKGE3okRN
          claim_id: c_uo3y14Pc5B1rGkPxeLLCPL
          source_id: s_jwj3A1c2JgZqGSufgSk55Y
          stance: supports
          locator: CBDB:514419
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_jwj3A1c2JgZqGSufgSk55Y
            source_type: api_record
            title: 中国历代人物传记资料库：王垣（CBDB 514419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514419&o=json
            external_identifier: CBDB:514419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_wjrGZOhUod1IR9aORGK-AH
        subject_person_id: p_QQdiGH2WvTaAyGpeBnpjCB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J7HfQys9cX1ZJhzFd4pGGz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P-R94RPu0ZMZfeVl5cCaRB
          claim_id: c_wjrGZOhUod1IR9aORGK-AH
          source_id: s_2kevUgmwEeDE5MZSiXaCxu
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），425：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2kevUgmwEeDE5MZSiXaCxu
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 57206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57206&o=json
            external_identifier: CBDB:57206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J7HfQys9cX1ZJhzFd4pGGz
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  other: []
---

# 王垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王垣，清人物。中国历代人物传记资料库（CBDB）以人物编号 514419 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王垣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_J7HfQys9cX1ZJhzFd4pGGz | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 57206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57206&o=json)
- [中国历代人物传记资料库：王垣（CBDB 514419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514419&o=json)
