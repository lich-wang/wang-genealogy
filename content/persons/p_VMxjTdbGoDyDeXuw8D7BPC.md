---
schema: wang-person/v1
id: p_VMxjTdbGoDyDeXuw8D7BPC
status: active
merged_into: null
display_name: 王雲卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v1sBF16ZaTLyD6SGvNPTNR
        subject_person_id: p_VMxjTdbGoDyDeXuw8D7BPC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_otXN4JC5ATkJiY5YzgwMJt
          claim_id: c_v1sBF16ZaTLyD6SGvNPTNR
          source_id: s_yBhnM6D9fssP2JDzTRmoub
          stance: supports
          locator: CBDB:134260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134260）
          source: &a1
            id: s_yBhnM6D9fssP2JDzTRmoub
            source_type: api_record
            title: 中国历代人物传记资料库：王雲卿（CBDB 134260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134260&o=json
            external_identifier: CBDB:134260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PYLZG9zRke96acyAscEG8W
        subject_person_id: p_VMxjTdbGoDyDeXuw8D7BPC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲卿，元人物。曾任教授。（中国历代人物传记资料库 CBDB 134260）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KMSqPpuwdRPmFz-VJCEwsO
          claim_id: c_PYLZG9zRke96acyAscEG8W
          source_id: s_yBhnM6D9fssP2JDzTRmoub
          stance: supports
          locator: CBDB:134260
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

# 王雲卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲卿 | accepted |
| bio.summary | 王雲卿，元人物。曾任教授。（中国历代人物传记资料库 CBDB 134260） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲卿（CBDB 134260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134260&o=json)
