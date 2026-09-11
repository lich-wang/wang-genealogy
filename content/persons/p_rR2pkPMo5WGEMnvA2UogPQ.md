---
schema: wang-person/v1
id: p_rR2pkPMo5WGEMnvA2UogPQ
status: active
merged_into: null
display_name: 王智
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZdHcD2KVfiD3t5c1SvPy7i
        subject_person_id: p_rR2pkPMo5WGEMnvA2UogPQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7xNv7v8oj216FE47hUcZ9n
          claim_id: c_ZdHcD2KVfiD3t5c1SvPy7i
          source_id: s_mQ3jDn746da14ESKoWc7eM
          stance: supports
          locator: CBDB:262689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262689）
          source: &a1
            id: s_mQ3jDn746da14ESKoWc7eM
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 262689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262689&o=json
            external_identifier: CBDB:262689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rY7pw96Eb82iAJAFDQezPQ
        subject_person_id: p_rR2pkPMo5WGEMnvA2UogPQ
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
        - id: cs_fF22YSXJbpzEkRoLMPVDP5
          claim_id: c_rY7pw96Eb82iAJAFDQezPQ
          source_id: s_mQ3jDn746da14ESKoWc7eM
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
        id: c_60qAvW-spV_zzdNT1pZkXk
        subject_person_id: p_rR2pkPMo5WGEMnvA2UogPQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tKSX25XywiK2A4nP_A25LU
          claim_id: c_60qAvW-spV_zzdNT1pZkXk
          source_id: s_j9QtHgAMFKQAVkqGX1LKYM
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第九十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_j9QtHgAMFKQAVkqGX1LKYM
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 68238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68238&o=json
            external_identifier: CBDB:68238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4wJCgbadTAePpZ2BNEDAoG
        status: active
        display_name: 王憲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4wJCgbadTAePpZ2BNEDAoG | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王憲（CBDB 68238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68238&o=json)
- [中国历代人物传记资料库：王智（CBDB 262689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262689&o=json)
