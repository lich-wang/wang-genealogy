---
schema: wang-person/v1
id: p_PtwTXGo9NPse1etrpun577
status: active
merged_into: null
display_name: 王柄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cnGRQqt7ww2hnnaRxPuvNL
        subject_person_id: p_PtwTXGo9NPse1etrpun577
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z83W794yxmmCa1UME42Msm
          claim_id: c_cnGRQqt7ww2hnnaRxPuvNL
          source_id: s_VdCgSSwYQ9dNodJRkix98W
          stance: supports
          locator: CBDB:25464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25464）
          source: &a1
            id: s_VdCgSSwYQ9dNodJRkix98W
            source_type: api_record
            title: 中国历代人物传记资料库：王柄（CBDB 25464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25464&o=json
            external_identifier: CBDB:25464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e1XBG8qPdH3j16X9ZJxhEa
        subject_person_id: p_PtwTXGo9NPse1etrpun577
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8VFP72N8uFooi7KxdP342k
          claim_id: c_e1XBG8qPdH3j16X9ZJxhEa
          source_id: s_VdCgSSwYQ9dNodJRkix98W
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uaBe7cXnWNCALAK5KGJnE5
        subject_person_id: p_PtwTXGo9NPse1etrpun577
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bVoJ5u4c3sc7WJHSF92F3s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gw1i7_Mkc1wtS4JtOGJtdG
          claim_id: c_uaBe7cXnWNCALAK5KGJnE5
          source_id: s_XhqM2x1w1o6JDKdocUNU3F
          stance: supports
          locator: CBDB 双向互证（父 王柄 ⇄ 子 王頤）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_XhqM2x1w1o6JDKdocUNU3F
            source_type: api_record
            title: 中国历代人物传记资料库：王頤（CBDB 25465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25465&o=json
            external_identifier: CBDB:25465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bVoJ5u4c3sc7WJHSF92F3s
        status: active
        display_name: 王頤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王柄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柄 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bVoJ5u4c3sc7WJHSF92F3s | 王頤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王柄（CBDB 25464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25464&o=json)
- [中国历代人物传记资料库：王頤（CBDB 25465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25465&o=json)
