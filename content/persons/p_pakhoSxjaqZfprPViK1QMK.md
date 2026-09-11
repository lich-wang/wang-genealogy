---
schema: wang-person/v1
id: p_pakhoSxjaqZfprPViK1QMK
status: active
merged_into: null
display_name: 王子文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4UJ9ykdFs2vPWto7hLwcZP
        subject_person_id: p_pakhoSxjaqZfprPViK1QMK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_umvnHLjtKHJ7d8Uh3pjzmN
          claim_id: c_4UJ9ykdFs2vPWto7hLwcZP
          source_id: s_GVpUq2tuHQf2RD2qoNbzAN
          stance: supports
          locator: CBDB:45866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45866）
          source: &a1
            id: s_GVpUq2tuHQf2RD2qoNbzAN
            source_type: api_record
            title: 中国历代人物传记资料库：王子文（CBDB 45866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45866&o=json
            external_identifier: CBDB:45866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8w6prkdWcMtGB6zcfaRbCQ
        subject_person_id: p_pakhoSxjaqZfprPViK1QMK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子文，宋人物。曾任奉議郎。（中国历代人物传记资料库 CBDB 45866）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Z_o-DC3cEchliCbVLtOLa
          claim_id: c_8w6prkdWcMtGB6zcfaRbCQ
          source_id: s_GVpUq2tuHQf2RD2qoNbzAN
          stance: supports
          locator: CBDB:45866
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

# 王子文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子文 | accepted |
| bio.summary | 王子文，宋人物。曾任奉議郎。（中国历代人物传记资料库 CBDB 45866） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子文（CBDB 45866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45866&o=json)
