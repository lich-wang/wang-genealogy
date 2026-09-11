---
schema: wang-person/v1
id: p_Lfxqk8YUdxGPsWroHo1D4y
status: active
merged_into: null
display_name: 王价
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hGvu14ruuYYGJFCpKSAPaS
        subject_person_id: p_Lfxqk8YUdxGPsWroHo1D4y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9LQBpnyVCLN5DrBjjsCB2q
          claim_id: c_hGvu14ruuYYGJFCpKSAPaS
          source_id: s_mgpHoDWeiMRMv9bs2r3VwW
          stance: supports
          locator: CBDB:453652
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453652）
          source: &a1
            id: s_mgpHoDWeiMRMv9bs2r3VwW
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 453652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453652&o=json
            external_identifier: CBDB:453652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tk3GYLmPzY5TAyVKKMoGG1
        subject_person_id: p_Lfxqk8YUdxGPsWroHo1D4y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价，明人物。曾任典史。（中国历代人物传记资料库 CBDB 453652）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mRKeBwXi63IFqlp_RlPlhY
          claim_id: c_Tk3GYLmPzY5TAyVKKMoGG1
          source_id: s_mgpHoDWeiMRMv9bs2r3VwW
          stance: supports
          locator: CBDB:453652
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
  descendants: []
  other: []
---

# 王价

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王价 | accepted |
| bio.summary | 王价，明人物。曾任典史。（中国历代人物传记资料库 CBDB 453652） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王价（CBDB 453652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453652&o=json)
