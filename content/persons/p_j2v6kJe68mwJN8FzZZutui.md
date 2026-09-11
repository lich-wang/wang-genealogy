---
schema: wang-person/v1
id: p_j2v6kJe68mwJN8FzZZutui
status: active
merged_into: null
display_name: 王宰善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YK3NjDtCAjwnuRZYrh2Meg
        subject_person_id: p_j2v6kJe68mwJN8FzZZutui
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宰善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y3JZNCxcuBZFmiY9vbMJyy
          claim_id: c_YK3NjDtCAjwnuRZYrh2Meg
          source_id: s_ZvyvbNVNEgGja2My62uMDA
          stance: supports
          locator: CBDB:637161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637161）
          source: &a1
            id: s_ZvyvbNVNEgGja2My62uMDA
            source_type: api_record
            title: 中国历代人物传记资料库：王宰善（CBDB 637161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637161&o=json
            external_identifier: CBDB:637161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ebeYkDtMtWTview89Q7Vtk
        subject_person_id: p_j2v6kJe68mwJN8FzZZutui
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宰善，清人物。籍贯上海，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637161）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FGiksTyMSMba8rwJlWyqj0
          claim_id: c_ebeYkDtMtWTview89Q7Vtk
          source_id: s_ZvyvbNVNEgGja2My62uMDA
          stance: supports
          locator: CBDB:637161
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

# 王宰善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宰善 | accepted |
| bio.summary | 王宰善，清人物。籍贯上海，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637161） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宰善（CBDB 637161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637161&o=json)
