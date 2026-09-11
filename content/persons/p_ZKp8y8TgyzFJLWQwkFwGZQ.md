---
schema: wang-person/v1
id: p_ZKp8y8TgyzFJLWQwkFwGZQ
status: active
merged_into: null
display_name: 王大楏
cbdb_id: 118117
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iZg5EfFGjJSAAuwa3n4kCk
        subject_person_id: p_ZKp8y8TgyzFJLWQwkFwGZQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大楏，清人物。中国历代人物传记资料库（CBDB）以人物编号 118117 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_w_xx1kJrVhG8TcJ8TM7Jq6
          claim_id: c_iZg5EfFGjJSAAuwa3n4kCk
          source_id: s_xuqRFkJGYqAiYqDGtrR24b
          stance: supports
          locator: CBDB:118117
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_xuqRFkJGYqAiYqDGtrR24b
            source_type: api_record
            title: 中国历代人物传记资料库：王大楏（CBDB 118117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118117&o=json
            external_identifier: CBDB:118117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sKhFLnqM9BQ6jTZC47j35P
        subject_person_id: p_ZKp8y8TgyzFJLWQwkFwGZQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大楏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KGWCPRtnJzpXx6xfN8TwEu
          claim_id: c_sKhFLnqM9BQ6jTZC47j35P
          source_id: s_xuqRFkJGYqAiYqDGtrR24b
          stance: supports
          locator: CBDB:118117
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_xuqRFkJGYqAiYqDGtrR24b
            source_type: api_record
            title: 中国历代人物传记资料库：王大楏（CBDB 118117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118117&o=json
            external_identifier: CBDB:118117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OC7_QedM5KG9ju-2tYukxC
        subject_person_id: p_ZKp8y8TgyzFJLWQwkFwGZQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mb79fZrWskuRC8726StBaj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ybYqHPnFv0r2EMVqkSEYVe
          claim_id: c_OC7_QedM5KG9ju-2tYukxC
          source_id: s_UZuZZ29v7xFGJZu4ubyWgF
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1940, HuWenKai #256：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UZuZZ29v7xFGJZu4ubyWgF
            source_type: api_record
            title: 中国历代人物传记资料库：王謝（CBDB 118116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118116&o=json
            external_identifier: CBDB:118116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Mb79fZrWskuRC8726StBaj
        status: active
        display_name: 王謝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大楏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大楏，清人物。中国历代人物传记资料库（CBDB）以人物编号 118117 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王大楏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Mb79fZrWskuRC8726StBaj | 王謝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大楏（CBDB 118117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118117&o=json)
- [中国历代人物传记资料库：王謝（CBDB 118116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118116&o=json)
