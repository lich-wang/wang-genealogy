---
schema: wang-person/v1
id: p_dS327JVLFUXUn2KnsUdHNE
status: active
merged_into: null
display_name: 王本立
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iYu1PDLJDamLRUPmZHsVqR
        subject_person_id: p_dS327JVLFUXUn2KnsUdHNE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WfSjzDDySoYwWGoLsjZ7o1
          claim_id: c_iYu1PDLJDamLRUPmZHsVqR
          source_id: s_yo7t9Ex4d5twkJLq18hCkj
          stance: supports
          locator: CBDB:69153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69153）
          source: &a1
            id: s_yo7t9Ex4d5twkJLq18hCkj
            source_type: api_record
            title: 中国历代人物传记资料库：王本立（CBDB 69153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69153&o=json
            external_identifier: CBDB:69153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KceUsgfrfG4ESy3y9sNnVF
        subject_person_id: p_dS327JVLFUXUn2KnsUdHNE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1fCDCPiJSy86E212G96ney
          claim_id: c_KceUsgfrfG4ESy3y9sNnVF
          source_id: s_yo7t9Ex4d5twkJLq18hCkj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6Wz6bht5xv3JKz8YqAfCaB
        subject_person_id: p_dS327JVLFUXUn2KnsUdHNE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本立（卒于1852年），清人物。明清進士進士，籍贯羅山，入仕進士，曾任府同知、知縣、太僕寺卿銜。（中国历代人物传记资料库 CBDB 69153）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CrCqcJtdhtVWuah4g-biIi
          claim_id: c_6Wz6bht5xv3JKz8YqAfCaB
          source_id: s_yo7t9Ex4d5twkJLq18hCkj
          stance: supports
          locator: CBDB:69153
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

# 王本立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本立 | accepted |
| death.date | 1852年 | accepted |
| bio.summary | 王本立（卒于1852年），清人物。明清進士進士，籍贯羅山，入仕進士，曾任府同知、知縣、太僕寺卿銜。（中国历代人物传记资料库 CBDB 69153） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王本立（CBDB 69153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69153&o=json)
