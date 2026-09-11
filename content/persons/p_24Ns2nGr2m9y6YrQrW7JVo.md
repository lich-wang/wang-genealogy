---
schema: wang-person/v1
id: p_24Ns2nGr2m9y6YrQrW7JVo
status: active
merged_into: null
display_name: 王朝賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tjdTEG9z1WAeodqcUnmiKB
        subject_person_id: p_24Ns2nGr2m9y6YrQrW7JVo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Q9dx26JQMZ33JeVzBdHZ5
          claim_id: c_tjdTEG9z1WAeodqcUnmiKB
          source_id: s_jNdksTbQijrzYQUPpywrDc
          stance: supports
          locator: CBDB:638644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638644）
          source: &a1
            id: s_jNdksTbQijrzYQUPpywrDc
            source_type: api_record
            title: 中国历代人物传记资料库：王朝賢（CBDB 638644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638644&o=json
            external_identifier: CBDB:638644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aBjd7Rb9cBQDT2PF8P8ES9
        subject_person_id: p_24Ns2nGr2m9y6YrQrW7JVo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝賢，清人物。籍贯大理府，入仕鄉貢舉人，曾任學正、復設教諭。（中国历代人物传记资料库 CBDB 638644）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QpCRcGV3rT5t3zddKzO4Fu
          claim_id: c_aBjd7Rb9cBQDT2PF8P8ES9
          source_id: s_jNdksTbQijrzYQUPpywrDc
          stance: supports
          locator: CBDB:638644
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

# 王朝賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝賢 | accepted |
| bio.summary | 王朝賢，清人物。籍贯大理府，入仕鄉貢舉人，曾任學正、復設教諭。（中国历代人物传记资料库 CBDB 638644） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝賢（CBDB 638644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638644&o=json)
