---
schema: wang-person/v1
id: p_8oBKd9ZtsRcyQgVCR1bekN
status: active
merged_into: null
display_name: 王宣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MMJUKZ42K9FiBzGtQQQDK8
        subject_person_id: p_8oBKd9ZtsRcyQgVCR1bekN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HYk5xqGWEjNZTtSZdNLezb
          claim_id: c_MMJUKZ42K9FiBzGtQQQDK8
          source_id: s_5RdHAuAGTnHQ8r8vnqdzvD
          stance: supports
          locator: CBDB:255873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255873）
          source: &a1
            id: s_5RdHAuAGTnHQ8r8vnqdzvD
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 255873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255873&o=json
            external_identifier: CBDB:255873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B57unATUp2vwJyyT2nkkK5
        subject_person_id: p_8oBKd9ZtsRcyQgVCR1bekN
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
        - id: cs_ZCLDkmCX4JQapGCwBz7xcb
          claim_id: c_B57unATUp2vwJyyT2nkkK5
          source_id: s_5RdHAuAGTnHQ8r8vnqdzvD
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
        id: c_xL423APGZyuuW-hGgu5dtd
        subject_person_id: p_8oBKd9ZtsRcyQgVCR1bekN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cWTwgVhpSA8gYnzbvXzbFc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0ZGNTQ8CSL-7_PYesNz2Z0
          claim_id: c_xL423APGZyuuW-hGgu5dtd
          source_id: s_5RdHAuAGTnHQ8r8vnqdzvD
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第二十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cWTwgVhpSA8gYnzbvXzbFc
        status: active
        display_name: 王定安
        merged_into_person_id: null
  other: []
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_cWTwgVhpSA8gYnzbvXzbFc | 王定安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 255873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255873&o=json)
