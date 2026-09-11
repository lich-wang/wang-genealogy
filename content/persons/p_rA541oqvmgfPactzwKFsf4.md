---
schema: wang-person/v1
id: p_rA541oqvmgfPactzwKFsf4
status: active
merged_into: null
display_name: 王沛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UpAgMM6BntkrxxE2FPvXRt
        subject_person_id: p_rA541oqvmgfPactzwKFsf4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_coQPjcHng89F65acpATU49
          claim_id: c_UpAgMM6BntkrxxE2FPvXRt
          source_id: s_SXxZk2JSMjGASta8ocEiTH
          stance: supports
          locator: CBDB:639053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639053）
          source: &a1
            id: s_SXxZk2JSMjGASta8ocEiTH
            source_type: api_record
            title: 中国历代人物传记资料库：王沛（CBDB 639053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639053&o=json
            external_identifier: CBDB:639053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4HRermbANuuNUAntQ5ysUi
        subject_person_id: p_rA541oqvmgfPactzwKFsf4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沛，清人物。籍贯會稽，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-Dn_79Si_OKuRDm2n8i6HQ
          claim_id: c_4HRermbANuuNUAntQ5ysUi
          source_id: s_SXxZk2JSMjGASta8ocEiTH
          stance: supports
          locator: CBDB:639053
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

# 王沛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沛 | accepted |
| bio.summary | 王沛，清人物。籍贯會稽，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沛（CBDB 639053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639053&o=json)
