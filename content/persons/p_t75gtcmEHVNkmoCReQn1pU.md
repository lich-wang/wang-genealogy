---
schema: wang-person/v1
id: p_t75gtcmEHVNkmoCReQn1pU
status: active
merged_into: null
display_name: 王朝熯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PK49r8yMHQbFXE4SJu3NHC
        subject_person_id: p_t75gtcmEHVNkmoCReQn1pU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝熯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TEF2Kjr9BCspE8pXHLkhhu
          claim_id: c_PK49r8yMHQbFXE4SJu3NHC
          source_id: s_rx4w5FJVKLchMmME87pMyr
          stance: supports
          locator: CBDB:556108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556108）
          source: &a1
            id: s_rx4w5FJVKLchMmME87pMyr
            source_type: api_record
            title: 中国历代人物传记资料库：王朝熯（CBDB 556108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556108&o=json
            external_identifier: CBDB:556108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qqh48EUvePcByuMoX2LdmP
        subject_person_id: p_t75gtcmEHVNkmoCReQn1pU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝熯，明人物。籍贯山陰。（中国历代人物传记资料库 CBDB 556108）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9p3GGMm7QeMIJL4zhpoGrE
          claim_id: c_Qqh48EUvePcByuMoX2LdmP
          source_id: s_rx4w5FJVKLchMmME87pMyr
          stance: supports
          locator: CBDB:556108
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

# 王朝熯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝熯 | accepted |
| bio.summary | 王朝熯，明人物。籍贯山陰。（中国历代人物传记资料库 CBDB 556108） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝熯（CBDB 556108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556108&o=json)
