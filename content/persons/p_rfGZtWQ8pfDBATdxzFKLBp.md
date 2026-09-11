---
schema: wang-person/v1
id: p_rfGZtWQ8pfDBATdxzFKLBp
status: active
merged_into: null
display_name: 王榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a4MWaLVE5hFa4tLh13ZgPR
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G8BNyNy2byy1aG5asFnQ1n
          claim_id: c_a4MWaLVE5hFa4tLh13ZgPR
          source_id: s_4N1QCK7dLGi7viStf4QAuR
          stance: supports
          locator: CBDB:237975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237975）
          source: &a1
            id: s_4N1QCK7dLGi7viStf4QAuR
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 237975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237975&o=json
            external_identifier: CBDB:237975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w31R4iDkYcuhnB266tnD11
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
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
        - id: cs_Y9baqMtkdAgGcGFp6oqNoQ
          claim_id: c_w31R4iDkYcuhnB266tnD11
          source_id: s_4N1QCK7dLGi7viStf4QAuR
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
        id: c_zwQEWRZNWMOaUjkDlIkc9P
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O4FvviVDPi1SM9_qx5k_52
          claim_id: c_zwQEWRZNWMOaUjkDlIkc9P
          source_id: s_4N1QCK7dLGi7viStf4QAuR
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XbUzXxzW1NKiE1b2phZgUS
        status: active
        display_name: 王濬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XbUzXxzW1NKiE1b2phZgUS | 王濬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 237975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237975&o=json)
