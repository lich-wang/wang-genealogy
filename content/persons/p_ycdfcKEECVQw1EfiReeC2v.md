---
schema: wang-person/v1
id: p_ycdfcKEECVQw1EfiReeC2v
status: active
merged_into: null
display_name: 張紈英
revision: 1
cbdb_id: 55144
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Er4i_IBqP4le1hLc74GgYt
        subject_person_id: p_ycdfcKEECVQw1EfiReeC2v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張紈英（1800—1881），清人物。籍贯陽湖。（中国历代人物传记资料库 CBDB 55144）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KbVgJADUa5kxJi_qnkhFBP
          claim_id: c_Er4i_IBqP4le1hLc74GgYt
          source_id: s_y1lBLaLBCry88DDWnFSAvi
          stance: supports
          locator: CBDB:55144
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_y1lBLaLBCry88DDWnFSAvi
            source_type: api_record
            title: 中国历代人物传记资料库：張紈英（CBDB 55144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55144&o=json
            external_identifier: CBDB:55144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1BgFOn-Q5TybYN8lxvzYeh
        subject_person_id: p_ycdfcKEECVQw1EfiReeC2v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張紈英
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GuqMRIp3JtLS8Ar9DL5xMk
          claim_id: c_1BgFOn-Q5TybYN8lxvzYeh
          source_id: s_y1lBLaLBCry88DDWnFSAvi
          stance: supports
          locator: CBDB:55144
          quotation: null
          interpretation_note: CBDB 明确记录的王曦配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c__4ZLeGfF-8j4jIWvBZsO18
        subject_person_id: p_FQDpfe4h53oK3v1ngE29HL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ycdfcKEECVQw1EfiReeC2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9-FzJw_UxnlGrZauXbC-Yp
          claim_id: c__4ZLeGfF-8j4jIWvBZsO18
          source_id: s_y1lBLaLBCry88DDWnFSAvi
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1919, HuWenKai #517：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FQDpfe4h53oK3v1ngE29HL
        status: active
        display_name: 王曦
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張紈英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張紈英（1800—1881），清人物。籍贯陽湖。（中国历代人物传记资料库 CBDB 55144） | accepted |
| name.primary | 張紈英 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_FQDpfe4h53oK3v1ngE29HL | 王曦 | accepted |

## 外部来源

- [中国历代人物传记资料库：張紈英（CBDB 55144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55144&o=json)
