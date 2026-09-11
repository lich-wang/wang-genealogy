---
schema: wang-person/v1
id: p_P2RE6EoMCbKhB1orTiYALD
status: active
merged_into: null
display_name: 胡節
revision: 1
cbdb_id: 118814
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_noB6B_MjQXIQXOHScIY9n0
        subject_person_id: p_P2RE6EoMCbKhB1orTiYALD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 胡節
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ODVfCoWG4rV268_uLIN2Tc
          claim_id: c_noB6B_MjQXIQXOHScIY9n0
          source_id: s_BrBjbMNGiQ36urnFAzXBa4
          stance: supports
          locator: CBDB:118814
          quotation: null
          interpretation_note: CBDB 明确记录的王素娥配偶
          source: &a1
            id: s_BrBjbMNGiQ36urnFAzXBa4
            source_type: api_record
            title: 中国历代人物传记资料库：胡節（CBDB 118814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118814&o=json
            external_identifier: CBDB:118814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VCH5sxD08GCXWmhPKgMDZB
        subject_person_id: p_yDxE3JtAm2V5VYaoCMTCxB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_P2RE6EoMCbKhB1orTiYALD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hwEir-3K6GKwvS0Okh14z3
          claim_id: c_VCH5sxD08GCXWmhPKgMDZB
          source_id: s_BrBjbMNGiQ36urnFAzXBa4
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2932：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yDxE3JtAm2V5VYaoCMTCxB
        status: active
        display_name: 王素娥
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 胡節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 胡節 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_yDxE3JtAm2V5VYaoCMTCxB | 王素娥 | accepted |

## 外部来源

- [中国历代人物传记资料库：胡節（CBDB 118814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118814&o=json)
