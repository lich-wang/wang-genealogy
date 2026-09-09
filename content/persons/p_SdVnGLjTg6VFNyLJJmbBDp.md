---
schema: wang-person/v1
id: p_SdVnGLjTg6VFNyLJJmbBDp
status: active
merged_into: null
display_name: 王弘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t5NP8tiZwsq9k6DJiqo2za
        subject_person_id: p_SdVnGLjTg6VFNyLJJmbBDp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zofytKQ4g3rjmTKyVo9rfm
          claim_id: c_t5NP8tiZwsq9k6DJiqo2za
          source_id: s_Q7kQRAfL1JDypbEqGunAtf
          stance: supports
          locator: CBDB:262287
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262287）
          source: &a1
            id: s_Q7kQRAfL1JDypbEqGunAtf
            source_type: api_record
            title: 中国历代人物传记资料库：王弘（CBDB 262287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262287&o=json
            external_identifier: CBDB:262287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cD2ZWzKEoRWjAoxc3bMwn1
        subject_person_id: p_SdVnGLjTg6VFNyLJJmbBDp
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
        - id: cs_FiB6JxQ4VUZBJqBcGSgLFr
          claim_id: c_cD2ZWzKEoRWjAoxc3bMwn1
          source_id: s_Q7kQRAfL1JDypbEqGunAtf
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

# 王弘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘（CBDB 262287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262287&o=json)
