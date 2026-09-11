---
schema: wang-person/v1
id: p_4tes6KDPDVx6G4bVMzwxNm
status: active
merged_into: null
display_name: 柳汶實
revision: 1
cbdb_id: 185772
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XZmCRMyry0OdlJHjoWoFd5
        subject_person_id: p_4tes6KDPDVx6G4bVMzwxNm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 柳汶實
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6YXx51FhwebtNOeyiU-uL1
          claim_id: c_XZmCRMyry0OdlJHjoWoFd5
          source_id: s__QKpA_VQywDTarTiajs-I6
          stance: supports
          locator: CBDB:185772
          quotation: null
          interpretation_note: CBDB 明确记录的王虛明配偶
          source: &a1
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
      object_person: null
    alternatives: []
relationships:
  parents: []
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
          source: *a1
      object_person:
        id: p_SeASHf59yQi2kF1TxBPJRr
        status: active
        display_name: 王虛明
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 柳汶實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 柳汶實 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_SeASHf59yQi2kF1TxBPJRr | 王虛明 | accepted |

## 外部来源

- [中国历代人物传记资料库：柳汶實（CBDB 185772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185772&o=json)
