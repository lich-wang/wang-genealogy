---
schema: wang-person/v1
id: p_MVmiCL3dUC4DChfBo9ocxw
status: active
merged_into: null
display_name: 王襄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zAfKA69DvWMTxA12rrRGmo
        subject_person_id: p_MVmiCL3dUC4DChfBo9ocxw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gFBKD7YbcNHDw3w2UBadvj
          claim_id: c_zAfKA69DvWMTxA12rrRGmo
          source_id: s_XtEnQFj74e5sD7gfKWrL7m
          stance: supports
          locator: CBDB:469244
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（469244）
          source: &a1
            id: s_XtEnQFj74e5sD7gfKWrL7m
            source_type: api_record
            title: 中国历代人物传记资料库：王襄（CBDB 469244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469244&o=json
            external_identifier: CBDB:469244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.115Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CLoaifKV8QN8iuuHYySwH5
        subject_person_id: p_MVmiCL3dUC4DChfBo9ocxw
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
        - id: cs_zPTSojLtBdB3N4ngMJCYDg
          claim_id: c_CLoaifKV8QN8iuuHYySwH5
          source_id: s_XtEnQFj74e5sD7gfKWrL7m
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

# 王襄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王襄 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王襄（CBDB 469244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469244&o=json)
