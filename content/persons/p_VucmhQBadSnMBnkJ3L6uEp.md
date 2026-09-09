---
schema: wang-person/v1
id: p_VucmhQBadSnMBnkJ3L6uEp
status: active
merged_into: null
display_name: 王儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mrgvP1k2AMLMQM3pEK8JNy
        subject_person_id: p_VucmhQBadSnMBnkJ3L6uEp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Z8VNXFcav7PQpEiqy3HSM
          claim_id: c_mrgvP1k2AMLMQM3pEK8JNy
          source_id: s_QXUuhRPU8tPX4LxiMVDTLB
          stance: supports
          locator: CBDB:202837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202837）
          source: &a1
            id: s_QXUuhRPU8tPX4LxiMVDTLB
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 202837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202837&o=json
            external_identifier: CBDB:202837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Y38MPh1mNWJcJt95Bc7q6t
        subject_person_id: p_VucmhQBadSnMBnkJ3L6uEp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1497年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GW87US6xmgc6Lh8YJSrPKy
          claim_id: c_Y38MPh1mNWJcJt95Bc7q6t
          source_id: s_QXUuhRPU8tPX4LxiMVDTLB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Yq2Ye5hzKu1iG1de6uwUG
        subject_person_id: p_VucmhQBadSnMBnkJ3L6uEp
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
        - id: cs_PDbK2LJEEdvQ2NkyiVcsow
          claim_id: c_4Yq2Ye5hzKu1iG1de6uwUG
          source_id: s_QXUuhRPU8tPX4LxiMVDTLB
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

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| birth.date | 1497年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 202837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202837&o=json)
