---
schema: wang-person/v1
id: p_dS2fybT134JWfvQgxwSUXh
status: active
merged_into: null
display_name: 王祺
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UzNQjiBhG6HQBJiKxwEe6R
        subject_person_id: p_dS2fybT134JWfvQgxwSUXh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7qQ2PJcRsVF2UFrn5WyzzX
          claim_id: c_UzNQjiBhG6HQBJiKxwEe6R
          source_id: s_xGu8ZHdsVYvbi2HJLhCCJN
          stance: supports
          locator: CBDB:206753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206753）
          source: &a1
            id: s_xGu8ZHdsVYvbi2HJLhCCJN
            source_type: api_record
            title: 中国历代人物传记资料库：王祺（CBDB 206753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206753&o=json
            external_identifier: CBDB:206753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_m2pD2QEGVvSC413Fxth4Qc
        subject_person_id: p_dS2fybT134JWfvQgxwSUXh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1555年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_88r3DJ5o61k7W5Uux7jZey
          claim_id: c_m2pD2QEGVvSC413Fxth4Qc
          source_id: s_xGu8ZHdsVYvbi2HJLhCCJN
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
        id: c_R7ksVAfXCQqmMq8TLS3ES8
        subject_person_id: p_dS2fybT134JWfvQgxwSUXh
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
        - id: cs_FRgn3NKL8NdCLWG1JC9WgH
          claim_id: c_R7ksVAfXCQqmMq8TLS3ES8
          source_id: s_xGu8ZHdsVYvbi2HJLhCCJN
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
  ancestors:
    - claim:
        id: c_X5qYvisdd_iIwjOC9thXZI
        subject_person_id: p_4i1wPqBamEzau4243mF8PX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dS2fybT134JWfvQgxwSUXh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nsmKvr5ljLepPEBep3iWPE
          claim_id: c_X5qYvisdd_iIwjOC9thXZI
          source_id: s_9uptntn7WELuSF1sq5u9Ln
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第五十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9uptntn7WELuSF1sq5u9Ln
            source_type: api_record
            title: 中国历代人物传记资料库：王洧（CBDB 222714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222714&o=json
            external_identifier: CBDB:222714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4i1wPqBamEzau4243mF8PX
        status: active
        display_name: 王洧
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王祺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祺 | accepted |
| birth.date | 1555年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_4i1wPqBamEzau4243mF8PX | 王洧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祺（CBDB 206753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206753&o=json)
- [中国历代人物传记资料库：王洧（CBDB 222714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222714&o=json)
