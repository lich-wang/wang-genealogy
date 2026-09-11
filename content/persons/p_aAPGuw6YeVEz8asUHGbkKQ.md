---
schema: wang-person/v1
id: p_aAPGuw6YeVEz8asUHGbkKQ
status: active
merged_into: null
display_name: 王垂謐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4839p8Pe2rL83V9eECjhSc
        subject_person_id: p_aAPGuw6YeVEz8asUHGbkKQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垂謐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9D5SsY9w4XR8CyBNMQUEGU
          claim_id: c_4839p8Pe2rL83V9eECjhSc
          source_id: s_qGnLtXwva2ZcxSQEvn2ykC
          stance: supports
          locator: CBDB:527022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527022）
          source: &a1
            id: s_qGnLtXwva2ZcxSQEvn2ykC
            source_type: api_record
            title: 中国历代人物传记资料库：王垂謐（CBDB 527022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527022&o=json
            external_identifier: CBDB:527022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8YnPzGDyG143HWYPYNfDMv
        subject_person_id: p_aAPGuw6YeVEz8asUHGbkKQ
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
        - id: cs_i69CEaE9G8v3e4NazKsUA2
          claim_id: c_8YnPzGDyG143HWYPYNfDMv
          source_id: s_qGnLtXwva2ZcxSQEvn2ykC
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
        id: c_8lgXGx3_GfknXWDYa3fiiD
        subject_person_id: p_fFFejeNTAUwXPAWu7JRdwj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aAPGuw6YeVEz8asUHGbkKQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tJEZrMonM7c5mgl8BXsepR
          claim_id: c_8lgXGx3_GfknXWDYa3fiiD
          source_id: s_qGnLtXwva2ZcxSQEvn2ykC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13182：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fFFejeNTAUwXPAWu7JRdwj
        status: active
        display_name: 王龍光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王垂謐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垂謐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fFFejeNTAUwXPAWu7JRdwj | 王龍光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王垂謐（CBDB 527022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527022&o=json)
