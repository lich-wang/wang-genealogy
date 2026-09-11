---
schema: wang-person/v1
id: p_JNkWByVB8Nm2Q2rW7MWqMG
status: active
merged_into: null
display_name: 王畢辰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L5E8CV5VN5RKfaJinGXKyN
        subject_person_id: p_JNkWByVB8Nm2Q2rW7MWqMG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畢辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bqivFQw96Sg7vBpkfVKSXy
          claim_id: c_L5E8CV5VN5RKfaJinGXKyN
          source_id: s_edSRHzLYQeGz6AnHyHMpdu
          stance: supports
          locator: CBDB:639491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639491）
          source: &a1
            id: s_edSRHzLYQeGz6AnHyHMpdu
            source_type: api_record
            title: 中国历代人物传记资料库：王畢辰（CBDB 639491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639491&o=json
            external_identifier: CBDB:639491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AToMGHr7LuB3JeJHY5NEDD
        subject_person_id: p_JNkWByVB8Nm2Q2rW7MWqMG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畢辰，清人物。籍贯貴陽府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 639491）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X4kSEMm0U7pqEXBv4My-LB
          claim_id: c_AToMGHr7LuB3JeJHY5NEDD
          source_id: s_edSRHzLYQeGz6AnHyHMpdu
          stance: supports
          locator: CBDB:639491
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

# 王畢辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王畢辰 | accepted |
| bio.summary | 王畢辰，清人物。籍贯貴陽府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 639491） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王畢辰（CBDB 639491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639491&o=json)
