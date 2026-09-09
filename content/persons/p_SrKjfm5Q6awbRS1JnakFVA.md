---
schema: wang-person/v1
id: p_SrKjfm5Q6awbRS1JnakFVA
status: active
merged_into: null
display_name: 王希洪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q6Agsqzd2B7NdLAwDPQpDK
        subject_person_id: p_SrKjfm5Q6awbRS1JnakFVA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YhjgJBWhYiaNd3FTUukAHF
          claim_id: c_q6Agsqzd2B7NdLAwDPQpDK
          source_id: s_ww9U5Dcs8Ktf5SmCwVia31
          stance: supports
          locator: CBDB:71685
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71685）
          source: &a1
            id: s_ww9U5Dcs8Ktf5SmCwVia31
            source_type: api_record
            title: 中国历代人物传记资料库：王希洪（CBDB 71685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71685&o=json
            external_identifier: CBDB:71685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KedWkpgTKKDKZ8AZjAn4XH
        subject_person_id: p_SrKjfm5Q6awbRS1JnakFVA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1681年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FFF37kA3cxx5Q4Cy19QCyq
          claim_id: c_KedWkpgTKKDKZ8AZjAn4XH
          source_id: s_ww9U5Dcs8Ktf5SmCwVia31
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
        id: c_SVLPeee29kreav5aMDxv1a
        subject_person_id: p_SrKjfm5Q6awbRS1JnakFVA
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
        - id: cs_3DZgj8xXNGauQ6hh2Ez27H
          claim_id: c_SVLPeee29kreav5aMDxv1a
          source_id: s_ww9U5Dcs8Ktf5SmCwVia31
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

# 王希洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希洪 | accepted |
| birth.date | 1681年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希洪（CBDB 71685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71685&o=json)
