---
schema: wang-person/v1
id: p_R4k5SK2fLmqHPA9x3QCLMK
status: active
merged_into: null
display_name: 王才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PGMpeKbW2mG647uyK1bPQw
        subject_person_id: p_R4k5SK2fLmqHPA9x3QCLMK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q5epQv87LcckD323YYBhdK
          claim_id: c_PGMpeKbW2mG647uyK1bPQw
          source_id: s_hcWTg3gkAjXD447RcatHdP
          stance: supports
          locator: CBDB:139020
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139020）
          source: &a1
            id: s_hcWTg3gkAjXD447RcatHdP
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 139020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139020&o=json
            external_identifier: CBDB:139020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TmptCp9Y8nDTpWu44YkGF4
        subject_person_id: p_R4k5SK2fLmqHPA9x3QCLMK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 592年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8UQiSS29v3wbzV4ivCoUXq
          claim_id: c_TmptCp9Y8nDTpWu44YkGF4
          source_id: s_hcWTg3gkAjXD447RcatHdP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RrhVuh854VPCJKaPjpfJtK
        subject_person_id: p_R4k5SK2fLmqHPA9x3QCLMK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 654年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K8sCLN7MB23CjrjbHs8KeF
          claim_id: c_RrhVuh854VPCJKaPjpfJtK
          source_id: s_hcWTg3gkAjXD447RcatHdP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3BfDszixBX91MMjEYWq4po
        subject_person_id: p_R4k5SK2fLmqHPA9x3QCLMK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yqdCnhMeEcV5SkP8tZ5c6d
          claim_id: c_3BfDszixBX91MMjEYWq4po
          source_id: s_hcWTg3gkAjXD447RcatHdP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王才 | accepted |
| birth.date | 592年 | accepted |
| death.date | 654年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 139020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139020&o=json)
