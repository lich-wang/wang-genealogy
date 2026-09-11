---
schema: wang-person/v1
id: p_ytoqCSqZTLFoydyaaAXGDx
status: active
merged_into: null
display_name: 王昉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8TZXRMHpj64Gg9e8dApHs8
        subject_person_id: p_ytoqCSqZTLFoydyaaAXGDx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eLH3DPit9SQ3sR6nDKaeEH
          claim_id: c_8TZXRMHpj64Gg9e8dApHs8
          source_id: s_mBrV3RXaqG6APa21KQeMHq
          stance: supports
          locator: CBDB:461444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（461444）
          source: &a1
            id: s_mBrV3RXaqG6APa21KQeMHq
            source_type: api_record
            title: 中国历代人物传记资料库：王昉（CBDB 461444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461444&o=json
            external_identifier: CBDB:461444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_whrSLSK7U1mxuXR13jzasP
        subject_person_id: p_ytoqCSqZTLFoydyaaAXGDx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昉，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 461444）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZlmjaQ75FRN21rQheZQ-bz
          claim_id: c_whrSLSK7U1mxuXR13jzasP
          source_id: s_mBrV3RXaqG6APa21KQeMHq
          stance: supports
          locator: CBDB:461444
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

# 王昉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昉 | accepted |
| bio.summary | 王昉，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 461444） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昉（CBDB 461444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461444&o=json)
