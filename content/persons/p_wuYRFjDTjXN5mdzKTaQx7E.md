---
schema: wang-person/v1
id: p_wuYRFjDTjXN5mdzKTaQx7E
status: active
merged_into: null
display_name: 王鑑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bVPzLayytBnECWyRv2RLXX
        subject_person_id: p_wuYRFjDTjXN5mdzKTaQx7E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qAMcFAE3zCR9PbfGpC6D8Z
          claim_id: c_bVPzLayytBnECWyRv2RLXX
          source_id: s_o2wautQ5xMw7BV8LuJdBfg
          stance: supports
          locator: CBDB:314009
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314009）
          source: &a1
            id: s_o2wautQ5xMw7BV8LuJdBfg
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 314009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314009&o=json
            external_identifier: CBDB:314009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iGSHKMDuAjhA4QA9PW4szM
        subject_person_id: p_wuYRFjDTjXN5mdzKTaQx7E
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
        - id: cs_pmirwKGh15D5aNs6rFutjP
          claim_id: c_iGSHKMDuAjhA4QA9PW4szM
          source_id: s_o2wautQ5xMw7BV8LuJdBfg
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

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 314009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314009&o=json)
