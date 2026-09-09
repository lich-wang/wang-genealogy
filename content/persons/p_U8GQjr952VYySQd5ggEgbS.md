---
schema: wang-person/v1
id: p_U8GQjr952VYySQd5ggEgbS
status: active
merged_into: null
display_name: 王世烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XyFVVGN7tBcU37JLHoXVwM
        subject_person_id: p_U8GQjr952VYySQd5ggEgbS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_488ffkYuGrBVAQy4gZ8PPv
          claim_id: c_XyFVVGN7tBcU37JLHoXVwM
          source_id: s_1jDLJbc5ovuZCHEfCSGxF4
          stance: supports
          locator: CBDB:635694
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635694）
          source: &a1
            id: s_1jDLJbc5ovuZCHEfCSGxF4
            source_type: api_record
            title: 中国历代人物传记资料库：王世烈（CBDB 635694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635694&o=json
            external_identifier: CBDB:635694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JD6XQpSfTuahXY4EdR1jtW
        subject_person_id: p_U8GQjr952VYySQd5ggEgbS
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
        - id: cs_W2DtcnJ7PJDB2doP8VoAJD
          claim_id: c_JD6XQpSfTuahXY4EdR1jtW
          source_id: s_1jDLJbc5ovuZCHEfCSGxF4
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

# 王世烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世烈 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世烈（CBDB 635694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635694&o=json)
