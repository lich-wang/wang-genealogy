---
schema: wang-person/v1
id: p_zsKLMt9NT8etsJ7hMx7pPi
status: active
merged_into: null
display_name: 王引楷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W1kf8hcKTNDSjVmQiM77Dx
        subject_person_id: p_zsKLMt9NT8etsJ7hMx7pPi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王引楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HbvCWJ3p8DEGQ86PhrRspN
          claim_id: c_W1kf8hcKTNDSjVmQiM77Dx
          source_id: s_FoQ63omJt8a4A3fC6kQopF
          stance: supports
          locator: CBDB:637612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637612）
          source: &a1
            id: s_FoQ63omJt8a4A3fC6kQopF
            source_type: api_record
            title: 中国历代人物传记资料库：王引楷（CBDB 637612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637612&o=json
            external_identifier: CBDB:637612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GbvbMGAdfgdf6qikTYk2EG
        subject_person_id: p_zsKLMt9NT8etsJ7hMx7pPi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王引楷，清人物。籍贯諸城，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知府、知縣、知州。（中国历代人物传记资料库 CBDB 637612）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lFZ9dpdFzEs6NTvfgmIton
          claim_id: c_GbvbMGAdfgdf6qikTYk2EG
          source_id: s_FoQ63omJt8a4A3fC6kQopF
          stance: supports
          locator: CBDB:637612
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

# 王引楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王引楷 | accepted |
| bio.summary | 王引楷，清人物。籍贯諸城，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知府、知縣、知州。（中国历代人物传记资料库 CBDB 637612） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王引楷（CBDB 637612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637612&o=json)
