---
schema: wang-person/v1
id: p_aPupED4zKjTndHkCJs1GjN
status: active
merged_into: null
display_name: 王之駒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aFv1H4EwiFDJME58t1BwLz
        subject_person_id: p_aPupED4zKjTndHkCJs1GjN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之駒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RAxnboieJyAVN2JiVX5naR
          claim_id: c_aFv1H4EwiFDJME58t1BwLz
          source_id: s_AmY1V5PP37WJeF72G1rVYe
          stance: supports
          locator: CBDB:635826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635826）
          source: &a1
            id: s_AmY1V5PP37WJeF72G1rVYe
            source_type: api_record
            title: 中国历代人物传记资料库：王之駒（CBDB 635826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635826&o=json
            external_identifier: CBDB:635826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FbgMi6fK8wL9KSYbpQim57
        subject_person_id: p_aPupED4zKjTndHkCJs1GjN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之駒，清人物。籍贯宜興，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 635826）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V9WCdLQ90S9ldEAkuDRv4Z
          claim_id: c_FbgMi6fK8wL9KSYbpQim57
          source_id: s_AmY1V5PP37WJeF72G1rVYe
          stance: supports
          locator: CBDB:635826
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

# 王之駒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之駒 | accepted |
| bio.summary | 王之駒，清人物。籍贯宜興，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 635826） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之駒（CBDB 635826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635826&o=json)
