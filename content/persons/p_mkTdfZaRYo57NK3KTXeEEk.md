---
schema: wang-person/v1
id: p_mkTdfZaRYo57NK3KTXeEEk
status: active
merged_into: null
display_name: 王乃霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QNd2uRKeUzRsAb939msqeT
        subject_person_id: p_mkTdfZaRYo57NK3KTXeEEk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h5PNmd8tnrT4KtS7Mvaft5
          claim_id: c_QNd2uRKeUzRsAb939msqeT
          source_id: s_7yBeCfkhGE5a9hSKHKZ8Kd
          stance: supports
          locator: CBDB:635767
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635767）
          source: &a1
            id: s_7yBeCfkhGE5a9hSKHKZ8Kd
            source_type: api_record
            title: 中国历代人物传记资料库：王乃霖（CBDB 635767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635767&o=json
            external_identifier: CBDB:635767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G58Q9zDV5e9WJ41tLCCU8M
        subject_person_id: p_mkTdfZaRYo57NK3KTXeEEk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃霖，清人物。籍贯章丘，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 635767）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LveHToNFOw7n5O8ZUM9gbg
          claim_id: c_G58Q9zDV5e9WJ41tLCCU8M
          source_id: s_7yBeCfkhGE5a9hSKHKZ8Kd
          stance: supports
          locator: CBDB:635767
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

# 王乃霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乃霖 | accepted |
| bio.summary | 王乃霖，清人物。籍贯章丘，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 635767） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王乃霖（CBDB 635767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635767&o=json)
