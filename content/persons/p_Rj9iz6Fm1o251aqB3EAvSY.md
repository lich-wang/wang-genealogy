---
schema: wang-person/v1
id: p_Rj9iz6Fm1o251aqB3EAvSY
status: active
merged_into: null
display_name: 王道興
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TLA4X3AKPP7zeEFnLccpjX
        subject_person_id: p_Rj9iz6Fm1o251aqB3EAvSY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dJ6rZQP7uMLWhHHfeMrdqu
          claim_id: c_TLA4X3AKPP7zeEFnLccpjX
          source_id: s_M2PLhHkt74KRsqd3fqDVvr
          stance: supports
          locator: CBDB:167692
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（167692）
          source: &a1
            id: s_M2PLhHkt74KRsqd3fqDVvr
            source_type: api_record
            title: 中国历代人物传记资料库：王道興（CBDB 167692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167692&o=json
            external_identifier: CBDB:167692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AdCYcd52qBcdLGY8dM4hFW
        subject_person_id: p_Rj9iz6Fm1o251aqB3EAvSY
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
        - id: cs_A7Buo12dfvkx5XB2ecXJYi
          claim_id: c_AdCYcd52qBcdLGY8dM4hFW
          source_id: s_M2PLhHkt74KRsqd3fqDVvr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NHTldfI6a6lmz_CCbZe9EN
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Rj9iz6Fm1o251aqB3EAvSY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hMcNIhtGtwC3Yxzuz8nyim
          claim_id: c_NHTldfI6a6lmz_CCbZe9EN
          source_id: s_M2PLhHkt74KRsqd3fqDVvr
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong75：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yw8Ldi3TsRvFBDPd73FPjN
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道興 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yw8Ldi3TsRvFBDPd73FPjN | 王玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道興（CBDB 167692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167692&o=json)
