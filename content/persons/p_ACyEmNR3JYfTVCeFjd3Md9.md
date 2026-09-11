---
schema: wang-person/v1
id: p_ACyEmNR3JYfTVCeFjd3Md9
status: active
merged_into: null
display_name: 王萬齡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jznNFxZEQY25oFeSssLktM
        subject_person_id: p_ACyEmNR3JYfTVCeFjd3Md9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WtebQ4cyDUDwvDwQ51oU36
          claim_id: c_jznNFxZEQY25oFeSssLktM
          source_id: s_GrB2at1R9xCZSMfT2FEm5X
          stance: supports
          locator: CBDB:216054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216054）
          source: &a1
            id: s_GrB2at1R9xCZSMfT2FEm5X
            source_type: api_record
            title: 中国历代人物传记资料库：王萬齡（CBDB 216054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216054&o=json
            external_identifier: CBDB:216054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mos1MHnJFy89qUzTxvBZ1E
        subject_person_id: p_ACyEmNR3JYfTVCeFjd3Md9
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
        - id: cs_ZMXPJQEod3C7ESCUapfxBy
          claim_id: c_Mos1MHnJFy89qUzTxvBZ1E
          source_id: s_GrB2at1R9xCZSMfT2FEm5X
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
        id: c_kZlUa_q-Q1gXTLuU9cCga5
        subject_person_id: p_ACyEmNR3JYfTVCeFjd3Md9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WyywGft4yrSmxST3DdCWyK
          claim_id: c_kZlUa_q-Q1gXTLuU9cCga5
          source_id: s_GrB2at1R9xCZSMfT2FEm5X
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EbU5HxFXjQt3D8gkdNvhGE
        status: active
        display_name: 王之麟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王萬齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬齡 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EbU5HxFXjQt3D8gkdNvhGE | 王之麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬齡（CBDB 216054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216054&o=json)
