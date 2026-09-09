---
schema: wang-person/v1
id: p_Mbbd3XKvBJoHN9aHSGAGun
status: active
merged_into: null
display_name: 王楷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qLAtVQHwNCGCH6794aaM8L
        subject_person_id: p_Mbbd3XKvBJoHN9aHSGAGun
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hA4ncQTzpMJku8DfyZLXWk
          claim_id: c_qLAtVQHwNCGCH6794aaM8L
          source_id: s_XssFJUaV1o16bEzmQMFvoo
          stance: supports
          locator: CBDB:71240
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71240）
          source: &a1
            id: s_XssFJUaV1o16bEzmQMFvoo
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 71240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71240&o=json
            external_identifier: CBDB:71240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MNG3GQ19UQogisEKa77ro9
        subject_person_id: p_Mbbd3XKvBJoHN9aHSGAGun
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1823年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9N36sAmBb8Ed3Tj98hgjsi
          claim_id: c_MNG3GQ19UQogisEKa77ro9
          source_id: s_XssFJUaV1o16bEzmQMFvoo
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
        id: c_62jByEhAYZ1sai8WXMxtZX
        subject_person_id: p_Mbbd3XKvBJoHN9aHSGAGun
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
        - id: cs_Q4Lt1PUWAG5yHYhZxSvPd3
          claim_id: c_62jByEhAYZ1sai8WXMxtZX
          source_id: s_XssFJUaV1o16bEzmQMFvoo
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

# 王楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楷 | accepted |
| birth.date | 1823年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楷（CBDB 71240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71240&o=json)
