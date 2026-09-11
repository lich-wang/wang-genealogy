---
schema: wang-person/v1
id: p_eEts44MJgBjH7jbvrtaqtt
status: active
merged_into: null
display_name: 王春澤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ahLi1wzGcdicYMEXxZUFEK
        subject_person_id: p_eEts44MJgBjH7jbvrtaqtt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f5gPE7FJHAZkrx5VdXHgQw
          claim_id: c_ahLi1wzGcdicYMEXxZUFEK
          source_id: s_9PVkoTU48HnToGKzftDDV4
          stance: supports
          locator: CBDB:638416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638416）
          source: &a1
            id: s_9PVkoTU48HnToGKzftDDV4
            source_type: api_record
            title: 中国历代人物传记资料库：王春澤（CBDB 638416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638416&o=json
            external_identifier: CBDB:638416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.678Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YNrEQ5sdQKnG5bMJVrcesP
        subject_person_id: p_eEts44MJgBjH7jbvrtaqtt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春澤，清人物。籍贯丹徒，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 638416）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8_bRJrQvUFTCCfP5kKLG7W
          claim_id: c_YNrEQ5sdQKnG5bMJVrcesP
          source_id: s_9PVkoTU48HnToGKzftDDV4
          stance: supports
          locator: CBDB:638416
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

# 王春澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春澤 | accepted |
| bio.summary | 王春澤，清人物。籍贯丹徒，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 638416） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春澤（CBDB 638416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638416&o=json)
