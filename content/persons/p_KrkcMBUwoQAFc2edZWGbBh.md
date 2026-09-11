---
schema: wang-person/v1
id: p_KrkcMBUwoQAFc2edZWGbBh
status: active
merged_into: null
display_name: 王希範
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kce55qX8HxQYeSE4zxd9sD
        subject_person_id: p_KrkcMBUwoQAFc2edZWGbBh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希範
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ea6Q6EJfk9VnA9SeA6DHr3
          claim_id: c_kce55qX8HxQYeSE4zxd9sD
          source_id: s_DWELMp6hTJDjFiePAK4GEE
          stance: supports
          locator: CBDB:13795
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13795）
          source: &a1
            id: s_DWELMp6hTJDjFiePAK4GEE
            source_type: api_record
            title: 中国历代人物传记资料库：王希範（CBDB 13795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13795&o=json
            external_identifier: CBDB:13795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NFLN8HgTZbSM24wDCdCq6N
        subject_person_id: p_KrkcMBUwoQAFc2edZWGbBh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希範，宋人物。籍贯開封，曾任如京副使。（中国历代人物传记资料库 CBDB 13795）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dGh4FilO06NXc623uP39sn
          claim_id: c_NFLN8HgTZbSM24wDCdCq6N
          source_id: s_DWELMp6hTJDjFiePAK4GEE
          stance: supports
          locator: CBDB:13795
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

# 王希範

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希範 | accepted |
| bio.summary | 王希範，宋人物。籍贯開封，曾任如京副使。（中国历代人物传记资料库 CBDB 13795） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希範（CBDB 13795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13795&o=json)
