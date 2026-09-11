---
schema: wang-person/v1
id: p_nW2uY1aEVTFZhoGi7Aowsj
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 152744
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Sy1DcZZazfr73vmDdYJpP
        subject_person_id: p_nW2uY1aEVTFZhoGi7Aowsj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FiRcJxdQe2QXtoUN4iZriB
          claim_id: c_4Sy1DcZZazfr73vmDdYJpP
          source_id: s_0hOZtLjD5Cl15Ax97GK2BH
          stance: supports
          locator: CBDB:152744
          quotation: null
          interpretation_note: CBDB 明确记录的王羊仁配偶
          source: &a1
            id: s_0hOZtLjD5Cl15Ax97GK2BH
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王羊仁妻)（CBDB 152744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152744&o=json
            external_identifier: CBDB:152744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_RFAvP58iueQy5rhQeyIZ5m
        subject_person_id: p_bbA2A1GrfUE3UHbSpwtEYz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_nW2uY1aEVTFZhoGi7Aowsj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B06hF74zij8UQBIZ77YFHH
          claim_id: c_RFAvP58iueQy5rhQeyIZ5m
          source_id: s_0hOZtLjD5Cl15Ax97GK2BH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 418：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bbA2A1GrfUE3UHbSpwtEYz
        status: active
        display_name: 王羊仁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_bbA2A1GrfUE3UHbSpwtEYz | 王羊仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王羊仁妻)（CBDB 152744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152744&o=json)
