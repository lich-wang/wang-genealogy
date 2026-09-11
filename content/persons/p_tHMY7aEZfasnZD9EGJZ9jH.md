---
schema: wang-person/v1
id: p_tHMY7aEZfasnZD9EGJZ9jH
status: active
merged_into: null
display_name: 王芝祥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dxJJpnmB3iTAL4JCqgauDG
        subject_person_id: p_tHMY7aEZfasnZD9EGJZ9jH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xg8fMQ3XSQ1s8EYaL5nQ9a
          claim_id: c_dxJJpnmB3iTAL4JCqgauDG
          source_id: s_Z4RMssS9BpQFQtHtKyRM6n
          stance: supports
          locator: CBDB:696859
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696859）
          source: &a1
            id: s_Z4RMssS9BpQFQtHtKyRM6n
            source_type: api_record
            title: 中国历代人物传记资料库：王芝祥（CBDB 696859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696859&o=json
            external_identifier: CBDB:696859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wbG2EwGzMAF8Eqyrz9df3z
        subject_person_id: p_tHMY7aEZfasnZD9EGJZ9jH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NwLHrAofJiNJvHkNjMnLRy
          claim_id: c_wbG2EwGzMAF8Eqyrz9df3z
          source_id: s_Z4RMssS9BpQFQtHtKyRM6n
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
  ancestors:
    - claim:
        id: c_tljTjxflOV2o1NqyaU_Wf8
        subject_person_id: p_cBGCXtQ6wkhv554viPc99n
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tHMY7aEZfasnZD9EGJZ9jH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uadwdqwB6_tpcYqme_pw7u
          claim_id: c_tljTjxflOV2o1NqyaU_Wf8
          source_id: s_szZBgRZFUof6ECVtLRNSze
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160868：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_szZBgRZFUof6ECVtLRNSze
            source_type: api_record
            title: 中国历代人物传记资料库：王文德（CBDB 696857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696857&o=json
            external_identifier: CBDB:696857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cBGCXtQ6wkhv554viPc99n
        status: active
        display_name: 王文德
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王芝祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芝祥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_cBGCXtQ6wkhv554viPc99n | 王文德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文德（CBDB 696857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696857&o=json)
- [中国历代人物传记资料库：王芝祥（CBDB 696859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696859&o=json)
