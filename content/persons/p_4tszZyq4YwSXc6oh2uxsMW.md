---
schema: wang-person/v1
id: p_4tszZyq4YwSXc6oh2uxsMW
status: active
merged_into: null
display_name: 王啟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UGBDTQBoaG8aN4cUoEk1xw
        subject_person_id: p_4tszZyq4YwSXc6oh2uxsMW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3cySSwx8QupbCZeeC8TfJS
          claim_id: c_UGBDTQBoaG8aN4cUoEk1xw
          source_id: s_NGrrw1cqVEFT2NERbZqF7B
          stance: supports
          locator: CBDB:239889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239889）
          source: &a1
            id: s_NGrrw1cqVEFT2NERbZqF7B
            source_type: api_record
            title: 中国历代人物传记资料库：王啟（CBDB 239889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239889&o=json
            external_identifier: CBDB:239889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MLt2pBVaB4MQ1SDsk59uEB
        subject_person_id: p_4tszZyq4YwSXc6oh2uxsMW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟，明人物。正统十年進士，籍贯永寧衛。（中国历代人物传记资料库 CBDB 239889）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l6L4EzNhozCQJvsUHSL9yj
          claim_id: c_MLt2pBVaB4MQ1SDsk59uEB
          source_id: s_NGrrw1cqVEFT2NERbZqF7B
          stance: supports
          locator: CBDB:239889
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

# 王啟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟 | accepted |
| bio.summary | 王啟，明人物。正统十年進士，籍贯永寧衛。（中国历代人物传记资料库 CBDB 239889） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟（CBDB 239889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239889&o=json)
