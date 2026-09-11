---
schema: wang-person/v1
id: p_4J9YJu8rjeYqar7Hg2YMUA
status: active
merged_into: null
display_name: 王梓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D4ZDnZAZcEKbegLig6VsX8
        subject_person_id: p_4J9YJu8rjeYqar7Hg2YMUA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GeQE4VqYHQtCHE32RvuA94
          claim_id: c_D4ZDnZAZcEKbegLig6VsX8
          source_id: s_fb4mBSyjRYe4DBH8ED5TN1
          stance: supports
          locator: CBDB:291889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291889）
          source: &a1
            id: s_fb4mBSyjRYe4DBH8ED5TN1
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 291889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291889&o=json
            external_identifier: CBDB:291889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9YpGi9haHuQrd1PNnDRtJQ
        subject_person_id: p_4J9YJu8rjeYqar7Hg2YMUA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梓，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291889）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zPTBJ4_Uo4LPxr0YVO02qh
          claim_id: c_9YpGi9haHuQrd1PNnDRtJQ
          source_id: s_fb4mBSyjRYe4DBH8ED5TN1
          stance: supports
          locator: CBDB:291889
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

# 王梓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梓 | accepted |
| bio.summary | 王梓，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291889） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王梓（CBDB 291889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291889&o=json)
