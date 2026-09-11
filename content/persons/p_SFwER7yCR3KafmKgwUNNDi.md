---
schema: wang-person/v1
id: p_SFwER7yCR3KafmKgwUNNDi
status: active
merged_into: null
display_name: 王綺珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hxCoJxfAvJMkJTsH2Jm6bh
        subject_person_id: p_SFwER7yCR3KafmKgwUNNDi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綺珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NV1xp2t877zQCXz8gi1Mrf
          claim_id: c_hxCoJxfAvJMkJTsH2Jm6bh
          source_id: s_1GbAoRx44k42wyp3oBVP1n
          stance: supports
          locator: CBDB:72028
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72028）
          source: &a1
            id: s_1GbAoRx44k42wyp3oBVP1n
            source_type: api_record
            title: 中国历代人物传记资料库：王綺珍（CBDB 72028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72028&o=json
            external_identifier: CBDB:72028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_t96N4oSt1QW1iHYQuWFzQJ
        subject_person_id: p_SFwER7yCR3KafmKgwUNNDi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1824年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mZD6QJmgpAfwWy46jX2A25
          claim_id: c_t96N4oSt1QW1iHYQuWFzQJ
          source_id: s_1GbAoRx44k42wyp3oBVP1n
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9MuF7yf5zUUUNgfop8Zh7L
        subject_person_id: p_SFwER7yCR3KafmKgwUNNDi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綺珍（生于1824年），清人物。籍贯石屏州。（中国历代人物传记资料库 CBDB 72028）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u86cb6zWJ_XReP-wN5H1N_
          claim_id: c_9MuF7yf5zUUUNgfop8Zh7L
          source_id: s_1GbAoRx44k42wyp3oBVP1n
          stance: supports
          locator: CBDB:72028
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

# 王綺珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綺珍 | accepted |
| birth.date | 1824年 | accepted |
| bio.summary | 王綺珍（生于1824年），清人物。籍贯石屏州。（中国历代人物传记资料库 CBDB 72028） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綺珍（CBDB 72028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72028&o=json)
