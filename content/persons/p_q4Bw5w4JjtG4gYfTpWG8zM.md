---
schema: wang-person/v1
id: p_q4Bw5w4JjtG4gYfTpWG8zM
status: active
merged_into: null
display_name: 王輅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CWMitLuUZFFuZme8wBuHh8
        subject_person_id: p_q4Bw5w4JjtG4gYfTpWG8zM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7LPZQmx6QAFi4xtRkumpPA
          claim_id: c_CWMitLuUZFFuZme8wBuHh8
          source_id: s_fHnuR38ukYSTFJx6xo94a8
          stance: supports
          locator: CBDB:327809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327809）
          source: &a1
            id: s_fHnuR38ukYSTFJx6xo94a8
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 327809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327809&o=json
            external_identifier: CBDB:327809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SjNDo7PryL4LCmgnrL4Wks
        subject_person_id: p_q4Bw5w4JjtG4gYfTpWG8zM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅，明人物。嘉靖四十一年進士，曾任遞運所大使。（中国历代人物传记资料库 CBDB 327809）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZU7EbnZmYvspV2Kmp9_isE
          claim_id: c_SjNDo7PryL4LCmgnrL4Wks
          source_id: s_fHnuR38ukYSTFJx6xo94a8
          stance: supports
          locator: CBDB:327809
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_80rtDoRJSCe8sW_lR9XvXO
        subject_person_id: p_q4Bw5w4JjtG4gYfTpWG8zM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zhBu44YVnXVCpZPdAJQVQK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cJpS1qFmkRVuvccScioYIz
          claim_id: c_80rtDoRJSCe8sW_lR9XvXO
          source_id: s_fHnuR38ukYSTFJx6xo94a8
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zhBu44YVnXVCpZPdAJQVQK
        status: active
        display_name: 王汝梅
        merged_into_person_id: null
  other: []
---

# 王輅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輅 | accepted |
| bio.summary | 王輅，明人物。嘉靖四十一年進士，曾任遞運所大使。（中国历代人物传记资料库 CBDB 327809） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_zhBu44YVnXVCpZPdAJQVQK | 王汝梅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輅（CBDB 327809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327809&o=json)
