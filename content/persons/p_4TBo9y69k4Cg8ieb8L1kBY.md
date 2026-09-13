---
schema: wang-person/v1
id: p_4TBo9y69k4Cg8ieb8L1kBY
status: active
merged_into: null
display_name: 王祖卿
cbdb_id: 33389
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bUyvsnqm76sGotvdk4Lr7e
        subject_person_id: p_4TBo9y69k4Cg8ieb8L1kBY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖卿，史料所见人物。本项目依据《中国历代人物传记资料库：王祖卿（CBDB 33389）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_fMDjtOyUzN9Qr9aNHCF1sR
          claim_id: c_bUyvsnqm76sGotvdk4Lr7e
          source_id: s_h1p2aDyxS22aRVtrVVdNFW
          stance: supports
          locator: CBDB:33389
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_h1p2aDyxS22aRVtrVVdNFW
            source_type: api_record
            title: 中国历代人物传记资料库：王祖卿（CBDB 33389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33389&o=json
            external_identifier: CBDB:33389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fXCm8v7W5xwDkPCuVWi39C
        subject_person_id: p_4TBo9y69k4Cg8ieb8L1kBY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XH8CQKYiDHoi3K5FDFaSGz
          claim_id: c_fXCm8v7W5xwDkPCuVWi39C
          source_id: s_h1p2aDyxS22aRVtrVVdNFW
          stance: supports
          locator: CBDB:33389
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OWH1a3LOnmHuVTsWqQ855z
        subject_person_id: p_4TBo9y69k4Cg8ieb8L1kBY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C3TuxmwnnMs6tN6CBABiKM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fhboKYuK39FBVjXHGfrtvC
          claim_id: c_OWH1a3LOnmHuVTsWqQ855z
          source_id: s_b9kaKSPBSheh64hDEdY6Vh
          stance: supports
          locator: CBDB 双向互证（父 王祖卿 ⇄ 子 王震）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_b9kaKSPBSheh64hDEdY6Vh
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 33390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33390&o=json
            external_identifier: CBDB:33390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C3TuxmwnnMs6tN6CBABiKM
        status: active
        display_name: 王震
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祖卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祖卿，史料所见人物。本项目依据《中国历代人物传记资料库：王祖卿（CBDB 33389）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王祖卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_C3TuxmwnnMs6tN6CBABiKM | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王震（CBDB 33390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33390&o=json)
- [中国历代人物传记资料库：王祖卿（CBDB 33389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33389&o=json)
