---
schema: wang-person/v1
id: p_Q5WVrMfwuCDjVn7L9idHwN
status: active
merged_into: null
display_name: 王樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FPuGiAweoDuhbboJ1FtyWP
        subject_person_id: p_Q5WVrMfwuCDjVn7L9idHwN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Duuh61EikeAwL8kbJHJ3Kp
          claim_id: c_FPuGiAweoDuhbboJ1FtyWP
          source_id: s_bxuVzoQJoHFGPmjthehjBC
          stance: supports
          locator: CBDB:97935
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97935）
          source: &a1
            id: s_bxuVzoQJoHFGPmjthehjBC
            source_type: api_record
            title: 中国历代人物传记资料库：王樞（CBDB 97935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97935&o=json
            external_identifier: CBDB:97935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.242Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dK4mAR6ysCquVjsoCFgnSY
        subject_person_id: p_Q5WVrMfwuCDjVn7L9idHwN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樞，宋人物。曾任奉直大夫。（中国历代人物传记资料库 CBDB 97935）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qGfYRyu6IE4Y5DoiWR_Gy1
          claim_id: c_dK4mAR6ysCquVjsoCFgnSY
          source_id: s_bxuVzoQJoHFGPmjthehjBC
          stance: supports
          locator: CBDB:97935
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

# 王樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樞 | accepted |
| bio.summary | 王樞，宋人物。曾任奉直大夫。（中国历代人物传记资料库 CBDB 97935） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樞（CBDB 97935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97935&o=json)
