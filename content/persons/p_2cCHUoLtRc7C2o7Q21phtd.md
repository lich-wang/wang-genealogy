---
schema: wang-person/v1
id: p_2cCHUoLtRc7C2o7Q21phtd
status: active
merged_into: null
display_name: 王可立
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3YqWec7iNsVHm7Eo682dsq
        subject_person_id: p_2cCHUoLtRc7C2o7Q21phtd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Yts8fLsyk7UyaiUvR8Ucy
          claim_id: c_3YqWec7iNsVHm7Eo682dsq
          source_id: s_VV5gMyHLuRBYAYuKaKhFgw
          stance: supports
          locator: CBDB:191410
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191410）
          source: &a1
            id: s_VV5gMyHLuRBYAYuKaKhFgw
            source_type: api_record
            title: 中国历代人物传记资料库：王可立（CBDB 191410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191410&o=json
            external_identifier: CBDB:191410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.363Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HPwGEBvRhPJ2AQBpfECpfT
        subject_person_id: p_2cCHUoLtRc7C2o7Q21phtd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 868年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rb9vqvSKundR1iq5xDQ2qw
          claim_id: c_HPwGEBvRhPJ2AQBpfECpfT
          source_id: s_VV5gMyHLuRBYAYuKaKhFgw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EpZsoaQkaaptG13dRYXXKf
        subject_person_id: p_2cCHUoLtRc7C2o7Q21phtd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可立（卒于868年），唐人物。曾任大理評事。（中国历代人物传记资料库 CBDB 191410）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YfjxaIEl1agqB01CIL-VTJ
          claim_id: c_EpZsoaQkaaptG13dRYXXKf
          source_id: s_VV5gMyHLuRBYAYuKaKhFgw
          stance: supports
          locator: CBDB:191410
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

# 王可立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可立 | accepted |
| death.date | 868年 | accepted |
| bio.summary | 王可立（卒于868年），唐人物。曾任大理評事。（中国历代人物传记资料库 CBDB 191410） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可立（CBDB 191410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191410&o=json)
