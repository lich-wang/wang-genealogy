---
schema: wang-person/v1
id: p_95azWL34xuE2WnVFL377mv
status: active
merged_into: null
display_name: 王福咸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kv715ZUqBCAd2mEFEmDBHJ
        subject_person_id: p_95azWL34xuE2WnVFL377mv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福咸
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bJP9pEHV8jnHQ8JtqMDD5W
          claim_id: c_Kv715ZUqBCAd2mEFEmDBHJ
          source_id: s_4ACQGCLLzEbV83Tswnz2hY
          stance: supports
          locator: CBDB:639602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639602）
          source: &a1
            id: s_4ACQGCLLzEbV83Tswnz2hY
            source_type: api_record
            title: 中国历代人物传记资料库：王福咸（CBDB 639602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639602&o=json
            external_identifier: CBDB:639602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_am8sFFAdz5cave2z2LPLaS
        subject_person_id: p_95azWL34xuE2WnVFL377mv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福咸，清人物。籍贯會稽，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639602）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o6Tck5A29U9Y8-afGG9wre
          claim_id: c_am8sFFAdz5cave2z2LPLaS
          source_id: s_4ACQGCLLzEbV83Tswnz2hY
          stance: supports
          locator: CBDB:639602
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

# 王福咸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福咸 | accepted |
| bio.summary | 王福咸，清人物。籍贯會稽，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639602） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福咸（CBDB 639602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639602&o=json)
