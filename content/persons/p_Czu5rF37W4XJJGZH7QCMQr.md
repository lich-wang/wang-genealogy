---
schema: wang-person/v1
id: p_Czu5rF37W4XJJGZH7QCMQr
status: active
merged_into: null
display_name: 王汝棐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4L46ywRtjepfRMTUGNT4o
        subject_person_id: p_Czu5rF37W4XJJGZH7QCMQr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝棐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CXSgYENDvPfqF463WCS1W7
          claim_id: c_b4L46ywRtjepfRMTUGNT4o
          source_id: s_1ksysVAejmDMHAJaGQQP9b
          stance: supports
          locator: CBDB:71619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71619）
          source: &a1
            id: s_1ksysVAejmDMHAJaGQQP9b
            source_type: api_record
            title: 中国历代人物传记资料库：王汝棐（CBDB 71619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71619&o=json
            external_identifier: CBDB:71619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_84vE8CS8juYEeskAEJFhV3
        subject_person_id: p_Czu5rF37W4XJJGZH7QCMQr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1623年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DoTYoS7u6qH9yvC7e5iC4g
          claim_id: c_84vE8CS8juYEeskAEJFhV3
          source_id: s_1ksysVAejmDMHAJaGQQP9b
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WYBTsQJy36Mcf7fbFboZVF
        subject_person_id: p_Czu5rF37W4XJJGZH7QCMQr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝棐（生于1623年），清人物。籍贯松陽。（中国历代人物传记资料库 CBDB 71619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gOmCjrz-9OPUZYc-TaMvI2
          claim_id: c_WYBTsQJy36Mcf7fbFboZVF
          source_id: s_1ksysVAejmDMHAJaGQQP9b
          stance: supports
          locator: CBDB:71619
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

# 王汝棐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝棐 | accepted |
| birth.date | 1623年 | accepted |
| bio.summary | 王汝棐（生于1623年），清人物。籍贯松陽。（中国历代人物传记资料库 CBDB 71619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝棐（CBDB 71619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71619&o=json)
