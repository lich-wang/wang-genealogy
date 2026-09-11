---
schema: wang-person/v1
id: p_AFbFHZuiA1cXihLNwqN1PX
status: active
merged_into: null
display_name: 王熊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EV68SxPGBQ37hh3kxNzLeH
        subject_person_id: p_AFbFHZuiA1cXihLNwqN1PX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GUgqjUkpvd5ck6B5YycEYK
          claim_id: c_EV68SxPGBQ37hh3kxNzLeH
          source_id: s_QcNP1vFG7GHruaYp3Wy1Q7
          stance: supports
          locator: CBDB:151744
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151744）
          source: &a1
            id: s_QcNP1vFG7GHruaYp3Wy1Q7
            source_type: api_record
            title: 中国历代人物传记资料库：王熊（CBDB 151744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151744&o=json
            external_identifier: CBDB:151744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eR8QxGUX5mmqBRj9Y3dMKr
        subject_person_id: p_AFbFHZuiA1cXihLNwqN1PX
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
        - id: cs_6qGXbRcw5eUerhCFwWEnfA
          claim_id: c_eR8QxGUX5mmqBRj9Y3dMKr
          source_id: s_QcNP1vFG7GHruaYp3Wy1Q7
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
        id: c_y4ybb-RzO6ywgf_2KQgqxo
        subject_person_id: p_tWvLcyqPqfcv2k5sniX1uV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AFbFHZuiA1cXihLNwqN1PX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ENvTBXebHsbuIlWSPEjSmR
          claim_id: c_y4ybb-RzO6ywgf_2KQgqxo
          source_id: s_QcNP1vFG7GHruaYp3Wy1Q7
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 175：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tWvLcyqPqfcv2k5sniX1uV
        status: active
        display_name: 王玄起
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王熊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熊 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tWvLcyqPqfcv2k5sniX1uV | 王玄起 | accepted |

## 外部来源

- [中国历代人物传记资料库：王熊（CBDB 151744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151744&o=json)
