---
schema: wang-person/v1
id: p_4APHAkfxphUBchHMpLcHUx
status: active
merged_into: null
display_name: 王勣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kWryDFxKDxp71ZfZrHvFNn
        subject_person_id: p_4APHAkfxphUBchHMpLcHUx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9QjK9aqReBTPaEYDCTDLeN
          claim_id: c_kWryDFxKDxp71ZfZrHvFNn
          source_id: s_4WBy56iMQbtKiuNCdXvkJD
          stance: supports
          locator: CBDB:148854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148854）
          source: &a1
            id: s_4WBy56iMQbtKiuNCdXvkJD
            source_type: api_record
            title: 中国历代人物传记资料库：王勣（CBDB 148854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148854&o=json
            external_identifier: CBDB:148854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z4nr4VzTDAFYHVWP8EUoKp
        subject_person_id: p_4APHAkfxphUBchHMpLcHUx
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
        - id: cs_erQ15zhxA4qKDYYLk32Dn6
          claim_id: c_z4nr4VzTDAFYHVWP8EUoKp
          source_id: s_4WBy56iMQbtKiuNCdXvkJD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_cFtF5x6zypoGJlYmOF3_Sh
        subject_person_id: p_4APHAkfxphUBchHMpLcHUx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yy4N7cp3CuKBbXVu1CigcM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wHzFwHXAL4_2RAfoDbiRGX
          claim_id: c_cFtF5x6zypoGJlYmOF3_Sh
          source_id: s_4WBy56iMQbtKiuNCdXvkJD
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 28：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yy4N7cp3CuKBbXVu1CigcM
        status: active
        display_name: 王文曉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_X8adPSQX20yfzvWkOyCdyv
        subject_person_id: p_4APHAkfxphUBchHMpLcHUx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DpKNJ3621m7pyCWFk9eCiZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YVNglMSbFZY5-lFZ4Dn-XI
          claim_id: c_X8adPSQX20yfzvWkOyCdyv
          source_id: s_4WBy56iMQbtKiuNCdXvkJD
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonglong 15：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DpKNJ3621m7pyCWFk9eCiZ
        status: active
        display_name: 王明
        merged_into_person_id: null
  other: []
---

# 王勣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勣 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yy4N7cp3CuKBbXVu1CigcM | 王文曉 | accepted |
| descendants | p_DpKNJ3621m7pyCWFk9eCiZ | 王明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勣（CBDB 148854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148854&o=json)
