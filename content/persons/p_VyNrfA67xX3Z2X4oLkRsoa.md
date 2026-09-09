---
schema: wang-person/v1
id: p_VyNrfA67xX3Z2X4oLkRsoa
status: active
merged_into: null
display_name: 王友詢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XJohYNiLSaWBX98uRwQwGj
        subject_person_id: p_VyNrfA67xX3Z2X4oLkRsoa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友詢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jef3whYEprLNPn7FHq6LTp
          claim_id: c_XJohYNiLSaWBX98uRwQwGj
          source_id: s_LCP2xwcYGS9QPf53or8tve
          stance: supports
          locator: CBDB:59938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（59938）
          source: &a1
            id: s_LCP2xwcYGS9QPf53or8tve
            source_type: api_record
            title: 中国历代人物传记资料库：王友詢（CBDB 59938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59938&o=json
            external_identifier: CBDB:59938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8RoMZ3drSGMXmeG7xjbXAf
        subject_person_id: p_VyNrfA67xX3Z2X4oLkRsoa
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1743年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bxSgXE9ARXpq6dBMZY43yM
          claim_id: c_8RoMZ3drSGMXmeG7xjbXAf
          source_id: s_LCP2xwcYGS9QPf53or8tve
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oRi9CWGS8SQTf1ukEVqZh9
        subject_person_id: p_VyNrfA67xX3Z2X4oLkRsoa
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
        - id: cs_WCRD9R1qiKDv9vc4q9EUr9
          claim_id: c_oRi9CWGS8SQTf1ukEVqZh9
          source_id: s_LCP2xwcYGS9QPf53or8tve
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

# 王友詢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友詢 | accepted |
| death.date | 1743年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友詢（CBDB 59938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59938&o=json)
