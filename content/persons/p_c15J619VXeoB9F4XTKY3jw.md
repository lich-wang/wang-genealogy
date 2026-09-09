---
schema: wang-person/v1
id: p_c15J619VXeoB9F4XTKY3jw
status: active
merged_into: null
display_name: 王賚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p7nAqHSDDmMVCWFny1TJgW
        subject_person_id: p_c15J619VXeoB9F4XTKY3jw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L9p6ArdPHBAdy7SZJDgL8w
          claim_id: c_p7nAqHSDDmMVCWFny1TJgW
          source_id: s_ieujQDTbEjbC6yHopreGLC
          stance: supports
          locator: CBDB:71187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71187）
          source: &a1
            id: s_ieujQDTbEjbC6yHopreGLC
            source_type: api_record
            title: 中国历代人物传记资料库：王賚（CBDB 71187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71187&o=json
            external_identifier: CBDB:71187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_emPpqg1ApX6hLYGmNn4P89
        subject_person_id: p_c15J619VXeoB9F4XTKY3jw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1661年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GPJCEukN8yGfnVheLYoArH
          claim_id: c_emPpqg1ApX6hLYGmNn4P89
          source_id: s_ieujQDTbEjbC6yHopreGLC
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
        id: c_sXT4TbWftRBfJcBa2MKegH
        subject_person_id: p_c15J619VXeoB9F4XTKY3jw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1721年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PAxHSrLri3yqDRc17Hnq9E
          claim_id: c_sXT4TbWftRBfJcBa2MKegH
          source_id: s_ieujQDTbEjbC6yHopreGLC
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
        id: c_a1Nxn4mvucPuAPVVMaDdqb
        subject_person_id: p_c15J619VXeoB9F4XTKY3jw
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
        - id: cs_1mpamCudmdPYa68L3SdzPs
          claim_id: c_a1Nxn4mvucPuAPVVMaDdqb
          source_id: s_ieujQDTbEjbC6yHopreGLC
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

# 王賚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賚 | accepted |
| birth.date | 1661年 | accepted |
| death.date | 1721年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賚（CBDB 71187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71187&o=json)
