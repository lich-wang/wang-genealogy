---
schema: wang-person/v1
id: p_otj25HqSsMgir3TW792PqY
status: active
merged_into: null
display_name: 王表
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PGc4PWTaUb5hoaYYgh6yEV
        subject_person_id: p_otj25HqSsMgir3TW792PqY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qANvW6mARvEbsRvvGt9ina
          claim_id: c_PGc4PWTaUb5hoaYYgh6yEV
          source_id: s_QxEauuo76d3ydzzBgTV8yF
          stance: supports
          locator: CBDB:92024
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92024）
          source: &a1
            id: s_QxEauuo76d3ydzzBgTV8yF
            source_type: api_record
            title: 中国历代人物传记资料库：王表（CBDB 92024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92024&o=json
            external_identifier: CBDB:92024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KS3jEwgmJ4ZjUKKwVpaBKL
        subject_person_id: p_otj25HqSsMgir3TW792PqY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表，唐人物。身份为詩人，入仕進士，曾任秘書省少監。（中国历代人物传记资料库 CBDB 92024）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pqqurgs5kL-tS7pjP5zMOI
          claim_id: c_KS3jEwgmJ4ZjUKKwVpaBKL
          source_id: s_QxEauuo76d3ydzzBgTV8yF
          stance: supports
          locator: CBDB:92024
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

# 王表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王表 | accepted |
| bio.summary | 王表，唐人物。身份为詩人，入仕進士，曾任秘書省少監。（中国历代人物传记资料库 CBDB 92024） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王表（CBDB 92024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92024&o=json)
