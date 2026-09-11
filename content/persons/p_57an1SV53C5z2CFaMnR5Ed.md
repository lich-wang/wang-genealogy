---
schema: wang-person/v1
id: p_57an1SV53C5z2CFaMnR5Ed
status: active
merged_into: null
display_name: 王釀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zb9P2xg9Pjjs2xKHqDMk5D
        subject_person_id: p_57an1SV53C5z2CFaMnR5Ed
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J7NnEAUxWT4UTrZeXG44mB
          claim_id: c_Zb9P2xg9Pjjs2xKHqDMk5D
          source_id: s_hJD64yHyr2GMfwUoCs8wwn
          stance: supports
          locator: CBDB:574951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574951）
          source: &a1
            id: s_hJD64yHyr2GMfwUoCs8wwn
            source_type: api_record
            title: 中国历代人物传记资料库：王釀（CBDB 574951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574951&o=json
            external_identifier: CBDB:574951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.688Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4vZHUDU2Y6shsjnR1mQK77
        subject_person_id: p_57an1SV53C5z2CFaMnR5Ed
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釀，清人物。籍贯江陵。（中国历代人物传记资料库 CBDB 574951）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zhtdokXQK4Jd_WQirUleTX
          claim_id: c_4vZHUDU2Y6shsjnR1mQK77
          source_id: s_hJD64yHyr2GMfwUoCs8wwn
          stance: supports
          locator: CBDB:574951
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

# 王釀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釀 | accepted |
| bio.summary | 王釀，清人物。籍贯江陵。（中国历代人物传记资料库 CBDB 574951） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王釀（CBDB 574951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574951&o=json)
