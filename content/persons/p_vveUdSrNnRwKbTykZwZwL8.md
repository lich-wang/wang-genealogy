---
schema: wang-person/v1
id: p_vveUdSrNnRwKbTykZwZwL8
status: active
merged_into: null
display_name: 王從善
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3eSUfCLhfAPcHJeQbFAS9w
        subject_person_id: p_vveUdSrNnRwKbTykZwZwL8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DYjYxiqQU49CP6zhGEtsNd
          claim_id: c_3eSUfCLhfAPcHJeQbFAS9w
          source_id: s_M7U5RgYd8V2F5i38CAdoLL
          stance: supports
          locator: CBDB:237285
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237285）
          source: &a1
            id: s_M7U5RgYd8V2F5i38CAdoLL
            source_type: api_record
            title: 中国历代人物传记资料库：王從善（CBDB 237285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237285&o=json
            external_identifier: CBDB:237285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9buVHqWR7QTyXPeKS7E3UJ
        subject_person_id: p_vveUdSrNnRwKbTykZwZwL8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從善，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 237285）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sUyoXgPIpUEWpHjB1ZuHFx
          claim_id: c_9buVHqWR7QTyXPeKS7E3UJ
          source_id: s_M7U5RgYd8V2F5i38CAdoLL
          stance: supports
          locator: CBDB:237285
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
        id: c_Q9abFCCi7R4gpNOQ-KnbiL
        subject_person_id: p_vveUdSrNnRwKbTykZwZwL8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GHVQL4hWHQRpyP8bz5zK2L
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YKLdcPh3qe7nwwyW_VXAbm
          claim_id: c_Q9abFCCi7R4gpNOQ-KnbiL
          source_id: s_M7U5RgYd8V2F5i38CAdoLL
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第四十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GHVQL4hWHQRpyP8bz5zK2L
        status: active
        display_name: 王澤
        merged_into_person_id: null
  other: []
---

# 王從善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從善 | accepted |
| bio.summary | 王從善，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 237285） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GHVQL4hWHQRpyP8bz5zK2L | 王澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從善（CBDB 237285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237285&o=json)
