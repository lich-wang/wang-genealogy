---
schema: wang-person/v1
id: p_FBBoLzohrDmLTBHhSU69Qb
status: active
merged_into: null
display_name: 王朝彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kaYMD93WjhnYk8sFKNohjJ
        subject_person_id: p_FBBoLzohrDmLTBHhSU69Qb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EqP39fPoTvGGFDASAEGbAq
          claim_id: c_kaYMD93WjhnYk8sFKNohjJ
          source_id: s_JvXLesLq3qYs2NhBAEd9tD
          stance: supports
          locator: CBDB:414840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414840）
          source: &a1
            id: s_JvXLesLq3qYs2NhBAEd9tD
            source_type: api_record
            title: 中国历代人物传记资料库：王朝彥（CBDB 414840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414840&o=json
            external_identifier: CBDB:414840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q6thiSuy2A973iaxBVQtSe
        subject_person_id: p_FBBoLzohrDmLTBHhSU69Qb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝彥，清人物。曾任典史。（中国历代人物传记资料库 CBDB 414840）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__VRR0sGCVui-ATFcgxu_iU
          claim_id: c_q6thiSuy2A973iaxBVQtSe
          source_id: s_JvXLesLq3qYs2NhBAEd9tD
          stance: supports
          locator: CBDB:414840
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

# 王朝彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝彥 | accepted |
| bio.summary | 王朝彥，清人物。曾任典史。（中国历代人物传记资料库 CBDB 414840） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝彥（CBDB 414840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414840&o=json)
