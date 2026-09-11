---
schema: wang-person/v1
id: p_P9grpQUuaJm36Kf1zD6ovz
status: active
merged_into: null
display_name: 王知道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mrzFcSydLF9uiMmSMjj4D9
        subject_person_id: p_P9grpQUuaJm36Kf1zD6ovz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MfoboQTn33eD9B4xGCuwhX
          claim_id: c_mrzFcSydLF9uiMmSMjj4D9
          source_id: s_fBavnSYEUiupJvL2PRkjYH
          stance: supports
          locator: CBDB:154780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（154780）
          source: &a1
            id: s_fBavnSYEUiupJvL2PRkjYH
            source_type: api_record
            title: 中国历代人物传记资料库：王知道（CBDB 154780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154780&o=json
            external_identifier: CBDB:154780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Pf16ZX6wLDbR6E8NqF2gW
        subject_person_id: p_P9grpQUuaJm36Kf1zD6ovz
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
        - id: cs_KUHedeaucG3Sz1KeNUSNTf
          claim_id: c_1Pf16ZX6wLDbR6E8NqF2gW
          source_id: s_fBavnSYEUiupJvL2PRkjYH
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
        id: c_e7nsiy2GYK2pt_56DFpLpn
        subject_person_id: p_P9grpQUuaJm36Kf1zD6ovz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sx5qpWWKAzZFZcAZv0D1vA
          claim_id: c_e7nsiy2GYK2pt_56DFpLpn
          source_id: s_opASS8N2VcwCXB51vGEx7L
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 3：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_opASS8N2VcwCXB51vGEx7L
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 141157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141157&o=json
            external_identifier: CBDB:141157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7wCLqcQbBY1uXQ63JU3AKf
        status: active
        display_name: 王訓
        merged_into_person_id: null
  other: []
---

# 王知道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王知道 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7wCLqcQbBY1uXQ63JU3AKf | 王訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訓（CBDB 141157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141157&o=json)
- [中国历代人物传记资料库：王知道（CBDB 154780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154780&o=json)
