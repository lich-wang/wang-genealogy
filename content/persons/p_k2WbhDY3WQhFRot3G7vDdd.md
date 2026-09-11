---
schema: wang-person/v1
id: p_k2WbhDY3WQhFRot3G7vDdd
status: active
merged_into: null
display_name: 王之翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DwTVnXsK9SAsroqm2oBCVP
        subject_person_id: p_k2WbhDY3WQhFRot3G7vDdd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aNxEgSU2FQYMYt3XuhxhQd
          claim_id: c_DwTVnXsK9SAsroqm2oBCVP
          source_id: s_gnt2Z537YmKfLmCVGxtCPo
          stance: supports
          locator: CBDB:71359
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71359）
          source: &a1
            id: s_gnt2Z537YmKfLmCVGxtCPo
            source_type: api_record
            title: 中国历代人物传记资料库：王之翰（CBDB 71359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71359&o=json
            external_identifier: CBDB:71359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.617Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yta7hmaUpKBZ91WJt2JBt1
        subject_person_id: p_k2WbhDY3WQhFRot3G7vDdd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1817年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hzec51dvdz7E7HHs46dSGQ
          claim_id: c_yta7hmaUpKBZ91WJt2JBt1
          source_id: s_gnt2Z537YmKfLmCVGxtCPo
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
        id: c_oD91q49UwrNRqV9m15QMPb
        subject_person_id: p_k2WbhDY3WQhFRot3G7vDdd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1848年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dajGbULt5H49hwdF3cspej
          claim_id: c_oD91q49UwrNRqV9m15QMPb
          source_id: s_gnt2Z537YmKfLmCVGxtCPo
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
        id: c_R8JeJZSBGQbPcUt7u5xNjM
        subject_person_id: p_k2WbhDY3WQhFRot3G7vDdd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰（1817年—1848年），清人物。籍贯吳縣。（中国历代人物传记资料库 CBDB 71359）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WpEbviW9LsxqOJ_66JCQEt
          claim_id: c_R8JeJZSBGQbPcUt7u5xNjM
          source_id: s_gnt2Z537YmKfLmCVGxtCPo
          stance: supports
          locator: CBDB:71359
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

# 王之翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之翰 | accepted |
| birth.date | 1817年 | accepted |
| death.date | 1848年 | accepted |
| bio.summary | 王之翰（1817年—1848年），清人物。籍贯吳縣。（中国历代人物传记资料库 CBDB 71359） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之翰（CBDB 71359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71359&o=json)
