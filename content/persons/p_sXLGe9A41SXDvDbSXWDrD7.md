---
schema: wang-person/v1
id: p_sXLGe9A41SXDvDbSXWDrD7
status: active
merged_into: null
display_name: 王朝渠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UaENyCxzJ5KRvo7fHC9t8H
        subject_person_id: p_sXLGe9A41SXDvDbSXWDrD7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝渠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P6RrtUrhfY58yT4ymB8WuU
          claim_id: c_UaENyCxzJ5KRvo7fHC9t8H
          source_id: s_hLvwMJjHCcDi6dNUGAaVG5
          stance: supports
          locator: CBDB:638628
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638628）
          source: &a1
            id: s_hLvwMJjHCcDi6dNUGAaVG5
            source_type: api_record
            title: 中国历代人物传记资料库：王朝渠（CBDB 638628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638628&o=json
            external_identifier: CBDB:638628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wFneZ5q62bmX3MEafZV6Ry
        subject_person_id: p_sXLGe9A41SXDvDbSXWDrD7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝渠，清人物。籍贯萬年，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638628）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ewaIhN90TqIqkSPIRB_MBu
          claim_id: c_wFneZ5q62bmX3MEafZV6Ry
          source_id: s_hLvwMJjHCcDi6dNUGAaVG5
          stance: supports
          locator: CBDB:638628
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

# 王朝渠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝渠 | accepted |
| bio.summary | 王朝渠，清人物。籍贯萬年，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638628） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝渠（CBDB 638628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638628&o=json)
