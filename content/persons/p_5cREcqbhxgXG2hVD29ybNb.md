---
schema: wang-person/v1
id: p_5cREcqbhxgXG2hVD29ybNb
status: active
merged_into: null
display_name: 王文灼
cbdb_id: 291901
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d7SJqvLMQcCMCdxTW2Mn9A
        subject_person_id: p_5cREcqbhxgXG2hVD29ybNb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文灼，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291901）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_C-IQg4pOBXWYmD__Ik06JT
          claim_id: c_d7SJqvLMQcCMCdxTW2Mn9A
          source_id: s_7K2JsWrUx8X8LVXUDDBQkA
          stance: supports
          locator: CBDB:291901
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7K2JsWrUx8X8LVXUDDBQkA
            source_type: api_record
            title: 中国历代人物传记资料库：王文灼（CBDB 291901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291901&o=json
            external_identifier: CBDB:291901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e7dxhNtV58oS4nUdphJvRz
        subject_person_id: p_5cREcqbhxgXG2hVD29ybNb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文灼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RKyNEEc5iNvfLyHBaodMVd
          claim_id: c_e7dxhNtV58oS4nUdphJvRz
          source_id: s_7K2JsWrUx8X8LVXUDDBQkA
          stance: supports
          locator: CBDB:291901
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yY-f0-ipqnsMVEpVT96UM4
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5cREcqbhxgXG2hVD29ybNb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__sKsLjlxj9oRslteW4nqe3
          claim_id: c_yY-f0-ipqnsMVEpVT96UM4
          source_id: s_7K2JsWrUx8X8LVXUDDBQkA
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7K2JsWrUx8X8LVXUDDBQkA
            source_type: api_record
            title: 中国历代人物传记资料库：王文灼（CBDB 291901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291901&o=json
            external_identifier: CBDB:291901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_oDCtFv3cf2CiUbXVcBy9FF
        status: active
        display_name: 王廷榦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文灼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文灼，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291901） | accepted |
| name.primary | 王文灼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oDCtFv3cf2CiUbXVcBy9FF | 王廷榦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文灼（CBDB 291901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291901&o=json)
