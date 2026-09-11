---
schema: wang-person/v1
id: p_9q2ro62nTSg5KrCkZpJHf6
status: active
merged_into: null
display_name: 王元野
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JDGV8BE4CHYPPuTbx4wEVk
        subject_person_id: p_9q2ro62nTSg5KrCkZpJHf6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元野
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EvgsYT5KnMUZ6UDxd1EtET
          claim_id: c_JDGV8BE4CHYPPuTbx4wEVk
          source_id: s_FFV3WLTBm2G5GC4vK9vEDz
          stance: supports
          locator: CBDB:543462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（543462）
          source: &a1
            id: s_FFV3WLTBm2G5GC4vK9vEDz
            source_type: api_record
            title: 中国历代人物传记资料库：王元野（CBDB 543462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543462&o=json
            external_identifier: CBDB:543462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.450Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mh8uLrjodNGGknW8KfHJq9
        subject_person_id: p_9q2ro62nTSg5KrCkZpJHf6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元野，宋人物。籍贯長溪，入仕進士。（中国历代人物传记资料库 CBDB 543462）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x7lXRcJ77-Gq-Z73Ie1eDG
          claim_id: c_Mh8uLrjodNGGknW8KfHJq9
          source_id: s_FFV3WLTBm2G5GC4vK9vEDz
          stance: supports
          locator: CBDB:543462
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

# 王元野

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元野 | accepted |
| bio.summary | 王元野，宋人物。籍贯長溪，入仕進士。（中国历代人物传记资料库 CBDB 543462） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元野（CBDB 543462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543462&o=json)
