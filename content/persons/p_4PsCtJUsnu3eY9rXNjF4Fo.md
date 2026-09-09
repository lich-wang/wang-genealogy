---
schema: wang-person/v1
id: p_4PsCtJUsnu3eY9rXNjF4Fo
status: active
merged_into: null
display_name: 王廷相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K9ZsBAspGYU3DY1WQ9aGbq
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UnshGP2pj3KfTv2kKyKpBy
          claim_id: c_K9ZsBAspGYU3DY1WQ9aGbq
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: CBDB:68246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68246）
          source: &a1
            id: s_rMiKQdLixLiHHyQLAuXGgm
            source_type: api_record
            title: 中国历代人物传记资料库：王廷相（CBDB 68246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68246&o=json
            external_identifier: CBDB:68246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wsBGs2NaQoAheVQznGdsgL
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1474年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_86ZCVGL15Hex75Ygkj2sJ6
          claim_id: c_wsBGs2NaQoAheVQznGdsgL
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
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
        id: c_AktAj2kMJKMrUfcrB4X45u
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1544年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4JJLovLVDAM5PFRzZLzPfZ
          claim_id: c_AktAj2kMJKMrUfcrB4X45u
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
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
        id: c_T2ZKA3PnQq4vEsouF764Fb
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z4CSB3KGMpCVK2ccC2Yk6W
          claim_id: c_T2ZKA3PnQq4vEsouF764Fb
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
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

# 王廷相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷相 | accepted |
| birth.date | 1474年 | accepted |
| death.date | 1544年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷相（CBDB 68246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68246&o=json)
