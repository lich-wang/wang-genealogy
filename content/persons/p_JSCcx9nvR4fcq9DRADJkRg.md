---
schema: wang-person/v1
id: p_JSCcx9nvR4fcq9DRADJkRg
status: active
merged_into: null
display_name: 王克臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_126a7bBoDSFHZFG5qnQCxj
        subject_person_id: p_JSCcx9nvR4fcq9DRADJkRg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SzPBWfx4A4uiRgEon6sngL
          claim_id: c_126a7bBoDSFHZFG5qnQCxj
          source_id: s_EqRNYhLKRB4AAxCXwrhciV
          stance: supports
          locator: CBDB:1834
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1834）
          source: &a1
            id: s_EqRNYhLKRB4AAxCXwrhciV
            source_type: api_record
            title: 中国历代人物传记资料库：王克臣（CBDB 1834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1834&o=json
            external_identifier: CBDB:1834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tpfgD2cJMazXGRFCHAoPw7
        subject_person_id: p_JSCcx9nvR4fcq9DRADJkRg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1014年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KMN7CGBJV1Myez6Mjwu6Ap
          claim_id: c_tpfgD2cJMazXGRFCHAoPw7
          source_id: s_EqRNYhLKRB4AAxCXwrhciV
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
        id: c_Tt8S8GqpvAKNXPJmP6yD7s
        subject_person_id: p_JSCcx9nvR4fcq9DRADJkRg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1089年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EG4Lodx1LBGyViy2vpkWMP
          claim_id: c_Tt8S8GqpvAKNXPJmP6yD7s
          source_id: s_EqRNYhLKRB4AAxCXwrhciV
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
        id: c_n1EA9W6KLfvQtVwhJ26B8w
        subject_person_id: p_JSCcx9nvR4fcq9DRADJkRg
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
        - id: cs_KNhLWYvNjyUgZK444foisc
          claim_id: c_n1EA9W6KLfvQtVwhJ26B8w
          source_id: s_EqRNYhLKRB4AAxCXwrhciV
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
        id: c_nusbbMcOR0loO5ywAAehe1
        subject_person_id: p_aeQuz9T27oQ8FHTk36tCX7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JSCcx9nvR4fcq9DRADJkRg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WoB7gCtMgr6lHg4lDZmgNr
          claim_id: c_nusbbMcOR0loO5ywAAehe1
          source_id: s_3bzL7xxo5wfo9JJxb3hVnV
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3bzL7xxo5wfo9JJxb3hVnV
            source_type: api_record
            title: 中国历代人物传记资料库：王徹（CBDB 37837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37837&o=json
            external_identifier: CBDB:37837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.268Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aeQuz9T27oQ8FHTk36tCX7
        status: active
        display_name: 王徹
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王克臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克臣 | accepted |
| birth.date | 1014年 | accepted |
| death.date | 1089年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_aeQuz9T27oQ8FHTk36tCX7 | 王徹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徹（CBDB 37837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37837&o=json)
- [中国历代人物传记资料库：王克臣（CBDB 1834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1834&o=json)
