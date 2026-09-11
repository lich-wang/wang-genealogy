---
schema: wang-person/v1
id: p_VFPXej8xVczUGDDcED8GoL
status: active
merged_into: null
display_name: 牟氏
revision: 1
cbdb_id: 250450
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DHR4KYueoBrmqaGLVdtxcQ
        subject_person_id: p_VFPXej8xVczUGDDcED8GoL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 牟氏，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 250450）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yjW3RiT7LatlOu5feDMWMz
          claim_id: c_DHR4KYueoBrmqaGLVdtxcQ
          source_id: s_aWweyHrjXQ3LfAzwVFY3xX
          stance: supports
          locator: CBDB:250450
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aWweyHrjXQ3LfAzwVFY3xX
            source_type: api_record
            title: 中国历代人物传记资料库：牟氏(王珩妻)（CBDB 250450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250450&o=json
            external_identifier: CBDB:250450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aiEwMHxdicKrVY2pcUVE7L
        subject_person_id: p_VFPXej8xVczUGDDcED8GoL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 牟氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_10cIr9yASRLlgqUF6EkQ26
          claim_id: c_aiEwMHxdicKrVY2pcUVE7L
          source_id: s_aWweyHrjXQ3LfAzwVFY3xX
          stance: supports
          locator: CBDB:250450
          quotation: null
          interpretation_note: CBDB 明确记录的王珩配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Z9Hlf7oj7dssCCarSFaIRz
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VFPXej8xVczUGDDcED8GoL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iynOQc8x97jyia2mHUeV71
          claim_id: c_Z9Hlf7oj7dssCCarSFaIRz
          source_id: s_aWweyHrjXQ3LfAzwVFY3xX
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百七十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4FbGby9fFeKQMmker7tMMP
        status: active
        display_name: 王珩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 牟氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 牟氏，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 250450） | accepted |
| name.primary | 牟氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4FbGby9fFeKQMmker7tMMP | 王珩 | accepted |

## 外部来源

- [中国历代人物传记资料库：牟氏(王珩妻)（CBDB 250450）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250450&o=json)
