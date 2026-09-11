---
schema: wang-person/v1
id: p_JyZytS2CPhoEB38LQDTM3g
status: active
merged_into: null
display_name: 王輔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KGLNWQx7SRzLYsLfRnHQE9
        subject_person_id: p_JyZytS2CPhoEB38LQDTM3g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s3e6whASnU26HmqcoFKpmk
          claim_id: c_KGLNWQx7SRzLYsLfRnHQE9
          source_id: s_PyYpG1tVrzHMtc9x9WevjW
          stance: supports
          locator: CBDB:236253
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236253）
          source: &a1
            id: s_PyYpG1tVrzHMtc9x9WevjW
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 236253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236253&o=json
            external_identifier: CBDB:236253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RNSzTSDBwn2EaBgPD5eEWt
        subject_person_id: p_JyZytS2CPhoEB38LQDTM3g
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
        - id: cs_6iH7fK8j9H5S51N4gwQMbc
          claim_id: c_RNSzTSDBwn2EaBgPD5eEWt
          source_id: s_PyYpG1tVrzHMtc9x9WevjW
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
        id: c_MLkN8rAPI6QvxKNV3f5wr4
        subject_person_id: p_JyZytS2CPhoEB38LQDTM3g
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q4mq6fygocp26TN7xUYfs3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KplCQp582DHIzpNdOS2Vdu
          claim_id: c_MLkN8rAPI6QvxKNV3f5wr4
          source_id: s_PyYpG1tVrzHMtc9x9WevjW
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q4mq6fygocp26TN7xUYfs3
        status: active
        display_name: 王弘祖
        merged_into_person_id: null
  other: []
---

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Q4mq6fygocp26TN7xUYfs3 | 王弘祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 236253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236253&o=json)
