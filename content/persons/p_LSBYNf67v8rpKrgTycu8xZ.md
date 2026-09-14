---
schema: wang-person/v1
id: p_LSBYNf67v8rpKrgTycu8xZ
status: active
merged_into: null
display_name: 王元穉
cbdb_id: 341786
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mP3YyQFFwV1UXZ3QJN1yY7
        subject_person_id: p_LSBYNf67v8rpKrgTycu8xZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元穉，清人物。明清進士進士，籍贯錢塘，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 341786）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_RX4S8pyxhUvhfsiLgGA3LQ
          claim_id: c_mP3YyQFFwV1UXZ3QJN1yY7
          source_id: s_B5YD2YNbuNqG79KKDqYJu7
          stance: supports
          locator: CBDB:341786
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_B5YD2YNbuNqG79KKDqYJu7
            source_type: api_record
            title: 中国历代人物传记资料库：王元穉（CBDB 341786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341786&o=json
            external_identifier: CBDB:341786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:09.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_W1d8AYqPED8bi8xfEy4CzQ
        subject_person_id: p_LSBYNf67v8rpKrgTycu8xZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元穉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_B5GQcrstMBCGB44T3rE3rj
          claim_id: c_W1d8AYqPED8bi8xfEy4CzQ
          source_id: s_B5YD2YNbuNqG79KKDqYJu7
          stance: supports
          locator: CBDB:341786
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4101-4200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VjKT4-PXq7uOl6oOPVv4r9
        subject_person_id: p_c1bRD4P2CFm7Gm43GrchAK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LSBYNf67v8rpKrgTycu8xZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pQMugm2DGQXhxmAnyNIiBY
          claim_id: c_VjKT4-PXq7uOl6oOPVv4r9
          source_id: s_0ChDSJSWGHW13w-OXN1QQA
          stance: supports
          locator: CBDB：兄弟 王元斌（701080）之父／母 王脩玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王元穉 与 王元斌 为同胞（CBDB 记「兄」），王元斌 之父／母即 王元穉 之父／母。
          source:
            id: s_0ChDSJSWGHW13w-OXN1QQA
            source_type: api_record
            title: 中国历代人物传记资料库：王元穉（CBDB 341786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341786&o=json
            external_identifier: CBDB:341786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c1bRD4P2CFm7Gm43GrchAK
        status: active
        display_name: 王脩玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vWgKXmCPAfinhAl_lcL3f8
        subject_person_id: p_LSBYNf67v8rpKrgTycu8xZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kVCSYsdy5sn4L4NNEMKcyf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MELLWr-67WpJIJhYfRERtT
          claim_id: c_vWgKXmCPAfinhAl_lcL3f8
          source_id: s_0ChDSJSWGHW13w-OXN1QQA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 701080 王元斌）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0ChDSJSWGHW13w-OXN1QQA
            source_type: api_record
            title: 中国历代人物传记资料库：王元穉（CBDB 341786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341786&o=json
            external_identifier: CBDB:341786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kVCSYsdy5sn4L4NNEMKcyf
        status: active
        display_name: 王元斌
        merged_into_person_id: null
---

# 王元穉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元穉，清人物。明清進士進士，籍贯錢塘，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 341786） | accepted |
| name.primary | 王元穉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c1bRD4P2CFm7Gm43GrchAK | 王脩玉 | accepted |
| other | p_kVCSYsdy5sn4L4NNEMKcyf | 王元斌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元穉（CBDB 341786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341786&o=json)
