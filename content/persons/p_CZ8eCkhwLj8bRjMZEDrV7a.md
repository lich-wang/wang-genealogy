---
schema: wang-person/v1
id: p_CZ8eCkhwLj8bRjMZEDrV7a
status: active
merged_into: null
display_name: 王琮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j1WdEpEoQ3NFFZVi81oJA6
        subject_person_id: p_CZ8eCkhwLj8bRjMZEDrV7a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L7yb3J6GaAjwa21s8ZPVhu
          claim_id: c_j1WdEpEoQ3NFFZVi81oJA6
          source_id: s_iqpxezJvULsLKHEuWLK2w7
          stance: supports
          locator: CBDB:201239
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201239）
          source: &a1
            id: s_iqpxezJvULsLKHEuWLK2w7
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 201239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201239&o=json
            external_identifier: CBDB:201239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.665Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_D3bo58rnAqRFPTwmnnds4P
        subject_person_id: p_CZ8eCkhwLj8bRjMZEDrV7a
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1456年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7PoeAiBKZjEGGFLRvkdA58
          claim_id: c_D3bo58rnAqRFPTwmnnds4P
          source_id: s_iqpxezJvULsLKHEuWLK2w7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sx4fE4sgwqJuvVfKhafW9M
        subject_person_id: p_CZ8eCkhwLj8bRjMZEDrV7a
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
        - id: cs_CVcGQSJ9KHLj2c8pPqtDwH
          claim_id: c_sx4fE4sgwqJuvVfKhafW9M
          source_id: s_iqpxezJvULsLKHEuWLK2w7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nvJI5bDIHuc0jyDv87uj5Z
        subject_person_id: p_BJ4Vkii4a2B3LiLFrokpx5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CZ8eCkhwLj8bRjMZEDrV7a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NYHVQhcfadVxwmmhfBgR5k
          claim_id: c_nvJI5bDIHuc0jyDv87uj5Z
          source_id: s_Cg24pAHXC4yUme5dUS1oZC
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百五十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Cg24pAHXC4yUme5dUS1oZC
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 269329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269329&o=json
            external_identifier: CBDB:269329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BJ4Vkii4a2B3LiLFrokpx5
        status: active
        display_name: 王能
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_mFtO3aryhXGWJ1fjPJPFhM
        subject_person_id: p_mJvJn7wy9ckLGgmVk8U7FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CZ8eCkhwLj8bRjMZEDrV7a
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HE9y6RdGJqLv8cGdEGTk3_
          claim_id: c_mFtO3aryhXGWJ1fjPJPFhM
          source_id: s_RK7ma5hnEYFCaF4uQk27SL
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百五十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RK7ma5hnEYFCaF4uQk27SL
            source_type: api_record
            title: 中国历代人物传记资料库：王埜（CBDB 269327）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269327&o=json
            external_identifier: CBDB:269327
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mJvJn7wy9ckLGgmVk8U7FF
        status: active
        display_name: 王埜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| birth.date | 1456年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BJ4Vkii4a2B3LiLFrokpx5 | 王能 | accepted |
| ancestors | p_mJvJn7wy9ckLGgmVk8U7FF | 王埜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 201239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201239&o=json)
- [中国历代人物传记资料库：王能（CBDB 269329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269329&o=json)
- [中国历代人物传记资料库：王埜（CBDB 269327）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269327&o=json)
