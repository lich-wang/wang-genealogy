---
schema: wang-person/v1
id: p_Kn5QJAJswDFHtiLtwdVCvQ
status: active
merged_into: null
display_name: 王綽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KR9YXAsc9Y2Q3eSb1dM9bQ
        subject_person_id: p_Kn5QJAJswDFHtiLtwdVCvQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4RL98BoHWpB6Emj7kLJPzV
          claim_id: c_KR9YXAsc9Y2Q3eSb1dM9bQ
          source_id: s_G4gwZLFNdXtqS2asD3H3HE
          stance: supports
          locator: CBDB:92082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92082）
          source: &a1
            id: s_G4gwZLFNdXtqS2asD3H3HE
            source_type: api_record
            title: 中国历代人物传记资料库：王綽（CBDB 92082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92082&o=json
            external_identifier: CBDB:92082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fNXFoCsHNrSbrkXXLj2n8u
        subject_person_id: p_Kn5QJAJswDFHtiLtwdVCvQ
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
        - id: cs_cBEStn75iyRkYWAbKp5nL9
          claim_id: c_fNXFoCsHNrSbrkXXLj2n8u
          source_id: s_G4gwZLFNdXtqS2asD3H3HE
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

# 王綽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綽 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綽（CBDB 92082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92082&o=json)
