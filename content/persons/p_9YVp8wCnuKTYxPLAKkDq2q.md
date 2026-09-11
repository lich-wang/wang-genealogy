---
schema: wang-person/v1
id: p_9YVp8wCnuKTYxPLAKkDq2q
status: active
merged_into: null
display_name: 徐苕郎
revision: 1
cbdb_id: 118145
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zllUUTG2Yg9a3exKOC4Ggv
        subject_person_id: p_9YVp8wCnuKTYxPLAKkDq2q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐苕郎
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s0VN9rx9w212c0Rh7h00vI
          claim_id: c_zllUUTG2Yg9a3exKOC4Ggv
          source_id: s_KC6Y2AJ5ux2aTtH6pMmjLA
          stance: supports
          locator: CBDB:118145
          quotation: null
          interpretation_note: CBDB 明确记录的王瓊奴配偶
          source: &a1
            id: s_KC6Y2AJ5ux2aTtH6pMmjLA
            source_type: api_record
            title: 中国历代人物传记资料库：徐苕郎（CBDB 118145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118145&o=json
            external_identifier: CBDB:118145
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
        id: c_n0frGRd0nukjgCb3fksHKS
        subject_person_id: p_M2B5P56G6cpHZbNPSX9xm6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9YVp8wCnuKTYxPLAKkDq2q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B_rh8c-D7hA73w-SduXgwo
          claim_id: c_n0frGRd0nukjgCb3fksHKS
          source_id: s_KC6Y2AJ5ux2aTtH6pMmjLA
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2876：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_M2B5P56G6cpHZbNPSX9xm6
        status: active
        display_name: 王瓊奴
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 徐苕郎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 徐苕郎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_M2B5P56G6cpHZbNPSX9xm6 | 王瓊奴 | accepted |

## 外部来源

- [中国历代人物传记资料库：徐苕郎（CBDB 118145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118145&o=json)
