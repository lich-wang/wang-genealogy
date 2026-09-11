---
schema: wang-person/v1
id: p_9ACBwaJa1h59PDqx96yiSt
status: active
merged_into: null
display_name: 王淵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DCz1eVn4W4myuo1RpSHQni
        subject_person_id: p_9ACBwaJa1h59PDqx96yiSt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j1ECwVtaNj6y4jEVmqbkid
          claim_id: c_DCz1eVn4W4myuo1RpSHQni
          source_id: s_JoAu9kNpppHC3Vk6iiTPga
          stance: supports
          locator: CBDB:437810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（437810）
          source: &a1
            id: s_JoAu9kNpppHC3Vk6iiTPga
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 437810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437810&o=json
            external_identifier: CBDB:437810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wRaoVnKrDs2kCR7hvWsWfm
        subject_person_id: p_9ACBwaJa1h59PDqx96yiSt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵，明人物。籍贯義烏。（中国历代人物传记资料库 CBDB 437810）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0cFvxFyVW2V4JwFbMtkQn4
          claim_id: c_wRaoVnKrDs2kCR7hvWsWfm
          source_id: s_JoAu9kNpppHC3Vk6iiTPga
          stance: supports
          locator: CBDB:437810
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
  ancestors:
    - claim:
        id: c_-Iq1PCA_4MtYNsrkjQdZsZ
        subject_person_id: p_ujxGmCBGatyUsmPNvx1eeB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9ACBwaJa1h59PDqx96yiSt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6VbBqsgMZmcNeVBA5pDg1L
          claim_id: c_-Iq1PCA_4MtYNsrkjQdZsZ
          source_id: s_JoAu9kNpppHC3Vk6iiTPga
          stance: supports
          locator: CBDB 双向互证（祖父 王紳 ⇄ 孫 王淵）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_ujxGmCBGatyUsmPNvx1eeB
        status: active
        display_name: 王绅
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淵 | accepted |
| bio.summary | 王淵，明人物。籍贯義烏。（中国历代人物传记资料库 CBDB 437810） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ujxGmCBGatyUsmPNvx1eeB | 王绅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淵（CBDB 437810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437810&o=json)
