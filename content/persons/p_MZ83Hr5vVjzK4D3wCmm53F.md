---
schema: wang-person/v1
id: p_MZ83Hr5vVjzK4D3wCmm53F
status: active
merged_into: null
display_name: 王啟疆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y3nzgseFouWy3ArBjoXh5U
        subject_person_id: p_MZ83Hr5vVjzK4D3wCmm53F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟疆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TRddYZppA1MwiGN5iRwEWw
          claim_id: c_y3nzgseFouWy3ArBjoXh5U
          source_id: s_5jKhnj9ExcCSG7ESxzmHvd
          stance: supports
          locator: CBDB:636557
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636557）
          source: &a1
            id: s_5jKhnj9ExcCSG7ESxzmHvd
            source_type: api_record
            title: 中国历代人物传记资料库：王啟疆（CBDB 636557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636557&o=json
            external_identifier: CBDB:636557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.194Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NBKJ4m3vUbieuLYA7XPDdV
        subject_person_id: p_MZ83Hr5vVjzK4D3wCmm53F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟疆，清人物。籍贯太原，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636557）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sSxjb8vBZRQYVcqCsZI2Z8
          claim_id: c_NBKJ4m3vUbieuLYA7XPDdV
          source_id: s_5jKhnj9ExcCSG7ESxzmHvd
          stance: supports
          locator: CBDB:636557
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
  descendants: []
  other: []
---

# 王啟疆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟疆 | accepted |
| bio.summary | 王啟疆，清人物。籍贯太原，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636557） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟疆（CBDB 636557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636557&o=json)
