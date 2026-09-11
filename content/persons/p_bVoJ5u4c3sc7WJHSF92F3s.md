---
schema: wang-person/v1
id: p_bVoJ5u4c3sc7WJHSF92F3s
status: active
merged_into: null
display_name: 王頤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XSRjw2NnAVwMUSUr8H4oSb
        subject_person_id: p_bVoJ5u4c3sc7WJHSF92F3s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uUvP6B4XVnRHHd69uwn5aL
          claim_id: c_XSRjw2NnAVwMUSUr8H4oSb
          source_id: s_XhqM2x1w1o6JDKdocUNU3F
          stance: supports
          locator: CBDB:25465
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25465）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E4B4ELJg3vo4oWDQmVGBfa
        subject_person_id: p_bVoJ5u4c3sc7WJHSF92F3s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頤，宋人物。籍贯山陽。（中国历代人物传记资料库 CBDB 25465）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HTtbleJK86XbatFSqqZgnf
          claim_id: c_E4B4ELJg3vo4oWDQmVGBfa
          source_id: s_XhqM2x1w1o6JDKdocUNU3F
          stance: supports
          locator: CBDB:25465
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_PtwTXGo9NPse1etrpun577
        status: active
        display_name: 王柄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王頤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頤 | accepted |
| bio.summary | 王頤，宋人物。籍贯山陽。（中国历代人物传记资料库 CBDB 25465） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PtwTXGo9NPse1etrpun577 | 王柄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王頤（CBDB 25465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25465&o=json)
