---
schema: wang-person/v1
id: p_4yyYWVuQGfZJDD4mgAnDBk
status: active
merged_into: null
display_name: 王素英
cbdb_id: 101319
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XeBiQsTkgFbWQN7dbmS9Kg
        subject_person_id: p_4yyYWVuQGfZJDD4mgAnDBk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素英，元人物。中国历代人物传记资料库（CBDB）以人物编号 101319 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_5PnMT1bLQKC-1fBc647kYB
          claim_id: c_XeBiQsTkgFbWQN7dbmS9Kg
          source_id: s_1yCSYofj4kShRbo65PZPyJ
          stance: supports
          locator: CBDB:101319
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_1yCSYofj4kShRbo65PZPyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王素英（CBDB 101319）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101319&o=json
            external_identifier: CBDB:101319
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:50.362Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_14XipcdzF2WkfMACrv8BPm
        subject_person_id: p_4yyYWVuQGfZJDD4mgAnDBk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hy8DXsouWPcB5maLYePeUs
          claim_id: c_14XipcdzF2WkfMACrv8BPm
          source_id: s_1yCSYofj4kShRbo65PZPyJ
          stance: supports
          locator: CBDB:101319
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1701-1800）｜历史性依据：CBDB 朝代 = 元
          source:
            id: s_1yCSYofj4kShRbo65PZPyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王素英（CBDB 101319）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101319&o=json
            external_identifier: CBDB:101319
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:50.362Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Dc3V-s3sQEFJSu0O6Bd1cc
        subject_person_id: p_4yyYWVuQGfZJDD4mgAnDBk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HzsL9wdC6DBPUaCXZww6jo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PaRQtnAtg6fJSHiMqJeypx
          claim_id: c_Dc3V-s3sQEFJSu0O6Bd1cc
          source_id: s_M9M6o6YH8IiEZRsIz3DJZI
          stance: supports
          locator: 元人傳記資料索引，1166：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M9M6o6YH8IiEZRsIz3DJZI
            source_type: api_record
            title: 中国历代人物传记资料库：欒鳳（CBDB 66328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66328&o=json
            external_identifier: CBDB:66328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HzsL9wdC6DBPUaCXZww6jo
        status: active
        display_name: 欒鳳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王素英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王素英，元人物。中国历代人物传记资料库（CBDB）以人物编号 101319 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王素英 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_HzsL9wdC6DBPUaCXZww6jo | 欒鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：欒鳳（CBDB 66328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66328&o=json)
- [中国历代人物传记资料库：王素英（CBDB 101319）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101319&o=json)
