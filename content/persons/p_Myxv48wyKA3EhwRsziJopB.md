---
schema: wang-person/v1
id: p_Myxv48wyKA3EhwRsziJopB
status: active
merged_into: null
display_name: 王輅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7BKz9MQT4uNrTJutsVGGFy
        subject_person_id: p_Myxv48wyKA3EhwRsziJopB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_93Joz8rZVFdAbmdTmvQG3y
          claim_id: c_7BKz9MQT4uNrTJutsVGGFy
          source_id: s_ykRECbMUZEggZEk7anueVi
          stance: supports
          locator: CBDB:309372
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309372）
          source: &a1
            id: s_ykRECbMUZEggZEk7anueVi
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 309372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309372&o=json
            external_identifier: CBDB:309372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S9Pcr9xntHvoHYF3VaiVNr
        subject_person_id: p_Myxv48wyKA3EhwRsziJopB
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
        - id: cs_7DE5kSKp1FKAAnSvKEJGVE
          claim_id: c_S9Pcr9xntHvoHYF3VaiVNr
          source_id: s_ykRECbMUZEggZEk7anueVi
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
        id: c_PT-JrbfjrB0pErdAGN0xgG
        subject_person_id: p_Myxv48wyKA3EhwRsziJopB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_THQx38bKosUpdXRAkw2R2w
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_It2CjD7_NNMd_GtUFVg-rk
          claim_id: c_PT-JrbfjrB0pErdAGN0xgG
          source_id: s_ykRECbMUZEggZEk7anueVi
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_THQx38bKosUpdXRAkw2R2w
        status: active
        display_name: 王世貞
        merged_into_person_id: null
  other: []
---

# 王輅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輅 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_THQx38bKosUpdXRAkw2R2w | 王世貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輅（CBDB 309372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309372&o=json)
