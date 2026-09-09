---
schema: wang-person/v1
id: p_cTYwDz1zszNrMGhwaGJJ15
status: active
merged_into: null
display_name: 王桂榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aZhAzpa16ksRGzLt8Les6U
        subject_person_id: p_cTYwDz1zszNrMGhwaGJJ15
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FocCBFyAWjC6LqxYX2MnQx
          claim_id: c_aZhAzpa16ksRGzLt8Les6U
          source_id: s_egL2VRJrYHqG9Bx48A5ALz
          stance: supports
          locator: CBDB:638712
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638712）
          source: &a1
            id: s_egL2VRJrYHqG9Bx48A5ALz
            source_type: api_record
            title: 中国历代人物传记资料库：王桂榮（CBDB 638712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638712&o=json
            external_identifier: CBDB:638712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.726Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_93CCpgbTvHdtfknGwSBH1R
        subject_person_id: p_cTYwDz1zszNrMGhwaGJJ15
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
        - id: cs_UsLJNpa3m1mDTq8qyRRgV6
          claim_id: c_93CCpgbTvHdtfknGwSBH1R
          source_id: s_egL2VRJrYHqG9Bx48A5ALz
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

# 王桂榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂榮 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂榮（CBDB 638712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638712&o=json)
