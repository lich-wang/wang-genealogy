---
schema: wang-person/v1
id: p_c2dKdRVtndCfyX2avCQ1J9
status: active
merged_into: null
display_name: 王勖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H7NCuDvh11wrk7ti8MhHvF
        subject_person_id: p_c2dKdRVtndCfyX2avCQ1J9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JU3jeZPphuKB9uWRy9L5A1
          claim_id: c_H7NCuDvh11wrk7ti8MhHvF
          source_id: s_ruXuo5BRU453a5D7219aBr
          stance: supports
          locator: CBDB:149927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149927）
          source: &a1
            id: s_ruXuo5BRU453a5D7219aBr
            source_type: api_record
            title: 中国历代人物传记资料库：王勖（CBDB 149927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149927&o=json
            external_identifier: CBDB:149927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1eCWVay881RrdQ5gy3MAcs
        subject_person_id: p_c2dKdRVtndCfyX2avCQ1J9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勖，唐人物。籍贯北市。（中国历代人物传记资料库 CBDB 149927）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BuR2vizYTbcZUwCWuXahvd
          claim_id: c_1eCWVay881RrdQ5gy3MAcs
          source_id: s_ruXuo5BRU453a5D7219aBr
          stance: supports
          locator: CBDB:149927
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ckNGQqBbnihD3xH1DudaRg
        subject_person_id: p_uPsdzDMGQe5JCzP3cXbxt2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c2dKdRVtndCfyX2avCQ1J9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zp_vmRRax_MCvGPWB05A1F
          claim_id: c_ckNGQqBbnihD3xH1DudaRg
          source_id: s_ruXuo5BRU453a5D7219aBr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wansuitongtian 18：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uPsdzDMGQe5JCzP3cXbxt2
        status: active
        display_name: 王智本
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王勖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勖 | accepted |
| bio.summary | 王勖，唐人物。籍贯北市。（中国历代人物传记资料库 CBDB 149927） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uPsdzDMGQe5JCzP3cXbxt2 | 王智本 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勖（CBDB 149927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149927&o=json)
