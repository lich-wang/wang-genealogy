---
schema: wang-person/v1
id: p_R4kNKSmBcgnyHB9JioBPEt
status: active
merged_into: null
display_name: 王袞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7KKTZktdquNndQ71FyUC7c
        subject_person_id: p_R4kNKSmBcgnyHB9JioBPEt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王袞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pTSqpoHZqkskt2fDHe8FMg
          claim_id: c_7KKTZktdquNndQ71FyUC7c
          source_id: s_5KMZ4s2QK6shoAf87yKnDn
          stance: supports
          locator: CBDB:160465
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（160465）
          source: &a1
            id: s_5KMZ4s2QK6shoAf87yKnDn
            source_type: api_record
            title: 中国历代人物传记资料库：王袞（CBDB 160465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160465&o=json
            external_identifier: CBDB:160465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AVvgMWv2erbE2N1D3Kdjiz
        subject_person_id: p_R4kNKSmBcgnyHB9JioBPEt
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
        - id: cs_ncTYTyZHsTjFGD9XkB8QoJ
          claim_id: c_AVvgMWv2erbE2N1D3Kdjiz
          source_id: s_5KMZ4s2QK6shoAf87yKnDn
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
        id: c_b_uxZsjOyqyfCilTfE3eyD
        subject_person_id: p_iexjD2e4i4jYiVA31n7oHj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R4kNKSmBcgnyHB9JioBPEt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AsSXdJasBL3CVS-i6CZaCz
          claim_id: c_b_uxZsjOyqyfCilTfE3eyD
          source_id: s_zbhPhjx86HvFDLcJgpxk7B
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zbhPhjx86HvFDLcJgpxk7B
            source_type: api_record
            title: 中国历代人物传记资料库：王係（CBDB 169596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169596&o=json
            external_identifier: CBDB:169596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iexjD2e4i4jYiVA31n7oHj
        status: active
        display_name: 王係
        merged_into_person_id: null
  children:
    - claim:
        id: c_rxGolBfPJhHHN3E6RREJEJ
        subject_person_id: p_R4kNKSmBcgnyHB9JioBPEt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uLwVmgMC518Yd4ehoNd1de
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qivJiz-LAPHdkZLwN1IZkT
          claim_id: c_rxGolBfPJhHHN3E6RREJEJ
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 45：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cUBuvMo9eRXEUn6UkP3FHH
            source_type: api_record
            title: 中国历代人物传记资料库：王誕（CBDB 141997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141997&o=json
            external_identifier: CBDB:141997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uLwVmgMC518Yd4ehoNd1de
        status: active
        display_name: 王誕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王袞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王袞 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iexjD2e4i4jYiVA31n7oHj | 王係 | accepted |
| children | p_uLwVmgMC518Yd4ehoNd1de | 王誕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誕（CBDB 141997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141997&o=json)
- [中国历代人物传记资料库：王袞（CBDB 160465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160465&o=json)
- [中国历代人物传记资料库：王係（CBDB 169596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169596&o=json)
