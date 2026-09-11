---
schema: wang-person/v1
id: p_QFtZdGUZHPGwpcUccEqnYk
status: active
merged_into: null
display_name: 王心忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dv3BnxfkorCGEHxvu9g2Lk
        subject_person_id: p_QFtZdGUZHPGwpcUccEqnYk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XQHj1JAJP4Ve18ARF8AjcV
          claim_id: c_dv3BnxfkorCGEHxvu9g2Lk
          source_id: s_8vcXqLk838TZ8Ue66ZftqA
          stance: supports
          locator: CBDB:526944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526944）
          source: &a1
            id: s_8vcXqLk838TZ8Ue66ZftqA
            source_type: api_record
            title: 中国历代人物传记资料库：王心忠（CBDB 526944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526944&o=json
            external_identifier: CBDB:526944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_caaF2v3wmfpTFmYpMii6nH
        subject_person_id: p_QFtZdGUZHPGwpcUccEqnYk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心忠，史料所见人物。本项目依据《中国历代人物传记资料库：王心忠（CBDB 526944）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RKoQ99mL7gYpWu9zpan8Dt
          claim_id: c_caaF2v3wmfpTFmYpMii6nH
          source_id: s_8vcXqLk838TZ8Ue66ZftqA
          stance: supports
          locator: CBDB:526944
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1iliRAKNRiVKxZtMGiqibu
        subject_person_id: p_QFtZdGUZHPGwpcUccEqnYk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T5PQ9CAbY6aCKC68hcQUQv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B3q2PQTmCOKYo3y_24Oj9J
          claim_id: c_1iliRAKNRiVKxZtMGiqibu
          source_id: s_8vcXqLk838TZ8Ue66ZftqA
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13120：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T5PQ9CAbY6aCKC68hcQUQv
        status: active
        display_name: 王毓江
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王心忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王心忠 | accepted |
| bio.summary | 王心忠，史料所见人物。本项目依据《中国历代人物传记资料库：王心忠（CBDB 526944）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_T5PQ9CAbY6aCKC68hcQUQv | 王毓江 | accepted |

## 外部来源

- [中国历代人物传记资料库：王心忠（CBDB 526944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526944&o=json)
