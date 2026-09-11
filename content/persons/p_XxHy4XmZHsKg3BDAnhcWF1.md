---
schema: wang-person/v1
id: p_XxHy4XmZHsKg3BDAnhcWF1
status: active
merged_into: null
display_name: 王佶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VisGxZfHJG56mDAW7bBKYT
        subject_person_id: p_XxHy4XmZHsKg3BDAnhcWF1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gRaPaghPvAu3DCPGJujXXf
          claim_id: c_VisGxZfHJG56mDAW7bBKYT
          source_id: s_hFWDPPsbEbiEW2c6H6aVnm
          stance: supports
          locator: CBDB:636027
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636027）
          source: &a1
            id: s_hFWDPPsbEbiEW2c6H6aVnm
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 636027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636027&o=json
            external_identifier: CBDB:636027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RYrwhq7mxj9LEPEsVXcji1
        subject_person_id: p_XxHy4XmZHsKg3BDAnhcWF1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佶，清人物。籍贯歷城，入仕附貢生，曾任經歷。（中国历代人物传记资料库 CBDB 636027）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uvRhJ2qAfXijzdyg3H8snV
          claim_id: c_RYrwhq7mxj9LEPEsVXcji1
          source_id: s_hFWDPPsbEbiEW2c6H6aVnm
          stance: supports
          locator: CBDB:636027
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

# 王佶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佶 | accepted |
| bio.summary | 王佶，清人物。籍贯歷城，入仕附貢生，曾任經歷。（中国历代人物传记资料库 CBDB 636027） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佶（CBDB 636027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636027&o=json)
