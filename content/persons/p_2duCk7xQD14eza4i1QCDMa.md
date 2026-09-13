---
schema: wang-person/v1
id: p_2duCk7xQD14eza4i1QCDMa
status: active
merged_into: null
display_name: 王徵吉
cbdb_id: 525991
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i8vSpBj1xowKH382DCKJ85
        subject_person_id: p_2duCk7xQD14eza4i1QCDMa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徵吉，史料所见人物。本项目依据《中国历代人物传记资料库：王徵吉（CBDB 525991）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_iSmAWqC_jbEU0jDx83Y12K
          claim_id: c_i8vSpBj1xowKH382DCKJ85
          source_id: s_9ZaG8spNLQJhX92LYGZEHv
          stance: supports
          locator: CBDB:525991
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9ZaG8spNLQJhX92LYGZEHv
            source_type: api_record
            title: 中国历代人物传记资料库：王徵吉（CBDB 525991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525991&o=json
            external_identifier: CBDB:525991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HRX1CB1gLha1MV2Lxw2aHJ
        subject_person_id: p_2duCk7xQD14eza4i1QCDMa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徵吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VLfwsDg7B4VYAnAkTQ3VC5
          claim_id: c_HRX1CB1gLha1MV2Lxw2aHJ
          source_id: s_9ZaG8spNLQJhX92LYGZEHv
          stance: supports
          locator: CBDB:525991
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ccQ14_8r6hpx64PocQmDDr
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2duCk7xQD14eza4i1QCDMa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VQgFQNEj9s7CWMw8YCIroW
          claim_id: c_ccQ14_8r6hpx64PocQmDDr
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11907：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rMiKQdLixLiHHyQLAuXGgm
            source_type: api_record
            title: 中国历代人物传记资料库：王廷相（CBDB 68246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68246&o=json
            external_identifier: CBDB:68246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4PsCtJUsnu3eY9rXNjF4Fo
        status: active
        display_name: 王廷相
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王徵吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王徵吉，史料所见人物。本项目依据《中国历代人物传记资料库：王徵吉（CBDB 525991）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王徵吉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_4PsCtJUsnu3eY9rXNjF4Fo | 王廷相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷相（CBDB 68246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68246&o=json)
- [中国历代人物传记资料库：王徵吉（CBDB 525991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525991&o=json)
