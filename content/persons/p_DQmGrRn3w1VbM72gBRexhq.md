---
schema: wang-person/v1
id: p_DQmGrRn3w1VbM72gBRexhq
status: active
merged_into: null
display_name: 王坦然
cbdb_id: 512617
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cST4UKYUBBnCuok6tJcLRB
        subject_person_id: p_DQmGrRn3w1VbM72gBRexhq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦然，史料所见人物。本项目依据《中国历代人物传记资料库：王坦然（CBDB 512617）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Kax9ktfFND7sSoz-rKWwdF
          claim_id: c_cST4UKYUBBnCuok6tJcLRB
          source_id: s_eNp8uZNj8Br7J5P98ZxknV
          stance: supports
          locator: CBDB:512617
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_eNp8uZNj8Br7J5P98ZxknV
            source_type: api_record
            title: 中国历代人物传记资料库：王坦然（CBDB 512617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512617&o=json
            external_identifier: CBDB:512617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gvirsX3udfq87BFxz9Mt5Z
        subject_person_id: p_DQmGrRn3w1VbM72gBRexhq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦然
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sv1Xg9btJUYm7Pzz5WNumH
          claim_id: c_gvirsX3udfq87BFxz9Mt5Z
          source_id: s_eNp8uZNj8Br7J5P98ZxknV
          stance: supports
          locator: CBDB:512617
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ptXD-e78FyEXZrVIAriWoT
        subject_person_id: p_H4SeMJgEG3cnaAjWBmtY62
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DQmGrRn3w1VbM72gBRexhq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m0gySt5MDLbHYB1w04dg1N
          claim_id: c_ptXD-e78FyEXZrVIAriWoT
          source_id: s_eNp8uZNj8Br7J5P98ZxknV
          stance: supports
          locator: 唐代墓誌彙編續集，Dazhong079：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eNp8uZNj8Br7J5P98ZxknV
            source_type: api_record
            title: 中国历代人物传记资料库：王坦然（CBDB 512617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512617&o=json
            external_identifier: CBDB:512617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_H4SeMJgEG3cnaAjWBmtY62
        status: active
        display_name: 王玉銳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王坦然

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王坦然，史料所见人物。本项目依据《中国历代人物传记资料库：王坦然（CBDB 512617）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王坦然 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H4SeMJgEG3cnaAjWBmtY62 | 王玉銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坦然（CBDB 512617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512617&o=json)
