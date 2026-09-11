---
schema: wang-person/v1
id: p_gQeCuqLFbJY887X7LuDmRP
status: active
merged_into: null
display_name: 王世忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9mMps9tfY334hj6j7ZohJ7
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sN78UkP9ynimu4iU2NJzsx
          claim_id: c_9mMps9tfY334hj6j7ZohJ7
          source_id: s_Wm8g3XGtb5772AraWM4A8A
          stance: supports
          locator: CBDB:297275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297275）
          source: &a1
            id: s_Wm8g3XGtb5772AraWM4A8A
            source_type: api_record
            title: 中国历代人物传记资料库：王世忠（CBDB 297275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297275&o=json
            external_identifier: CBDB:297275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RDkLW6L5Qpd3T7pn1xvAu2
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
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
        - id: cs_EUKUFGjQ82qP3sCJSukJ2R
          claim_id: c_RDkLW6L5Qpd3T7pn1xvAu2
          source_id: s_Wm8g3XGtb5772AraWM4A8A
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
        id: c_diElRp8-1s--84dUn4NyIt
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BxBsFV6nqQmQf8oa142DSX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6YpZ31tuPrK3Zy_2Z5I1-d
          claim_id: c_diElRp8-1s--84dUn4NyIt
          source_id: s_vKbHuxPyeqDcM9pzGKeEoA
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百一十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vKbHuxPyeqDcM9pzGKeEoA
            source_type: api_record
            title: 中国历代人物传记资料库：王夢弼（CBDB 126784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126784&o=json
            external_identifier: CBDB:126784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BxBsFV6nqQmQf8oa142DSX
        status: active
        display_name: 王夢弼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世忠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BxBsFV6nqQmQf8oa142DSX | 王夢弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢弼（CBDB 126784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126784&o=json)
- [中国历代人物传记资料库：王世忠（CBDB 297275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297275&o=json)
