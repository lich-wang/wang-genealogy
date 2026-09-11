---
schema: wang-person/v1
id: p_iL53NuuSgA33Ht2KRWRfLu
status: active
merged_into: null
display_name: 王獻可
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kCBGGwz1r2EFPCUBKV7MgT
        subject_person_id: p_iL53NuuSgA33Ht2KRWRfLu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻可
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BzGihGbhZsEyBU3r1F621j
          claim_id: c_kCBGGwz1r2EFPCUBKV7MgT
          source_id: s_ugdB4Qb9Ee4jXSruaMoQCu
          stance: supports
          locator: CBDB:14303
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（14303）
          source: &a1
            id: s_ugdB4Qb9Ee4jXSruaMoQCu
            source_type: api_record
            title: 中国历代人物传记资料库：王獻可（CBDB 14303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14303&o=json
            external_identifier: CBDB:14303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BAWHrw3BVj6YpkkK8HUKwj
        subject_person_id: p_iL53NuuSgA33Ht2KRWRfLu
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
        - id: cs_TsZQupt57NSkiqS8E7cKUH
          claim_id: c_BAWHrw3BVj6YpkkK8HUKwj
          source_id: s_ugdB4Qb9Ee4jXSruaMoQCu
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
        id: c_0_yHaU35Em2g4ER1Qjuk-u
        subject_person_id: p_iL53NuuSgA33Ht2KRWRfLu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g1ByKENJEMLrjANJPXYqGZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fD8djFQiR3E51HWiubR_1B
          claim_id: c_0_yHaU35Em2g4ER1Qjuk-u
          source_id: s_QkUDzYNx7nBZTA4f1h9gDF
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2077：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QkUDzYNx7nBZTA4f1h9gDF
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 14305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14305&o=json
            external_identifier: CBDB:14305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_g1ByKENJEMLrjANJPXYqGZ
        status: active
        display_name: 王雲
        merged_into_person_id: null
    - claim:
        id: c_MoIng9Y2AV34dKTrUcNhNx
        subject_person_id: p_iL53NuuSgA33Ht2KRWRfLu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QwXkM5LVPvoysbupoEebKc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zidFud1DCsDheLJLsql3Sf
          claim_id: c_MoIng9Y2AV34dKTrUcNhNx
          source_id: s_ugdB4Qb9Ee4jXSruaMoQCu
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1326：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QwXkM5LVPvoysbupoEebKc
        status: active
        display_name: 王霽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王獻可

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻可 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_g1ByKENJEMLrjANJPXYqGZ | 王雲 | accepted |
| children | p_QwXkM5LVPvoysbupoEebKc | 王霽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王獻可（CBDB 14303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14303&o=json)
- [中国历代人物传记资料库：王雲（CBDB 14305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14305&o=json)
