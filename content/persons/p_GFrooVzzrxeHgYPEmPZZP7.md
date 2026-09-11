---
schema: wang-person/v1
id: p_GFrooVzzrxeHgYPEmPZZP7
status: active
merged_into: null
display_name: 王顯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NufyWNDRHDY5ZEMW3XsWjs
        subject_person_id: p_GFrooVzzrxeHgYPEmPZZP7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A4y6HqLWCzT6jdLjZhoBJB
          claim_id: c_NufyWNDRHDY5ZEMW3XsWjs
          source_id: s_S1jB4sTAKccVMQvdj7kbbJ
          stance: supports
          locator: CBDB:684817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（684817）
          source: &a1
            id: s_S1jB4sTAKccVMQvdj7kbbJ
            source_type: api_record
            title: 中国历代人物传记资料库：王顯（CBDB 684817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684817&o=json
            external_identifier: CBDB:684817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DYrJZeK4utN6MPJB3xJ532
        subject_person_id: p_GFrooVzzrxeHgYPEmPZZP7
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
        - id: cs_UXMWdAirwkQms9PW1TEBkG
          claim_id: c_DYrJZeK4utN6MPJB3xJ532
          source_id: s_S1jB4sTAKccVMQvdj7kbbJ
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
        id: c_OEp49lTcnro8vrWM5gTjCW
        subject_person_id: p_EMcJ9fNVqRtQ6d9NXvcerV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GFrooVzzrxeHgYPEmPZZP7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rcmrFjlMD7a7p5pD2qy_uG
          claim_id: c_OEp49lTcnro8vrWM5gTjCW
          source_id: s_ck87NE7fwgpouGzP6KYPZg
          stance: supports
          locator: 仙居志，lgid=356630：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ck87NE7fwgpouGzP6KYPZg
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 126438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126438&o=json
            external_identifier: CBDB:126438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EMcJ9fNVqRtQ6d9NXvcerV
        status: active
        display_name: 王康
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EMcJ9fNVqRtQ6d9NXvcerV | 王康 | accepted |

## 外部来源

- [中国历代人物传记资料库：王康（CBDB 126438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126438&o=json)
- [中国历代人物传记资料库：王顯（CBDB 684817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684817&o=json)
