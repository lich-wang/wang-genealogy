---
schema: wang-person/v1
id: p_7ZkuLBZx4sM3DaTb2XEViR
status: active
merged_into: null
display_name: 王渙之
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n8DNn9ELd16pTJR3hwezJ4
        subject_person_id: p_7ZkuLBZx4sM3DaTb2XEViR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u8Xw2WU9adTUf1njE5ZEut
          claim_id: c_n8DNn9ELd16pTJR3hwezJ4
          source_id: s_4wBHe44bd6siK9D6AUEfUk
          stance: supports
          locator: CBDB:26612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26612）
          source: &a1
            id: s_4wBHe44bd6siK9D6AUEfUk
            source_type: api_record
            title: 中国历代人物传记资料库：王渙之（CBDB 26612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26612&o=json
            external_identifier: CBDB:26612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Xok8ZFxtAtWcEQmhBWp8DN
        subject_person_id: p_7ZkuLBZx4sM3DaTb2XEViR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1060年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9wbvyVLEt35bfft3aFZxXS
          claim_id: c_Xok8ZFxtAtWcEQmhBWp8DN
          source_id: s_4wBHe44bd6siK9D6AUEfUk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bdVvydkBk99hZaJqJEsTGE
        subject_person_id: p_7ZkuLBZx4sM3DaTb2XEViR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1124年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_trANNLNAvg6KyfcFeas78X
          claim_id: c_bdVvydkBk99hZaJqJEsTGE
          source_id: s_4wBHe44bd6siK9D6AUEfUk
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
        id: c_QV9aczeqq2JEPyJZ74SrPA
        subject_person_id: p_7ZkuLBZx4sM3DaTb2XEViR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙之（1060年—1124年），宋人物。籍贯常山，身份为結社，入仕進士，曾任安撫使、朝請郎、朝散郎。（中国历代人物传记资料库 CBDB 26612）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_00GKydZSHw_VdXa1gTq8Os
          claim_id: c_QV9aczeqq2JEPyJZ74SrPA
          source_id: s_4wBHe44bd6siK9D6AUEfUk
          stance: supports
          locator: CBDB:26612
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vhUQlWsdPUultb-k0ZSVuJ
        subject_person_id: p_BxVQChzbJa8u9Vm5XHoDpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7ZkuLBZx4sM3DaTb2XEViR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eUfTb2flA6ViW6XpSfDJ71
          claim_id: c_vhUQlWsdPUultb-k0ZSVuJ
          source_id: s_4wBHe44bd6siK9D6AUEfUk
          stance: supports
          locator: CBDB 双向互证（父 王介 ⇄ 子 王渙之）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_BxVQChzbJa8u9Vm5XHoDpw
        status: active
        display_name: 王介
        merged_into_person_id: null
  children:
    - claim:
        id: c_mcPkRdr9X054U_eJQAKnkz
        subject_person_id: p_7ZkuLBZx4sM3DaTb2XEViR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AwTHuydM7sL7parZyqt7Q8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6UxRsJF255ZzhTjUi2mixI
          claim_id: c_mcPkRdr9X054U_eJQAKnkz
          source_id: s_4wBHe44bd6siK9D6AUEfUk
          stance: supports
          locator: 宋人傳記資料索引(電子版)，984：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AwTHuydM7sL7parZyqt7Q8
        status: active
        display_name: 王植
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Fl6x5T31hV92GUtfUGLffn
        subject_person_id: p_7ZkuLBZx4sM3DaTb2XEViR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hDE1dEk7zop9PqWvJVDDap
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CcA78Vit42l2rVn7-wyIHY
          claim_id: c_Fl6x5T31hV92GUtfUGLffn
          source_id: s_4wBHe44bd6siK9D6AUEfUk
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1563：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hDE1dEk7zop9PqWvJVDDap
        status: active
        display_name: 王光逢
        merged_into_person_id: null
  other: []
---

# 王渙之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渙之 | accepted |
| birth.date | 1060年 | accepted |
| death.date | 1124年 | accepted |
| bio.summary | 王渙之（1060年—1124年），宋人物。籍贯常山，身份为結社，入仕進士，曾任安撫使、朝請郎、朝散郎。（中国历代人物传记资料库 CBDB 26612） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BxVQChzbJa8u9Vm5XHoDpw | 王介 | accepted |
| children | p_AwTHuydM7sL7parZyqt7Q8 | 王植 | accepted |
| descendants | p_hDE1dEk7zop9PqWvJVDDap | 王光逢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王渙之（CBDB 26612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26612&o=json)
