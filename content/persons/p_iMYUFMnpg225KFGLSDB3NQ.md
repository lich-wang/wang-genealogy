---
schema: wang-person/v1
id: p_iMYUFMnpg225KFGLSDB3NQ
status: active
merged_into: null
display_name: 王成埴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rvQ4SiJjCViU96fYADsQzD
        subject_person_id: p_iMYUFMnpg225KFGLSDB3NQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成埴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7W4cbcpN1rzd4Z5UgSMG6d
          claim_id: c_rvQ4SiJjCViU96fYADsQzD
          source_id: s_wJC3WiCmhhCam1jJV7RgxN
          stance: supports
          locator: CBDB:683699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683699）
          source: &a1
            id: s_wJC3WiCmhhCam1jJV7RgxN
            source_type: api_record
            title: 中国历代人物传记资料库：王成埴（CBDB 683699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683699&o=json
            external_identifier: CBDB:683699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r3PcXDmXtFVEV2f69bPjg3
        subject_person_id: p_iMYUFMnpg225KFGLSDB3NQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UdrxnAXC5bcWVqCj1EXcMf
          claim_id: c_r3PcXDmXtFVEV2f69bPjg3
          source_id: s_wJC3WiCmhhCam1jJV7RgxN
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
        id: c_kUZGVhyDsaRJ1j5XEbkRyJ
        subject_person_id: p_iMYUFMnpg225KFGLSDB3NQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GF36QEVxtnF7cmZ1mJSNyH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yl21eraQkS5WS9rA2NXwzq
          claim_id: c_kUZGVhyDsaRJ1j5XEbkRyJ
          source_id: s_1hhu2BL6kQNMSrZouSbzSP
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163886：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1hhu2BL6kQNMSrZouSbzSP
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 683696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683696&o=json
            external_identifier: CBDB:683696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GF36QEVxtnF7cmZ1mJSNyH
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王成埴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成埴 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GF36QEVxtnF7cmZ1mJSNyH | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成埴（CBDB 683699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683699&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 683696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683696&o=json)
