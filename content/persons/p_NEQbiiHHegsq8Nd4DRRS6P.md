---
schema: wang-person/v1
id: p_NEQbiiHHegsq8Nd4DRRS6P
status: active
merged_into: null
display_name: 王希賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EMirtwBFHPzbugVeDiMESU
        subject_person_id: p_NEQbiiHHegsq8Nd4DRRS6P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HgnygLHPunpjVDYwEyMoV7
          claim_id: c_EMirtwBFHPzbugVeDiMESU
          source_id: s_qGzRjjWoZM83kvHXjf4qu2
          stance: supports
          locator: CBDB:28770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28770）
          source: &a1
            id: s_qGzRjjWoZM83kvHXjf4qu2
            source_type: api_record
            title: 中国历代人物传记资料库：王希賢（CBDB 28770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28770&o=json
            external_identifier: CBDB:28770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MaT9a1GSB9wwV2iCjjENAF
        subject_person_id: p_NEQbiiHHegsq8Nd4DRRS6P
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1246年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gp2t6qm5q3B1fPXKHNNpmP
          claim_id: c_MaT9a1GSB9wwV2iCjjENAF
          source_id: s_qGzRjjWoZM83kvHXjf4qu2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dM18geDJGPKzS18ycCxjPh
        subject_person_id: p_NEQbiiHHegsq8Nd4DRRS6P
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1288年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Jc3uA3kwRCqCiQyY59vNK
          claim_id: c_dM18geDJGPKzS18ycCxjPh
          source_id: s_qGzRjjWoZM83kvHXjf4qu2
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
        id: c_AXj5YJDamjpBHZmeh4hEEc
        subject_person_id: p_NEQbiiHHegsq8Nd4DRRS6P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Soy9B3hKuLLHgFMernH6oB
          claim_id: c_AXj5YJDamjpBHZmeh4hEEc
          source_id: s_qGzRjjWoZM83kvHXjf4qu2
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

# 王希賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希賢 | accepted |
| birth.date | 1246年 | accepted |
| death.date | 1288年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希賢（CBDB 28770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28770&o=json)
