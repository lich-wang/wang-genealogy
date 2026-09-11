---
schema: wang-person/v1
id: p_iynmuaxSvnDn2F5JW2xNTm
status: active
merged_into: null
display_name: 王瑤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YV3V97UyDvM9v16rYAD86K
        subject_person_id: p_iynmuaxSvnDn2F5JW2xNTm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xugMxFYtkXv5kQ7sJJTqPg
          claim_id: c_YV3V97UyDvM9v16rYAD86K
          source_id: s_BGjtHrMF9cxL1aibLzRo2N
          stance: supports
          locator: CBDB:163962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（163962）
          source: &a1
            id: s_BGjtHrMF9cxL1aibLzRo2N
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 163962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163962&o=json
            external_identifier: CBDB:163962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fkhRchfkxVxUz38vu3xAWF
        subject_person_id: p_iynmuaxSvnDn2F5JW2xNTm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤，史料所见人物。本项目依据《中国历代人物传记资料库：王瑤（CBDB 163962）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RmrfTBxzlnRkfOFxXyempa
          claim_id: c_fkhRchfkxVxUz38vu3xAWF
          source_id: s_BGjtHrMF9cxL1aibLzRo2N
          stance: supports
          locator: CBDB:163962
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7sspj_PJzInPunB-NP_s8d
        subject_person_id: p_ANeppbxTm56LA1X59e1kGK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iynmuaxSvnDn2F5JW2xNTm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WcP4JBSQHsqWlx-5J4o8yF
          claim_id: c_7sspj_PJzInPunB-NP_s8d
          source_id: s_o8Pe63bQXpJ4by7h9DNdh4
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan71：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o8Pe63bQXpJ4by7h9DNdh4
            source_type: api_record
            title: 中国历代人物传记资料库：王待徵（CBDB 142900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142900&o=json
            external_identifier: CBDB:142900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ANeppbxTm56LA1X59e1kGK
        status: active
        display_name: 王待徵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑤 | accepted |
| bio.summary | 王瑤，史料所见人物。本项目依据《中国历代人物传记资料库：王瑤（CBDB 163962）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ANeppbxTm56LA1X59e1kGK | 王待徵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王待徵（CBDB 142900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142900&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 163962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163962&o=json)
