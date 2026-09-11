---
schema: wang-person/v1
id: p_EuT4tpymKZYJEcDcNQPzbH
status: active
merged_into: null
display_name: 王世德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zDzetD4iMxbXBFvAGKkiCk
        subject_person_id: p_EuT4tpymKZYJEcDcNQPzbH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DtZbFgnTHN6Kcp57qKAonV
          claim_id: c_zDzetD4iMxbXBFvAGKkiCk
          source_id: s_rdsVWAczDb24U5Bdo6pQT6
          stance: supports
          locator: CBDB:69168
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69168）
          source: &a1
            id: s_rdsVWAczDb24U5Bdo6pQT6
            source_type: api_record
            title: 中国历代人物传记资料库：王世德（CBDB 69168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69168&o=json
            external_identifier: CBDB:69168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tMdHgomwJaHQBVv8Wm9q6u
        subject_person_id: p_EuT4tpymKZYJEcDcNQPzbH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1613年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7LB9Db5A72UFtAPH8DyBUp
          claim_id: c_tMdHgomwJaHQBVv8Wm9q6u
          source_id: s_rdsVWAczDb24U5Bdo6pQT6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zLWxkMQdBeHbjTNF3vzB4R
        subject_person_id: p_EuT4tpymKZYJEcDcNQPzbH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1693年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8he5NhJqjZChKxKur1vjJH
          claim_id: c_zLWxkMQdBeHbjTNF3vzB4R
          source_id: s_rdsVWAczDb24U5Bdo6pQT6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nSNp6ynKX7Kp7MHipoBdbA
        subject_person_id: p_EuT4tpymKZYJEcDcNQPzbH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世德（1613年—1693年），清人物。籍贯大興，曾任把總。（中国历代人物传记资料库 CBDB 69168）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WMhCT3x3KJ1a8fw8bryZ4s
          claim_id: c_nSNp6ynKX7Kp7MHipoBdbA
          source_id: s_rdsVWAczDb24U5Bdo6pQT6
          stance: supports
          locator: CBDB:69168
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XW2tUNxyLHDiZfxC76YDMy
        subject_person_id: p_VKiGcMc6DEgcxrjvjnHtWq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EuT4tpymKZYJEcDcNQPzbH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w8_dlN0UAzIDEYL2ivJTrt
          claim_id: c_XW2tUNxyLHDiZfxC76YDMy
          source_id: s_rdsVWAczDb24U5Bdo6pQT6
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12866：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VKiGcMc6DEgcxrjvjnHtWq
        status: active
        display_name: 王燿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世德 | accepted |
| birth.date | 1613年 | accepted |
| death.date | 1693年 | accepted |
| bio.summary | 王世德（1613年—1693年），清人物。籍贯大興，曾任把總。（中国历代人物传记资料库 CBDB 69168） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VKiGcMc6DEgcxrjvjnHtWq | 王燿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世德（CBDB 69168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69168&o=json)
