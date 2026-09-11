---
schema: wang-person/v1
id: p_SFzsLGx5pnHVeDMR9uM7K4
status: active
merged_into: null
display_name: 王榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rdT3fyqSQi7zqGPbQcTncQ
        subject_person_id: p_SFzsLGx5pnHVeDMR9uM7K4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_19jvGc9Gb9mUb8LY6VSCm2
          claim_id: c_rdT3fyqSQi7zqGPbQcTncQ
          source_id: s_RRdMjANQfYEpzK3FgGG6B1
          stance: supports
          locator: CBDB:334514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334514）
          source: &a1
            id: s_RRdMjANQfYEpzK3FgGG6B1
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 334514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334514&o=json
            external_identifier: CBDB:334514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8pb1zVNZCmCitRKi3yBJKN
        subject_person_id: p_SFzsLGx5pnHVeDMR9uM7K4
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
        - id: cs_E3iFRiyiN89i9KytnXqEwf
          claim_id: c_8pb1zVNZCmCitRKi3yBJKN
          source_id: s_RRdMjANQfYEpzK3FgGG6B1
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
        id: c_VXDW_Iw_m45CbtxczRjtkB
        subject_person_id: p_SFzsLGx5pnHVeDMR9uM7K4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kNK3hhmWa9pT6tDvK4Pp9u
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7CO5SV7pTohCqMXqkauMVO
          claim_id: c_VXDW_Iw_m45CbtxczRjtkB
          source_id: s_RRdMjANQfYEpzK3FgGG6B1
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kNK3hhmWa9pT6tDvK4Pp9u
        status: active
        display_name: 王任重
        merged_into_person_id: null
  other: []
---

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kNK3hhmWa9pT6tDvK4Pp9u | 王任重 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 334514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334514&o=json)
