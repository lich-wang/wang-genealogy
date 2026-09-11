---
schema: wang-person/v1
id: p_SKD21SFhPqFDn65fH8cB4j
status: active
merged_into: null
display_name: 王體泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gxbr6t4ah5bFzw1Lfy43tE
        subject_person_id: p_SKD21SFhPqFDn65fH8cB4j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VVefCP8mkePQjK1bKhTJcZ
          claim_id: c_Gxbr6t4ah5bFzw1Lfy43tE
          source_id: s_C3hZ9M7fAWZu5NtsyMDMS9
          stance: supports
          locator: CBDB:635991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635991）
          source: &a1
            id: s_C3hZ9M7fAWZu5NtsyMDMS9
            source_type: api_record
            title: 中国历代人物传记资料库：王體泰（CBDB 635991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635991&o=json
            external_identifier: CBDB:635991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HB2zLp5tuCgv1SzQE7qzKu
        subject_person_id: p_SKD21SFhPqFDn65fH8cB4j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王體泰，清人物。籍贯祥符，入仕貢生: 拔貢，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 635991）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4IUA8Uvo2rLmzURaWfOQPv
          claim_id: c_HB2zLp5tuCgv1SzQE7qzKu
          source_id: s_C3hZ9M7fAWZu5NtsyMDMS9
          stance: supports
          locator: CBDB:635991
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

# 王體泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王體泰 | accepted |
| bio.summary | 王體泰，清人物。籍贯祥符，入仕貢生: 拔貢，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 635991） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王體泰（CBDB 635991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635991&o=json)
