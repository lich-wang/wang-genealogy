---
schema: wang-person/v1
id: p_JWXQNum5JwEgjrSBmJE7vs
status: active
merged_into: null
display_name: 王三益
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2fQxHhLVHf6yDmCL8gHAHG
        subject_person_id: p_JWXQNum5JwEgjrSBmJE7vs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zb97a1kKUL7DYgbbSpkL8c
          claim_id: c_2fQxHhLVHf6yDmCL8gHAHG
          source_id: s_mrATE41EVVz8aRLan8CDuZ
          stance: supports
          locator: CBDB:635633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635633）
          source: &a1
            id: s_mrATE41EVVz8aRLan8CDuZ
            source_type: api_record
            title: 中国历代人物传记资料库：王三益（CBDB 635633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635633&o=json
            external_identifier: CBDB:635633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_76goks7eCzEkjVKae3YHG1
        subject_person_id: p_JWXQNum5JwEgjrSBmJE7vs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三益，清人物。籍贯武威，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 635633）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AlFbDmHl9NnIyheWcXkEb2
          claim_id: c_76goks7eCzEkjVKae3YHG1
          source_id: s_mrATE41EVVz8aRLan8CDuZ
          stance: supports
          locator: CBDB:635633
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

# 王三益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三益 | accepted |
| bio.summary | 王三益，清人物。籍贯武威，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 635633） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三益（CBDB 635633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635633&o=json)
