---
schema: wang-person/v1
id: p_B2inFXzoQGSyJ7aKhbAuCA
status: active
merged_into: null
display_name: 王福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PunibTnsGuzT6V7EcUAx4t
        subject_person_id: p_B2inFXzoQGSyJ7aKhbAuCA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ox4PT764VQ6id6FqZaZVwA
          claim_id: c_PunibTnsGuzT6V7EcUAx4t
          source_id: s_FTwksK6oFTx12FzhYLXigR
          stance: supports
          locator: CBDB:249823
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249823）
          source: &a1
            id: s_FTwksK6oFTx12FzhYLXigR
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 249823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249823&o=json
            external_identifier: CBDB:249823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.193Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_knL8DWwJu86kMSH2vsq1oQ
        subject_person_id: p_B2inFXzoQGSyJ7aKhbAuCA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。成化十一年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 249823）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_toVPyDz7qRiLdROeKFnxgl
          claim_id: c_knL8DWwJu86kMSH2vsq1oQ
          source_id: s_FTwksK6oFTx12FzhYLXigR
          stance: supports
          locator: CBDB:249823
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

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。成化十一年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 249823） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 249823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249823&o=json)
