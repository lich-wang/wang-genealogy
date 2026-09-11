---
schema: wang-person/v1
id: p_SMiAvgSpNwHN36jCW4VNzh
status: active
merged_into: null
display_name: 王佾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XXLzTEBgXQMqnLPUJSNTMA
        subject_person_id: p_SMiAvgSpNwHN36jCW4VNzh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wQ7h7fRCDTMnVT459uXGwE
          claim_id: c_XXLzTEBgXQMqnLPUJSNTMA
          source_id: s_JZuP31yaB3UsmUxgF6931q
          stance: supports
          locator: CBDB:39559
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39559）
          source: &a1
            id: s_JZuP31yaB3UsmUxgF6931q
            source_type: api_record
            title: 中国历代人物传记资料库：王佾（CBDB 39559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39559&o=json
            external_identifier: CBDB:39559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MPDnkSPFiGMK6ANh9XPdC6
        subject_person_id: p_SMiAvgSpNwHN36jCW4VNzh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1138年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sMMGtvYcohSLrUFrbJVRLH
          claim_id: c_MPDnkSPFiGMK6ANh9XPdC6
          source_id: s_JZuP31yaB3UsmUxgF6931q
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
        id: c_XhD2voyD7YPJmqfiR4B1my
        subject_person_id: p_SMiAvgSpNwHN36jCW4VNzh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佾（卒于1138年），宋人物。籍贯淄川，曾任太僕寺丞。（中国历代人物传记资料库 CBDB 39559）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W5-eznZySmQ_BPacl408LF
          claim_id: c_XhD2voyD7YPJmqfiR4B1my
          source_id: s_JZuP31yaB3UsmUxgF6931q
          stance: supports
          locator: CBDB:39559
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lBs-bx1O3MrIoTldc9ZQ6a
        subject_person_id: p_GKKeJ3Hz6Dm45cTvfc9ptt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SMiAvgSpNwHN36jCW4VNzh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LVMHm-wJ7lo_IaqRfN1cYH
          claim_id: c_lBs-bx1O3MrIoTldc9ZQ6a
          source_id: s_fKn8zMxfBXwKqqvfYJVsjF
          stance: supports
          locator: 宋人傳記資料索引(電子版)，723：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fKn8zMxfBXwKqqvfYJVsjF
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 38159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38159&o=json
            external_identifier: CBDB:38159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GKKeJ3Hz6Dm45cTvfc9ptt
        status: active
        display_name: 王復
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佾 | accepted |
| death.date | 1138年 | accepted |
| bio.summary | 王佾（卒于1138年），宋人物。籍贯淄川，曾任太僕寺丞。（中国历代人物传记资料库 CBDB 39559） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GKKeJ3Hz6Dm45cTvfc9ptt | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 38159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38159&o=json)
- [中国历代人物传记资料库：王佾（CBDB 39559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39559&o=json)
