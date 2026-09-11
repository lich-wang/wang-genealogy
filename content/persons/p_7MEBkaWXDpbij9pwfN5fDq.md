---
schema: wang-person/v1
id: p_7MEBkaWXDpbij9pwfN5fDq
status: active
merged_into: null
display_name: 王耿光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t6yYHE7HLLFMAfSHMwya4p
        subject_person_id: p_7MEBkaWXDpbij9pwfN5fDq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耿光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z6iKKFhcyCren635fQY2cn
          claim_id: c_t6yYHE7HLLFMAfSHMwya4p
          source_id: s_Z2svV5sT2A1Nh1adL7VA4K
          stance: supports
          locator: CBDB:308160
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（308160）
          source: &a1
            id: s_Z2svV5sT2A1Nh1adL7VA4K
            source_type: api_record
            title: 中国历代人物传记资料库：王耿光（CBDB 308160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308160&o=json
            external_identifier: CBDB:308160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hNALGBaP5KsAmQ9uBzT99q
        subject_person_id: p_7MEBkaWXDpbij9pwfN5fDq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耿光，明人物。嘉靖二十三年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 308160）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xRAMlgjVPtuYQkVqyXkP4y
          claim_id: c_hNALGBaP5KsAmQ9uBzT99q
          source_id: s_Z2svV5sT2A1Nh1adL7VA4K
          stance: supports
          locator: CBDB:308160
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

# 王耿光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耿光 | accepted |
| bio.summary | 王耿光，明人物。嘉靖二十三年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 308160） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耿光（CBDB 308160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308160&o=json)
