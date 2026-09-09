---
schema: wang-person/v1
id: p_nk86JnBN3H44SSosh8zCKQ
status: active
merged_into: null
display_name: 王可旺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m5CPwSCAqUBpCFBVASCcxJ
        subject_person_id: p_nk86JnBN3H44SSosh8zCKQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可旺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SywrbVb6jMTvmrdRhQT7xV
          claim_id: c_m5CPwSCAqUBpCFBVASCcxJ
          source_id: s_picJY4WWYs49eM1wbidthu
          stance: supports
          locator: CBDB:294860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294860）
          source: &a1
            id: s_picJY4WWYs49eM1wbidthu
            source_type: api_record
            title: 中国历代人物传记资料库：王可旺（CBDB 294860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294860&o=json
            external_identifier: CBDB:294860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SAMwwYzdAN1TpEUFtb3gqD
        subject_person_id: p_nk86JnBN3H44SSosh8zCKQ
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
        - id: cs_VMG8Uj9w8CpkvSen9vH3Fi
          claim_id: c_SAMwwYzdAN1TpEUFtb3gqD
          source_id: s_picJY4WWYs49eM1wbidthu
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

# 王可旺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可旺 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可旺（CBDB 294860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294860&o=json)
