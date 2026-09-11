---
schema: wang-person/v1
id: p_bXTnuv6uZ8kXEnr8y2z3B8
status: active
merged_into: null
display_name: 王宰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LZPALWWnDJPAKS7b1naJJJ
        subject_person_id: p_bXTnuv6uZ8kXEnr8y2z3B8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6h9ip3ssQY77H7kR1U8w3z
          claim_id: c_LZPALWWnDJPAKS7b1naJJJ
          source_id: s_iAudG3JAkwa5tAzZaxHnd8
          stance: supports
          locator: CBDB:378001
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（378001）
          source: &a1
            id: s_iAudG3JAkwa5tAzZaxHnd8
            source_type: api_record
            title: 中国历代人物传记资料库：王宰（CBDB 378001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378001&o=json
            external_identifier: CBDB:378001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x62phKeg6ESUrVLTSpu5zX
        subject_person_id: p_bXTnuv6uZ8kXEnr8y2z3B8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宰，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378001）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DWxAi37UvvXkpmiLekf6uI
          claim_id: c_x62phKeg6ESUrVLTSpu5zX
          source_id: s_iAudG3JAkwa5tAzZaxHnd8
          stance: supports
          locator: CBDB:378001
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

# 王宰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宰 | accepted |
| bio.summary | 王宰，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378001） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宰（CBDB 378001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378001&o=json)
