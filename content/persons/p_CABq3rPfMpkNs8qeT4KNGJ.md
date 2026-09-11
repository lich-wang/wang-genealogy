---
schema: wang-person/v1
id: p_CABq3rPfMpkNs8qeT4KNGJ
status: active
merged_into: null
display_name: 王頤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tTmF2t2MLYC4V4MXDqwMkU
        subject_person_id: p_CABq3rPfMpkNs8qeT4KNGJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XD6LNbtfEMeRZ3jPS8sji4
          claim_id: c_tTmF2t2MLYC4V4MXDqwMkU
          source_id: s_BtsetU4kaFEhYLPPy4HN2M
          stance: supports
          locator: CBDB:207361
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207361）
          source: &a1
            id: s_BtsetU4kaFEhYLPPy4HN2M
            source_type: api_record
            title: 中国历代人物传记资料库：王頤（CBDB 207361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207361&o=json
            external_identifier: CBDB:207361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NEquRWveqNyJmNhVbJdz3S
        subject_person_id: p_CABq3rPfMpkNs8qeT4KNGJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1400年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8V1v5y1RfkusC31sHsqQWT
          claim_id: c_NEquRWveqNyJmNhVbJdz3S
          source_id: s_BtsetU4kaFEhYLPPy4HN2M
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2qS63HSSnsGHhtsqB1jDc3
        subject_person_id: p_CABq3rPfMpkNs8qeT4KNGJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jGSj9xiay7e9rhD3mE6MiA
          claim_id: c_2qS63HSSnsGHhtsqB1jDc3
          source_id: s_BtsetU4kaFEhYLPPy4HN2M
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_aWcg27PgFz7M5A9I5n7pl4
        subject_person_id: p_bdcyFM17ttoZgF23qJm3Hk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CABq3rPfMpkNs8qeT4KNGJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mNwlrEPVm_25VbuqpH7eYW
          claim_id: c_aWcg27PgFz7M5A9I5n7pl4
          source_id: s_4U8gNCqZvcaHDdFg5Nofik
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第六十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4U8gNCqZvcaHDdFg5Nofik
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 231742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231742&o=json
            external_identifier: CBDB:231742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.650Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bdcyFM17ttoZgF23qJm3Hk
        status: active
        display_name: 王忠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王頤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頤 | accepted |
| birth.date | 1400年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_bdcyFM17ttoZgF23qJm3Hk | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王頤（CBDB 207361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207361&o=json)
- [中国历代人物传记资料库：王忠（CBDB 231742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231742&o=json)
