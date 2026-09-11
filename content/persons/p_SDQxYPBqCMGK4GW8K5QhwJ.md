---
schema: wang-person/v1
id: p_SDQxYPBqCMGK4GW8K5QhwJ
status: active
merged_into: null
display_name: 王舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uJfAD1SdtW18CgzUJBYMn5
        subject_person_id: p_SDQxYPBqCMGK4GW8K5QhwJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FsMLDZyn2rgsYUznhFNKGy
          claim_id: c_uJfAD1SdtW18CgzUJBYMn5
          source_id: s_L2Y7FDUJwQ9ouCC39Y3ze4
          stance: supports
          locator: CBDB:503212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（503212）
          source: &a1
            id: s_L2Y7FDUJwQ9ouCC39Y3ze4
            source_type: api_record
            title: 中国历代人物传记资料库：王舉（CBDB 503212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503212&o=json
            external_identifier: CBDB:503212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dDQ1B6o5efWBmZXgpBpcHS
        subject_person_id: p_SDQxYPBqCMGK4GW8K5QhwJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉，明人物。曾任苑馬寺少卿。（中国历代人物传记资料库 CBDB 503212）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_myIzJ2LV0EVoMT3T1Pk86j
          claim_id: c_dDQ1B6o5efWBmZXgpBpcHS
          source_id: s_L2Y7FDUJwQ9ouCC39Y3ze4
          stance: supports
          locator: CBDB:503212
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

# 王舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉 | accepted |
| bio.summary | 王舉，明人物。曾任苑馬寺少卿。（中国历代人物传记资料库 CBDB 503212） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舉（CBDB 503212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503212&o=json)
