---
schema: wang-person/v1
id: p_3x4jebHTQ9Pn46x4TcE5WS
status: active
merged_into: null
display_name: 王昇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eLKXVktAEMdDjXQ4Pn65xQ
        subject_person_id: p_3x4jebHTQ9Pn46x4TcE5WS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AxD92Fc57Es5d2R29dPn6z
          claim_id: c_eLKXVktAEMdDjXQ4Pn65xQ
          source_id: s_5dSCsjLH47V5uunXrF3Ycj
          stance: supports
          locator: CBDB:260055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260055）
          source: &a1
            id: s_5dSCsjLH47V5uunXrF3Ycj
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 260055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260055&o=json
            external_identifier: CBDB:260055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yuHFKDftudYzv3vSXMMPC2
        subject_person_id: p_3x4jebHTQ9Pn46x4TcE5WS
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
        - id: cs_5U7Pn7Z7uL8jVaKwxKPQKk
          claim_id: c_yuHFKDftudYzv3vSXMMPC2
          source_id: s_5dSCsjLH47V5uunXrF3Ycj
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
        id: c_hBQeio96ZF6lhcAVGB4MdJ
        subject_person_id: p_3x4jebHTQ9Pn46x4TcE5WS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vnNgpS2EoPkSDWNJdYVAh5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yAA8WicZuVx-L1N8vrLoK6
          claim_id: c_hBQeio96ZF6lhcAVGB4MdJ
          source_id: s_5dSCsjLH47V5uunXrF3Ycj
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vnNgpS2EoPkSDWNJdYVAh5
        status: active
        display_name: 王資良
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vnNgpS2EoPkSDWNJdYVAh5 | 王資良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 260055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260055&o=json)
