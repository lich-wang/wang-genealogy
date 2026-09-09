---
schema: wang-person/v1
id: p_FYMMUPCk1nyDVLEnAxvNvZ
status: active
merged_into: null
display_name: 王暘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XTmJ4pchrzUDCSg9d4yRPN
        subject_person_id: p_FYMMUPCk1nyDVLEnAxvNvZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LvE1ZyLA6dEoiTByT4TM2x
          claim_id: c_XTmJ4pchrzUDCSg9d4yRPN
          source_id: s_yGzf65FGMxrmj6msD5zQpM
          stance: supports
          locator: CBDB:1917
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1917）
          source: &a1
            id: s_yGzf65FGMxrmj6msD5zQpM
            source_type: api_record
            title: 中国历代人物传记资料库：王暘（CBDB 1917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1917&o=json
            external_identifier: CBDB:1917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.398Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xu71wa7HaED2V3Yt4uH2fF
        subject_person_id: p_FYMMUPCk1nyDVLEnAxvNvZ
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
        - id: cs_QxD3WszaG8KAggFg8WztRL
          claim_id: c_Xu71wa7HaED2V3Yt4uH2fF
          source_id: s_yGzf65FGMxrmj6msD5zQpM
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

# 王暘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暘 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王暘（CBDB 1917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1917&o=json)
