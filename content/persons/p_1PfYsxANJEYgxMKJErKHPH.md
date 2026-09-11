---
schema: wang-person/v1
id: p_1PfYsxANJEYgxMKJErKHPH
status: active
merged_into: null
display_name: 王自章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tUx1JKFwDpyCE6bsrTtCwB
        subject_person_id: p_1PfYsxANJEYgxMKJErKHPH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FAMqE8Qs7fasKGT8Wti8CM
          claim_id: c_tUx1JKFwDpyCE6bsrTtCwB
          source_id: s_Ai91m386u1B6cDkCM5p4pJ
          stance: supports
          locator: CBDB:640010
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640010）
          source: &a1
            id: s_Ai91m386u1B6cDkCM5p4pJ
            source_type: api_record
            title: 中国历代人物传记资料库：王自章（CBDB 640010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640010&o=json
            external_identifier: CBDB:640010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8XsenetraZz7acBNJpWr3j
        subject_person_id: p_1PfYsxANJEYgxMKJErKHPH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自章，清人物。籍贯泰安，曾任訓導。（中国历代人物传记资料库 CBDB 640010）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nAQzDZFsx_HE1uoiEjTU6w
          claim_id: c_8XsenetraZz7acBNJpWr3j
          source_id: s_Ai91m386u1B6cDkCM5p4pJ
          stance: supports
          locator: CBDB:640010
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

# 王自章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王自章 | accepted |
| bio.summary | 王自章，清人物。籍贯泰安，曾任訓導。（中国历代人物传记资料库 CBDB 640010） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王自章（CBDB 640010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640010&o=json)
