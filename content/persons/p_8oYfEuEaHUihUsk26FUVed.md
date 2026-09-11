---
schema: wang-person/v1
id: p_8oYfEuEaHUihUsk26FUVed
status: active
merged_into: null
display_name: 王遜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WZQTMC9xayHgmj384NU3Fq
        subject_person_id: p_8oYfEuEaHUihUsk26FUVed
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B67B63xBaun2fFFMLF8dxB
          claim_id: c_WZQTMC9xayHgmj384NU3Fq
          source_id: s_fAdWa8E8Cipc3ziFvBawJ7
          stance: supports
          locator: CBDB:210314
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210314）
          source: &a1
            id: s_fAdWa8E8Cipc3ziFvBawJ7
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 210314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210314&o=json
            external_identifier: CBDB:210314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LGqFQNrgEHA6qeXaCopNyK
        subject_person_id: p_8oYfEuEaHUihUsk26FUVed
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
        - id: cs_kvZN1JAVkocKBBdhfF4rtT
          claim_id: c_LGqFQNrgEHA6qeXaCopNyK
          source_id: s_fAdWa8E8Cipc3ziFvBawJ7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_nhdiwDL_mVSvPpb2UYUH4h
        subject_person_id: p_8oYfEuEaHUihUsk26FUVed
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A7pYYvCPv8mtUqCwSLePSw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7SdYOS16xpIcolEAIoRIqS
          claim_id: c_nhdiwDL_mVSvPpb2UYUH4h
          source_id: s_fAdWa8E8Cipc3ziFvBawJ7
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第八十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A7pYYvCPv8mtUqCwSLePSw
        status: active
        display_name: 王銓
        merged_into_person_id: null
  other: []
---

# 王遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_A7pYYvCPv8mtUqCwSLePSw | 王銓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遜（CBDB 210314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210314&o=json)
