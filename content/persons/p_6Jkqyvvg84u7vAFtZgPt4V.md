---
schema: wang-person/v1
id: p_6Jkqyvvg84u7vAFtZgPt4V
status: active
merged_into: null
display_name: 王英
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6b8KeLMTBSu8zfissiQ7si
        subject_person_id: p_6Jkqyvvg84u7vAFtZgPt4V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dS19MqVDrFbXKEHUQL7X9C
          claim_id: c_6b8KeLMTBSu8zfissiQ7si
          source_id: s_xHXeSx7ivKFLDEoJq1fXu1
          stance: supports
          locator: CBDB:320449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320449）
          source: &a1
            id: s_xHXeSx7ivKFLDEoJq1fXu1
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 320449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320449&o=json
            external_identifier: CBDB:320449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GD35n9vBUaQvMiNh4Z3ZtJ
        subject_person_id: p_6Jkqyvvg84u7vAFtZgPt4V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英，明人物。嘉靖三十五年進士。（中国历代人物传记资料库 CBDB 320449）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__h6jiMbbCg-BI3a_dCXXkx
          claim_id: c_GD35n9vBUaQvMiNh4Z3ZtJ
          source_id: s_xHXeSx7ivKFLDEoJq1fXu1
          stance: supports
          locator: CBDB:320449
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
        id: c_jPebMKDjuaRvdYdGeKP2hR
        subject_person_id: p_6Jkqyvvg84u7vAFtZgPt4V
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VZLf26Mozo1ZFBb1o11yr1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R13sikz4Sh56CmN0jtNRp7
          claim_id: c_jPebMKDjuaRvdYdGeKP2hR
          source_id: s_xHXeSx7ivKFLDEoJq1fXu1
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第四十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VZLf26Mozo1ZFBb1o11yr1
        status: active
        display_name: 王尚直
        merged_into_person_id: null
  other: []
---

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | 王英，明人物。嘉靖三十五年進士。（中国历代人物传记资料库 CBDB 320449） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_VZLf26Mozo1ZFBb1o11yr1 | 王尚直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 320449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320449&o=json)
