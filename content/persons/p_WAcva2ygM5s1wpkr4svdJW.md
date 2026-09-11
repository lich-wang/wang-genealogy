---
schema: wang-person/v1
id: p_WAcva2ygM5s1wpkr4svdJW
status: active
merged_into: null
display_name: 王華
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K3GJ3DN38v5NeW7Dp65y9D
        subject_person_id: p_WAcva2ygM5s1wpkr4svdJW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m3945bxbcsQMi6wtQRPpFX
          claim_id: c_K3GJ3DN38v5NeW7Dp65y9D
          source_id: s_g6C1bKmFKLDR5TszPi6x1A
          stance: supports
          locator: CBDB:30373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30373）
          source: &a1
            id: s_g6C1bKmFKLDR5TszPi6x1A
            source_type: api_record
            title: 中国历代人物传记资料库：王華（CBDB 30373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30373&o=json
            external_identifier: CBDB:30373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MryBxJ8p3fa97X6JUuJm8n
        subject_person_id: p_WAcva2ygM5s1wpkr4svdJW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1522年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jComLteiWXopsBc79v9bs3
          claim_id: c_MryBxJ8p3fa97X6JUuJm8n
          source_id: s_g6C1bKmFKLDR5TszPi6x1A
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JBiiVSDjG496Apx7HGr73u
        subject_person_id: p_WAcva2ygM5s1wpkr4svdJW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華（卒于1522年），明人物。明清進士進士，籍贯餘姚，入仕進士，曾任禮部左侍郎、吏部尚書、吏部右侍郎。（中国历代人物传记资料库 CBDB 30373）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RUMBHsAxWD1JasjoRjz8WM
          claim_id: c_JBiiVSDjG496Apx7HGr73u
          source_id: s_g6C1bKmFKLDR5TszPi6x1A
          stance: supports
          locator: CBDB:30373
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_O4bUXNSKz3yJHfQJACO-wQ
        subject_person_id: p_WAcva2ygM5s1wpkr4svdJW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YIwmWjmVLmXoG6Oqh0nNjH
          claim_id: c_O4bUXNSKz3yJHfQJACO-wQ
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: CBDB 双向互证（父 王華 ⇄ 子 王守仁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_yUmzrSxNNCC7j1D7AdYPLL
            source_type: api_record
            title: 中国历代人物传记资料库：王守仁（CBDB 30374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30374&o=json
            external_identifier: CBDB:30374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D3ZKwNoKjeEJXSHgQd8CdC
        status: active
        display_name: 王守仁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王華 | accepted |
| death.date | 1522年 | accepted |
| bio.summary | 王華（卒于1522年），明人物。明清進士進士，籍贯餘姚，入仕進士，曾任禮部左侍郎、吏部尚書、吏部右侍郎。（中国历代人物传记资料库 CBDB 30373） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_D3ZKwNoKjeEJXSHgQd8CdC | 王守仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王華（CBDB 30373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30373&o=json)
- [中国历代人物传记资料库：王守仁（CBDB 30374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30374&o=json)
