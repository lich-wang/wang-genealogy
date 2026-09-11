---
schema: wang-person/v1
id: p_EwAtmwPhos1J4KLfx99oh7
status: active
merged_into: null
display_name: 王良佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MALo2Ezr4JSh3pR2LAG4rT
        subject_person_id: p_EwAtmwPhos1J4KLfx99oh7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p3UrkMChUEVTMkLDdgDn4A
          claim_id: c_MALo2Ezr4JSh3pR2LAG4rT
          source_id: s_PR94SzrxwkWAe81yeo26dK
          stance: supports
          locator: CBDB:458128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458128）
          source: &a1
            id: s_PR94SzrxwkWAe81yeo26dK
            source_type: api_record
            title: 中国历代人物传记资料库：王良佐（CBDB 458128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458128&o=json
            external_identifier: CBDB:458128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.637Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_deECoRDmEc92m2VbQPbK7h
        subject_person_id: p_EwAtmwPhos1J4KLfx99oh7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良佐，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 458128）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G0ZEu4aysUIDbfwqo7ZrMr
          claim_id: c_deECoRDmEc92m2VbQPbK7h
          source_id: s_PR94SzrxwkWAe81yeo26dK
          stance: supports
          locator: CBDB:458128
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

# 王良佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良佐 | accepted |
| bio.summary | 王良佐，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 458128） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良佐（CBDB 458128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458128&o=json)
