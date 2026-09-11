---
schema: wang-person/v1
id: p_AJU2uC4HsNpFdE1QyYAPxP
status: active
merged_into: null
display_name: 王道遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iVC1x3pCmHgK6ZLKNXh5Nn
        subject_person_id: p_AJU2uC4HsNpFdE1QyYAPxP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7fDE6DK4FeD3WSs85KdbQE
          claim_id: c_iVC1x3pCmHgK6ZLKNXh5Nn
          source_id: s_i1bthhP77kEbm5a6Qdm1m5
          stance: supports
          locator: CBDB:210023
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210023）
          source: &a1
            id: s_i1bthhP77kEbm5a6Qdm1m5
            source_type: api_record
            title: 中国历代人物传记资料库：王道遠（CBDB 210023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210023&o=json
            external_identifier: CBDB:210023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AF3PWP3z6C6iyqKBpDzBfG
        subject_person_id: p_AJU2uC4HsNpFdE1QyYAPxP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道遠，明人物。隆慶五年進士，籍贯巴縣。（中国历代人物传记资料库 CBDB 210023）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YusvNKnOZXJUAhP8c3nRAL
          claim_id: c_AF3PWP3z6C6iyqKBpDzBfG
          source_id: s_i1bthhP77kEbm5a6Qdm1m5
          stance: supports
          locator: CBDB:210023
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

# 王道遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道遠 | accepted |
| bio.summary | 王道遠，明人物。隆慶五年進士，籍贯巴縣。（中国历代人物传记资料库 CBDB 210023） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道遠（CBDB 210023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210023&o=json)
