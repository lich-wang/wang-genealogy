---
schema: wang-person/v1
id: p_3hdu1ravStpuWm6LFsFbv7
status: active
merged_into: null
display_name: 王叔瑜
cbdb_id: 322398
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f8FVAVupf3mXdG9GjhtTWr
        subject_person_id: p_3hdu1ravStpuWm6LFsFbv7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔瑜，明人物。宣德五年進士。（中国历代人物传记资料库 CBDB 322398）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_uqZuSKfP3mJLg8tEEE6n4_
          claim_id: c_f8FVAVupf3mXdG9GjhtTWr
          source_id: s_faRi7Kz5VsQFjDQYjeYmaF
          stance: supports
          locator: CBDB:322398
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_faRi7Kz5VsQFjDQYjeYmaF
            source_type: api_record
            title: 中国历代人物传记资料库：王叔瑜（CBDB 322398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322398&o=json
            external_identifier: CBDB:322398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nu2gd3vkprh5Ug2eMpeQYT
        subject_person_id: p_3hdu1ravStpuWm6LFsFbv7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EnESfmsKrhqHK39Z7FUzJm
          claim_id: c_nu2gd3vkprh5Ug2eMpeQYT
          source_id: s_faRi7Kz5VsQFjDQYjeYmaF
          stance: supports
          locator: CBDB:322398
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
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
        id: c_lBUHE-gYZwSxQHnaN2Kmj6
        subject_person_id: p_3hdu1ravStpuWm6LFsFbv7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2aMd4JjZAnRDvAWGEDvPYQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2WNSJg_rkwrXCeDJvW6JfV
          claim_id: c_lBUHE-gYZwSxQHnaN2Kmj6
          source_id: s_YpAKSrU9qwMyHtJCQL4Hfc
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YpAKSrU9qwMyHtJCQL4Hfc
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 67669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67669&o=json
            external_identifier: CBDB:67669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2aMd4JjZAnRDvAWGEDvPYQ
        status: active
        display_name: 王復
        merged_into_person_id: null
  other: []
---

# 王叔瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王叔瑜，明人物。宣德五年進士。（中国历代人物传记资料库 CBDB 322398） | accepted |
| name.primary | 王叔瑜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2aMd4JjZAnRDvAWGEDvPYQ | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 67669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67669&o=json)
- [中国历代人物传记资料库：王叔瑜（CBDB 322398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322398&o=json)
