---
schema: wang-person/v1
id: p_qio2aFqC4Qx54wXS7Swsaa
status: active
merged_into: null
display_name: 王曰俞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_22AdYB8vGGrdTYSiUrt2Nq
        subject_person_id: p_qio2aFqC4Qx54wXS7Swsaa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰俞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KwcKJ9SLshhyQNQdJP8xrR
          claim_id: c_22AdYB8vGGrdTYSiUrt2Nq
          source_id: s_9bqCGPjEbmpDHWaNku52BA
          stance: supports
          locator: CBDB:71397
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71397）
          source: &a1
            id: s_9bqCGPjEbmpDHWaNku52BA
            source_type: api_record
            title: 中国历代人物传记资料库：王曰俞（CBDB 71397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71397&o=json
            external_identifier: CBDB:71397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BSxdgngJyzrNbXau6qXF6C
        subject_person_id: p_qio2aFqC4Qx54wXS7Swsaa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1610年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kJULgT6eKD8CNtF58AM596
          claim_id: c_BSxdgngJyzrNbXau6qXF6C
          source_id: s_9bqCGPjEbmpDHWaNku52BA
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
        id: c_34bwwyBvkKFR3ta2aaFjhz
        subject_person_id: p_qio2aFqC4Qx54wXS7Swsaa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰俞（生于1610年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71397）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V0yoyCZqD8Ww-5g31j0URN
          claim_id: c_34bwwyBvkKFR3ta2aaFjhz
          source_id: s_9bqCGPjEbmpDHWaNku52BA
          stance: supports
          locator: CBDB:71397
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

# 王曰俞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曰俞 | accepted |
| birth.date | 1610年 | accepted |
| bio.summary | 王曰俞（生于1610年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71397） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曰俞（CBDB 71397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71397&o=json)
