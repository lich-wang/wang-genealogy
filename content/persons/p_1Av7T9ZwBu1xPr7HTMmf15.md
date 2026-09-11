---
schema: wang-person/v1
id: p_1Av7T9ZwBu1xPr7HTMmf15
status: active
merged_into: null
display_name: 王堂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n1DzsuCpFyHTRkHPB2iALS
        subject_person_id: p_1Av7T9ZwBu1xPr7HTMmf15
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ALKGTsv4hwSQdfqgXkh8Eh
          claim_id: c_n1DzsuCpFyHTRkHPB2iALS
          source_id: s_5S7KCAfRwEjrqMxDVJVinm
          stance: supports
          locator: CBDB:38894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38894）
          source: &a1
            id: s_5S7KCAfRwEjrqMxDVJVinm
            source_type: api_record
            title: 中国历代人物传记资料库：王堂（CBDB 38894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38894&o=json
            external_identifier: CBDB:38894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AwhbL6VLgCEZ8xTZvVvJaQ
        subject_person_id: p_1Av7T9ZwBu1xPr7HTMmf15
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂，宋人物。籍贯瀘州。（中国历代人物传记资料库 CBDB 38894）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rh4ihPO2JO5vB8aqTnwPx9
          claim_id: c_AwhbL6VLgCEZ8xTZvVvJaQ
          source_id: s_5S7KCAfRwEjrqMxDVJVinm
          stance: supports
          locator: CBDB:38894
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_d7GsbPC5CMzGwPSstAoA2d
        subject_person_id: p_1NoLGELS55sxBxKNhbH7WB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Av7T9ZwBu1xPr7HTMmf15
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k9zsT2XfCnzQMP0xEpGAb7
          claim_id: c_d7GsbPC5CMzGwPSstAoA2d
          source_id: s_5S7KCAfRwEjrqMxDVJVinm
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1NoLGELS55sxBxKNhbH7WB
        status: active
        display_name: 王文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堂 | accepted |
| bio.summary | 王堂，宋人物。籍贯瀘州。（中国历代人物传记资料库 CBDB 38894） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1NoLGELS55sxBxKNhbH7WB | 王文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堂（CBDB 38894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38894&o=json)
