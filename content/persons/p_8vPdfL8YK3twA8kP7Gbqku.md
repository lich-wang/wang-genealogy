---
schema: wang-person/v1
id: p_8vPdfL8YK3twA8kP7Gbqku
status: active
merged_into: null
display_name: 王晟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_haqyVtyPNxhyDn28wZVE3a
        subject_person_id: p_8vPdfL8YK3twA8kP7Gbqku
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cLVNG4vo92JCRfFUXwBXrY
          claim_id: c_haqyVtyPNxhyDn28wZVE3a
          source_id: s_3GjnqG3u433GBqPPmsUyNc
          stance: supports
          locator: CBDB:471859
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471859）
          source: &a1
            id: s_3GjnqG3u433GBqPPmsUyNc
            source_type: api_record
            title: 中国历代人物传记资料库：王晟（CBDB 471859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471859&o=json
            external_identifier: CBDB:471859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.219Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VPdr7k2nF3hV3z3dAe5BBp
        subject_person_id: p_8vPdfL8YK3twA8kP7Gbqku
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晟，清人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 471859）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YsekyP9oV50s2pukmCUOiz
          claim_id: c_VPdr7k2nF3hV3z3dAe5BBp
          source_id: s_3GjnqG3u433GBqPPmsUyNc
          stance: supports
          locator: CBDB:471859
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

# 王晟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晟 | accepted |
| bio.summary | 王晟，清人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 471859） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晟（CBDB 471859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471859&o=json)
