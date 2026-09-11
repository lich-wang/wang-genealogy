---
schema: wang-person/v1
id: p_SAm8qh9b4YSVEVKhd8CvU4
status: active
merged_into: null
display_name: 王祿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fN9s9JDYh219Dr7pknDtVE
        subject_person_id: p_SAm8qh9b4YSVEVKhd8CvU4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RAHHwaKBBYXoxuGBJpfv9L
          claim_id: c_fN9s9JDYh219Dr7pknDtVE
          source_id: s_sEY1Suj5vgD7xoGYntU88F
          stance: supports
          locator: CBDB:334276
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334276）
          source: &a1
            id: s_sEY1Suj5vgD7xoGYntU88F
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 334276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334276&o=json
            external_identifier: CBDB:334276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.441Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fY8jRmijAeQFvPJ96KkKa2
        subject_person_id: p_SAm8qh9b4YSVEVKhd8CvU4
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
        - id: cs_Qs5jRhrJFkDSxGUiZaFpr9
          claim_id: c_fY8jRmijAeQFvPJ96KkKa2
          source_id: s_sEY1Suj5vgD7xoGYntU88F
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
        id: c_Qg9ZC2L1yh6Xwdy65qWaxX
        subject_person_id: p_SAm8qh9b4YSVEVKhd8CvU4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FL6Az72NGqaTwTmAdfMBte
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HPuyQsz5kGPFxH72s3LpVq
          claim_id: c_Qg9ZC2L1yh6Xwdy65qWaxX
          source_id: s_sEY1Suj5vgD7xoGYntU88F
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第六十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FL6Az72NGqaTwTmAdfMBte
        status: active
        display_name: 王懋德
        merged_into_person_id: null
  other: []
---

# 王祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祿 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_FL6Az72NGqaTwTmAdfMBte | 王懋德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祿（CBDB 334276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334276&o=json)
