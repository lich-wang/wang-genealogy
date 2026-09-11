---
schema: wang-person/v1
id: p_i8TbpTfDfuLCbFLHFJiDP9
status: active
merged_into: null
display_name: 王琰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EGEtpCQmtnW8Wqmg3t779j
        subject_person_id: p_i8TbpTfDfuLCbFLHFJiDP9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YayAETXKSYY78BtiY8AcSu
          claim_id: c_EGEtpCQmtnW8Wqmg3t779j
          source_id: s_N9okK21WTA1t7BVrz83gJn
          stance: supports
          locator: CBDB:97962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97962）
          source: &a1
            id: s_N9okK21WTA1t7BVrz83gJn
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 97962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97962&o=json
            external_identifier: CBDB:97962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qwp8JCaKucEFcB7ocvYKQs
        subject_person_id: p_i8TbpTfDfuLCbFLHFJiDP9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰，宋人物。曾任右朝奉大夫。（中国历代人物传记资料库 CBDB 97962）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NyhC6tAstWAWNjD5j8Yr9p
          claim_id: c_Qwp8JCaKucEFcB7ocvYKQs
          source_id: s_N9okK21WTA1t7BVrz83gJn
          stance: supports
          locator: CBDB:97962
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

# 王琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琰 | accepted |
| bio.summary | 王琰，宋人物。曾任右朝奉大夫。（中国历代人物传记资料库 CBDB 97962） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琰（CBDB 97962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97962&o=json)
