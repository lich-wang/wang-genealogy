---
schema: wang-person/v1
id: p_UHRDW3P69JvMUcrzQ6VekC
status: active
merged_into: null
display_name: 王世業
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZPN4PqpvBXBjyFdnwD6Sd2
        subject_person_id: p_UHRDW3P69JvMUcrzQ6VekC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tAhGn5JCou5SeXs5AdMJ2x
          claim_id: c_ZPN4PqpvBXBjyFdnwD6Sd2
          source_id: s_dDSBo9NYukU2VrBkptm81C
          stance: supports
          locator: CBDB:309380
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309380）
          source: &a1
            id: s_dDSBo9NYukU2VrBkptm81C
            source_type: api_record
            title: 中国历代人物传记资料库：王世業（CBDB 309380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309380&o=json
            external_identifier: CBDB:309380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZZWRAziiY8DaNwpxHi9CJb
        subject_person_id: p_UHRDW3P69JvMUcrzQ6VekC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世業，明人物。嘉靖二十六年進士，籍贯崑山，曾任譯字生。（中国历代人物传记资料库 CBDB 309380）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U_SdnGnJJpA8eI9xISPyxG
          claim_id: c_ZZWRAziiY8DaNwpxHi9CJb
          source_id: s_dDSBo9NYukU2VrBkptm81C
          stance: supports
          locator: CBDB:309380
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

# 王世業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世業 | accepted |
| bio.summary | 王世業，明人物。嘉靖二十六年進士，籍贯崑山，曾任譯字生。（中国历代人物传记资料库 CBDB 309380） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世業（CBDB 309380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309380&o=json)
