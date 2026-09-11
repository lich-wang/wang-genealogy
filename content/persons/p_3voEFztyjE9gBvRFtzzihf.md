---
schema: wang-person/v1
id: p_3voEFztyjE9gBvRFtzzihf
status: active
merged_into: null
display_name: 王柏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kpzEcLjmgk8Lbv4FizJtTm
        subject_person_id: p_3voEFztyjE9gBvRFtzzihf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PPB3JjnetXn9LgqQh687RJ
          claim_id: c_kpzEcLjmgk8Lbv4FizJtTm
          source_id: s_pZFYSGMqe3azKLTFMuud9u
          stance: supports
          locator: CBDB:10706
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10706）
          source: &a1
            id: s_pZFYSGMqe3azKLTFMuud9u
            source_type: api_record
            title: 中国历代人物传记资料库：王柏（CBDB 10706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10706&o=json
            external_identifier: CBDB:10706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.552Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E4rGo6zEBd3JJPxBx61xwB
        subject_person_id: p_3voEFztyjE9gBvRFtzzihf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1197年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TVnsagLogx6kHvyxfvd4s3
          claim_id: c_E4rGo6zEBd3JJPxBx61xwB
          source_id: s_pZFYSGMqe3azKLTFMuud9u
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
        id: c_iV7MqrJAFDg9p6DcU67Xwc
        subject_person_id: p_3voEFztyjE9gBvRFtzzihf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1274年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sXT4cS48CjwduydL3RD5PN
          claim_id: c_iV7MqrJAFDg9p6DcU67Xwc
          source_id: s_pZFYSGMqe3azKLTFMuud9u
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
        id: c_iHnPEJ6BPCeS1E6h2j7JR8
        subject_person_id: p_3voEFztyjE9gBvRFtzzihf
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
        - id: cs_bhKrATaqfnZsR9roSEeCPf
          claim_id: c_iHnPEJ6BPCeS1E6h2j7JR8
          source_id: s_pZFYSGMqe3azKLTFMuud9u
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
        id: c_3xp1NkqsMJBxOT3KD4BRrF
        subject_person_id: p_UJHNJUefP1hMoQv16JZ99z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3voEFztyjE9gBvRFtzzihf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMUsiWPzqUZOHv7q_37MLW
          claim_id: c_3xp1NkqsMJBxOT3KD4BRrF
          source_id: s_pZFYSGMqe3azKLTFMuud9u
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UJHNJUefP1hMoQv16JZ99z
        status: active
        display_name: 王師愈
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_4ZugZe_AlDuuQvmeIExOeB
        subject_person_id: p_3voEFztyjE9gBvRFtzzihf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QDGt3MEV5PfFs8HB9rQeGK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ek-hoLNFBxgKyfDB9G-rcS
          claim_id: c_4ZugZe_AlDuuQvmeIExOeB
          source_id: s_pZFYSGMqe3azKLTFMuud9u
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1363：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QDGt3MEV5PfFs8HB9rQeGK
        status: active
        display_name: 王子章
        merged_into_person_id: null
  other: []
---

# 王柏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柏 | accepted |
| birth.date | 1197年 | accepted |
| death.date | 1274年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_UJHNJUefP1hMoQv16JZ99z | 王師愈 | accepted |
| descendants | p_QDGt3MEV5PfFs8HB9rQeGK | 王子章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王柏（CBDB 10706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10706&o=json)
