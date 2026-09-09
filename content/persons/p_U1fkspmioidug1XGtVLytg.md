---
schema: wang-person/v1
id: p_U1fkspmioidug1XGtVLytg
status: active
merged_into: null
display_name: 王友仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MGP7t133WP94MckpyL5qAt
        subject_person_id: p_U1fkspmioidug1XGtVLytg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ABNypuGknMGRB7FA4xzmtB
          claim_id: c_MGP7t133WP94MckpyL5qAt
          source_id: s_eoDVCVGxC9chBfrDYCmNCe
          stance: supports
          locator: CBDB:636454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636454）
          source: &a1
            id: s_eoDVCVGxC9chBfrDYCmNCe
            source_type: api_record
            title: 中国历代人物传记资料库：王友仁（CBDB 636454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636454&o=json
            external_identifier: CBDB:636454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.179Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pzJWGkF2VVg96PK1RmHDrL
        subject_person_id: p_U1fkspmioidug1XGtVLytg
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
        - id: cs_VmbbS8ueDSqdM3KyL7GBV3
          claim_id: c_pzJWGkF2VVg96PK1RmHDrL
          source_id: s_eoDVCVGxC9chBfrDYCmNCe
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

# 王友仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友仁 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友仁（CBDB 636454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636454&o=json)
