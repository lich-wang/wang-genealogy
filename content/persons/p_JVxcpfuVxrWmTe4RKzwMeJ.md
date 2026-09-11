---
schema: wang-person/v1
id: p_JVxcpfuVxrWmTe4RKzwMeJ
status: active
merged_into: null
display_name: 王欽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tqpqiNLCJ9RJut2XyPriju
        subject_person_id: p_JVxcpfuVxrWmTe4RKzwMeJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QnPA3Bf5nHPWUpL1dnLvAh
          claim_id: c_tqpqiNLCJ9RJut2XyPriju
          source_id: s_hyLygUvMHpPYWTD47hiBPS
          stance: supports
          locator: CBDB:259314
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259314）
          source: &a1
            id: s_hyLygUvMHpPYWTD47hiBPS
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 259314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259314&o=json
            external_identifier: CBDB:259314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_stsNYNY879Du2q3GVHVfZV
        subject_person_id: p_JVxcpfuVxrWmTe4RKzwMeJ
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
        - id: cs_2sDM8W8a9RVk7s5ajKZ3Kb
          claim_id: c_stsNYNY879Du2q3GVHVfZV
          source_id: s_hyLygUvMHpPYWTD47hiBPS
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
        id: c_Gi7WKggn4N6727VvaZkNgG
        subject_person_id: p_JVxcpfuVxrWmTe4RKzwMeJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LG7z9nE3SbHJEkwafJSkBi
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__OQM_91CmmO9I0EeXbH570
          claim_id: c_Gi7WKggn4N6727VvaZkNgG
          source_id: s_hyLygUvMHpPYWTD47hiBPS
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第七十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LG7z9nE3SbHJEkwafJSkBi
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  other: []
---

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_LG7z9nE3SbHJEkwafJSkBi | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 259314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259314&o=json)
