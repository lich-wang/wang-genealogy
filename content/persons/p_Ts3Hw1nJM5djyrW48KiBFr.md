---
schema: wang-person/v1
id: p_Ts3Hw1nJM5djyrW48KiBFr
status: active
merged_into: null
display_name: 王琇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ycPAgo3b6omz4Rjo48AGsj
        subject_person_id: p_Ts3Hw1nJM5djyrW48KiBFr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9vvHosY22dQ2ntgpiLgVjv
          claim_id: c_ycPAgo3b6omz4Rjo48AGsj
          source_id: s_q7qQuK6bnBh1AmKPeLAWEa
          stance: supports
          locator: CBDB:499124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499124）
          source: &a1
            id: s_q7qQuK6bnBh1AmKPeLAWEa
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 499124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499124&o=json
            external_identifier: CBDB:499124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5oA16kb62PqMJXHWkPP8TL
        subject_person_id: p_Ts3Hw1nJM5djyrW48KiBFr
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
        - id: cs_CaHgpZL3MS4kh6REuHDwo4
          claim_id: c_5oA16kb62PqMJXHWkPP8TL
          source_id: s_q7qQuK6bnBh1AmKPeLAWEa
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
  descendants: []
  other: []
---

# 王琇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琇（CBDB 499124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499124&o=json)
