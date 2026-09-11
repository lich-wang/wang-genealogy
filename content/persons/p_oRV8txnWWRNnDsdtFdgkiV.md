---
schema: wang-person/v1
id: p_oRV8txnWWRNnDsdtFdgkiV
status: active
merged_into: null
display_name: 王定符
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z9FgdVAhWUMxM1Fe4y5ELs
        subject_person_id: p_oRV8txnWWRNnDsdtFdgkiV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定符
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gKQUKAFC9Zc8RaYFyWgqk6
          claim_id: c_Z9FgdVAhWUMxM1Fe4y5ELs
          source_id: s_ogQT7V5uG8HYiS8oGjxvp5
          stance: supports
          locator: CBDB:637141
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637141）
          source: &a1
            id: s_ogQT7V5uG8HYiS8oGjxvp5
            source_type: api_record
            title: 中国历代人物传记资料库：王定符（CBDB 637141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637141&o=json
            external_identifier: CBDB:637141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B8dKSPNrKnA7UtrYdizUH1
        subject_person_id: p_oRV8txnWWRNnDsdtFdgkiV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定符，清人物。籍贯東鄉，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 637141）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pkg1Q3F2W_mr0nspU_F0X5
          claim_id: c_B8dKSPNrKnA7UtrYdizUH1
          source_id: s_ogQT7V5uG8HYiS8oGjxvp5
          stance: supports
          locator: CBDB:637141
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

# 王定符

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定符 | accepted |
| bio.summary | 王定符，清人物。籍贯東鄉，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 637141） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定符（CBDB 637141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637141&o=json)
