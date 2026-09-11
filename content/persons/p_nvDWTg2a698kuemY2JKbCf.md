---
schema: wang-person/v1
id: p_nvDWTg2a698kuemY2JKbCf
status: active
merged_into: null
display_name: 王錫鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RYRaAPwgdoHUoLXr5C9baj
        subject_person_id: p_nvDWTg2a698kuemY2JKbCf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eK5DfReGqExEAaAEGAatw2
          claim_id: c_RYRaAPwgdoHUoLXr5C9baj
          source_id: s_DK63FbZGTTz9LiX1HgzbxL
          stance: supports
          locator: CBDB:640655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640655）
          source: &a1
            id: s_DK63FbZGTTz9LiX1HgzbxL
            source_type: api_record
            title: 中国历代人物传记资料库：王錫鑾（CBDB 640655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640655&o=json
            external_identifier: CBDB:640655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M7TziGYsQzgvi4tVfGo118
        subject_person_id: p_nvDWTg2a698kuemY2JKbCf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫鑾，清人物。籍贯臨桂，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 640655）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zb020JE0CrOLXRq0U6m-hw
          claim_id: c_M7TziGYsQzgvi4tVfGo118
          source_id: s_DK63FbZGTTz9LiX1HgzbxL
          stance: supports
          locator: CBDB:640655
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

# 王錫鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫鑾 | accepted |
| bio.summary | 王錫鑾，清人物。籍贯臨桂，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 640655） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫鑾（CBDB 640655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640655&o=json)
