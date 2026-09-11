---
schema: wang-person/v1
id: p_5LbkjGHubbcvGPbg3TNESX
status: active
merged_into: null
display_name: 王信甫
cbdb_id: 241962
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dk82WaG4JovmvUvHnzFd3e
        subject_person_id: p_5LbkjGHubbcvGPbg3TNESX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信甫，明人物。中国历代人物传记资料库（CBDB）以人物编号 241962 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_zRZVcoBEvy3tPcXfiaS7jM
          claim_id: c_dk82WaG4JovmvUvHnzFd3e
          source_id: s_rUXzqdjLLJKEY1N93iJuZx
          stance: supports
          locator: CBDB:241962
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rUXzqdjLLJKEY1N93iJuZx
            source_type: api_record
            title: 中国历代人物传记资料库：王信甫（CBDB 241962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241962&o=json
            external_identifier: CBDB:241962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DmHdJ7QVzA8G6FcC8y1Pg6
        subject_person_id: p_5LbkjGHubbcvGPbg3TNESX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8Nci5SoV5F2qoT9KAH83PZ
          claim_id: c_DmHdJ7QVzA8G6FcC8y1Pg6
          source_id: s_rUXzqdjLLJKEY1N93iJuZx
          stance: supports
          locator: CBDB:241962
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_rUXzqdjLLJKEY1N93iJuZx
            source_type: api_record
            title: 中国历代人物传记资料库：王信甫（CBDB 241962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241962&o=json
            external_identifier: CBDB:241962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_k0j0hLwXLqSsHVtpFxioP7
        subject_person_id: p_5LbkjGHubbcvGPbg3TNESX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2LWjtu7zL-Sk-PN5lk5lqu
          claim_id: c_k0j0hLwXLqSsHVtpFxioP7
          source_id: s_rUXzqdjLLJKEY1N93iJuZx
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百八十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wzpgCTfy9H3iqMXKhqaPfp
        status: active
        display_name: 王俁
        merged_into_person_id: null
  other: []
---

# 王信甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王信甫，明人物。中国历代人物传记资料库（CBDB）以人物编号 241962 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王信甫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_wzpgCTfy9H3iqMXKhqaPfp | 王俁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王信甫（CBDB 241962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241962&o=json)
