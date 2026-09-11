---
schema: wang-person/v1
id: p_LPxCbHVHyT4kwZF5i6X5Mr
status: active
merged_into: null
display_name: 王緒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NcPeMKDpqoJMC4hX7vNAyX
        subject_person_id: p_LPxCbHVHyT4kwZF5i6X5Mr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MyCws5DpmwBQnur5821ULY
          claim_id: c_NcPeMKDpqoJMC4hX7vNAyX
          source_id: s_3T1wtSa6a7tTCkiA7jtCE6
          stance: supports
          locator: CBDB:166177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166177）
          source: &a1
            id: s_3T1wtSa6a7tTCkiA7jtCE6
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 166177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166177&o=json
            external_identifier: CBDB:166177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jADo9o4bU4c4J4xQpREfB2
        subject_person_id: p_LPxCbHVHyT4kwZF5i6X5Mr
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
        - id: cs_vSmL59jSTFxTCRzeD7HpgC
          claim_id: c_jADo9o4bU4c4J4xQpREfB2
          source_id: s_3T1wtSa6a7tTCkiA7jtCE6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N2FoEzgWsMtBlFmKr0jYR6
        subject_person_id: p_Ni8kPQG3R7QcxGnDogRUMg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LPxCbHVHyT4kwZF5i6X5Mr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZyQWXZPtEvbu-6d2CaFlEm
          claim_id: c_N2FoEzgWsMtBlFmKr0jYR6
          source_id: s_3T1wtSa6a7tTCkiA7jtCE6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ni8kPQG3R7QcxGnDogRUMg
        status: active
        display_name: 王珍
        merged_into_person_id: null
  children:
    - claim:
        id: c_V4K1IAeNXlZB4JHjkBjqkh
        subject_person_id: p_LPxCbHVHyT4kwZF5i6X5Mr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5SW2XZEUskW8LpQAGTNC8h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BPYjXE-JDQ_8baQgzsO19e
          claim_id: c_V4K1IAeNXlZB4JHjkBjqkh
          source_id: s_PHtb29zNH4kt73NrybWZZm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PHtb29zNH4kt73NrybWZZm
            source_type: api_record
            title: 中国历代人物传记资料库：王日信（CBDB 191160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191160&o=json
            external_identifier: CBDB:191160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5SW2XZEUskW8LpQAGTNC8h
        status: active
        display_name: 王日信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緒 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ni8kPQG3R7QcxGnDogRUMg | 王珍 | accepted |
| children | p_5SW2XZEUskW8LpQAGTNC8h | 王日信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王日信（CBDB 191160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191160&o=json)
- [中国历代人物传记资料库：王緒（CBDB 166177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166177&o=json)
