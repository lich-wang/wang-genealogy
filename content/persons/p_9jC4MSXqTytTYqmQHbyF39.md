---
schema: wang-person/v1
id: p_9jC4MSXqTytTYqmQHbyF39
status: active
merged_into: null
display_name: 王銓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1CDn12fBknnsA6GnBiCbbY
        subject_person_id: p_9jC4MSXqTytTYqmQHbyF39
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ffqitp8MARLBW2ndPdSnYP
          claim_id: c_1CDn12fBknnsA6GnBiCbbY
          source_id: s_9nEXGuqAZCEebddmkzcR8M
          stance: supports
          locator: CBDB:343842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343842）
          source: &a1
            id: s_9nEXGuqAZCEebddmkzcR8M
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 343842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343842&o=json
            external_identifier: CBDB:343842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eJgHQtmGbnDtPGgaN7g4S5
        subject_person_id: p_9jC4MSXqTytTYqmQHbyF39
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓，明人物。明清進士進士，籍贯隆德，入仕進士。（中国历代人物传记资料库 CBDB 343842）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gImFuJlOkh55opPgvPHeuf
          claim_id: c_eJgHQtmGbnDtPGgaN7g4S5
          source_id: s_9nEXGuqAZCEebddmkzcR8M
          stance: supports
          locator: CBDB:343842
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

# 王銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銓 | accepted |
| bio.summary | 王銓，明人物。明清進士進士，籍贯隆德，入仕進士。（中国历代人物传记资料库 CBDB 343842） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銓（CBDB 343842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343842&o=json)
