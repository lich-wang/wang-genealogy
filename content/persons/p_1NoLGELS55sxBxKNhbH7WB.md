---
schema: wang-person/v1
id: p_1NoLGELS55sxBxKNhbH7WB
status: active
merged_into: null
display_name: 王文
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U8hGkNRcQBda7xJbeoFgCv
        subject_person_id: p_1NoLGELS55sxBxKNhbH7WB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KPYsMjmj17BsUtzxAGisuM
          claim_id: c_U8hGkNRcQBda7xJbeoFgCv
          source_id: s_K2M6FbVsdvMaqBG5jMmoBH
          stance: supports
          locator: CBDB:38820
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38820）
          source: &a1
            id: s_K2M6FbVsdvMaqBG5jMmoBH
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 38820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38820&o=json
            external_identifier: CBDB:38820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mGiUtBpbMrBif7YioFskRS
        subject_person_id: p_1NoLGELS55sxBxKNhbH7WB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_axkjAjGrbJfLZDRgF3bs2d
          claim_id: c_mGiUtBpbMrBif7YioFskRS
          source_id: s_K2M6FbVsdvMaqBG5jMmoBH
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
          source:
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
      object_person:
        id: p_1Av7T9ZwBu1xPr7HTMmf15
        status: active
        display_name: 王堂
        merged_into_person_id: null
    - claim:
        id: c_TpN4Vb2kJKN-oyahJutkrL
        subject_person_id: p_1NoLGELS55sxBxKNhbH7WB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aKLZoUMaRiaZwxC5LrucJ9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jQVwYinRuoOVfv_wRgBu4u
          claim_id: c_TpN4Vb2kJKN-oyahJutkrL
          source_id: s_K2M6FbVsdvMaqBG5jMmoBH
          stance: supports
          locator: 宋人傳記資料索引(電子版)：長子; 第一子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aKLZoUMaRiaZwxC5LrucJ9
        status: active
        display_name: 王椿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1Av7T9ZwBu1xPr7HTMmf15 | 王堂 | accepted |
| children | p_aKLZoUMaRiaZwxC5LrucJ9 | 王椿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堂（CBDB 38894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38894&o=json)
- [中国历代人物传记资料库：王文（CBDB 38820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38820&o=json)
