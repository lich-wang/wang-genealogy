---
schema: wang-person/v1
id: p_SeASHf59yQi2kF1TxBPJRr
status: active
merged_into: null
display_name: 王虛明
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_43vkxse9JMDQyF2KrM5QjF
        subject_person_id: p_SeASHf59yQi2kF1TxBPJRr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虛明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VgPVqZAP1kUTYej1248UxP
          claim_id: c_43vkxse9JMDQyF2KrM5QjF
          source_id: s_N2C7HXGsRiLvTiRugnLkxv
          stance: supports
          locator: CBDB:145077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145077）
          source: &a1
            id: s_N2C7HXGsRiLvTiRugnLkxv
            source_type: api_record
            title: 中国历代人物传记资料库：王虛明（CBDB 145077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145077&o=json
            external_identifier: CBDB:145077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CxE92Qim53FoBvBy7ptPWe
        subject_person_id: p_SeASHf59yQi2kF1TxBPJRr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 792年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FoaF7DPEB4YHiejJLzAR8A
          claim_id: c_CxE92Qim53FoBvBy7ptPWe
          source_id: s_N2C7HXGsRiLvTiRugnLkxv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fhN2tERNamrRM6wSXKjSq5
        subject_person_id: p_SeASHf59yQi2kF1TxBPJRr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 859年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GpGMX4MH6NeRTPHYu8XdPi
          claim_id: c_fhN2tERNamrRM6wSXKjSq5
          source_id: s_N2C7HXGsRiLvTiRugnLkxv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7EGFkqQQW785RD29pp8wJB
        subject_person_id: p_SeASHf59yQi2kF1TxBPJRr
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
        - id: cs_nH3KrvqL8rDAJx4fjyqZFp
          claim_id: c_7EGFkqQQW785RD29pp8wJB
          source_id: s_N2C7HXGsRiLvTiRugnLkxv
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
        id: c_pOWb08r2XQj4jQEYKt6F_K
        subject_person_id: p_KQzasBZKpXzMFFGEmyJWEG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SeASHf59yQi2kF1TxBPJRr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6SFuncG4gLI0RaChjU5o8t
          claim_id: c_pOWb08r2XQj4jQEYKt6F_K
          source_id: s_N2C7HXGsRiLvTiRugnLkxv
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KQzasBZKpXzMFFGEmyJWEG
        status: active
        display_name: 王碕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VXzO1YbtVHamjoDYYEfNS6
        subject_person_id: p_SeASHf59yQi2kF1TxBPJRr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4tes6KDPDVx6G4bVMzwxNm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W0NQDz-aVQz9XhL4_TyIuk
          claim_id: c_VXzO1YbtVHamjoDYYEfNS6
          source_id: s__QKpA_VQywDTarTiajs-I6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s__QKpA_VQywDTarTiajs-I6
            source_type: api_record
            title: 中国历代人物传记资料库：柳汶實（CBDB 185772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185772&o=json
            external_identifier: CBDB:185772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4tes6KDPDVx6G4bVMzwxNm
        status: active
        display_name: 柳汶實
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王虛明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王虛明 | accepted |
| birth.date | 792年 | accepted |
| death.date | 859年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KQzasBZKpXzMFFGEmyJWEG | 王碕 | accepted |
| spouses | p_4tes6KDPDVx6G4bVMzwxNm | 柳汶實 | accepted |

## 外部来源

- [中国历代人物传记资料库：柳汶實（CBDB 185772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185772&o=json)
- [中国历代人物传记资料库：王虛明（CBDB 145077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145077&o=json)
