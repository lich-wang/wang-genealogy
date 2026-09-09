---
schema: wang-person/v1
id: p_aZjgKvcVH56Ezk4VMFLB4K
status: active
merged_into: null
display_name: 王坊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SwCPschzeFxZpij8pRR6D2
        subject_person_id: p_aZjgKvcVH56Ezk4VMFLB4K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uW4gXBRic4xQpK8qB3NAyh
          claim_id: c_SwCPschzeFxZpij8pRR6D2
          source_id: s_BVjG9vu2Dke5ixjBb4Ctkw
          stance: supports
          locator: CBDB:493289
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（493289）
          source: &a1
            id: s_BVjG9vu2Dke5ixjBb4Ctkw
            source_type: api_record
            title: 中国历代人物传记资料库：王坊（CBDB 493289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493289&o=json
            external_identifier: CBDB:493289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z8DahuTMExanPfDoCnofe3
        subject_person_id: p_aZjgKvcVH56Ezk4VMFLB4K
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
        - id: cs_XHBURus2ikwAjKT89Q5uMi
          claim_id: c_z8DahuTMExanPfDoCnofe3
          source_id: s_BVjG9vu2Dke5ixjBb4Ctkw
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

# 王坊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王坊（CBDB 493289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493289&o=json)
