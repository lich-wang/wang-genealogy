---
schema: wang-person/v1
id: p_SxWRqCUeq7PfZSwPhFom9o
status: active
merged_into: null
display_name: 王克昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DLBruP9siXXZ4FZMULwQRA
        subject_person_id: p_SxWRqCUeq7PfZSwPhFom9o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kz665PujthKg1JMoruP42b
          claim_id: c_DLBruP9siXXZ4FZMULwQRA
          source_id: s_DGngTJ4azxeGgTXRZo75Kt
          stance: supports
          locator: CBDB:39038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39038）
          source: &a1
            id: s_DGngTJ4azxeGgTXRZo75Kt
            source_type: api_record
            title: 中国历代人物传记资料库：王克昌（CBDB 39038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39038&o=json
            external_identifier: CBDB:39038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.588Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M5Pzn3hCkCsJa1E6Cnu5bK
        subject_person_id: p_SxWRqCUeq7PfZSwPhFom9o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克昌，宋人物。曾任供備庫副使、尚書左僕射。（中国历代人物传记资料库 CBDB 39038）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0pwxcbb6xuLbhKdKldHcJi
          claim_id: c_M5Pzn3hCkCsJa1E6Cnu5bK
          source_id: s_DGngTJ4azxeGgTXRZo75Kt
          stance: supports
          locator: CBDB:39038
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

# 王克昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克昌 | accepted |
| bio.summary | 王克昌，宋人物。曾任供備庫副使、尚書左僕射。（中国历代人物传记资料库 CBDB 39038） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克昌（CBDB 39038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39038&o=json)
