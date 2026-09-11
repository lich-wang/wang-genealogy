---
schema: wang-person/v1
id: p_SF8b1FWpWARonMw2tgz71i
status: active
merged_into: null
display_name: 王瓊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dRjaH2bFvzQMc4iWEKPBGi
        subject_person_id: p_SF8b1FWpWARonMw2tgz71i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_shUD75KAmT7qqJ9CJcGc9W
          claim_id: c_dRjaH2bFvzQMc4iWEKPBGi
          source_id: s_fR8ZLW8PBYS6xLWJ9M2U4d
          stance: supports
          locator: CBDB:470182
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（470182）
          source: &a1
            id: s_fR8ZLW8PBYS6xLWJ9M2U4d
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 470182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470182&o=json
            external_identifier: CBDB:470182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_92Y63ShJTAQ9AUqC7dGFJf
        subject_person_id: p_SF8b1FWpWARonMw2tgz71i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊，明人物。曾任都御史。（中国历代人物传记资料库 CBDB 470182）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dGezN-h_jG3Nv61X9Qun1U
          claim_id: c_92Y63ShJTAQ9AUqC7dGFJf
          source_id: s_fR8ZLW8PBYS6xLWJ9M2U4d
          stance: supports
          locator: CBDB:470182
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

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| bio.summary | 王瓊，明人物。曾任都御史。（中国历代人物传记资料库 CBDB 470182） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 470182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470182&o=json)
