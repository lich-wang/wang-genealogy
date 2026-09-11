---
schema: wang-person/v1
id: p_Wo9ruY4GvefPz2S1wH4Lrp
status: active
merged_into: null
display_name: 王彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jvpmrMUspbPPeMYJ5VfkHH
        subject_person_id: p_Wo9ruY4GvefPz2S1wH4Lrp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TY9UDBjbMMuqGyma7Suz5Q
          claim_id: c_jvpmrMUspbPPeMYJ5VfkHH
          source_id: s_137HNCSLWZyseYbCX9mAYD
          stance: supports
          locator: CBDB:463947
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（463947）
          source: &a1
            id: s_137HNCSLWZyseYbCX9mAYD
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 463947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463947&o=json
            external_identifier: CBDB:463947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X5mYwwdyFhRTffEKjcq2j2
        subject_person_id: p_Wo9ruY4GvefPz2S1wH4Lrp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥，宋人物。曾任都統制。（中国历代人物传记资料库 CBDB 463947）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M0LhkvuiQYz40W6e-fbSq8
          claim_id: c_X5mYwwdyFhRTffEKjcq2j2
          source_id: s_137HNCSLWZyseYbCX9mAYD
          stance: supports
          locator: CBDB:463947
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

# 王彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥 | accepted |
| bio.summary | 王彥，宋人物。曾任都統制。（中国历代人物传记资料库 CBDB 463947） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥（CBDB 463947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463947&o=json)
