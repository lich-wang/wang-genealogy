---
schema: wang-person/v1
id: p_uB3QhRSaNnEMoSi6e4fkig
status: active
merged_into: null
display_name: 王愈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1a45q9sFKZ7yLYK3k8sCTf
        subject_person_id: p_uB3QhRSaNnEMoSi6e4fkig
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GyF4EgcETjLg2kFRCJbRHW
          claim_id: c_1a45q9sFKZ7yLYK3k8sCTf
          source_id: s_Lh3Ap1Tw1kM3Q69WtWNEB2
          stance: supports
          locator: CBDB:22134
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22134）
          source: &a1
            id: s_Lh3Ap1Tw1kM3Q69WtWNEB2
            source_type: api_record
            title: 中国历代人物传记资料库：王愈（CBDB 22134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22134&o=json
            external_identifier: CBDB:22134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sHqp2wHRwjBPbysAyp1A9y
        subject_person_id: p_uB3QhRSaNnEMoSi6e4fkig
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VqaMeeGhr7Ryw4yCXCBrEC
          claim_id: c_sHqp2wHRwjBPbysAyp1A9y
          source_id: s_Lh3Ap1Tw1kM3Q69WtWNEB2
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
  descendants: []
  other: []
---

# 王愈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愈 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愈（CBDB 22134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22134&o=json)
