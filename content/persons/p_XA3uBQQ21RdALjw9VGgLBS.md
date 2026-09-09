---
schema: wang-person/v1
id: p_XA3uBQQ21RdALjw9VGgLBS
status: active
merged_into: null
display_name: 王禾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vFgc9U191HdHVDjbX7FnM3
        subject_person_id: p_XA3uBQQ21RdALjw9VGgLBS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uxCsu2FVD3WdPThSE6KtAL
          claim_id: c_vFgc9U191HdHVDjbX7FnM3
          source_id: s_wQ1rETy4rx1jjiphvKVT2K
          stance: supports
          locator: CBDB:201210
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201210）
          source: &a1
            id: s_wQ1rETy4rx1jjiphvKVT2K
            source_type: api_record
            title: 中国历代人物传记资料库：王禾（CBDB 201210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201210&o=json
            external_identifier: CBDB:201210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HACCECVbKUUuuwc9XMNRp6
        subject_person_id: p_XA3uBQQ21RdALjw9VGgLBS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1456年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h8RdTzXAjya3r9yyxohxZr
          claim_id: c_HACCECVbKUUuuwc9XMNRp6
          source_id: s_wQ1rETy4rx1jjiphvKVT2K
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bg1jcHtPSbTMGPK5XHtNqz
        subject_person_id: p_XA3uBQQ21RdALjw9VGgLBS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2pXMQsXvnK7xADHJL64Fny
          claim_id: c_bg1jcHtPSbTMGPK5XHtNqz
          source_id: s_wQ1rETy4rx1jjiphvKVT2K
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

# 王禾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禾 | accepted |
| birth.date | 1456年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禾（CBDB 201210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201210&o=json)
