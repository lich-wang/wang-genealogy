---
schema: wang-person/v1
id: p_1VVqD7EPGnVHF4wrhTw5JU
status: active
merged_into: null
display_name: 王伯載
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZkGoDKR53S7CNvz5tVwZ1M
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯載
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jo485PAqny9wFfQDQtkRHg
          claim_id: c_ZkGoDKR53S7CNvz5tVwZ1M
          source_id: s_pDsvQAaPubTkoAZNWdrF1o
          stance: supports
          locator: CBDB:286128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286128）
          source: &a1
            id: s_pDsvQAaPubTkoAZNWdrF1o
            source_type: api_record
            title: 中国历代人物传记资料库：王伯載（CBDB 286128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286128&o=json
            external_identifier: CBDB:286128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UzX7PFDTzxcydFvg9s5Ha7
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
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
        - id: cs_X4mTP5gFQyBgBYPehDXGCb
          claim_id: c_UzX7PFDTzxcydFvg9s5Ha7
          source_id: s_pDsvQAaPubTkoAZNWdrF1o
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
        id: c_nsEovVXQV7cyKtjJ3p-lYw
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rWe1cVok9sm3wfCfr2P9SZ
          claim_id: c_nsEovVXQV7cyKtjJ3p-lYw
          source_id: s_pDsvQAaPubTkoAZNWdrF1o
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百八十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AEPDTFs3e2Ci1GpeDM9fLo
        status: active
        display_name: 王芳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伯載

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯載 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AEPDTFs3e2Ci1GpeDM9fLo | 王芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯載（CBDB 286128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286128&o=json)
