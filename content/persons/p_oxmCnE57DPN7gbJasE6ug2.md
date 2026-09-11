---
schema: wang-person/v1
id: p_oxmCnE57DPN7gbJasE6ug2
status: active
merged_into: null
display_name: 王哲臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9zgwPqqWFxwi4BijFJJHau
        subject_person_id: p_oxmCnE57DPN7gbJasE6ug2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cujTgtChzG7hzDhDoTA5vP
          claim_id: c_9zgwPqqWFxwi4BijFJJHau
          source_id: s_RKk5hABteP5NZ6qRrbXdTv
          stance: supports
          locator: CBDB:235982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235982）
          source: &a1
            id: s_RKk5hABteP5NZ6qRrbXdTv
            source_type: api_record
            title: 中国历代人物传记资料库：王哲臣（CBDB 235982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235982&o=json
            external_identifier: CBDB:235982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.769Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q4DGn6HBJwBfAqkNPjG6uw
        subject_person_id: p_oxmCnE57DPN7gbJasE6ug2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲臣，明人物。籍贯江陰，入仕庠生。（中国历代人物传记资料库 CBDB 235982）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-TyherS5LL5mfds0VVSq89
          claim_id: c_q4DGn6HBJwBfAqkNPjG6uw
          source_id: s_RKk5hABteP5NZ6qRrbXdTv
          stance: supports
          locator: CBDB:235982
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

# 王哲臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王哲臣 | accepted |
| bio.summary | 王哲臣，明人物。籍贯江陰，入仕庠生。（中国历代人物传记资料库 CBDB 235982） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王哲臣（CBDB 235982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235982&o=json)
