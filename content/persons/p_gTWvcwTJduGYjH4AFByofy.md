---
schema: wang-person/v1
id: p_gTWvcwTJduGYjH4AFByofy
status: active
merged_into: null
display_name: 王大臨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vnLAxX8ioiBv66JXcoqPz8
        subject_person_id: p_gTWvcwTJduGYjH4AFByofy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大臨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R21UoAz11Mm3GwbKz29BNK
          claim_id: c_vnLAxX8ioiBv66JXcoqPz8
          source_id: s_J7bwYGL5fzMeeZ819EQEHt
          stance: supports
          locator: CBDB:38104
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38104）
          source: &a1
            id: s_J7bwYGL5fzMeeZ819EQEHt
            source_type: api_record
            title: 中国历代人物传记资料库：王大臨（CBDB 38104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38104&o=json
            external_identifier: CBDB:38104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tVd2QWWu4qPDs7so4shaAb
        subject_person_id: p_gTWvcwTJduGYjH4AFByofy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1086年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SHBsnx7HZNZ6wNs7EHquQJ
          claim_id: c_tVd2QWWu4qPDs7so4shaAb
          source_id: s_J7bwYGL5fzMeeZ819EQEHt
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
        id: c_UnwpT6xpLxjEVvqf2Qz8hK
        subject_person_id: p_gTWvcwTJduGYjH4AFByofy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大臨（卒于1086年），宋人物。籍贯鄆州，曾任太學錄。（中国历代人物传记资料库 CBDB 38104）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u9anDw2dgn-DyyQ_ryXtee
          claim_id: c_UnwpT6xpLxjEVvqf2Qz8hK
          source_id: s_J7bwYGL5fzMeeZ819EQEHt
          stance: supports
          locator: CBDB:38104
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e6HWkw8hiL-tUz_AiHiBg7
        subject_person_id: p_qaNbPxVseZmSQDL1Q2zNGZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gTWvcwTJduGYjH4AFByofy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ig3cKbDws4ZcsOoZVbKrwf
          claim_id: c_e6HWkw8hiL-tUz_AiHiBg7
          source_id: s_J7bwYGL5fzMeeZ819EQEHt
          stance: supports
          locator: 司馬文正公集，鄆州處士王君墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qaNbPxVseZmSQDL1Q2zNGZ
        status: active
        display_name: 王惟德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大臨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大臨 | accepted |
| death.date | 1086年 | accepted |
| bio.summary | 王大臨（卒于1086年），宋人物。籍贯鄆州，曾任太學錄。（中国历代人物传记资料库 CBDB 38104） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qaNbPxVseZmSQDL1Q2zNGZ | 王惟德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大臨（CBDB 38104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38104&o=json)
