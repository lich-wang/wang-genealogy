---
schema: wang-person/v1
id: p_67QPdbGBEAuDLU32GCV69J
status: active
merged_into: null
display_name: 王正
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LK1efjNC2erQkFUgkjDHWF
        subject_person_id: p_67QPdbGBEAuDLU32GCV69J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j3G439H39HWXUQxW4GTTmb
          claim_id: c_LK1efjNC2erQkFUgkjDHWF
          source_id: s_izjCM7Xjq7AiXpp61KmMyD
          stance: supports
          locator: CBDB:563487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563487）
          source: &a1
            id: s_izjCM7Xjq7AiXpp61KmMyD
            source_type: api_record
            title: 中国历代人物传记资料库：王正（CBDB 563487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563487&o=json
            external_identifier: CBDB:563487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7B4s4s6LCFQft45nxAeN54
        subject_person_id: p_67QPdbGBEAuDLU32GCV69J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王正，明人物。入仕貢生: 納貢(例貢,增貢,捐貢)。（中国历代人物传记资料库 CBDB 563487）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wtPD3ny2pU5syPxRBJfYuT
          claim_id: c_7B4s4s6LCFQft45nxAeN54
          source_id: s_izjCM7Xjq7AiXpp61KmMyD
          stance: supports
          locator: CBDB:563487
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aQ7VQzkOPZeISzfotOlXxM
        subject_person_id: p_qLoryMbMAG9Vho3wHxjS8E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_67QPdbGBEAuDLU32GCV69J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3AK4Cq3BOC0sWMK6kW6u_v
          claim_id: c_aQ7VQzkOPZeISzfotOlXxM
          source_id: s_izjCM7Xjq7AiXpp61KmMyD
          stance: supports
          locator: 紹興府志:八十卷，lgid=316700：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qLoryMbMAG9Vho3wHxjS8E
        status: active
        display_name: 王杞
        merged_into_person_id: null
  children:
    - claim:
        id: c_J0lu5S2QLpv04pG9uZZX94
        subject_person_id: p_67QPdbGBEAuDLU32GCV69J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ETdwCm54JGjgAZiDmfGBaU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FFzvrIjIDG609GPclDJhbW
          claim_id: c_J0lu5S2QLpv04pG9uZZX94
          source_id: s_izjCM7Xjq7AiXpp61KmMyD
          stance: supports
          locator: 紹興府志:八十卷，lgid=316700：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ETdwCm54JGjgAZiDmfGBaU
        status: active
        display_name: 王偉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_98Kc6afJJCvgCHVDzWAFcQ
        subject_person_id: p_XM9QNMLmGKfYJ3GSaLi11d
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_67QPdbGBEAuDLU32GCV69J
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ajAiGw49mM2E60Spaj6lft
          claim_id: c_98Kc6afJJCvgCHVDzWAFcQ
          source_id: s_izjCM7Xjq7AiXpp61KmMyD
          stance: supports
          locator: 紹興府志:八十卷，lgid=316700：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XM9QNMLmGKfYJ3GSaLi11d
        status: active
        display_name: 王蘊
        merged_into_person_id: null
    - claim:
        id: c_CMJa0kf3Nytt1JUnbFY6dW
        subject_person_id: p_K9QEgp6JSKaffEKcTo7xe2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_67QPdbGBEAuDLU32GCV69J
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ZyEsGdB4-PkcKkJnMhrzM
          claim_id: c_CMJa0kf3Nytt1JUnbFY6dW
          source_id: s_izjCM7Xjq7AiXpp61KmMyD
          stance: supports
          locator: 紹興府志:八十卷，lgid=316700：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_K9QEgp6JSKaffEKcTo7xe2
        status: active
        display_name: 王賢
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正 | accepted |
| bio.summary | 王正，明人物。入仕貢生: 納貢(例貢,增貢,捐貢)。（中国历代人物传记资料库 CBDB 563487） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qLoryMbMAG9Vho3wHxjS8E | 王杞 | accepted |
| children | p_ETdwCm54JGjgAZiDmfGBaU | 王偉 | accepted |
| ancestors | p_XM9QNMLmGKfYJ3GSaLi11d | 王蘊 | accepted |
| ancestors | p_K9QEgp6JSKaffEKcTo7xe2 | 王賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王正（CBDB 563487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563487&o=json)
