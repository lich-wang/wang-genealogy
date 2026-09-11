---
schema: wang-person/v1
id: p_iwotRk166CwUddrnrJYHtv
status: active
merged_into: null
display_name: 王安
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nDRx7f8oAT2MMaKEZJVHD9
        subject_person_id: p_iwotRk166CwUddrnrJYHtv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CBUVGQizAwDjR4S6LJPHhP
          claim_id: c_nDRx7f8oAT2MMaKEZJVHD9
          source_id: s_EfeMtdfrt7rWstHnFdDfVH
          stance: supports
          locator: CBDB:286063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286063）
          source: &a1
            id: s_EfeMtdfrt7rWstHnFdDfVH
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 286063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286063&o=json
            external_identifier: CBDB:286063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.227Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nCJWaHuNfynzwvmicG3T8N
        subject_person_id: p_iwotRk166CwUddrnrJYHtv
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
        - id: cs_s28GYUvvL25sNN9eeHxBNn
          claim_id: c_nCJWaHuNfynzwvmicG3T8N
          source_id: s_EfeMtdfrt7rWstHnFdDfVH
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
        id: c_8xdETBsEDowfh-2fT5kXgp
        subject_person_id: p_iwotRk166CwUddrnrJYHtv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cWinOhXdT4vSzaQ6uUwsm8
          claim_id: c_8xdETBsEDowfh-2fT5kXgp
          source_id: s_EfeMtdfrt7rWstHnFdDfVH
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百八十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UHUqHrmc3KJzYiDRgXCMg7
        status: active
        display_name: 王傅
        merged_into_person_id: null
  other: []
---

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_UHUqHrmc3KJzYiDRgXCMg7 | 王傅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 286063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286063&o=json)
