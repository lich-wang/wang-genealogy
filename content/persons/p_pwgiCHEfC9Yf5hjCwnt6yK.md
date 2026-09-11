---
schema: wang-person/v1
id: p_pwgiCHEfC9Yf5hjCwnt6yK
status: active
merged_into: null
display_name: 王汝霖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kYAR1mtNFSuHCbfKfgic6c
        subject_person_id: p_pwgiCHEfC9Yf5hjCwnt6yK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RKp8sEtnxLQuNftXoCjvnL
          claim_id: c_kYAR1mtNFSuHCbfKfgic6c
          source_id: s_JEDsCCfXzvg8zERK8HumXH
          stance: supports
          locator: CBDB:315441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315441）
          source: &a1
            id: s_JEDsCCfXzvg8zERK8HumXH
            source_type: api_record
            title: 中国历代人物传记资料库：王汝霖（CBDB 315441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315441&o=json
            external_identifier: CBDB:315441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CHf4LM5DTnKQoErtk9f3KC
        subject_person_id: p_pwgiCHEfC9Yf5hjCwnt6yK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝霖，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 315441）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qi0ny3dPchrqn4rEp13HOE
          claim_id: c_CHf4LM5DTnKQoErtk9f3KC
          source_id: s_JEDsCCfXzvg8zERK8HumXH
          stance: supports
          locator: CBDB:315441
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
  descendants:
    - claim:
        id: c_kDx9HnVUuZnNF19oLl7-E2
        subject_person_id: p_pwgiCHEfC9Yf5hjCwnt6yK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jt2-zLVk9PvYKVDCecu8Ga
          claim_id: c_kDx9HnVUuZnNF19oLl7-E2
          source_id: s_JEDsCCfXzvg8zERK8HumXH
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第五十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tJ4a7bRMV9hCP3y348uRJE
        status: active
        display_name: 王學顏
        merged_into_person_id: null
  other: []
---

# 王汝霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝霖 | accepted |
| bio.summary | 王汝霖，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 315441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tJ4a7bRMV9hCP3y348uRJE | 王學顏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝霖（CBDB 315441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315441&o=json)
