---
schema: wang-person/v1
id: p_NdQRpAtW3NavQ2HP8uayvv
status: active
merged_into: null
display_name: 王二郎
cbdb_id: 253051
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sQx6pj6L76n9zFcqf7JaiV
        subject_person_id: p_NdQRpAtW3NavQ2HP8uayvv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王二郎，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 253051）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4ZpXJlk2aSDno1eoaeJtA7
          claim_id: c_sQx6pj6L76n9zFcqf7JaiV
          source_id: s_EEQ8dG7dQvU7UDVvgp9Mon
          stance: supports
          locator: CBDB:253051
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EEQ8dG7dQvU7UDVvgp9Mon
            source_type: api_record
            title: 中国历代人物传记资料库：王二郎（CBDB 253051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253051&o=json
            external_identifier: CBDB:253051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nG1D5tKwsJWT9zDHZQ4A6h
        subject_person_id: p_NdQRpAtW3NavQ2HP8uayvv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王二郎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PCH7xD8QdBf33HGKkwwHJf
          claim_id: c_nG1D5tKwsJWT9zDHZQ4A6h
          source_id: s_EEQ8dG7dQvU7UDVvgp9Mon
          stance: supports
          locator: CBDB:253051
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_kxj_tZ7GLIdvBHX7IbqFc0
        subject_person_id: p_NdQRpAtW3NavQ2HP8uayvv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_clRvolzYIGQQck-I75En7L
          claim_id: c_kxj_tZ7GLIdvBHX7IbqFc0
          source_id: s_CZEt9PyfQg11YUcwzJUQtY
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CZEt9PyfQg11YUcwzJUQtY
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 200041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200041&o=json
            external_identifier: CBDB:200041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dGT7XJPTzH43E2nwtnh2aH
        status: active
        display_name: 王進
        merged_into_person_id: null
  other: []
---

# 王二郎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王二郎，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 253051） | accepted |
| name.primary | 王二郎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dGT7XJPTzH43E2nwtnh2aH | 王進 | accepted |

## 外部来源

- [中国历代人物传记资料库：王二郎（CBDB 253051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253051&o=json)
- [中国历代人物传记资料库：王進（CBDB 200041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200041&o=json)
