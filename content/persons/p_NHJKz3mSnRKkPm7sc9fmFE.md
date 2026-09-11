---
schema: wang-person/v1
id: p_NHJKz3mSnRKkPm7sc9fmFE
status: active
merged_into: null
display_name: 王玘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TjK25tqyT7xSPz4vpy1r2S
        subject_person_id: p_NHJKz3mSnRKkPm7sc9fmFE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3P5zrDPgX2VVv5B34Wf6xd
          claim_id: c_TjK25tqyT7xSPz4vpy1r2S
          source_id: s_8Uay7JyT6ppYvToVE9viMb
          stance: supports
          locator: CBDB:337233
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337233）
          source: &a1
            id: s_8Uay7JyT6ppYvToVE9viMb
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 337233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337233&o=json
            external_identifier: CBDB:337233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VFHShJCrxNBujs3jS7i3Ks
        subject_person_id: p_NHJKz3mSnRKkPm7sc9fmFE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘，明人物。天順八年進士，籍贯蒲城。（中国历代人物传记资料库 CBDB 337233）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_75rlqwP3dr82cx6FZEsoKX
          claim_id: c_VFHShJCrxNBujs3jS7i3Ks
          source_id: s_8Uay7JyT6ppYvToVE9viMb
          stance: supports
          locator: CBDB:337233
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

# 王玘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玘 | accepted |
| bio.summary | 王玘，明人物。天順八年進士，籍贯蒲城。（中国历代人物传记资料库 CBDB 337233） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玘（CBDB 337233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337233&o=json)
