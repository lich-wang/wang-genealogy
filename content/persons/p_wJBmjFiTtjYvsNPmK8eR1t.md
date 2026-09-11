---
schema: wang-person/v1
id: p_wJBmjFiTtjYvsNPmK8eR1t
status: active
merged_into: null
display_name: 王紀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WNQg57cc5KnVTM93BbAG9w
        subject_person_id: p_wJBmjFiTtjYvsNPmK8eR1t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nNK37Pvw6VK1A1TdNZxfKG
          claim_id: c_WNQg57cc5KnVTM93BbAG9w
          source_id: s_VZ8CmK1k5KXdrdtUmSMbzr
          stance: supports
          locator: CBDB:228267
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228267）
          source: &a1
            id: s_VZ8CmK1k5KXdrdtUmSMbzr
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 228267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228267&o=json
            external_identifier: CBDB:228267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_834Xgwv2VFerWwFUbZN3Ci
        subject_person_id: p_wJBmjFiTtjYvsNPmK8eR1t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀，明人物。萬曆丙戌科進士進士，曾任吏部員外郎。（中国历代人物传记资料库 CBDB 228267）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lOZxYkr-HjLMNVHet4Dba-
          claim_id: c_834Xgwv2VFerWwFUbZN3Ci
          source_id: s_VZ8CmK1k5KXdrdtUmSMbzr
          stance: supports
          locator: CBDB:228267
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_oQ8UlbVNNnZWYmqJ68p_2a
        subject_person_id: p_wJBmjFiTtjYvsNPmK8eR1t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F4tZHzbwSRc0bzIvFDZAgQ
          claim_id: c_oQ8UlbVNNnZWYmqJ68p_2a
          source_id: s_VZ8CmK1k5KXdrdtUmSMbzr
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MWFGy9uHg9NsSwK8c42QRv
        status: active
        display_name: 王同休
        merged_into_person_id: null
  other: []
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| bio.summary | 王紀，明人物。萬曆丙戌科進士進士，曾任吏部員外郎。（中国历代人物传记资料库 CBDB 228267） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_MWFGy9uHg9NsSwK8c42QRv | 王同休 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 228267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228267&o=json)
