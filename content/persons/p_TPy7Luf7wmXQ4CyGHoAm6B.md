---
schema: wang-person/v1
id: p_TPy7Luf7wmXQ4CyGHoAm6B
status: active
merged_into: null
display_name: 王宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BJXLPhU1D8nFHiC8t3aKad
        subject_person_id: p_TPy7Luf7wmXQ4CyGHoAm6B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KKuSqUr5x5vN1144Zxgnoz
          claim_id: c_BJXLPhU1D8nFHiC8t3aKad
          source_id: s_yH6ef6UFbffj71Bsz6Z2QE
          stance: supports
          locator: CBDB:30558
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30558）
          source: &a1
            id: s_yH6ef6UFbffj71Bsz6Z2QE
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 30558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30558&o=json
            external_identifier: CBDB:30558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M4UcPeztEAKC3rF8NmfNPp
        subject_person_id: p_TPy7Luf7wmXQ4CyGHoAm6B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗，宋人物。籍贯洛陽，身份为未婚而卒，曾任節度使。（中国历代人物传记资料库 CBDB 30558）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9-HeErluaEgtBObNLu3yMO
          claim_id: c_M4UcPeztEAKC3rF8NmfNPp
          source_id: s_yH6ef6UFbffj71Bsz6Z2QE
          stance: supports
          locator: CBDB:30558
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h9xrrYVwYVA6ZZYBUKtMP0
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TPy7Luf7wmXQ4CyGHoAm6B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oMgJ-c1Cpmo6Dz7nlnoMQp
          claim_id: c_h9xrrYVwYVA6ZZYBUKtMP0
          source_id: s_p668FgdTloEECPfYt5XIRz
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7078）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_p668FgdTloEECPfYt5XIRz
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 30558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30558&o=json
            external_identifier: CBDB:30558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j7iPUKCmtFNavh7UEFUMUs
        status: active
        display_name: 王正中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | 王宗，宋人物。籍贯洛陽，身份为未婚而卒，曾任節度使。（中国历代人物传记资料库 CBDB 30558） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_j7iPUKCmtFNavh7UEFUMUs | 王正中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗（CBDB 30558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30558&o=json)
