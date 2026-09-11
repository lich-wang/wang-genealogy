---
schema: wang-person/v1
id: p_XM9QNMLmGKfYJ3GSaLi11d
status: active
merged_into: null
display_name: 王蘊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AWeJeQhEx18g2KPSbJASA3
        subject_person_id: p_XM9QNMLmGKfYJ3GSaLi11d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7moUjuzssLL8rnCus7HwK7
          claim_id: c_AWeJeQhEx18g2KPSbJASA3
          source_id: s_y3UEciAhJvmsr7XUzLhMNX
          stance: supports
          locator: CBDB:563484
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563484）
          source: &a1
            id: s_y3UEciAhJvmsr7XUzLhMNX
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊（CBDB 563484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563484&o=json
            external_identifier: CBDB:563484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HQHgDpdGVjoARbyQU31LQZ
        subject_person_id: p_XM9QNMLmGKfYJ3GSaLi11d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DjCz833iebVLLKbyBHtAGS
          claim_id: c_HQHgDpdGVjoARbyQU31LQZ
          source_id: s_y3UEciAhJvmsr7XUzLhMNX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
          source:
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
      object_person:
        id: p_67QPdbGBEAuDLU32GCV69J
        status: active
        display_name: 王正
        merged_into_person_id: null
  other: []
---

# 王蘊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_67QPdbGBEAuDLU32GCV69J | 王正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘊（CBDB 563484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563484&o=json)
- [中国历代人物传记资料库：王正（CBDB 563487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563487&o=json)
