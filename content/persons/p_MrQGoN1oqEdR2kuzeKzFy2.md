---
schema: wang-person/v1
id: p_MrQGoN1oqEdR2kuzeKzFy2
status: active
merged_into: null
display_name: 王溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p6ufYFpECRW7zGzAFmNWxk
        subject_person_id: p_MrQGoN1oqEdR2kuzeKzFy2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_25PtuUL3acCSRAhGrZNj3x
          claim_id: c_p6ufYFpECRW7zGzAFmNWxk
          source_id: s_nihkp4xuNtAvWrXSRPa8Ry
          stance: supports
          locator: CBDB:61504
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61504）
          source: &a1
            id: s_nihkp4xuNtAvWrXSRPa8Ry
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 61504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61504&o=json
            external_identifier: CBDB:61504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AMXQz7T5PsfMQvASH2oxW7
        subject_person_id: p_MrQGoN1oqEdR2kuzeKzFy2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1811年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dYNYB2C5YKHHPHfMxadYaW
          claim_id: c_AMXQz7T5PsfMQvASH2oxW7
          source_id: s_nihkp4xuNtAvWrXSRPa8Ry
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
        id: c_5pE99Vwv8MusuADMzzcCVs
        subject_person_id: p_MrQGoN1oqEdR2kuzeKzFy2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥（生于1811年），清人物。明清進士進士，籍贯蒲城，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 61504）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hb0wAspUV30w29zEmuMC7s
          claim_id: c_5pE99Vwv8MusuADMzzcCVs
          source_id: s_nihkp4xuNtAvWrXSRPa8Ry
          stance: supports
          locator: CBDB:61504
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| birth.date | 1811年 | accepted |
| bio.summary | 王溥（生于1811年），清人物。明清進士進士，籍贯蒲城，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 61504） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 61504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61504&o=json)
