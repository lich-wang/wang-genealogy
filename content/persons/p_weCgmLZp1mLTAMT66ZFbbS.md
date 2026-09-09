---
schema: wang-person/v1
id: p_weCgmLZp1mLTAMT66ZFbbS
status: active
merged_into: null
display_name: 王瑛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GFygYLkzeKwP2fL7W26yFt
        subject_person_id: p_weCgmLZp1mLTAMT66ZFbbS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BPRJJU2NCaBDp2TLPvckPG
          claim_id: c_GFygYLkzeKwP2fL7W26yFt
          source_id: s_86DwdLYqzJ4RRo8LynXH8i
          stance: supports
          locator: CBDB:306580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306580）
          source: &a1
            id: s_86DwdLYqzJ4RRo8LynXH8i
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 306580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306580&o=json
            external_identifier: CBDB:306580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.769Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SS6XQasdQWgrh5MGSGMrYS
        subject_person_id: p_weCgmLZp1mLTAMT66ZFbbS
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
        - id: cs_3ZHASNSF5BfRdsBDFs7DyE
          claim_id: c_SS6XQasdQWgrh5MGSGMrYS
          source_id: s_86DwdLYqzJ4RRo8LynXH8i
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

# 王瑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑛（CBDB 306580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306580&o=json)
