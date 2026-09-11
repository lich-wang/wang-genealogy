---
schema: wang-person/v1
id: p_Lr8L9s9EF6He1HszkYXFMW
status: active
merged_into: null
display_name: 王繇
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bN4hPB9vKNei99djE5Kz3h
        subject_person_id: p_Lr8L9s9EF6He1HszkYXFMW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UBGgBv2AnURg1fxKhjdGAS
          claim_id: c_bN4hPB9vKNei99djE5Kz3h
          source_id: s_MyEsNQh1fRWSbiGjpiiFNT
          stance: supports
          locator: CBDB:154782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（154782）
          source: &a1
            id: s_MyEsNQh1fRWSbiGjpiiFNT
            source_type: api_record
            title: 中国历代人物传记资料库：王繇（CBDB 154782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154782&o=json
            external_identifier: CBDB:154782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AdLjLBLa5fNDmpjXv23RG7
        subject_person_id: p_Lr8L9s9EF6He1HszkYXFMW
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
        - id: cs_6itHcmy4MPvHR4VCszkFD6
          claim_id: c_AdLjLBLa5fNDmpjXv23RG7
          source_id: s_MyEsNQh1fRWSbiGjpiiFNT
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
        id: c_vTVLZXUDIdJ_lBD-cVHqb6
        subject_person_id: p_Lr8L9s9EF6He1HszkYXFMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xI6xnyF_cd48Cgk4mbHxJ0
          claim_id: c_vTVLZXUDIdJ_lBD-cVHqb6
          source_id: s_opASS8N2VcwCXB51vGEx7L
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 3：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_opASS8N2VcwCXB51vGEx7L
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 141157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141157&o=json
            external_identifier: CBDB:141157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7wCLqcQbBY1uXQ63JU3AKf
        status: active
        display_name: 王訓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_wcjNuwfaWAVzGvmVF-5qJF
        subject_person_id: p_Lr8L9s9EF6He1HszkYXFMW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WjMwkLYgPTHMqzx1xZ1kdf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H0uhY1-ER92djQFWe59iQ6
          claim_id: c_wcjNuwfaWAVzGvmVF-5qJF
          source_id: s_-8rR-2TSdT85Nbc7NnVDe8
          stance: supports
          locator: 新唐書，3657：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_-8rR-2TSdT85Nbc7NnVDe8
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(永穆公主)（CBDB 444803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444803&o=json
            external_identifier: CBDB:444803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WjMwkLYgPTHMqzx1xZ1kdf
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_bHB8YZQTHvvl1qHk4VDMPo
        subject_person_id: p_Lr8L9s9EF6He1HszkYXFMW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7QrhcSCpByfzYfPYz7zK5h
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m3wRveeXQuulDFzQ54QxuL
          claim_id: c_bHB8YZQTHvvl1qHk4VDMPo
          source_id: s_MyEsNQh1fRWSbiGjpiiFNT
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 126：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7QrhcSCpByfzYfPYz7zK5h
        status: active
        display_name: 王支某
        merged_into_person_id: null
  other: []
---

# 王繇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繇 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7wCLqcQbBY1uXQ63JU3AKf | 王訓 | accepted |
| spouses | p_WjMwkLYgPTHMqzx1xZ1kdf | 李氏 | accepted |
| descendants | p_7QrhcSCpByfzYfPYz7zK5h | 王支某 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(永穆公主)（CBDB 444803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444803&o=json)
- [中国历代人物传记资料库：王訓（CBDB 141157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141157&o=json)
- [中国历代人物传记资料库：王繇（CBDB 154782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154782&o=json)
