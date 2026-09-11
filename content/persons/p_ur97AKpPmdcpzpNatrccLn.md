---
schema: wang-person/v1
id: p_ur97AKpPmdcpzpNatrccLn
status: active
merged_into: null
display_name: 王慶書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kFrLADNsR3NQaEa3z5sJAo
        subject_person_id: p_ur97AKpPmdcpzpNatrccLn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uqw3R1jUfj8boautzFmF1Y
          claim_id: c_kFrLADNsR3NQaEa3z5sJAo
          source_id: s_GZFHJYMGDVqVJKi8prW8tB
          stance: supports
          locator: CBDB:637940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637940）
          source: &a1
            id: s_GZFHJYMGDVqVJKi8prW8tB
            source_type: api_record
            title: 中国历代人物传记资料库：王慶書（CBDB 637940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637940&o=json
            external_identifier: CBDB:637940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.464Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vBhFMHzktjQMyKH6V93MBY
        subject_person_id: p_ur97AKpPmdcpzpNatrccLn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶書，清人物。籍贯武寧，曾任學正。（中国历代人物传记资料库 CBDB 637940）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Dde8WgMLI6sspVduLbr8mT
          claim_id: c_vBhFMHzktjQMyKH6V93MBY
          source_id: s_GZFHJYMGDVqVJKi8prW8tB
          stance: supports
          locator: CBDB:637940
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

# 王慶書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶書 | accepted |
| bio.summary | 王慶書，清人物。籍贯武寧，曾任學正。（中国历代人物传记资料库 CBDB 637940） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶書（CBDB 637940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637940&o=json)
