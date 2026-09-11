---
schema: wang-person/v1
id: p_RUJiS7aKGwkgZUMqCbBkQs
status: active
merged_into: null
display_name: 王天寶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M9GKP1eWDxUL3Z11THkBqm
        subject_person_id: p_RUJiS7aKGwkgZUMqCbBkQs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9kJ5yUfFYqz7nC74R1kR7s
          claim_id: c_M9GKP1eWDxUL3Z11THkBqm
          source_id: s_DVPuQL5Ji8ZQn8vVPC2Wkt
          stance: supports
          locator: CBDB:578522
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578522）
          source: &a1
            id: s_DVPuQL5Ji8ZQn8vVPC2Wkt
            source_type: api_record
            title: 中国历代人物传记资料库：王天寶（CBDB 578522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578522&o=json
            external_identifier: CBDB:578522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pNu7V4ieNzmHAf3HnAn6TN
        subject_person_id: p_RUJiS7aKGwkgZUMqCbBkQs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天寶，清人物。籍贯歙縣，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 578522）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B5n79J78i_Kepmr9zAcFrY
          claim_id: c_pNu7V4ieNzmHAf3HnAn6TN
          source_id: s_DVPuQL5Ji8ZQn8vVPC2Wkt
          stance: supports
          locator: CBDB:578522
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

# 王天寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天寶 | accepted |
| bio.summary | 王天寶，清人物。籍贯歙縣，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 578522） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天寶（CBDB 578522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578522&o=json)
