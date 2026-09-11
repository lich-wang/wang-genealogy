---
schema: wang-person/v1
id: p_idcFmHxkm7qHXLaFArEwfk
status: active
merged_into: null
display_name: 王雅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5MHnmGBtJ33E1FP8ZQUb7S
        subject_person_id: p_idcFmHxkm7qHXLaFArEwfk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gYfEtGTTKP5DpF4JRDh3yP
          claim_id: c_5MHnmGBtJ33E1FP8ZQUb7S
          source_id: s_v81FFxsqXjziKft46n63j7
          stance: supports
          locator: CBDB:556349
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556349）
          source: &a1
            id: s_v81FFxsqXjziKft46n63j7
            source_type: api_record
            title: 中国历代人物传记资料库：王雅（CBDB 556349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556349&o=json
            external_identifier: CBDB:556349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ASNDUASPjX4sELKe1JkB97
        subject_person_id: p_idcFmHxkm7qHXLaFArEwfk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雅，明人物。籍贯吉水，曾任翰林檢討、司經局正字、訓導。（中国历代人物传记资料库 CBDB 556349）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y1NfGZ5m1IXFNkkkwrzCri
          claim_id: c_ASNDUASPjX4sELKe1JkB97
          source_id: s_v81FFxsqXjziKft46n63j7
          stance: supports
          locator: CBDB:556349
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

# 王雅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雅 | accepted |
| bio.summary | 王雅，明人物。籍贯吉水，曾任翰林檢討、司經局正字、訓導。（中国历代人物传记资料库 CBDB 556349） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雅（CBDB 556349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556349&o=json)
