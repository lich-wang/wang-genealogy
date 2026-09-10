---
schema: wang-person/v1
id: p_vgoWcNsg5TJm8CAAjNf5Xr
status: active
merged_into: null
display_name: 王道卿
cbdb_id: 22254
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6D5ZK7diGWhrjGEj69Yqkt
        subject_person_id: p_vgoWcNsg5TJm8CAAjNf5Xr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道卿，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22254 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_CHhE8CMwDYmJ3YdiP3dAQt
          claim_id: c_6D5ZK7diGWhrjGEj69Yqkt
          source_id: s_moCitAyThk436nuq6FzVxy
          stance: supports
          locator: CBDB:22254
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_moCitAyThk436nuq6FzVxy
            source_type: api_record
            title: 中国历代人物传记资料库：王道卿（CBDB 22254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22254&o=json
            external_identifier: CBDB:22254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ehqxkSX5Hxu9d33ESx2ger
        subject_person_id: p_vgoWcNsg5TJm8CAAjNf5Xr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MZdGewPiyECuiCe6y8rJVn
          claim_id: c_ehqxkSX5Hxu9d33ESx2ger
          source_id: s_moCitAyThk436nuq6FzVxy
          stance: supports
          locator: CBDB:22254
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_moCitAyThk436nuq6FzVxy
            source_type: api_record
            title: 中国历代人物传记资料库：王道卿（CBDB 22254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22254&o=json
            external_identifier: CBDB:22254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Xk4HlvpWcBqTojcQ1taJgc
        subject_person_id: p_127UF7yvGqCLXapDi883c4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vgoWcNsg5TJm8CAAjNf5Xr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_brXm2tPMCz7IayyxHzkRrM
          claim_id: c_Xk4HlvpWcBqTojcQ1taJgc
          source_id: s_XY9srzhf4QvcQx3M7SMojE
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1966：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XY9srzhf4QvcQx3M7SMojE
            source_type: api_record
            title: 中国历代人物传记资料库：王貽永（CBDB 1829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1829&o=json
            external_identifier: CBDB:1829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_127UF7yvGqCLXapDi883c4
        status: active
        display_name: 王貽永
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道卿，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22254 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王道卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_127UF7yvGqCLXapDi883c4 | 王貽永 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道卿（CBDB 22254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22254&o=json)
- [中国历代人物传记资料库：王貽永（CBDB 1829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1829&o=json)
