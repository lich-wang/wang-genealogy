---
schema: wang-person/v1
id: p_tup6U68suv356aGkCfJ6Bt
status: active
merged_into: null
display_name: 王林
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uPfw4F96gE165ycoVPhSE1
        subject_person_id: p_tup6U68suv356aGkCfJ6Bt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_778UqFJZLnd8zHzC688vRZ
          claim_id: c_uPfw4F96gE165ycoVPhSE1
          source_id: s_BZpSVStxrLaZ7DtoM8rdbu
          stance: supports
          locator: CBDB:217981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217981）
          source: &a1
            id: s_BZpSVStxrLaZ7DtoM8rdbu
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 217981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217981&o=json
            external_identifier: CBDB:217981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M6FvST5QqQHMQATHuJwvD2
        subject_person_id: p_tup6U68suv356aGkCfJ6Bt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 217981）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_23hrNYzbfMFabWKtqe4dFf
          claim_id: c_M6FvST5QqQHMQATHuJwvD2
          source_id: s_BZpSVStxrLaZ7DtoM8rdbu
          stance: supports
          locator: CBDB:217981
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_ItjLNGnX8wzs-0Id8_FUT1
        subject_person_id: p_tup6U68suv356aGkCfJ6Bt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MoTp1H1qMsn6hE765X8qFG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C1XA2urlstrwWSpgZ5USFe
          claim_id: c_ItjLNGnX8wzs-0Id8_FUT1
          source_id: s_BZpSVStxrLaZ7DtoM8rdbu
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百七十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MoTp1H1qMsn6hE765X8qFG
        status: active
        display_name: 王九儀
        merged_into_person_id: null
  other: []
---

# 王林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王林 | accepted |
| bio.summary | 王林，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 217981） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_MoTp1H1qMsn6hE765X8qFG | 王九儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王林（CBDB 217981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217981&o=json)
