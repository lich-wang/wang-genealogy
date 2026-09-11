---
schema: wang-person/v1
id: p_xmDi64e5qxbYVCrUTwHDJE
status: active
merged_into: null
display_name: 王世睿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9PJFNNmAEX2266peKHaCJF
        subject_person_id: p_xmDi64e5qxbYVCrUTwHDJE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世睿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JXqz8jK6pJiPyY8eZSpywk
          claim_id: c_9PJFNNmAEX2266peKHaCJF
          source_id: s_hdFkfGgNKj22dCMKvH4zck
          stance: supports
          locator: CBDB:343174
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343174）
          source: &a1
            id: s_hdFkfGgNKj22dCMKvH4zck
            source_type: api_record
            title: 中国历代人物传记资料库：王世睿（CBDB 343174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343174&o=json
            external_identifier: CBDB:343174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qW2taa2HhXMRF2VWqMe2d2
        subject_person_id: p_xmDi64e5qxbYVCrUTwHDJE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世睿，清人物。明清進士進士，籍贯山東省，入仕進士。（中国历代人物传记资料库 CBDB 343174）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BEqnkht1_TcK_Rc3TGH3zt
          claim_id: c_qW2taa2HhXMRF2VWqMe2d2
          source_id: s_hdFkfGgNKj22dCMKvH4zck
          stance: supports
          locator: CBDB:343174
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
  descendants: []
  other: []
---

# 王世睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世睿 | accepted |
| bio.summary | 王世睿，清人物。明清進士進士，籍贯山東省，入仕進士。（中国历代人物传记资料库 CBDB 343174） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世睿（CBDB 343174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343174&o=json)
