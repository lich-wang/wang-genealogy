---
schema: wang-person/v1
id: p_j6DephxBQfnHHbzUifPi55
status: active
merged_into: null
display_name: 王友才
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YHrfSuN9JjRFukPj1Kph67
        subject_person_id: p_j6DephxBQfnHHbzUifPi55
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FVsQrQedF84U1tnF32aLQd
          claim_id: c_YHrfSuN9JjRFukPj1Kph67
          source_id: s_74Emxj48FqWLrUU3wBqpLC
          stance: supports
          locator: CBDB:277370
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277370）
          source: &a1
            id: s_74Emxj48FqWLrUU3wBqpLC
            source_type: api_record
            title: 中国历代人物传记资料库：王友才（CBDB 277370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277370&o=json
            external_identifier: CBDB:277370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yXt8Hv7xrpP77E6JtZaCdD
        subject_person_id: p_j6DephxBQfnHHbzUifPi55
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
        - id: cs_XA1sYnAkGH72C8LMi31yv5
          claim_id: c_yXt8Hv7xrpP77E6JtZaCdD
          source_id: s_74Emxj48FqWLrUU3wBqpLC
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
  descendants:
    - claim:
        id: c_F4tVdygwuBJOXmXZYDmOsc
        subject_person_id: p_j6DephxBQfnHHbzUifPi55
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dDsTSNKuQNDdLuyN146sBf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pEGmcm9lesoRu1SAnb5-JS
          claim_id: c_F4tVdygwuBJOXmXZYDmOsc
          source_id: s_74Emxj48FqWLrUU3wBqpLC
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第四十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dDsTSNKuQNDdLuyN146sBf
        status: active
        display_name: 王雄
        merged_into_person_id: null
  other: []
---

# 王友才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友才 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dDsTSNKuQNDdLuyN146sBf | 王雄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王友才（CBDB 277370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277370&o=json)
