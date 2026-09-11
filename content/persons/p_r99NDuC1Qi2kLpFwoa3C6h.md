---
schema: wang-person/v1
id: p_r99NDuC1Qi2kLpFwoa3C6h
status: active
merged_into: null
display_name: 王彥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r2FJCuxYVSNHMhLtHabioH
        subject_person_id: p_r99NDuC1Qi2kLpFwoa3C6h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JKxi67hZq8BsTpvnU3tYuE
          claim_id: c_r2FJCuxYVSNHMhLtHabioH
          source_id: s_kjPioGXmtVdnzQmhz6FZfx
          stance: supports
          locator: CBDB:148999
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148999）
          source: &a1
            id: s_kjPioGXmtVdnzQmhz6FZfx
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 148999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148999&o=json
            external_identifier: CBDB:148999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_56ZEJqU5GngXF9Q112NV9q
        subject_person_id: p_r99NDuC1Qi2kLpFwoa3C6h
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
        - id: cs_4UvDsgkTkGnMKGCNuw8PS7
          claim_id: c_56ZEJqU5GngXF9Q112NV9q
          source_id: s_kjPioGXmtVdnzQmhz6FZfx
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
        id: c_wTUNjW9ALqIxM427JSu_zP
        subject_person_id: p_r99NDuC1Qi2kLpFwoa3C6h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nLarpZ8oPBtkV8qWtk13pw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wmggs4j_XlIW6eSiUo6McV
          claim_id: c_wTUNjW9ALqIxM427JSu_zP
          source_id: s_PXVtaKpJD7cM2CJ5pq9vg9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonglong 12：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PXVtaKpJD7cM2CJ5pq9vg9
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 139770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139770&o=json
            external_identifier: CBDB:139770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nLarpZ8oPBtkV8qWtk13pw
        status: active
        display_name: 王才
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nLarpZ8oPBtkV8qWtk13pw | 王才 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 139770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139770&o=json)
- [中国历代人物传记资料库：王彥（CBDB 148999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148999&o=json)
