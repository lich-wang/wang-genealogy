---
schema: wang-person/v1
id: p_MFQPEZjYLNvDyKX6WxZzHE
status: active
merged_into: null
display_name: 王楷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mg3AGJvu3PbocNSND6vAfQ
        subject_person_id: p_MFQPEZjYLNvDyKX6WxZzHE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RrfP1fjTiL9fBANshhMreY
          claim_id: c_mg3AGJvu3PbocNSND6vAfQ
          source_id: s_X8xQFTYPJdtWWMby6UzhY6
          stance: supports
          locator: CBDB:556792
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556792）
          source: &a1
            id: s_X8xQFTYPJdtWWMby6UzhY6
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 556792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556792&o=json
            external_identifier: CBDB:556792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s2EFmKHvNGTe74YBTfTxix
        subject_person_id: p_MFQPEZjYLNvDyKX6WxZzHE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pX21Ji2fMFonY8gw3B3HME
          claim_id: c_s2EFmKHvNGTe74YBTfTxix
          source_id: s_X8xQFTYPJdtWWMby6UzhY6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6tDs0hGD5vaQTV6oioqpJb
        subject_person_id: p_MFQPEZjYLNvDyKX6WxZzHE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wNUAExUMWJWXbHkZtZE1MW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qvd7BJpLIzvitxbccs9ZeG
          claim_id: c_6tDs0hGD5vaQTV6oioqpJb
          source_id: s_X8xQFTYPJdtWWMby6UzhY6
          stance: supports
          locator: 南陽府志，lgid=878731：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wNUAExUMWJWXbHkZtZE1MW
        status: active
        display_name: 王周南
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楷 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wNUAExUMWJWXbHkZtZE1MW | 王周南 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楷（CBDB 556792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556792&o=json)
