---
schema: wang-person/v1
id: p_HaL4h6H4qc6bbJn11kXTsA
status: active
merged_into: null
display_name: 王氏
revision: 1
cbdb_id: 558024
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ikS8GbwuOlY11rxRpXvFKw
        subject_person_id: p_HaL4h6H4qc6bbJn11kXTsA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_efO7wwj-K4DuZ52NDdvzB2
          claim_id: c_ikS8GbwuOlY11rxRpXvFKw
          source_id: s_DrexdcOcU-lS62ETJt6XeV
          stance: supports
          locator: CBDB:558024
          quotation: null
          interpretation_note: CBDB 明确记录的王畿配偶
          source: &a1
            id: s_DrexdcOcU-lS62ETJt6XeV
            source_type: api_record
            title: 中国历代人物传记资料库：王氏(王畿繼妻)（CBDB 558024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558024&o=json
            external_identifier: CBDB:558024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NYQF6NwiRs9UHA1xzUtmuK
        subject_person_id: p_Jn53PUC4WzDdDS3X6Uad53
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HaL4h6H4qc6bbJn11kXTsA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aL_I6a8Twtn4zVwm7V8tuW
          claim_id: c_NYQF6NwiRs9UHA1xzUtmuK
          source_id: s_DrexdcOcU-lS62ETJt6XeV
          stance: supports
          locator: 南陽府志，lgid=878819：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Jn53PUC4WzDdDS3X6Uad53
        status: active
        display_name: 王畿
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Jn53PUC4WzDdDS3X6Uad53 | 王畿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王氏(王畿繼妻)（CBDB 558024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558024&o=json)
