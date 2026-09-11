---
schema: wang-person/v1
id: p_DzgTTQ58YXxHHaXQiyE27g
status: active
merged_into: null
display_name: 王相
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kHcCCzu1tEFjiFhPEJCaPL
        subject_person_id: p_DzgTTQ58YXxHHaXQiyE27g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dQ4AzcuGB5QtpnUKDSVoBq
          claim_id: c_kHcCCzu1tEFjiFhPEJCaPL
          source_id: s_DkBQGhSXfs1AZ9ZMtQK4yr
          stance: supports
          locator: CBDB:147766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147766）
          source: &a1
            id: s_DkBQGhSXfs1AZ9ZMtQK4yr
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 147766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147766&o=json
            external_identifier: CBDB:147766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wZecEtxb9ReKfrW6c53qcA
        subject_person_id: p_DzgTTQ58YXxHHaXQiyE27g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jYJ9A9izeGw3DXeyGRNk2C
          claim_id: c_wZecEtxb9ReKfrW6c53qcA
          source_id: s_DkBQGhSXfs1AZ9ZMtQK4yr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WVYU7SJ6HvoNQwzAn_Tngm
        subject_person_id: p_DzgTTQ58YXxHHaXQiyE27g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ET5yp25WCEv7fDBLm99G68
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZClM_QHKHas7a-p9Qrhxbu
          claim_id: c_WVYU7SJ6HvoNQwzAn_Tngm
          source_id: s_DkBQGhSXfs1AZ9ZMtQK4yr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 28：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ET5yp25WCEv7fDBLm99G68
        status: active
        display_name: 王孝義
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ET5yp25WCEv7fDBLm99G68 | 王孝義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 147766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147766&o=json)
