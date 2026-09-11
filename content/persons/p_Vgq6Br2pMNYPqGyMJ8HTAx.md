---
schema: wang-person/v1
id: p_Vgq6Br2pMNYPqGyMJ8HTAx
status: active
merged_into: null
display_name: 王之鵬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CXzBPDtD3hNowanYk32nkT
        subject_person_id: p_Vgq6Br2pMNYPqGyMJ8HTAx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WpHzT9DZtFc8zAXYCFvj8A
          claim_id: c_CXzBPDtD3hNowanYk32nkT
          source_id: s_LrMypHMWUafSmzVU89bu9c
          stance: supports
          locator: CBDB:216061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216061）
          source: &a1
            id: s_LrMypHMWUafSmzVU89bu9c
            source_type: api_record
            title: 中国历代人物传记资料库：王之鵬（CBDB 216061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216061&o=json
            external_identifier: CBDB:216061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UebxSqraS5GqdBefwE8aXC
        subject_person_id: p_Vgq6Br2pMNYPqGyMJ8HTAx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鵬，明人物。萬曆五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 216061）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cFcB8c160viQZsDLIOETR9
          claim_id: c_UebxSqraS5GqdBefwE8aXC
          source_id: s_LrMypHMWUafSmzVU89bu9c
          stance: supports
          locator: CBDB:216061
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

# 王之鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之鵬 | accepted |
| bio.summary | 王之鵬，明人物。萬曆五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 216061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之鵬（CBDB 216061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216061&o=json)
