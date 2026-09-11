---
schema: wang-person/v1
id: p_KVcHZm6YNUEbUE4QNG2ccz
status: active
merged_into: null
display_name: 王茂蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Aip7mGpnGsegGh1No2CuVG
        subject_person_id: p_KVcHZm6YNUEbUE4QNG2ccz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HoF5xiusFsWog3RJdAA3NT
          claim_id: c_Aip7mGpnGsegGh1No2CuVG
          source_id: s_P3xQFpnTXWV5F5ESVCDetM
          stance: supports
          locator: CBDB:640088
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640088）
          source: &a1
            id: s_P3xQFpnTXWV5F5ESVCDetM
            source_type: api_record
            title: 中国历代人物传记资料库：王茂蘭（CBDB 640088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640088&o=json
            external_identifier: CBDB:640088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tjfgkppf9GE2psxMPejW5E
        subject_person_id: p_KVcHZm6YNUEbUE4QNG2ccz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂蘭，清人物。籍贯甘肅省，入仕行伍，曾任把總、千總。（中国历代人物传记资料库 CBDB 640088）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3WLoC7NdwpwWT5vA_49kXg
          claim_id: c_tjfgkppf9GE2psxMPejW5E
          source_id: s_P3xQFpnTXWV5F5ESVCDetM
          stance: supports
          locator: CBDB:640088
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

# 王茂蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂蘭 | accepted |
| bio.summary | 王茂蘭，清人物。籍贯甘肅省，入仕行伍，曾任把總、千總。（中国历代人物传记资料库 CBDB 640088） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茂蘭（CBDB 640088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640088&o=json)
