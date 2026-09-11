---
schema: wang-person/v1
id: p_9SjxQ1HhMppQmPyJMc5Xha
status: active
merged_into: null
display_name: 王述
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_97xnJ3fnExNE5vqP9ZESoC
        subject_person_id: p_9SjxQ1HhMppQmPyJMc5Xha
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6MmfKz5HDcpU7Meb4mVu2E
          claim_id: c_97xnJ3fnExNE5vqP9ZESoC
          source_id: s_CFywKgyTykjQExJvKrWqqb
          stance: supports
          locator: CBDB:148790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148790）
          source: &a1
            id: s_CFywKgyTykjQExJvKrWqqb
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 148790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148790&o=json
            external_identifier: CBDB:148790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_97HpwNBShKJemQd1ebxFyQ
        subject_person_id: p_9SjxQ1HhMppQmPyJMc5Xha
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述，唐人物。籍贯芒山，曾任參軍。（中国历代人物传记资料库 CBDB 148790）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fV56AKKgQ_oSHo9kpuqLBn
          claim_id: c_97HpwNBShKJemQd1ebxFyQ
          source_id: s_CFywKgyTykjQExJvKrWqqb
          stance: supports
          locator: CBDB:148790
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qEBHQ2WdmTiLpUqGB3vqGs
        subject_person_id: p_9SjxQ1HhMppQmPyJMc5Xha
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mLW4Uj954EJp3eBdLbHu1C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HkHnn07YHtfyjTfXs7lvZC
          claim_id: c_qEBHQ2WdmTiLpUqGB3vqGs
          source_id: s_CFywKgyTykjQExJvKrWqqb
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 4：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mLW4Uj954EJp3eBdLbHu1C
        status: active
        display_name: 王彥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述 | accepted |
| bio.summary | 王述，唐人物。籍贯芒山，曾任參軍。（中国历代人物传记资料库 CBDB 148790） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mLW4Uj954EJp3eBdLbHu1C | 王彥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王述（CBDB 148790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148790&o=json)
