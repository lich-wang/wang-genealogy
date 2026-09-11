---
schema: wang-person/v1
id: p_oksF2s19YLXd87fsBknVgx
status: active
merged_into: null
display_name: 王烻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NYscWrJiZsAAgumcrmyRHW
        subject_person_id: p_oksF2s19YLXd87fsBknVgx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yDNKfQuA5tugD1kYGuf82k
          claim_id: c_NYscWrJiZsAAgumcrmyRHW
          source_id: s_KcJUEfwxYjYRHhn7Df3V8r
          stance: supports
          locator: CBDB:71171
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71171）
          source: &a1
            id: s_KcJUEfwxYjYRHhn7Df3V8r
            source_type: api_record
            title: 中国历代人物传记资料库：王烻（CBDB 71171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71171&o=json
            external_identifier: CBDB:71171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FVP7C2HRWjwowC5FUDodbK
        subject_person_id: p_oksF2s19YLXd87fsBknVgx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1763年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GKsqUAttRdnRyPLE5vTEvK
          claim_id: c_FVP7C2HRWjwowC5FUDodbK
          source_id: s_KcJUEfwxYjYRHhn7Df3V8r
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
        id: c_gasB3YCHtD7HdZ3TLPo7jP
        subject_person_id: p_oksF2s19YLXd87fsBknVgx
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
        - id: cs_Nii4csZeyjKTj2M6jNjkhZ
          claim_id: c_gasB3YCHtD7HdZ3TLPo7jP
          source_id: s_KcJUEfwxYjYRHhn7Df3V8r
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
        id: c_cahKcPRK33Ekr4NK7R34gM
        subject_person_id: p_oksF2s19YLXd87fsBknVgx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烻（1763年—1848年），清人物。籍贯高密。（中国历代人物传记资料库 CBDB 71171）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aDchQz-RHqeRkfmDF29_au
          claim_id: c_cahKcPRK33Ekr4NK7R34gM
          source_id: s_KcJUEfwxYjYRHhn7Df3V8r
          stance: supports
          locator: CBDB:71171
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

# 王烻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烻 | accepted |
| birth.date | 1763年 | accepted |
| death.date | 1848年 | accepted |
| bio.summary | 王烻（1763年—1848年），清人物。籍贯高密。（中国历代人物传记资料库 CBDB 71171） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王烻（CBDB 71171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71171&o=json)
