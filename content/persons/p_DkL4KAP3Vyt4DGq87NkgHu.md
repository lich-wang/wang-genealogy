---
schema: wang-person/v1
id: p_DkL4KAP3Vyt4DGq87NkgHu
status: active
merged_into: null
display_name: 王尚學
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hFUCRuCwK5ArTE2PCZtiAp
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NtqeUHNzGyRppbnFzcVaBN
          claim_id: c_hFUCRuCwK5ArTE2PCZtiAp
          source_id: s_M4Ex9mBFUeX1FeRXYNTaAu
          stance: supports
          locator: CBDB:294537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294537）
          source: &a1
            id: s_M4Ex9mBFUeX1FeRXYNTaAu
            source_type: api_record
            title: 中国历代人物传记资料库：王尚學（CBDB 294537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294537&o=json
            external_identifier: CBDB:294537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uDHsb8rN1e3WXUwou6iQLf
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
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
        - id: cs_GM2vij27Hs9Lxj4gUqbwdC
          claim_id: c_uDHsb8rN1e3WXUwou6iQLf
          source_id: s_M4Ex9mBFUeX1FeRXYNTaAu
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
        id: c_z81Pcfo5JJEnNISP9eu5ll
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9eLQNn25BSZNhp9859vDP5
          claim_id: c_z81Pcfo5JJEnNISP9eu5ll
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KnMS3iSfMsUJhjJLWsaYyT
            source_type: api_record
            title: 中国历代人物传记资料库：王玉汝（CBDB 202795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json
            external_identifier: CBDB:202795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aJQ3escM6jBxZ8EP2idom6
        status: active
        display_name: 王玉汝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王尚學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚學 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aJQ3escM6jBxZ8EP2idom6 | 王玉汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚學（CBDB 294537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294537&o=json)
- [中国历代人物传记资料库：王玉汝（CBDB 202795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json)
