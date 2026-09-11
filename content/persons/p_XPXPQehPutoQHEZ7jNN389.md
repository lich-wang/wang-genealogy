---
schema: wang-person/v1
id: p_XPXPQehPutoQHEZ7jNN389
status: active
merged_into: null
display_name: 王長民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8JeqYsVsBR55ELEZe2Zf9c
        subject_person_id: p_XPXPQehPutoQHEZ7jNN389
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YNE2Sm18sREMFU2fJb2q3G
          claim_id: c_8JeqYsVsBR55ELEZe2Zf9c
          source_id: s_R4t9CtcguJE9NBAvA2F8Ah
          stance: supports
          locator: CBDB:685762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685762）
          source: &a1
            id: s_R4t9CtcguJE9NBAvA2F8Ah
            source_type: api_record
            title: 中国历代人物传记资料库：王長民（CBDB 685762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685762&o=json
            external_identifier: CBDB:685762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z9LPp9KGAhF2Gx76cDXo9U
        subject_person_id: p_XPXPQehPutoQHEZ7jNN389
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長民，宋人物。籍贯樂清，入仕進士。（中国历代人物传记资料库 CBDB 685762）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hx3guOUKHd1q9DgfybKUuu
          claim_id: c_z9LPp9KGAhF2Gx76cDXo9U
          source_id: s_R4t9CtcguJE9NBAvA2F8Ah
          stance: supports
          locator: CBDB:685762
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

# 王長民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長民 | accepted |
| bio.summary | 王長民，宋人物。籍贯樂清，入仕進士。（中国历代人物传记资料库 CBDB 685762） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長民（CBDB 685762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685762&o=json)
