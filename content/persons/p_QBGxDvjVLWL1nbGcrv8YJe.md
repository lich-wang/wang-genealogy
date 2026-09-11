---
schema: wang-person/v1
id: p_QBGxDvjVLWL1nbGcrv8YJe
status: active
merged_into: null
display_name: 王䋲丈
cbdb_id: 232796
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rheJHCAGYYsZgmzFPDaHrp
        subject_person_id: p_QBGxDvjVLWL1nbGcrv8YJe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䋲丈，明人物。中国历代人物传记资料库（CBDB）以人物编号 232796 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_LSfCgWd0xI_LhmIh-UmLFO
          claim_id: c_rheJHCAGYYsZgmzFPDaHrp
          source_id: s_aYSANyJPu2nJJAT54UdC7N
          stance: supports
          locator: CBDB:232796
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aYSANyJPu2nJJAT54UdC7N
            source_type: api_record
            title: 中国历代人物传记资料库：王䋲丈（CBDB 232796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232796&o=json
            external_identifier: CBDB:232796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1tiAT4Vx8E3FLmqLpobG5H
        subject_person_id: p_QBGxDvjVLWL1nbGcrv8YJe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䋲丈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Je8BBEh9hs2nV7W38wRFdW
          claim_id: c_1tiAT4Vx8E3FLmqLpobG5H
          source_id: s_aYSANyJPu2nJJAT54UdC7N
          stance: supports
          locator: CBDB:232796
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_aYSANyJPu2nJJAT54UdC7N
            source_type: api_record
            title: 中国历代人物传记资料库：王䋲丈（CBDB 232796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232796&o=json
            external_identifier: CBDB:232796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QWKs-Mz3y3RkcKziGO-RsT
        subject_person_id: p_gEPN4Y1sSEhqz6ktqB2iGE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QBGxDvjVLWL1nbGcrv8YJe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OqdpJfhMMldgmbMZvkM9PK
          claim_id: c_QWKs-Mz3y3RkcKziGO-RsT
          source_id: s_aYSANyJPu2nJJAT54UdC7N
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第二十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gEPN4Y1sSEhqz6ktqB2iGE
        status: active
        display_name: 王所用
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王䋲丈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王䋲丈，明人物。中国历代人物传记资料库（CBDB）以人物编号 232796 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王䋲丈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gEPN4Y1sSEhqz6ktqB2iGE | 王所用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王䋲丈（CBDB 232796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232796&o=json)
