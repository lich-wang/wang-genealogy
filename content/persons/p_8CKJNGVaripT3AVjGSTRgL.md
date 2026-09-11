---
schema: wang-person/v1
id: p_8CKJNGVaripT3AVjGSTRgL
status: active
merged_into: null
display_name: 王敞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gZc4GhaZRAM9Wzj8jECa4A
        subject_person_id: p_8CKJNGVaripT3AVjGSTRgL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rc2669MaeMmqAkZTwxbZkm
          claim_id: c_gZc4GhaZRAM9Wzj8jECa4A
          source_id: s_cSDhRGdWP4eWosWtyNtGvY
          stance: supports
          locator: CBDB:126724
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126724）
          source: &a1
            id: s_cSDhRGdWP4eWosWtyNtGvY
            source_type: api_record
            title: 中国历代人物传记资料库：王敞（CBDB 126724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126724&o=json
            external_identifier: CBDB:126724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.154Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ivHq5NCtebfVk63o1Krout
        subject_person_id: p_8CKJNGVaripT3AVjGSTRgL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1453年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fNe7pNkytUWkjyg663z5rS
          claim_id: c_ivHq5NCtebfVk63o1Krout
          source_id: s_cSDhRGdWP4eWosWtyNtGvY
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
        id: c_KtA1kD9f9HGAhyNY9CvELH
        subject_person_id: p_8CKJNGVaripT3AVjGSTRgL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sQvv2Dbj8PW8bfETYY9VP2
          claim_id: c_KtA1kD9f9HGAhyNY9CvELH
          source_id: s_cSDhRGdWP4eWosWtyNtGvY
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
        id: c_pRDux3BE8LnTHsPACkxoyA
        subject_person_id: p_8CKJNGVaripT3AVjGSTRgL
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
        - id: cs_qpPFt7R6dhwct6crF8HErM
          claim_id: c_pRDux3BE8LnTHsPACkxoyA
          source_id: s_cSDhRGdWP4eWosWtyNtGvY
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
        id: c_gp4yv_B7UtX-Glz-gCr__-
        subject_person_id: p_EPre6RwkxTdv7w3sC85r9v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8CKJNGVaripT3AVjGSTRgL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8--o7I8pSJaYJIb_cr9Slc
          claim_id: c_gp4yv_B7UtX-Glz-gCr__-
          source_id: s_cSDhRGdWP4eWosWtyNtGvY
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第九十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EPre6RwkxTdv7w3sC85r9v
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_eVMvXitzptXaZ85N05GfR-
        subject_person_id: p_9DwGjPApdqe1zoHq9wJJUF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8CKJNGVaripT3AVjGSTRgL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SXuDG8ItZZWzWO1rRt0XAl
          claim_id: c_eVMvXitzptXaZ85N05GfR-
          source_id: s_cSDhRGdWP4eWosWtyNtGvY
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第九十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9DwGjPApdqe1zoHq9wJJUF
        status: active
        display_name: 王國祥
        merged_into_person_id: null
    - claim:
        id: c_6nxVDmDYiQq0UjtX3dBQHG
        subject_person_id: p_MVjZzxWsAgzkrKDUKxsADW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8CKJNGVaripT3AVjGSTRgL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2HzgtleVfa8x70IveN1W9A
          claim_id: c_6nxVDmDYiQq0UjtX3dBQHG
          source_id: s_cSDhRGdWP4eWosWtyNtGvY
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第九十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MVjZzxWsAgzkrKDUKxsADW
        status: active
        display_name: 王寧
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王敞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敞 | accepted |
| birth.date | 1453年 | accepted |
| death.date | 1515年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EPre6RwkxTdv7w3sC85r9v | 王忠 | accepted |
| ancestors | p_9DwGjPApdqe1zoHq9wJJUF | 王國祥 | accepted |
| ancestors | p_MVjZzxWsAgzkrKDUKxsADW | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敞（CBDB 126724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126724&o=json)
