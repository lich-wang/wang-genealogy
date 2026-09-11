---
schema: wang-person/v1
id: p_8ncCPBjMxsJMBARy66EQjw
status: active
merged_into: null
display_name: 王俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tz3zut6XebzNW1HE7XZf11
        subject_person_id: p_8ncCPBjMxsJMBARy66EQjw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ahc4v48JA1UcLecY62eBi2
          claim_id: c_Tz3zut6XebzNW1HE7XZf11
          source_id: s_JnRsT8E8aeFTXk1y34KYhU
          stance: supports
          locator: CBDB:267650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267650）
          source: &a1
            id: s_JnRsT8E8aeFTXk1y34KYhU
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 267650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267650&o=json
            external_identifier: CBDB:267650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ofiZyDYmqVrxwN6DPa1fAK
        subject_person_id: p_8ncCPBjMxsJMBARy66EQjw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。弘治九年進士，籍贯婺源。（中国历代人物传记资料库 CBDB 267650）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_71EGDp5c911G1QrzldjbS6
          claim_id: c_ofiZyDYmqVrxwN6DPa1fAK
          source_id: s_JnRsT8E8aeFTXk1y34KYhU
          stance: supports
          locator: CBDB:267650
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_NhMKt6ImoGTvjOQNA6pSF6
        subject_person_id: p_8ncCPBjMxsJMBARy66EQjw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qLd4Pf4cDMmmQ6kBWSiJ8T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jnud66OhOzt5WCHMU_2BDN
          claim_id: c_NhMKt6ImoGTvjOQNA6pSF6
          source_id: s_JnRsT8E8aeFTXk1y34KYhU
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qLd4Pf4cDMmmQ6kBWSiJ8T
        status: active
        display_name: 王壽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。弘治九年進士，籍贯婺源。（中国历代人物传记资料库 CBDB 267650） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qLd4Pf4cDMmmQ6kBWSiJ8T | 王壽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 267650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267650&o=json)
