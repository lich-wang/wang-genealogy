---
schema: wang-person/v1
id: p_dmqzEKBrHjBLbrybq3YDtb
status: active
merged_into: null
display_name: 王如珽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PXKU24ZP7ktP7gjs7V4CkR
        subject_person_id: p_dmqzEKBrHjBLbrybq3YDtb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如珽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WNhKM6GWD5TixbgcSFu4aJ
          claim_id: c_PXKU24ZP7ktP7gjs7V4CkR
          source_id: s_jWRbBdd6269DTWnNcpSNAH
          stance: supports
          locator: CBDB:527011
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527011）
          source: &a1
            id: s_jWRbBdd6269DTWnNcpSNAH
            source_type: api_record
            title: 中国历代人物传记资料库：王如珽（CBDB 527011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527011&o=json
            external_identifier: CBDB:527011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tarLgnNcnAyCMP6A9QQv3r
        subject_person_id: p_dmqzEKBrHjBLbrybq3YDtb
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
        - id: cs_bzuQCW3sa4tQPRhwxw23aK
          claim_id: c_tarLgnNcnAyCMP6A9QQv3r
          source_id: s_jWRbBdd6269DTWnNcpSNAH
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
        id: c_qd83fC1CrX5pfcfN9YLVGe
        subject_person_id: p_T8qVejs68cwHjWufCSe9Fn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dmqzEKBrHjBLbrybq3YDtb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RoCnMdYULbZBYDpgOfDIH2
          claim_id: c_qd83fC1CrX5pfcfN9YLVGe
          source_id: s_jWRbBdd6269DTWnNcpSNAH
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13177：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T8qVejs68cwHjWufCSe9Fn
        status: active
        display_name: 王燕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王如珽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如珽 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T8qVejs68cwHjWufCSe9Fn | 王燕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王如珽（CBDB 527011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527011&o=json)
