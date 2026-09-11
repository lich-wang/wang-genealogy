---
schema: wang-person/v1
id: p_xdNGZZFT3hrBJiNDjRJgBh
status: active
merged_into: null
display_name: 王廷齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9UkBt1CS7C1tTqU9JR1YBg
        subject_person_id: p_xdNGZZFT3hrBJiNDjRJgBh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mp8wqu5UHJd2FAab6hkx44
          claim_id: c_9UkBt1CS7C1tTqU9JR1YBg
          source_id: s_aiaizRBhibZPQ11dPLR55P
          stance: supports
          locator: CBDB:637582
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637582）
          source: &a1
            id: s_aiaizRBhibZPQ11dPLR55P
            source_type: api_record
            title: 中国历代人物传记资料库：王廷齡（CBDB 637582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637582&o=json
            external_identifier: CBDB:637582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FCvXZHP8VwA8bnAnHURHzc
        subject_person_id: p_xdNGZZFT3hrBJiNDjRJgBh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷齡，清人物。籍贯天門，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637582）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eKDJPbKTWoUSxdvJVxVZ3C
          claim_id: c_FCvXZHP8VwA8bnAnHURHzc
          source_id: s_aiaizRBhibZPQ11dPLR55P
          stance: supports
          locator: CBDB:637582
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

# 王廷齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷齡 | accepted |
| bio.summary | 王廷齡，清人物。籍贯天門，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637582） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷齡（CBDB 637582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637582&o=json)
