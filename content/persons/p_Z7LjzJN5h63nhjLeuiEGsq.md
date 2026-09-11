---
schema: wang-person/v1
id: p_Z7LjzJN5h63nhjLeuiEGsq
status: active
merged_into: null
display_name: 王鴻謀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Li27L3Qw5Kbn2XDXDoq8n
        subject_person_id: p_Z7LjzJN5h63nhjLeuiEGsq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻謀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wNdQnEKUJVrJctbsACkzfm
          claim_id: c_5Li27L3Qw5Kbn2XDXDoq8n
          source_id: s_VnwS53eQnjwMp5ChB7MPNB
          stance: supports
          locator: CBDB:703739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703739）
          source: &a1
            id: s_VnwS53eQnjwMp5ChB7MPNB
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻謀（CBDB 703739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703739&o=json
            external_identifier: CBDB:703739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1eSHrYJM92DzAmfC75H57G
        subject_person_id: p_Z7LjzJN5h63nhjLeuiEGsq
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
        - id: cs_pC3JBdoiXMuLaDKtuUEqff
          claim_id: c_1eSHrYJM92DzAmfC75H57G
          source_id: s_VnwS53eQnjwMp5ChB7MPNB
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
        id: c_aGbGoHRurMX3xSXi01dCkg
        subject_person_id: p_5qpDQsr3v9pDYmimcziE1B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z7LjzJN5h63nhjLeuiEGsq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VL8lDpNKTwlldiJZoisU85
          claim_id: c_aGbGoHRurMX3xSXi01dCkg
          source_id: s_VnwS53eQnjwMp5ChB7MPNB
          stance: supports
          locator: 上虞縣志，lgid=324970：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5qpDQsr3v9pDYmimcziE1B
        status: active
        display_name: 王望霖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鴻謀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻謀 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5qpDQsr3v9pDYmimcziE1B | 王望霖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鴻謀（CBDB 703739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703739&o=json)
