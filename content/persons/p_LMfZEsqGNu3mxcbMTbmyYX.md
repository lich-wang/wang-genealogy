---
schema: wang-person/v1
id: p_LMfZEsqGNu3mxcbMTbmyYX
status: active
merged_into: null
display_name: 王紹宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NUQ8vNDf9CQ3BGfKpS5Anj
        subject_person_id: p_LMfZEsqGNu3mxcbMTbmyYX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W8obJV3h9WZUCEkXRzC2aG
          claim_id: c_NUQ8vNDf9CQ3BGfKpS5Anj
          source_id: s_QQ5jaXCLND888zfZ2QF37u
          stance: supports
          locator: CBDB:149251
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149251）
          source: &a1
            id: s_QQ5jaXCLND888zfZ2QF37u
            source_type: api_record
            title: 中国历代人物传记资料库：王紹宗（CBDB 149251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149251&o=json
            external_identifier: CBDB:149251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1pjQoYd6hfdEh3r5MzrFG5
        subject_person_id: p_LMfZEsqGNu3mxcbMTbmyYX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹宗，唐人物。曾任侍讀、正議大夫、秘書少監。（中国历代人物传记资料库 CBDB 149251）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dI5hyJkF_Dgpba8xbq-iVq
          claim_id: c_1pjQoYd6hfdEh3r5MzrFG5
          source_id: s_QQ5jaXCLND888zfZ2QF37u
          stance: supports
          locator: CBDB:149251
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

# 王紹宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹宗 | accepted |
| bio.summary | 王紹宗，唐人物。曾任侍讀、正議大夫、秘書少監。（中国历代人物传记资料库 CBDB 149251） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹宗（CBDB 149251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149251&o=json)
