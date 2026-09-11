---
schema: wang-person/v1
id: p_BHkcH8CNsShetRZRNR9yom
status: active
merged_into: null
display_name: 王履興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VmKUzXnUEfZrg1BacuuHxh
        subject_person_id: p_BHkcH8CNsShetRZRNR9yom
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_62bD8wXr8HEZKHRCohnLBa
          claim_id: c_VmKUzXnUEfZrg1BacuuHxh
          source_id: s_CkN73db3rP7HhRG9UfDwK6
          stance: supports
          locator: CBDB:637328
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637328）
          source: &a1
            id: s_CkN73db3rP7HhRG9UfDwK6
            source_type: api_record
            title: 中国历代人物传记资料库：王履興（CBDB 637328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637328&o=json
            external_identifier: CBDB:637328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_933JBpWoqDxkpFCzXJvHPw
        subject_person_id: p_BHkcH8CNsShetRZRNR9yom
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履興，清人物。籍贯臨桂，入仕廩生，曾任經歷。（中国历代人物传记资料库 CBDB 637328）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w8ma890AsmNP453zIo6a9o
          claim_id: c_933JBpWoqDxkpFCzXJvHPw
          source_id: s_CkN73db3rP7HhRG9UfDwK6
          stance: supports
          locator: CBDB:637328
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

# 王履興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履興 | accepted |
| bio.summary | 王履興，清人物。籍贯臨桂，入仕廩生，曾任經歷。（中国历代人物传记资料库 CBDB 637328） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履興（CBDB 637328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637328&o=json)
