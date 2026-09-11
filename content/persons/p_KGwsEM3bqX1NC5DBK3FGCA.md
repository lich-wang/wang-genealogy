---
schema: wang-person/v1
id: p_KGwsEM3bqX1NC5DBK3FGCA
status: active
merged_into: null
display_name: 王晅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LS4DoTJCorugxDndRDMEpP
        subject_person_id: p_KGwsEM3bqX1NC5DBK3FGCA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FfHJ1f2JZHPRVtz2CeXJw4
          claim_id: c_LS4DoTJCorugxDndRDMEpP
          source_id: s_uiYS5CFfNqbeBqpmspit23
          stance: supports
          locator: CBDB:638446
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638446）
          source: &a1
            id: s_uiYS5CFfNqbeBqpmspit23
            source_type: api_record
            title: 中国历代人物传记资料库：王晅（CBDB 638446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638446&o=json
            external_identifier: CBDB:638446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HEyGWQGT39ry6kHGCLJpsL
        subject_person_id: p_KGwsEM3bqX1NC5DBK3FGCA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晅，清人物。籍贯高密，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 638446）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UgrLqiNNMRln6_lRd-0ACW
          claim_id: c_HEyGWQGT39ry6kHGCLJpsL
          source_id: s_uiYS5CFfNqbeBqpmspit23
          stance: supports
          locator: CBDB:638446
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

# 王晅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晅 | accepted |
| bio.summary | 王晅，清人物。籍贯高密，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 638446） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晅（CBDB 638446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638446&o=json)
