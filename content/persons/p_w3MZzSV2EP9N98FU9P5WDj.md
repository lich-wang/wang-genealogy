---
schema: wang-person/v1
id: p_w3MZzSV2EP9N98FU9P5WDj
status: active
merged_into: null
display_name: 王兆鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MZKzwmPhMBnUDXcBo9pUfa
        subject_person_id: p_w3MZzSV2EP9N98FU9P5WDj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_97LxjE2qR5MPgz9dmeT7iJ
          claim_id: c_MZKzwmPhMBnUDXcBo9pUfa
          source_id: s_mBPJigmJDdP6DwXE8aeMct
          stance: supports
          locator: CBDB:636228
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636228）
          source: &a1
            id: s_mBPJigmJDdP6DwXE8aeMct
            source_type: api_record
            title: 中国历代人物传记资料库：王兆鼎（CBDB 636228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636228&o=json
            external_identifier: CBDB:636228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oNcPRcV1Tyz7PxSVKpU4kT
        subject_person_id: p_w3MZzSV2EP9N98FU9P5WDj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆鼎，清人物。籍贯湘鄉，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636228）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tBH0Nmq2qYAn83sGnDcYFI
          claim_id: c_oNcPRcV1Tyz7PxSVKpU4kT
          source_id: s_mBPJigmJDdP6DwXE8aeMct
          stance: supports
          locator: CBDB:636228
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

# 王兆鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆鼎 | accepted |
| bio.summary | 王兆鼎，清人物。籍贯湘鄉，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636228） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆鼎（CBDB 636228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636228&o=json)
