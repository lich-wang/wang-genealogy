---
schema: wang-person/v1
id: p_aHofH8CUL2xVV3auknwUH2
status: active
merged_into: null
display_name: 王玉溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9DN37msvCbdc8ySMubk9q6
        subject_person_id: p_aHofH8CUL2xVV3auknwUH2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_athYx58BLfNnZcgc5BHspD
          claim_id: c_9DN37msvCbdc8ySMubk9q6
          source_id: s_BnebUChKyHMyKD3zNFot6f
          stance: supports
          locator: CBDB:639377
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639377）
          source: &a1
            id: s_BnebUChKyHMyKD3zNFot6f
            source_type: api_record
            title: 中国历代人物传记资料库：王玉溥（CBDB 639377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639377&o=json
            external_identifier: CBDB:639377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HQKqi5ZB3W8UMdmwHiwLaK
        subject_person_id: p_aHofH8CUL2xVV3auknwUH2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王玉溥，清人物。籍贯交河，入仕貢生: 拔貢，曾任知府。（中国历代人物传记资料库 CBDB 639377）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6H57eDNfn6QG72BZ5yBPFm
          claim_id: c_HQKqi5ZB3W8UMdmwHiwLaK
          source_id: s_BnebUChKyHMyKD3zNFot6f
          stance: supports
          locator: CBDB:639377
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

# 王玉溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉溥 | accepted |
| bio.summary | 王玉溥，清人物。籍贯交河，入仕貢生: 拔貢，曾任知府。（中国历代人物传记资料库 CBDB 639377） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉溥（CBDB 639377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639377&o=json)
