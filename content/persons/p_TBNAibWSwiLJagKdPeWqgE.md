---
schema: wang-person/v1
id: p_TBNAibWSwiLJagKdPeWqgE
status: active
merged_into: null
display_name: 王一陽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B8NGSBAFePizTZ82WXBrTN
        subject_person_id: p_TBNAibWSwiLJagKdPeWqgE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5SwsYZLi2vqMMLv5LYvNF7
          claim_id: c_B8NGSBAFePizTZ82WXBrTN
          source_id: s_muRRM2VJ9FAaER9LPaKwQF
          stance: supports
          locator: CBDB:332995
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332995）
          source: &a1
            id: s_muRRM2VJ9FAaER9LPaKwQF
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 332995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332995&o=json
            external_identifier: CBDB:332995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LEeuBuKXEd2LrXLhdE3AZq
        subject_person_id: p_TBNAibWSwiLJagKdPeWqgE
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
        - id: cs_ZgR13LdNTjKZQ1y6vAQtKo
          claim_id: c_LEeuBuKXEd2LrXLhdE3AZq
          source_id: s_muRRM2VJ9FAaER9LPaKwQF
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
        id: c_dqeIDkZbMDW88WgnUIc0Iy
        subject_person_id: p_TBNAibWSwiLJagKdPeWqgE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RPorhHfNa1cjhpbMo2ZnFo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2mDSPEYhEgWgd3RsjX0AXD
          claim_id: c_dqeIDkZbMDW88WgnUIc0Iy
          source_id: s_muRRM2VJ9FAaER9LPaKwQF
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百六十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RPorhHfNa1cjhpbMo2ZnFo
        status: active
        display_name: 王三鍚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王一陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一陽 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RPorhHfNa1cjhpbMo2ZnFo | 王三鍚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一陽（CBDB 332995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332995&o=json)
