---
schema: wang-person/v1
id: p_xDJYGu9s4t4M7A1cjCFP2N
status: active
merged_into: null
display_name: 王春源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ouJAKKPfN9hSeQMPBZJffp
        subject_person_id: p_xDJYGu9s4t4M7A1cjCFP2N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YgoiwKCKKiL81wHeJbn3oN
          claim_id: c_ouJAKKPfN9hSeQMPBZJffp
          source_id: s_JDMML3tMQHdNFGNTwoKSYf
          stance: supports
          locator: CBDB:638415
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638415）
          source: &a1
            id: s_JDMML3tMQHdNFGNTwoKSYf
            source_type: api_record
            title: 中国历代人物传记资料库：王春源（CBDB 638415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638415&o=json
            external_identifier: CBDB:638415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CPAPNX8U49jFHCS7B2BRT6
        subject_person_id: p_xDJYGu9s4t4M7A1cjCFP2N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春源，清人物。籍贯靈石，入仕監生，曾任經歷、知縣。（中国历代人物传记资料库 CBDB 638415）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tr_yOwk1w6Zsz0b7mos0tQ
          claim_id: c_CPAPNX8U49jFHCS7B2BRT6
          source_id: s_JDMML3tMQHdNFGNTwoKSYf
          stance: supports
          locator: CBDB:638415
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

# 王春源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春源 | accepted |
| bio.summary | 王春源，清人物。籍贯靈石，入仕監生，曾任經歷、知縣。（中国历代人物传记资料库 CBDB 638415） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春源（CBDB 638415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638415&o=json)
