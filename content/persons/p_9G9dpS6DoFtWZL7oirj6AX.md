---
schema: wang-person/v1
id: p_9G9dpS6DoFtWZL7oirj6AX
status: active
merged_into: null
display_name: 王璉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x42wn4cQKTvdJWGpfTrBQH
        subject_person_id: p_9G9dpS6DoFtWZL7oirj6AX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rrh583VTnnp2mCQD8H9Y3r
          claim_id: c_x42wn4cQKTvdJWGpfTrBQH
          source_id: s_FCN5RDKKwrGPPNTx2mMTWC
          stance: supports
          locator: CBDB:162186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（162186）
          source: &a1
            id: s_FCN5RDKKwrGPPNTx2mMTWC
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 162186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162186&o=json
            external_identifier: CBDB:162186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_71NZn2kgS93vdYsgUoMACd
        subject_person_id: p_9G9dpS6DoFtWZL7oirj6AX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 162186）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_osIBdntpuBcoxA3_Q96Ex-
          claim_id: c_71NZn2kgS93vdYsgUoMACd
          source_id: s_FCN5RDKKwrGPPNTx2mMTWC
          stance: supports
          locator: CBDB:162186
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_x1g8JgKgBIRNjMISgoAhWl
        subject_person_id: p_dNigcZK2tV756trhQNaFSc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9G9dpS6DoFtWZL7oirj6AX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5sSmiMprpsyErp5SIwkiwW
          claim_id: c_x1g8JgKgBIRNjMISgoAhWl
          source_id: s_FCN5RDKKwrGPPNTx2mMTWC
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xianqing32：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dNigcZK2tV756trhQNaFSc
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璉 | accepted |
| bio.summary | 王璉，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 162186） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dNigcZK2tV756trhQNaFSc | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璉（CBDB 162186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162186&o=json)
