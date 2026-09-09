---
schema: wang-person/v1
id: p_8QdFxogUpxc8298agWXywD
status: active
merged_into: null
display_name: 王盤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6mg7EmQbS24Vn5rc1JLk1T
        subject_person_id: p_8QdFxogUpxc8298agWXywD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w98EHLYRG4nc8qMZEyc67w
          claim_id: c_6mg7EmQbS24Vn5rc1JLk1T
          source_id: s_cSrckPWoyK6CJTfWHoZe3Z
          stance: supports
          locator: CBDB:97978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97978）
          source: &a1
            id: s_cSrckPWoyK6CJTfWHoZe3Z
            source_type: api_record
            title: 中国历代人物传记资料库：王盤（CBDB 97978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97978&o=json
            external_identifier: CBDB:97978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TL63Z1xDjE6m72ywFDMs8a
        subject_person_id: p_8QdFxogUpxc8298agWXywD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T2PksmDsM3nrXXwC9sbEKB
          claim_id: c_TL63Z1xDjE6m72ywFDMs8a
          source_id: s_cSrckPWoyK6CJTfWHoZe3Z
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

# 王盤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王盤 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王盤（CBDB 97978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97978&o=json)
