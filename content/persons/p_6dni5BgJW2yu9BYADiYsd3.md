---
schema: wang-person/v1
id: p_6dni5BgJW2yu9BYADiYsd3
status: active
merged_into: null
display_name: 王時亨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vM4g44QCpTWBjKmcNpJtWU
        subject_person_id: p_6dni5BgJW2yu9BYADiYsd3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1TXAac3PckTvPP1LF17u6a
          claim_id: c_vM4g44QCpTWBjKmcNpJtWU
          source_id: s_ZsgQGekdDF6G6te58M4abG
          stance: supports
          locator: CBDB:69301
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69301）
          source: &a1
            id: s_ZsgQGekdDF6G6te58M4abG
            source_type: api_record
            title: 中国历代人物传记资料库：王時亨（CBDB 69301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69301&o=json
            external_identifier: CBDB:69301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9UB57VnDUTiwR7Pv677JmD
        subject_person_id: p_6dni5BgJW2yu9BYADiYsd3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時亨，清人物。籍贯衡陽，入仕官學生，曾任番營守備、守備。（中国历代人物传记资料库 CBDB 69301）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_esqp-Ff82FZct1Jst0rUiR
          claim_id: c_9UB57VnDUTiwR7Pv677JmD
          source_id: s_ZsgQGekdDF6G6te58M4abG
          stance: supports
          locator: CBDB:69301
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_POb4082OJ0km1lXPtO20X_
        subject_person_id: p_tYyHuNqg6dsrYNvifSoLVU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6dni5BgJW2yu9BYADiYsd3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_meeu3rJOtFccmiOXSgQM6a
          claim_id: c_POb4082OJ0km1lXPtO20X_
          source_id: s_ZsgQGekdDF6G6te58M4abG
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13004：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tYyHuNqg6dsrYNvifSoLVU
        status: active
        display_name: 王允法
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王時亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時亨 | accepted |
| bio.summary | 王時亨，清人物。籍贯衡陽，入仕官學生，曾任番營守備、守備。（中国历代人物传记资料库 CBDB 69301） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tYyHuNqg6dsrYNvifSoLVU | 王允法 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時亨（CBDB 69301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69301&o=json)
