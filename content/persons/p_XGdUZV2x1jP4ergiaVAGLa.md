---
schema: wang-person/v1
id: p_XGdUZV2x1jP4ergiaVAGLa
status: active
merged_into: null
display_name: 王慱物
cbdb_id: 414625
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cD8Vrq4v5EVMuCjdJhwsZp
        subject_person_id: p_XGdUZV2x1jP4ergiaVAGLa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慱物，宋人物。曾任縣尉。（中国历代人物传记资料库 CBDB 414625）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7nfNUX62sm7oqry-yL459i
          claim_id: c_cD8Vrq4v5EVMuCjdJhwsZp
          source_id: s_XZdWQfXfSkTw5vtpgnXidZ
          stance: supports
          locator: CBDB:414625
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XZdWQfXfSkTw5vtpgnXidZ
            source_type: api_record
            title: 中国历代人物传记资料库：王慱物（CBDB 414625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414625&o=json
            external_identifier: CBDB:414625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:36.869Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4c8s6CDdtbhE85KErbn5ZE
        subject_person_id: p_XGdUZV2x1jP4ergiaVAGLa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慱物
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1N86psX3V4tKsXcr1qp5so
          claim_id: c_4c8s6CDdtbhE85KErbn5ZE
          source_id: s_XZdWQfXfSkTw5vtpgnXidZ
          stance: supports
          locator: CBDB:414625
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5601-5700）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慱物

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慱物，宋人物。曾任縣尉。（中国历代人物传记资料库 CBDB 414625） | accepted |
| name.primary | 王慱物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慱物（CBDB 414625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414625&o=json)
