---
schema: wang-person/v1
id: p_kVLnu8881PuBedzkZbDYLY
status: active
merged_into: null
display_name: 王宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KKVDCZkzGhb3UNKBmM6GgM
        subject_person_id: p_kVLnu8881PuBedzkZbDYLY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rV46LPYT6K5fLUp6BKmtMx
          claim_id: c_KKVDCZkzGhb3UNKBmM6GgM
          source_id: s_b7v34fR8HX4MmcP6Xr3vrj
          stance: supports
          locator: CBDB:147134
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147134）
          source: &a1
            id: s_b7v34fR8HX4MmcP6Xr3vrj
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 147134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147134&o=json
            external_identifier: CBDB:147134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HBcL69RMS7DkH8qpZjmZH7
        subject_person_id: p_kVLnu8881PuBedzkZbDYLY
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
        - id: cs_fhWPH8QgY3n24sjpCPa8re
          claim_id: c_HBcL69RMS7DkH8qpZjmZH7
          source_id: s_b7v34fR8HX4MmcP6Xr3vrj
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
        id: c_NuK1Lrd0ShyBM8jAaxlWOA
        subject_person_id: p_kVLnu8881PuBedzkZbDYLY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jQ9drKpLJN9ER2YmPaPe9P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DRHDWfGTkBJAJFhFD8i0VJ
          claim_id: c_NuK1Lrd0ShyBM8jAaxlWOA
          source_id: s_HFBFNsstxE9bgZF5fBGASc
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 100：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HFBFNsstxE9bgZF5fBGASc
            source_type: api_record
            title: 中国历代人物传记资料库：王素（CBDB 139018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139018&o=json
            external_identifier: CBDB:139018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jQ9drKpLJN9ER2YmPaPe9P
        status: active
        display_name: 王素
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jQ9drKpLJN9ER2YmPaPe9P | 王素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王素（CBDB 139018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139018&o=json)
- [中国历代人物传记资料库：王宗（CBDB 147134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147134&o=json)
