---
schema: wang-person/v1
id: p_kA7EdnqfqW5ogZnp9WbFM9
status: active
merged_into: null
display_name: 王微
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NPAiWjZkR9qpeycUYpvoQ3
        subject_person_id: p_kA7EdnqfqW5ogZnp9WbFM9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王微
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HMyEJDpFKKxWSZCRZd8TcN
          claim_id: c_NPAiWjZkR9qpeycUYpvoQ3
          source_id: s_J64dNdryUPBTNCBRNFFyEA
          stance: supports
          locator: CBDB:3991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3991）
          source: &a1
            id: s_J64dNdryUPBTNCBRNFFyEA
            source_type: api_record
            title: 中国历代人物传记资料库：王微（CBDB 3991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3991&o=json
            external_identifier: CBDB:3991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JEZ4QBi2mD3pQ7ami8Uq9P
        subject_person_id: p_kA7EdnqfqW5ogZnp9WbFM9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王微，宋人物。籍贯丹陽。（中国历代人物传记资料库 CBDB 3991）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Oe_8l_ZoPxLvPIL0ddiHo3
          claim_id: c_JEZ4QBi2mD3pQ7ami8Uq9P
          source_id: s_J64dNdryUPBTNCBRNFFyEA
          stance: supports
          locator: CBDB:3991
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TafxZtZDdMtQVdpCAwu_Xq
        subject_person_id: p_fAKCeM7BDQhgJG14kfc4mW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kA7EdnqfqW5ogZnp9WbFM9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6DXYYpX8v4utBuPZ8HPQoB
          claim_id: c_TafxZtZDdMtQVdpCAwu_Xq
          source_id: s_uHheqYO7ZktXSYXtddYNHY
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1897）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_uHheqYO7ZktXSYXtddYNHY
            source_type: api_record
            title: 中国历代人物传记资料库：王微（CBDB 3991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3991&o=json
            external_identifier: CBDB:3991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fAKCeM7BDQhgJG14kfc4mW
        status: active
        display_name: 王存
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王微

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王微 | accepted |
| bio.summary | 王微，宋人物。籍贯丹陽。（中国历代人物传记资料库 CBDB 3991） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fAKCeM7BDQhgJG14kfc4mW | 王存 | accepted |

## 外部来源

- [中国历代人物传记资料库：王微（CBDB 3991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3991&o=json)
