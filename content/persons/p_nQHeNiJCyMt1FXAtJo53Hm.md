---
schema: wang-person/v1
id: p_nQHeNiJCyMt1FXAtJo53Hm
status: active
merged_into: null
display_name: 王盛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XJv4kg3EA96ZMAK4CaG3y6
        subject_person_id: p_nQHeNiJCyMt1FXAtJo53Hm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LiUeo1CUiPrbKS3Cq5aFU2
          claim_id: c_XJv4kg3EA96ZMAK4CaG3y6
          source_id: s_59gdDmKjkx2hLrgtBJ1wYE
          stance: supports
          locator: CBDB:690121
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690121）
          source: &a1
            id: s_59gdDmKjkx2hLrgtBJ1wYE
            source_type: api_record
            title: 中国历代人物传记资料库：王盛（CBDB 690121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690121&o=json
            external_identifier: CBDB:690121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YdWWGU3NGkxVxVHsz8j2KS
        subject_person_id: p_nQHeNiJCyMt1FXAtJo53Hm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盛，唐人物。籍贯恆州，身份为布衣。（中国历代人物传记资料库 CBDB 690121）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YVawKnGYVnaI5UW2EgYB5l
          claim_id: c_YdWWGU3NGkxVxVHsz8j2KS
          source_id: s_59gdDmKjkx2hLrgtBJ1wYE
          stance: supports
          locator: CBDB:690121
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_P2wugFWB-0Nm47VBUHGyCo
        subject_person_id: p_ksVwy4AugUMWAYeo6188Lr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nQHeNiJCyMt1FXAtJo53Hm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SR_lAeSS8h_00lQOaz2-NA
          claim_id: c_P2wugFWB-0Nm47VBUHGyCo
          source_id: s_pBxFuuWoFuh4AZFgo51AQG
          stance: supports
          locator: CBDB 双向互证（子 王盛 ⇄ 父 王傑）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_pBxFuuWoFuh4AZFgo51AQG
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 690122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690122&o=json
            external_identifier: CBDB:690122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ksVwy4AugUMWAYeo6188Lr
        status: active
        display_name: 王傑
        merged_into_person_id: null
  children:
    - claim:
        id: c_uhTnJNaS48Wqr8p3xmsyd9
        subject_person_id: p_nQHeNiJCyMt1FXAtJo53Hm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QKqRb3WxFKBxBgiGZhQ1YL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jsPKktjtq8qm_YtxmRijqe
          claim_id: c_uhTnJNaS48Wqr8p3xmsyd9
          source_id: s_59gdDmKjkx2hLrgtBJ1wYE
          stance: supports
          locator: CBDB 双向互证（子 王忠信 ⇄ 父 王盛）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_QKqRb3WxFKBxBgiGZhQ1YL
        status: active
        display_name: 王忠信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王盛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王盛 | accepted |
| bio.summary | 王盛，唐人物。籍贯恆州，身份为布衣。（中国历代人物传记资料库 CBDB 690121） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ksVwy4AugUMWAYeo6188Lr | 王傑 | accepted |
| children | p_QKqRb3WxFKBxBgiGZhQ1YL | 王忠信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 690122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690122&o=json)
- [中国历代人物传记资料库：王盛（CBDB 690121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690121&o=json)
