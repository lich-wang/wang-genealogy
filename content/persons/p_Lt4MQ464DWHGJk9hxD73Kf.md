---
schema: wang-person/v1
id: p_Lt4MQ464DWHGJk9hxD73Kf
status: active
merged_into: null
display_name: 王偡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6UUu5MF4YaRXc4hLrKjztn
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xqaNDmbZFsXGEQZEGHGBPa
          claim_id: c_6UUu5MF4YaRXc4hLrKjztn
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
          stance: supports
          locator: CBDB:204670
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204670）
          source: &a1
            id: s_oD9gKDpPboW2xg9Jhpaik1
            source_type: api_record
            title: 中国历代人物传记资料库：王偡（CBDB 204670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204670&o=json
            external_identifier: CBDB:204670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NaGGActsD56f1JZJGf1Me6
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1395年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BugZNZduk4Xjy5Za4zko5v
          claim_id: c_NaGGActsD56f1JZJGf1Me6
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K9sPPcQQEff8aHsEx1ZUWZ
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
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
        - id: cs_p2EeED13MEBxC6pQ4MmJC6
          claim_id: c_K9sPPcQQEff8aHsEx1ZUWZ
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
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
        id: c_wcxtNCbbAnu25MzAFaipSB
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vKSXoQ7wh-nJm6YTNrl1Z8
          claim_id: c_wcxtNCbbAnu25MzAFaipSB
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pY4bR9vVd19RvXkc3AZrMW
        status: active
        display_name: 王彥禎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_grjUh661Z05pEX-NxvM04y
        subject_person_id: p_A3htMyYv1SZdF7d9GnU5GW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ggwoEDVyyjP1T9sux-7zyG
          claim_id: c_grjUh661Z05pEX-NxvM04y
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A3htMyYv1SZdF7d9GnU5GW
        status: active
        display_name: 王德集
        merged_into_person_id: null
    - claim:
        id: c_ftjyTqBiY6RdiWbIXQ3pad
        subject_person_id: p_jEVGyCWdr9id3tdCNr1hgE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RwECqIorhO4foQ5JhTFK33
          claim_id: c_ftjyTqBiY6RdiWbIXQ3pad
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jEVGyCWdr9id3tdCNr1hgE
        status: active
        display_name: 王谷平
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王偡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偡 | accepted |
| birth.date | 1395年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pY4bR9vVd19RvXkc3AZrMW | 王彥禎 | accepted |
| ancestors | p_A3htMyYv1SZdF7d9GnU5GW | 王德集 | accepted |
| ancestors | p_jEVGyCWdr9id3tdCNr1hgE | 王谷平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王偡（CBDB 204670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204670&o=json)
