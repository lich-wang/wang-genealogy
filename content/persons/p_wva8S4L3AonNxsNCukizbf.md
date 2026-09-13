---
schema: wang-person/v1
id: p_wva8S4L3AonNxsNCukizbf
status: active
merged_into: null
display_name: 王峻用
cbdb_id: 342276
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RFYqYoXLLkhKYYo2r3YZ1v
        subject_person_id: p_wva8S4L3AonNxsNCukizbf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峻用，明人物。明清進士進士，籍贯仙居，入仕進士，曾任國子監丞。（中国历代人物传记资料库 CBDB 342276）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ny76rO2lXs7mlhkNynEyj2
          claim_id: c_RFYqYoXLLkhKYYo2r3YZ1v
          source_id: s_Ac7LEMYCnuhWJGNL8M626R
          stance: supports
          locator: CBDB:342276
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ac7LEMYCnuhWJGNL8M626R
            source_type: api_record
            title: 中国历代人物传记资料库：王峻用（CBDB 342276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342276&o=json
            external_identifier: CBDB:342276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:10.160Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qqrUABSwxM86EJGfC9NXjL
        subject_person_id: p_wva8S4L3AonNxsNCukizbf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峻用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PfEKEceXScD4g3aL6kJj2v
          claim_id: c_qqrUABSwxM86EJGfC9NXjL
          source_id: s_Ac7LEMYCnuhWJGNL8M626R
          stance: supports
          locator: CBDB:342276
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4201-4300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_T-8Bh_6sfbtlg9vULbyhgN
        subject_person_id: p_wva8S4L3AonNxsNCukizbf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EMcJ9fNVqRtQ6d9NXvcerV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FfjD4D3hoBfjWzajPKNid8
          claim_id: c_T-8Bh_6sfbtlg9vULbyhgN
          source_id: s_ck87NE7fwgpouGzP6KYPZg
          stance: supports
          locator: 仙居志，lgid=356630：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ck87NE7fwgpouGzP6KYPZg
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 126438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126438&o=json
            external_identifier: CBDB:126438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EMcJ9fNVqRtQ6d9NXvcerV
        status: active
        display_name: 王康
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王峻用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王峻用，明人物。明清進士進士，籍贯仙居，入仕進士，曾任國子監丞。（中国历代人物传记资料库 CBDB 342276） | accepted |
| name.primary | 王峻用 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EMcJ9fNVqRtQ6d9NXvcerV | 王康 | accepted |

## 外部来源

- [中国历代人物传记资料库：王峻用（CBDB 342276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342276&o=json)
- [中国历代人物传记资料库：王康（CBDB 126438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126438&o=json)
