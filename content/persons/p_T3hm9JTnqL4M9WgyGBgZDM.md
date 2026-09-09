---
schema: wang-person/v1
id: p_T3hm9JTnqL4M9WgyGBgZDM
status: active
merged_into: null
display_name: 王樹玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XF3D2vYL1P1LZRUeLdhQ33
        subject_person_id: p_T3hm9JTnqL4M9WgyGBgZDM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w6soeDNEC1s9e3yB82XteF
          claim_id: c_XF3D2vYL1P1LZRUeLdhQ33
          source_id: s_bddKN1tJm62Q88DQHcGvfn
          stance: supports
          locator: CBDB:71858
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71858）
          source: &a1
            id: s_bddKN1tJm62Q88DQHcGvfn
            source_type: api_record
            title: 中国历代人物传记资料库：王樹玉（CBDB 71858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71858&o=json
            external_identifier: CBDB:71858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oEnE2J5VeDDZbBsXDPnJYP
        subject_person_id: p_T3hm9JTnqL4M9WgyGBgZDM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1834年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_93VV5J6uV5bfVFMERi2ZLM
          claim_id: c_oEnE2J5VeDDZbBsXDPnJYP
          source_id: s_bddKN1tJm62Q88DQHcGvfn
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
        id: c_UB59guBdY46FHgJD4jCmGQ
        subject_person_id: p_T3hm9JTnqL4M9WgyGBgZDM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vv1sf4V7N5rKm3oMe64b3V
          claim_id: c_UB59guBdY46FHgJD4jCmGQ
          source_id: s_bddKN1tJm62Q88DQHcGvfn
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

# 王樹玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹玉 | accepted |
| birth.date | 1834年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹玉（CBDB 71858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71858&o=json)
