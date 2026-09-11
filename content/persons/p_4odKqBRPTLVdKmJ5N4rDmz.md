---
schema: wang-person/v1
id: p_4odKqBRPTLVdKmJ5N4rDmz
status: active
merged_into: null
display_name: 王宣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L7LB1V73ojdzbRLFSntnuD
        subject_person_id: p_4odKqBRPTLVdKmJ5N4rDmz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XTM8EKmAc26MFYC5jL19az
          claim_id: c_L7LB1V73ojdzbRLFSntnuD
          source_id: s_uc5au7Xmt2NLELKWRKRUZ7
          stance: supports
          locator: CBDB:100716
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100716）
          source: &a1
            id: s_uc5au7Xmt2NLELKWRKRUZ7
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 100716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100716&o=json
            external_identifier: CBDB:100716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LWQ3S6H2gXyc5VsHCWrc4R
        subject_person_id: p_4odKqBRPTLVdKmJ5N4rDmz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣，元人物。籍贯長山，曾任百戶、管軍都把總。（中国历代人物传记资料库 CBDB 100716）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LKt2jvYFEJnrL3Nda7rg2W
          claim_id: c_LWQ3S6H2gXyc5VsHCWrc4R
          source_id: s_uc5au7Xmt2NLELKWRKRUZ7
          stance: supports
          locator: CBDB:100716
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

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | 王宣，元人物。籍贯長山，曾任百戶、管軍都把總。（中国历代人物传记资料库 CBDB 100716） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 100716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100716&o=json)
