---
schema: wang-person/v1
id: p_2MYE7mxg3TEGFT3niXp3p2
status: active
merged_into: null
display_name: 王厚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vpYXvo4h2MQxUAtfdQtQqD
        subject_person_id: p_2MYE7mxg3TEGFT3niXp3p2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王厚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PYj5kYMexbe6Z6D9ffnGnQ
          claim_id: c_vpYXvo4h2MQxUAtfdQtQqD
          source_id: s_gUqAs4UAoHkPoSq7bDZqMp
          stance: supports
          locator: CBDB:502775
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（502775）
          source: &a1
            id: s_gUqAs4UAoHkPoSq7bDZqMp
            source_type: api_record
            title: 中国历代人物传记资料库：王厚（CBDB 502775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502775&o=json
            external_identifier: CBDB:502775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YPvtDUEQRTaYiNbAjTwHcg
        subject_person_id: p_2MYE7mxg3TEGFT3niXp3p2
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
        - id: cs_vNuDJF62FgwkdoLj15kXVU
          claim_id: c_YPvtDUEQRTaYiNbAjTwHcg
          source_id: s_gUqAs4UAoHkPoSq7bDZqMp
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
  descendants: []
  other: []
---

# 王厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王厚 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王厚（CBDB 502775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502775&o=json)
