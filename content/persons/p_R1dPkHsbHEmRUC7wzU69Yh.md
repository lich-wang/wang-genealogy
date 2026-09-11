---
schema: wang-person/v1
id: p_R1dPkHsbHEmRUC7wzU69Yh
status: active
merged_into: null
display_name: 王仁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aXj9mUmmi31ECeKLsmSTB6
        subject_person_id: p_R1dPkHsbHEmRUC7wzU69Yh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YD7Pzgt4duKfy3AreB9mxm
          claim_id: c_aXj9mUmmi31ECeKLsmSTB6
          source_id: s_JnSA2Gnvd6z2oBot5apEKN
          stance: supports
          locator: CBDB:13474
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13474）
          source: &a1
            id: s_JnSA2Gnvd6z2oBot5apEKN
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 13474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13474&o=json
            external_identifier: CBDB:13474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LEvJFYMfbgu3gkpEvb4Q7q
        subject_person_id: p_R1dPkHsbHEmRUC7wzU69Yh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁，宋人物。籍贯中山府。（中国历代人物传记资料库 CBDB 13474）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_obHcrsMCrrbEB3tdWE8AD3
          claim_id: c_LEvJFYMfbgu3gkpEvb4Q7q
          source_id: s_JnSA2Gnvd6z2oBot5apEKN
          stance: supports
          locator: CBDB:13474
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Hidm4GIvz6lSIHd6wjXNQ7
        subject_person_id: p_R1dPkHsbHEmRUC7wzU69Yh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2vFSweinS44zUFpk91U28q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EN3hNvoKbe7JgwmIUuLk_H
          claim_id: c_Hidm4GIvz6lSIHd6wjXNQ7
          source_id: s_MXEn6srux9SnSuLUMnDoEu
          stance: supports
          locator: CBDB 双向互证（父 王仁 ⇄ 子 王忠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_MXEn6srux9SnSuLUMnDoEu
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 13475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13475&o=json
            external_identifier: CBDB:13475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2vFSweinS44zUFpk91U28q
        status: active
        display_name: 王忠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | 王仁，宋人物。籍贯中山府。（中国历代人物传记资料库 CBDB 13474） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2vFSweinS44zUFpk91U28q | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 13474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13474&o=json)
- [中国历代人物传记资料库：王忠（CBDB 13475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13475&o=json)
