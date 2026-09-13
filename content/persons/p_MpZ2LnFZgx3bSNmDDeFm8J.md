---
schema: wang-person/v1
id: p_MpZ2LnFZgx3bSNmDDeFm8J
status: merged
merged_into: p_AKu7Q79dhYjH69pKrRtR5y
display_name: 王之翰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_76mmzjmND3Ayvp5KPqN7ei
        subject_person_id: p_MpZ2LnFZgx3bSNmDDeFm8J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DAJhg5YB8jbXYsGt2mUbp8
          claim_id: c_76mmzjmND3Ayvp5KPqN7ei
          source_id: s_QNQ48niAEyW4zuW8Qy1dTJ
          stance: supports
          locator: CBDB:330749
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330749）
          source: &a1
            id: s_QNQ48niAEyW4zuW8Qy1dTJ
            source_type: api_record
            title: 中国历代人物传记资料库：王之翰（CBDB 330749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330749&o=json
            external_identifier: CBDB:330749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.355Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PamNMvQWDPqqVJvwrtVNcw
        subject_person_id: p_MpZ2LnFZgx3bSNmDDeFm8J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰，明人物。嘉靖四十四年進士，籍贯新城，入仕監生。（中国历代人物传记资料库 CBDB 330749）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zrTEas5UPHeNzUUZmEfuUD
          claim_id: c_PamNMvQWDPqqVJvwrtVNcw
          source_id: s_QNQ48niAEyW4zuW8Qy1dTJ
          stance: supports
          locator: CBDB:330749
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

# 王之翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之翰 | accepted |
| bio.summary | 王之翰，明人物。嘉靖四十四年進士，籍贯新城，入仕監生。（中国历代人物传记资料库 CBDB 330749） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之翰（CBDB 330749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330749&o=json)
