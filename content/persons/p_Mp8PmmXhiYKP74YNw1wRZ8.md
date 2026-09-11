---
schema: wang-person/v1
id: p_Mp8PmmXhiYKP74YNw1wRZ8
status: active
merged_into: null
display_name: 王嵎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ct7Q299zfm8Stn1nNv8PmX
        subject_person_id: p_Mp8PmmXhiYKP74YNw1wRZ8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZTzANKtDRJHJ3NDRB8zipA
          claim_id: c_Ct7Q299zfm8Stn1nNv8PmX
          source_id: s_jWFD3FFuMVYGp9RGSWY9kd
          stance: supports
          locator: CBDB:38462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38462）
          source: &a1
            id: s_jWFD3FFuMVYGp9RGSWY9kd
            source_type: api_record
            title: 中国历代人物传记资料库：王嵎（CBDB 38462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38462&o=json
            external_identifier: CBDB:38462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eE8VPE5AYGfonjiQpKqENG
        subject_person_id: p_Mp8PmmXhiYKP74YNw1wRZ8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1072年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iDcjNv22BQkf4NRnhhkDU5
          claim_id: c_eE8VPE5AYGfonjiQpKqENG
          source_id: s_jWFD3FFuMVYGp9RGSWY9kd
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
        id: c_iyAJLTJUtfy3aj7MaRV22W
        subject_person_id: p_Mp8PmmXhiYKP74YNw1wRZ8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1112年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ENQ28ysRJG4DPWmSGxL9nw
          claim_id: c_iyAJLTJUtfy3aj7MaRV22W
          source_id: s_jWFD3FFuMVYGp9RGSWY9kd
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
        id: c_ejuH2LjDNCrrGQF4KLwYuA
        subject_person_id: p_Mp8PmmXhiYKP74YNw1wRZ8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵎（1072年—1112年），宋人物。籍贯鉅野。（中国历代人物传记资料库 CBDB 38462）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S38vXeFgLHCbOBixK9uF9-
          claim_id: c_ejuH2LjDNCrrGQF4KLwYuA
          source_id: s_jWFD3FFuMVYGp9RGSWY9kd
          stance: supports
          locator: CBDB:38462
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other: []
---

# 王嵎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵎 | accepted |
| birth.date | 1072年 | accepted |
| death.date | 1112年 | accepted |
| bio.summary | 王嵎（1072年—1112年），宋人物。籍贯鉅野。（中国历代人物传记资料库 CBDB 38462） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵎（CBDB 38462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38462&o=json)
