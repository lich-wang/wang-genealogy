---
schema: wang-person/v1
id: p_2xnK4T933jcCqXnCvUmYXc
status: active
merged_into: null
display_name: 王本和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nkj7M7RqLp81AvDAyDHfCq
        subject_person_id: p_2xnK4T933jcCqXnCvUmYXc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bccA8gVtVgtdCQrdcJufDT
          claim_id: c_Nkj7M7RqLp81AvDAyDHfCq
          source_id: s_vSYiP9GQUTwHxfaNhKj5XC
          stance: supports
          locator: CBDB:638652
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638652）
          source: &a1
            id: s_vSYiP9GQUTwHxfaNhKj5XC
            source_type: api_record
            title: 中国历代人物传记资料库：王本和（CBDB 638652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638652&o=json
            external_identifier: CBDB:638652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FzGTHA7NXVJQKQAvERvEcx
        subject_person_id: p_2xnK4T933jcCqXnCvUmYXc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本和，清人物。籍贯榆林，曾任典史。（中国历代人物传记资料库 CBDB 638652）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vN96CuazmRFEH7MI2PCm1n
          claim_id: c_FzGTHA7NXVJQKQAvERvEcx
          source_id: s_vSYiP9GQUTwHxfaNhKj5XC
          stance: supports
          locator: CBDB:638652
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

# 王本和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本和 | accepted |
| bio.summary | 王本和，清人物。籍贯榆林，曾任典史。（中国历代人物传记资料库 CBDB 638652） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王本和（CBDB 638652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638652&o=json)
