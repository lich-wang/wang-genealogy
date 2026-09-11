---
schema: wang-person/v1
id: p_du1wv75PTsu7D1KzQJ7qDz
status: active
merged_into: null
display_name: 王季緖
cbdb_id: 526911
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FLQFyGDBwfWQvXp2t8vJ1U
        subject_person_id: p_du1wv75PTsu7D1KzQJ7qDz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季緖，清人物。中国历代人物传记资料库（CBDB）以人物编号 526911 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_HEuqWxAspFovP9S0iLcKF5
          claim_id: c_FLQFyGDBwfWQvXp2t8vJ1U
          source_id: s_kB1h9PSDJ88HRfjidtPj1f
          stance: supports
          locator: CBDB:526911
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_kB1h9PSDJ88HRfjidtPj1f
            source_type: api_record
            title: 中国历代人物传记资料库：王季緖（CBDB 526911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526911&o=json
            external_identifier: CBDB:526911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vmiM8WjegfufC7pXYhVmmz
        subject_person_id: p_du1wv75PTsu7D1KzQJ7qDz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季緖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JbeYTBntKZ6Tu8wy52h6Cc
          claim_id: c_vmiM8WjegfufC7pXYhVmmz
          source_id: s_kB1h9PSDJ88HRfjidtPj1f
          stance: supports
          locator: CBDB:526911
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_kB1h9PSDJ88HRfjidtPj1f
            source_type: api_record
            title: 中国历代人物传记资料库：王季緖（CBDB 526911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526911&o=json
            external_identifier: CBDB:526911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0HXfmmAojNp53kyxdIWSpU
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_du1wv75PTsu7D1KzQJ7qDz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SRebPJW1mB9XhRo-HsYjmS
          claim_id: c_0HXfmmAojNp53kyxdIWSpU
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g2v8cqJ5RPSCgN3VLzp6tD
            source_type: api_record
            title: 中国历代人物传记资料库：王頌蔚（CBDB 69381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json
            external_identifier: CBDB:69381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C76WEam8DrJz85GjQuBEXF
        status: active
        display_name: 王頌蔚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王季緖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王季緖，清人物。中国历代人物传记资料库（CBDB）以人物编号 526911 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王季緖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C76WEam8DrJz85GjQuBEXF | 王頌蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王季緖（CBDB 526911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526911&o=json)
- [中国历代人物传记资料库：王頌蔚（CBDB 69381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json)
