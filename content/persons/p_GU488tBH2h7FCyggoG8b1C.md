---
schema: wang-person/v1
id: p_GU488tBH2h7FCyggoG8b1C
status: active
merged_into: null
display_name: 王崇基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q1eeZy1VaoKuf2Veqb7DLi
        subject_person_id: p_GU488tBH2h7FCyggoG8b1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_evfMbZ5RBEK8ZVpzVAcYBu
          claim_id: c_q1eeZy1VaoKuf2Veqb7DLi
          source_id: s_F2AjKZmSZZmPbBz4LFjgHs
          stance: supports
          locator: CBDB:157631
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157631）
          source: &a1
            id: s_F2AjKZmSZZmPbBz4LFjgHs
            source_type: api_record
            title: 中国历代人物传记资料库：王崇基（CBDB 157631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157631&o=json
            external_identifier: CBDB:157631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bnM9FFRy7nxwmdLaXWbSkK
        subject_person_id: p_GU488tBH2h7FCyggoG8b1C
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
        - id: cs_XKXeNhXLyYKLPy7cjDKNdM
          claim_id: c_bnM9FFRy7nxwmdLaXWbSkK
          source_id: s_F2AjKZmSZZmPbBz4LFjgHs
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

# 王崇基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇基 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇基（CBDB 157631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157631&o=json)
