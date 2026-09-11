---
schema: wang-person/v1
id: p_Gad2k716vZQqpDzRBx1f9z
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 289106
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XcwW8oDwYpkyDJgbCyBQCl
        subject_person_id: p_Gad2k716vZQqpDzRBx1f9z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PNbyQTZq1kN9b-XHaLSLZL
          claim_id: c_XcwW8oDwYpkyDJgbCyBQCl
          source_id: s_sMM9MsC1kqJp29gZyWqZwy
          stance: supports
          locator: CBDB:289106
          quotation: null
          interpretation_note: CBDB 明确记录的王銳配偶
          source: &a1
            id: s_sMM9MsC1kqJp29gZyWqZwy
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王銳妻)（CBDB 289106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289106&o=json
            external_identifier: CBDB:289106
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
        id: c_tbVwEJ1dgVO_IOCNGx9hCz
        subject_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Gad2k716vZQqpDzRBx1f9z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__WU7ZrW3eXdAHbq8BzqVVH
          claim_id: c_tbVwEJ1dgVO_IOCNGx9hCz
          source_id: s_sMM9MsC1kqJp29gZyWqZwy
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第七十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9uL4CzY8WtBqKSLRcVb8TP
        status: active
        display_name: 王銳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_9uL4CzY8WtBqKSLRcVb8TP | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王銳妻)（CBDB 289106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289106&o=json)
