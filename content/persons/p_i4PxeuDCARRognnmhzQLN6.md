---
schema: wang-person/v1
id: p_i4PxeuDCARRognnmhzQLN6
status: active
merged_into: null
display_name: 王所
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PZtm5KEHJjtQnF2GBaBA8E
        subject_person_id: p_i4PxeuDCARRognnmhzQLN6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王所
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eP5FHvLUmRmQuVMVfBaKGk
          claim_id: c_PZtm5KEHJjtQnF2GBaBA8E
          source_id: s_F2aEGwaWhgrquNWHmcproZ
          stance: supports
          locator: CBDB:294548
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294548）
          source: &a1
            id: s_F2aEGwaWhgrquNWHmcproZ
            source_type: api_record
            title: 中国历代人物传记资料库：王所（CBDB 294548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294548&o=json
            external_identifier: CBDB:294548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gPuQeA4NM5UuusrpJy5KBq
        subject_person_id: p_i4PxeuDCARRognnmhzQLN6
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
        - id: cs_TdeT5cXog3G5v5KrVtKpX5
          claim_id: c_gPuQeA4NM5UuusrpJy5KBq
          source_id: s_F2aEGwaWhgrquNWHmcproZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VBMLvQk7e9bdWkQT1zbXu5
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i4PxeuDCARRognnmhzQLN6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p4r0hZYJ_sgjeaoRdGmYoO
          claim_id: c_VBMLvQk7e9bdWkQT1zbXu5
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KnMS3iSfMsUJhjJLWsaYyT
            source_type: api_record
            title: 中国历代人物传记资料库：王玉汝（CBDB 202795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json
            external_identifier: CBDB:202795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aJQ3escM6jBxZ8EP2idom6
        status: active
        display_name: 王玉汝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王所

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王所 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aJQ3escM6jBxZ8EP2idom6 | 王玉汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王所（CBDB 294548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294548&o=json)
- [中国历代人物传记资料库：王玉汝（CBDB 202795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json)
