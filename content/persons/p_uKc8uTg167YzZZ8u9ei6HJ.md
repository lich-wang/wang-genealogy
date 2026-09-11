---
schema: wang-person/v1
id: p_uKc8uTg167YzZZ8u9ei6HJ
status: active
merged_into: null
display_name: 王爾貴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_248DUdAHmyruGJqAK4f65t
        subject_person_id: p_uKc8uTg167YzZZ8u9ei6HJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爾貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tcsuo67FvWBcohHYdAQf9v
          claim_id: c_248DUdAHmyruGJqAK4f65t
          source_id: s_hLv6Gri6zfuerwLWDzh6LN
          stance: supports
          locator: CBDB:639360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639360）
          source: &a1
            id: s_hLv6Gri6zfuerwLWDzh6LN
            source_type: api_record
            title: 中国历代人物传记资料库：王爾貴（CBDB 639360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639360&o=json
            external_identifier: CBDB:639360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f5R5AVUN8mrrhAQnaxgWrR
        subject_person_id: p_uKc8uTg167YzZZ8u9ei6HJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爾貴，清人物。籍贯甘肅省，入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 639360）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n0LSfubEFLeqP36mfwd_Ei
          claim_id: c_f5R5AVUN8mrrhAQnaxgWrR
          source_id: s_hLv6Gri6zfuerwLWDzh6LN
          stance: supports
          locator: CBDB:639360
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

# 王爾貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爾貴 | accepted |
| bio.summary | 王爾貴，清人物。籍贯甘肅省，入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 639360） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爾貴（CBDB 639360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639360&o=json)
