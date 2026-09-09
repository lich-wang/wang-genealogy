---
schema: wang-person/v1
id: p_Ldq4i174vMbjAVPwq2WyED
status: active
merged_into: null
display_name: 王處默
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aRM73EWhBFsJwYedAGpnfR
        subject_person_id: p_Ldq4i174vMbjAVPwq2WyED
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處默
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JHhpDatt1YdBK8un9Ve5E5
          claim_id: c_aRM73EWhBFsJwYedAGpnfR
          source_id: s_aMhBgJK2NgCmtr8jUELa1M
          stance: supports
          locator: CBDB:153675
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153675）
          source: &a1
            id: s_aMhBgJK2NgCmtr8jUELa1M
            source_type: api_record
            title: 中国历代人物传记资料库：王處默（CBDB 153675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153675&o=json
            external_identifier: CBDB:153675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qyrK9PmQgCtEvPS5rNVvCS
        subject_person_id: p_Ldq4i174vMbjAVPwq2WyED
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
        - id: cs_TyXLqDfzJ8MTh7FxhtJGxD
          claim_id: c_qyrK9PmQgCtEvPS5rNVvCS
          source_id: s_aMhBgJK2NgCmtr8jUELa1M
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

# 王處默

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處默 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王處默（CBDB 153675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153675&o=json)
