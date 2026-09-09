---
schema: wang-person/v1
id: p_xvHfZSDKc6KuV5R4r5Z3FL
status: active
merged_into: null
display_name: 王紹文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z7Q9e4rayoeX251gzfBF8E
        subject_person_id: p_xvHfZSDKc6KuV5R4r5Z3FL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jAyD16jb6C1K1nVC85d67c
          claim_id: c_Z7Q9e4rayoeX251gzfBF8E
          source_id: s_1ii6qS4xK8qKFZexmfFop1
          stance: supports
          locator: CBDB:490886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490886）
          source: &a1
            id: s_1ii6qS4xK8qKFZexmfFop1
            source_type: api_record
            title: 中国历代人物传记资料库：王紹文（CBDB 490886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490886&o=json
            external_identifier: CBDB:490886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x7R9FQLtMY2BkQVPMh8zor
        subject_person_id: p_xvHfZSDKc6KuV5R4r5Z3FL
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
        - id: cs_Bt6apwZwapMCF7dH7cuKu9
          claim_id: c_x7R9FQLtMY2BkQVPMh8zor
          source_id: s_1ii6qS4xK8qKFZexmfFop1
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

# 王紹文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹文 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹文（CBDB 490886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490886&o=json)
