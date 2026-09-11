---
schema: wang-person/v1
id: p_K4rJFeRe73NJxbhF1T7Pzo
status: active
merged_into: null
display_name: 王鎮江
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jpKTkPHBSwVJW3FbCks3AA
        subject_person_id: p_K4rJFeRe73NJxbhF1T7Pzo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮江
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K79ecnPvL9gWCvQMFdjzhf
          claim_id: c_jpKTkPHBSwVJW3FbCks3AA
          source_id: s_jkx4vHaoigGh2nu7qy1pzD
          stance: supports
          locator: CBDB:640695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640695）
          source: &a1
            id: s_jkx4vHaoigGh2nu7qy1pzD
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮江（CBDB 640695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640695&o=json
            external_identifier: CBDB:640695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gj4xKbvTHYLZJrBrcMMhu2
        subject_person_id: p_K4rJFeRe73NJxbhF1T7Pzo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮江，清人物。籍贯宛平，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 640695）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z3-kyjvzz5ZyJMlio47N19
          claim_id: c_Gj4xKbvTHYLZJrBrcMMhu2
          source_id: s_jkx4vHaoigGh2nu7qy1pzD
          stance: supports
          locator: CBDB:640695
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

# 王鎮江

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮江 | accepted |
| bio.summary | 王鎮江，清人物。籍贯宛平，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 640695） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎮江（CBDB 640695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640695&o=json)
