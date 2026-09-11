---
schema: wang-person/v1
id: p_8UyANM2GBXjr9jxhXoQcrc
status: active
merged_into: null
display_name: 王陵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KXu1tpmsKUg1PVkJB762GM
        subject_person_id: p_8UyANM2GBXjr9jxhXoQcrc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5CTNeJhNtEKwK96UZip1M5
          claim_id: c_KXu1tpmsKUg1PVkJB762GM
          source_id: s_m8F6XAy5fu7EouhVKqPd4M
          stance: supports
          locator: CBDB:157991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157991）
          source: &a1
            id: s_m8F6XAy5fu7EouhVKqPd4M
            source_type: api_record
            title: 中国历代人物传记资料库：王陵（CBDB 157991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157991&o=json
            external_identifier: CBDB:157991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DgMaZ6kcBQHz9SwCuF6YE4
        subject_person_id: p_8UyANM2GBXjr9jxhXoQcrc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J8xQ1M32F3cLLVbNEeRCBW
          claim_id: c_DgMaZ6kcBQHz9SwCuF6YE4
          source_id: s_m8F6XAy5fu7EouhVKqPd4M
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rg_HD3o5zPDd7eGEUp6_24
        subject_person_id: p_8UyANM2GBXjr9jxhXoQcrc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dqQLWjppSTkoFDA3lNDdz-
          claim_id: c_rg_HD3o5zPDd7eGEUp6_24
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 75：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Bi4MKHXFWwTnY4wZFRhfrS
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 141655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141655&o=json
            external_identifier: CBDB:141655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3Q3HvcLsmxqfDq9R1nBQXi
        status: active
        display_name: 王振
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王陵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陵 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3Q3HvcLsmxqfDq9R1nBQXi | 王振 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陵（CBDB 157991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157991&o=json)
- [中国历代人物传记资料库：王振（CBDB 141655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141655&o=json)
