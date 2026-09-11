---
schema: wang-person/v1
id: p_6HFYHDHS5E6MnCtz3M49ZT
status: active
merged_into: null
display_name: 王瑞蘭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wyWFieVAcV3mdfTK7FJw57
        subject_person_id: p_6HFYHDHS5E6MnCtz3M49ZT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HWmu8m29DGB2DjHan7wZo8
          claim_id: c_wyWFieVAcV3mdfTK7FJw57
          source_id: s_rLpL5RcLC3Z52ZuYT4zhcD
          stance: supports
          locator: CBDB:122025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（122025）
          source: &a1
            id: s_rLpL5RcLC3Z52ZuYT4zhcD
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞蘭（CBDB 122025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122025&o=json
            external_identifier: CBDB:122025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2ViDsJJdY74GAXPJc69weX
        subject_person_id: p_6HFYHDHS5E6MnCtz3M49ZT
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
        - id: cs_dBzQ6ALnAN1vzcuuzVHv5f
          claim_id: c_2ViDsJJdY74GAXPJc69weX
          source_id: s_rLpL5RcLC3Z52ZuYT4zhcD
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
        id: c_f1_phE4R-qHn9yCYMEPaY4
        subject_person_id: p_4EsUVoMJDcYh5gBjunDRDk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6HFYHDHS5E6MnCtz3M49ZT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cGZS0wYMSRL1qIfLEQccWu
          claim_id: c_f1_phE4R-qHn9yCYMEPaY4
          source_id: s_rLpL5RcLC3Z52ZuYT4zhcD
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2330, HuWenKai #245：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4EsUVoMJDcYh5gBjunDRDk
        status: active
        display_name: 王有為
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fpOluhnJgT0ahj2aYP4Mxt
        subject_person_id: p_6HFYHDHS5E6MnCtz3M49ZT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KUmraGKkPy1YnVeDUFW69w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rZzIvB8-q7vritz3dgFid4
          claim_id: c_fpOluhnJgT0ahj2aYP4Mxt
          source_id: s_uSgZdi6dni6ml7DOM2pvuH
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2330, HuWenKai #245：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uSgZdi6dni6ml7DOM2pvuH
            source_type: api_record
            title: 中国历代人物传记资料库：何同文（CBDB 122031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122031&o=json
            external_identifier: CBDB:122031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KUmraGKkPy1YnVeDUFW69w
        status: active
        display_name: 何同文
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王瑞蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞蘭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4EsUVoMJDcYh5gBjunDRDk | 王有為 | accepted |
| spouses | p_KUmraGKkPy1YnVeDUFW69w | 何同文 | accepted |

## 外部来源

- [中国历代人物传记资料库：何同文（CBDB 122031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122031&o=json)
- [中国历代人物传记资料库：王瑞蘭（CBDB 122025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122025&o=json)
