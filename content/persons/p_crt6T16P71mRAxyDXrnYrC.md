---
schema: wang-person/v1
id: p_crt6T16P71mRAxyDXrnYrC
status: active
merged_into: null
display_name: 王瓊瑤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DBim7EdWNT6fDWwVaD5v7S
        subject_person_id: p_crt6T16P71mRAxyDXrnYrC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PPetzpp7TzpjFDTFYVYkv6
          claim_id: c_DBim7EdWNT6fDWwVaD5v7S
          source_id: s_pQAdMun3MqjFRm8S6jeqyE
          stance: supports
          locator: CBDB:574245
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574245）
          source: &a1
            id: s_pQAdMun3MqjFRm8S6jeqyE
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊瑤（CBDB 574245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574245&o=json
            external_identifier: CBDB:574245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h1zcqTHTJj1V62RBD6YZXd
        subject_person_id: p_crt6T16P71mRAxyDXrnYrC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊瑤，明人物。籍贯黃岡。（中国历代人物传记资料库 CBDB 574245）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qJlc61ww080iLLx5ctKOCr
          claim_id: c_h1zcqTHTJj1V62RBD6YZXd
          source_id: s_pQAdMun3MqjFRm8S6jeqyE
          stance: supports
          locator: CBDB:574245
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓊瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊瑤 | accepted |
| bio.summary | 王瓊瑤，明人物。籍贯黃岡。（中国历代人物传记资料库 CBDB 574245） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓊瑤（CBDB 574245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574245&o=json)
