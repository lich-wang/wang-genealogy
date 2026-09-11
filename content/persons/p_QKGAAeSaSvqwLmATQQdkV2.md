---
schema: wang-person/v1
id: p_QKGAAeSaSvqwLmATQQdkV2
status: active
merged_into: null
display_name: 王臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EmRKP7XYTLDH7vhQq2RWiY
        subject_person_id: p_QKGAAeSaSvqwLmATQQdkV2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RzzbRUHFkeaQ1Ydr3VBSvU
          claim_id: c_EmRKP7XYTLDH7vhQq2RWiY
          source_id: s_G4DCzEwg3q89CKSag5Wjbg
          stance: supports
          locator: CBDB:270449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270449）
          source: &a1
            id: s_G4DCzEwg3q89CKSag5Wjbg
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 270449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270449&o=json
            external_identifier: CBDB:270449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7J16gJUNf8zteUiiL43MkC
        subject_person_id: p_QKGAAeSaSvqwLmATQQdkV2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣，明人物。弘治十五年進士，籍贯猗氏。（中国历代人物传记资料库 CBDB 270449）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hE0X9Fb25MnOBdt5QIk4Qh
          claim_id: c_7J16gJUNf8zteUiiL43MkC
          source_id: s_G4DCzEwg3q89CKSag5Wjbg
          stance: supports
          locator: CBDB:270449
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_M1LzttNP_ct3YSWAcUTFdS
        subject_person_id: p_QKGAAeSaSvqwLmATQQdkV2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TTq2erMoECd9k33QFqPJKB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ZLE-3ALYUHkoawA4y9UQA
          claim_id: c_M1LzttNP_ct3YSWAcUTFdS
          source_id: s_G4DCzEwg3q89CKSag5Wjbg
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TTq2erMoECd9k33QFqPJKB
        status: active
        display_name: 王宗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| bio.summary | 王臣，明人物。弘治十五年進士，籍贯猗氏。（中国历代人物传记资料库 CBDB 270449） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TTq2erMoECd9k33QFqPJKB | 王宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 270449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270449&o=json)
