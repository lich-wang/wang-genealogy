---
schema: wang-person/v1
id: p_V1QsLP2bY1JE56Aaj6MmJh
status: active
merged_into: null
display_name: 王信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bwD2rrT7oAwcQQSeMAiYUD
        subject_person_id: p_V1QsLP2bY1JE56Aaj6MmJh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ATzQrbzwu9FTuU8tBdkdDt
          claim_id: c_bwD2rrT7oAwcQQSeMAiYUD
          source_id: s_98m8sv5bR9FxUndEchcMTj
          stance: supports
          locator: CBDB:243554
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243554）
          source: &a1
            id: s_98m8sv5bR9FxUndEchcMTj
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 243554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243554&o=json
            external_identifier: CBDB:243554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pyamEy3h7qpbrxNWoKadMN
        subject_person_id: p_V1QsLP2bY1JE56Aaj6MmJh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。成化五年進士。（中国历代人物传记资料库 CBDB 243554）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1H3nTeo0B8cTt5XCbY4-K-
          claim_id: c_pyamEy3h7qpbrxNWoKadMN
          source_id: s_98m8sv5bR9FxUndEchcMTj
          stance: supports
          locator: CBDB:243554
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants:
    - claim:
        id: c_yuq438VS7l3kD0JgWHCsUj
        subject_person_id: p_V1QsLP2bY1JE56Aaj6MmJh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aC1svXXphEQ9jhiLWX1sn6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_52MPm3sIM3nSYrmCIndaQ5
          claim_id: c_yuq438VS7l3kD0JgWHCsUj
          source_id: s_7QgGQBjV5ZkFSkB7ZX69xF
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7QgGQBjV5ZkFSkB7ZX69xF
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 199332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199332&o=json
            external_identifier: CBDB:199332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aC1svXXphEQ9jhiLWX1sn6
        status: active
        display_name: 王廷
        merged_into_person_id: null
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。成化五年進士。（中国历代人物传记资料库 CBDB 243554） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_aC1svXXphEQ9jhiLWX1sn6 | 王廷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷（CBDB 199332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199332&o=json)
- [中国历代人物传记资料库：王信（CBDB 243554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243554&o=json)
