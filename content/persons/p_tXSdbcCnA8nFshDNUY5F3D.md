---
schema: wang-person/v1
id: p_tXSdbcCnA8nFshDNUY5F3D
status: active
merged_into: null
display_name: 王璧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dNgYgDM5sgigVCUhrr86BN
        subject_person_id: p_tXSdbcCnA8nFshDNUY5F3D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wu7Hok9F4hczaRiCG1929r
          claim_id: c_dNgYgDM5sgigVCUhrr86BN
          source_id: s_am1Nm27PEZQtFDQP3pnqa7
          stance: supports
          locator: CBDB:225969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225969）
          source: &a1
            id: s_am1Nm27PEZQtFDQP3pnqa7
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 225969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225969&o=json
            external_identifier: CBDB:225969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pd7f93dQXT7ex1bKrZKUuY
        subject_person_id: p_tXSdbcCnA8nFshDNUY5F3D
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
        - id: cs_zWjAdv7dtjXzPS5QpRpJFd
          claim_id: c_pd7f93dQXT7ex1bKrZKUuY
          source_id: s_am1Nm27PEZQtFDQP3pnqa7
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
        id: c_R0MK7-iL2PMTzQ59R_NwtI
        subject_person_id: p_tXSdbcCnA8nFshDNUY5F3D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YS93bFMg2tXSWdgNRCjryF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hJuc9GfuS3cXK8gTBqEEa6
          claim_id: c_R0MK7-iL2PMTzQ59R_NwtI
          source_id: s_am1Nm27PEZQtFDQP3pnqa7
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YS93bFMg2tXSWdgNRCjryF
        status: active
        display_name: 王宗彝
        merged_into_person_id: null
  other: []
---

# 王璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_YS93bFMg2tXSWdgNRCjryF | 王宗彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璧（CBDB 225969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225969&o=json)
