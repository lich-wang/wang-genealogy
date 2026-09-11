---
schema: wang-person/v1
id: p_6JzQAbvdVnzBeP4yVuurmL
status: active
merged_into: null
display_name: 崔氏
revision: 1
cbdb_id: 161416
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A2vSv7qt-XN3QyvVHbyMU9
        subject_person_id: p_6JzQAbvdVnzBeP4yVuurmL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 崔氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ENFmmBDEisVSlMUR40KNet
          claim_id: c_A2vSv7qt-XN3QyvVHbyMU9
          source_id: s_v53r5NLbIFnJR83_GLiFAi
          stance: supports
          locator: CBDB:161416
          quotation: null
          interpretation_note: CBDB 明确记录的王成晏配偶
          source: &a1
            id: s_v53r5NLbIFnJR83_GLiFAi
            source_type: api_record
            title: 中国历代人物传记资料库：崔氏(王成晏妻)（CBDB 161416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161416&o=json
            external_identifier: CBDB:161416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PIZ_72WwfQL5E-59WPEVOg
        subject_person_id: p_vkSWb3KWRxFKeijtXJrVo1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6JzQAbvdVnzBeP4yVuurmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BKG2-_zaHp-xZIa56e_Bvt
          claim_id: c_PIZ_72WwfQL5E-59WPEVOg
          source_id: s_v53r5NLbIFnJR83_GLiFAi
          stance: supports
          locator: 唐代墓誌匯編:二卷，中和2：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vkSWb3KWRxFKeijtXJrVo1
        status: active
        display_name: 王成晏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 崔氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 崔氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_vkSWb3KWRxFKeijtXJrVo1 | 王成晏 | accepted |

## 外部来源

- [中国历代人物传记资料库：崔氏(王成晏妻)（CBDB 161416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161416&o=json)
