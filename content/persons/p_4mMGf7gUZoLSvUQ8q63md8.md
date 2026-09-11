---
schema: wang-person/v1
id: p_4mMGf7gUZoLSvUQ8q63md8
status: active
merged_into: null
display_name: 王復元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M22muDbiP12Sz9c8Vz2GEb
        subject_person_id: p_4mMGf7gUZoLSvUQ8q63md8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pCGDJa617J3jqtoLF6V13S
          claim_id: c_M22muDbiP12Sz9c8Vz2GEb
          source_id: s_XvG8HuCLfDmLeCHuCBTMNF
          stance: supports
          locator: CBDB:167291
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（167291）
          source: &a1
            id: s_XvG8HuCLfDmLeCHuCBTMNF
            source_type: api_record
            title: 中国历代人物传记资料库：王復元（CBDB 167291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167291&o=json
            external_identifier: CBDB:167291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DbBZdd7xfPRS338KJ7vZbG
        subject_person_id: p_4mMGf7gUZoLSvUQ8q63md8
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
        - id: cs_B7yuFKdP1By66fvoFANPhR
          claim_id: c_DbBZdd7xfPRS338KJ7vZbG
          source_id: s_XvG8HuCLfDmLeCHuCBTMNF
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
        id: c_lb-S-mXJToGp-tXr5YaTXQ
        subject_person_id: p_kKF3bcrN2PF97A45BMZbMB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4mMGf7gUZoLSvUQ8q63md8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xg2EcybMhp02rvQjBLy5l7
          claim_id: c_lb-S-mXJToGp-tXr5YaTXQ
          source_id: s_XvG8HuCLfDmLeCHuCBTMNF
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kKF3bcrN2PF97A45BMZbMB
        status: active
        display_name: 王頊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王復元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復元 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kKF3bcrN2PF97A45BMZbMB | 王頊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復元（CBDB 167291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167291&o=json)
