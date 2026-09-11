---
schema: wang-person/v1
id: p_ckXg1snXR9eZpgBTHaU1bX
status: active
merged_into: null
display_name: 王繡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMT1nK8Dv6NmFZL5BiAH33
        subject_person_id: p_ckXg1snXR9eZpgBTHaU1bX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vKLRnLCWMsqBB9uLnVs8TB
          claim_id: c_eMT1nK8Dv6NmFZL5BiAH33
          source_id: s_H3rDz3jf9AqS3y8r6mt9DX
          stance: supports
          locator: CBDB:332958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332958）
          source: &a1
            id: s_H3rDz3jf9AqS3y8r6mt9DX
            source_type: api_record
            title: 中国历代人物传记资料库：王繡（CBDB 332958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332958&o=json
            external_identifier: CBDB:332958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.388Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GCidoGY419wF2y4Lmooytg
        subject_person_id: p_ckXg1snXR9eZpgBTHaU1bX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繡，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 332958）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xjKNN06W5cA2vbiZD2c3R8
          claim_id: c_GCidoGY419wF2y4Lmooytg
          source_id: s_H3rDz3jf9AqS3y8r6mt9DX
          stance: supports
          locator: CBDB:332958
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
        id: c_6IsmbHP3aAKiUya6jFaVNk
        subject_person_id: p_ckXg1snXR9eZpgBTHaU1bX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HCjugI_VKLsA6cHphQzUrX
          claim_id: c_6IsmbHP3aAKiUya6jFaVNk
          source_id: s_H3rDz3jf9AqS3y8r6mt9DX
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百五十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wfvFAbMeeGg2JCRsQFqRMn
        status: active
        display_name: 王家卿
        merged_into_person_id: null
  other: []
---

# 王繡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繡 | accepted |
| bio.summary | 王繡，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 332958） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_wfvFAbMeeGg2JCRsQFqRMn | 王家卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繡（CBDB 332958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332958&o=json)
