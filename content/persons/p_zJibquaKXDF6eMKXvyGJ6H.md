---
schema: wang-person/v1
id: p_zJibquaKXDF6eMKXvyGJ6H
status: active
merged_into: null
display_name: 王音
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ngeb1bmEZPeLcsEpF3MZWS
        subject_person_id: p_zJibquaKXDF6eMKXvyGJ6H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王音
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eN3UsPTk89Cpcm4TqPPD5r
          claim_id: c_ngeb1bmEZPeLcsEpF3MZWS
          source_id: s_PZLvSEq3fHjNDYVL7AXSs2
          stance: supports
          locator: CBDB:148535
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148535）
          source: &a1
            id: s_PZLvSEq3fHjNDYVL7AXSs2
            source_type: api_record
            title: 中国历代人物传记资料库：王音（CBDB 148535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148535&o=json
            external_identifier: CBDB:148535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.762Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tm8Tym3n5XcW557npBLm6A
        subject_person_id: p_zJibquaKXDF6eMKXvyGJ6H
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
        - id: cs_3i7Fqj9HGPNdQeGEN1jCY7
          claim_id: c_Tm8Tym3n5XcW557npBLm6A
          source_id: s_PZLvSEq3fHjNDYVL7AXSs2
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
        id: c__PUT-qe5RieYpxnHrUctUN
        subject_person_id: p_zJibquaKXDF6eMKXvyGJ6H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_27JjpyQuhoPy7ehfqeKG88
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4aiRg-jNxz2nKW5C-vbZiU
          claim_id: c__PUT-qe5RieYpxnHrUctUN
          source_id: s_eV3n3P2H6Gwc13NGFoUkE8
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 39：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eV3n3P2H6Gwc13NGFoUkE8
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 139618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139618&o=json
            external_identifier: CBDB:139618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.429Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_27JjpyQuhoPy7ehfqeKG88
        status: active
        display_name: 王智
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王音

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王音 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_27JjpyQuhoPy7ehfqeKG88 | 王智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王音（CBDB 148535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148535&o=json)
- [中国历代人物传记资料库：王智（CBDB 139618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139618&o=json)
