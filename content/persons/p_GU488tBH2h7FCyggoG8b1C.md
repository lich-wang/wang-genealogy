---
schema: wang-person/v1
id: p_GU488tBH2h7FCyggoG8b1C
status: active
merged_into: null
display_name: 王崇基
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q1eeZy1VaoKuf2Veqb7DLi
        subject_person_id: p_GU488tBH2h7FCyggoG8b1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_evfMbZ5RBEK8ZVpzVAcYBu
          claim_id: c_q1eeZy1VaoKuf2Veqb7DLi
          source_id: s_F2AjKZmSZZmPbBz4LFjgHs
          stance: supports
          locator: CBDB:157631
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157631）
          source: &a1
            id: s_F2AjKZmSZZmPbBz4LFjgHs
            source_type: api_record
            title: 中国历代人物传记资料库：王崇基（CBDB 157631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157631&o=json
            external_identifier: CBDB:157631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bnM9FFRy7nxwmdLaXWbSkK
        subject_person_id: p_GU488tBH2h7FCyggoG8b1C
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
        - id: cs_XKXeNhXLyYKLPy7cjDKNdM
          claim_id: c_bnM9FFRy7nxwmdLaXWbSkK
          source_id: s_F2AjKZmSZZmPbBz4LFjgHs
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
        id: c_ZraI7Zm287kyV4wczT7nsZ
        subject_person_id: p_GU488tBH2h7FCyggoG8b1C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6aKQmuB1xaRvMcBNGSGgUM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3efMvKlZ3eaOZH_t4VlLGu
          claim_id: c_ZraI7Zm287kyV4wczT7nsZ
          source_id: s_dBAfnRcpqG7NrGSKmqBytQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dBAfnRcpqG7NrGSKmqBytQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王齊望（175855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175855&o=json
            external_identifier: CBDB:175855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_6aKQmuB1xaRvMcBNGSGgUM
        status: active
        display_name: 王齐望
        merged_into_person_id: null
    - claim:
        id: c_d_wf0R-v0YjqjIQ_sGQPbW
        subject_person_id: p_GU488tBH2h7FCyggoG8b1C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dWRWFHgxvJBT5TEBKBQG8N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C3kjlYhlZQGefItgaLqBtr
          claim_id: c_d_wf0R-v0YjqjIQ_sGQPbW
          source_id: s_X8R4xhQrFxhSP9ScwaJD1M
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_X8R4xhQrFxhSP9ScwaJD1M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王尚逸（175854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175854&o=json
            external_identifier: CBDB:175854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_dWRWFHgxvJBT5TEBKBQG8N
        status: active
        display_name: 王尚逸
        merged_into_person_id: null
    - claim:
        id: c_fTWswsTSIQ6lcfUxqCBUFT
        subject_person_id: p_GU488tBH2h7FCyggoG8b1C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZRQGakw1b52uVgFa6TPuo2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xOSzYHhA1JdQn38i4dfMNp
          claim_id: c_fTWswsTSIQ6lcfUxqCBUFT
          source_id: s_EU81XzzSRVgkEejznEAcvy
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EU81XzzSRVgkEejznEAcvy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王體仁（175853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175853&o=json
            external_identifier: CBDB:175853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_ZRQGakw1b52uVgFa6TPuo2
        status: active
        display_name: 王体仁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇基 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6aKQmuB1xaRvMcBNGSGgUM | 王齐望 | accepted |
| children | p_dWRWFHgxvJBT5TEBKBQG8N | 王尚逸 | accepted |
| children | p_ZRQGakw1b52uVgFa6TPuo2 | 王体仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇基（CBDB 157631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157631&o=json)
- [CBDB 中国历代人物传记资料库：王齊望（175855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175855&o=json)
- [CBDB 中国历代人物传记资料库：王尚逸（175854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175854&o=json)
- [CBDB 中国历代人物传记资料库：王體仁（175853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175853&o=json)
