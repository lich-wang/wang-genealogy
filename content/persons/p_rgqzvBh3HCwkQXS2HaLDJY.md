---
schema: wang-person/v1
id: p_rgqzvBh3HCwkQXS2HaLDJY
status: active
merged_into: null
display_name: 宋氏
revision: 1
cbdb_id: 38227
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AMpqOEvyoYFaaUUnHpHFYF
        subject_person_id: p_rgqzvBh3HCwkQXS2HaLDJY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏，宋人物。曾任郡夫人。（中国历代人物传记资料库 CBDB 38227）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X7o0b_chGF8Qwa11R6VkX7
          claim_id: c_AMpqOEvyoYFaaUUnHpHFYF
          source_id: s_V6GKn7BeqAVA3hOT4KysVs
          stance: supports
          locator: CBDB:38227
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_V6GKn7BeqAVA3hOT4KysVs
            source_type: api_record
            title: 中国历代人物传记资料库：宋氏(王重瞻妻)（CBDB 38227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38227&o=json
            external_identifier: CBDB:38227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9OAdBwFCwQhcIha2aQd1HJ
        subject_person_id: p_rgqzvBh3HCwkQXS2HaLDJY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t4hB9OGVaqaFPMgW9Ci8cu
          claim_id: c_9OAdBwFCwQhcIha2aQd1HJ
          source_id: s_V6GKn7BeqAVA3hOT4KysVs
          stance: supports
          locator: CBDB:38227
          quotation: null
          interpretation_note: CBDB 明确记录的王重瞻配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_u1pMrC8UL6pi4bZRwzT35u
        subject_person_id: p_5NzUrA2mKFb4JcdEQ9g3nA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rgqzvBh3HCwkQXS2HaLDJY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ZggqolGii2QO4bGzkkrmJ
          claim_id: c_u1pMrC8UL6pi4bZRwzT35u
          source_id: s_V6GKn7BeqAVA3hOT4KysVs
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5NzUrA2mKFb4JcdEQ9g3nA
        status: active
        display_name: 王重瞻
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 宋氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 宋氏，宋人物。曾任郡夫人。（中国历代人物传记资料库 CBDB 38227） | accepted |
| name.primary | 宋氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5NzUrA2mKFb4JcdEQ9g3nA | 王重瞻 | accepted |

## 外部来源

- [中国历代人物传记资料库：宋氏(王重瞻妻)（CBDB 38227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38227&o=json)
