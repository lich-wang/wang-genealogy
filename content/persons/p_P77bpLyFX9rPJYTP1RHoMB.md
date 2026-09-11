---
schema: wang-person/v1
id: p_P77bpLyFX9rPJYTP1RHoMB
status: active
merged_into: null
display_name: 王稷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2tB8vv1G7W8ZCQeksG7aym
        subject_person_id: p_P77bpLyFX9rPJYTP1RHoMB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XoX8bATtqTNwT8PEPcu6si
          claim_id: c_2tB8vv1G7W8ZCQeksG7aym
          source_id: s_xc2BwCwKTey2TNjZ11h9xu
          stance: supports
          locator: CBDB:37831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37831）
          source: &a1
            id: s_xc2BwCwKTey2TNjZ11h9xu
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 37831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37831&o=json
            external_identifier: CBDB:37831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SBCKdwL4mno4XgzoqUd25X
        subject_person_id: p_P77bpLyFX9rPJYTP1RHoMB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷，宋人物。入仕進士，曾任殿中省尚乘奉御、太常寺博士、通判。（中国历代人物传记资料库 CBDB 37831）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HbQ0ibyvBncOwzErNvh2NW
          claim_id: c_SBCKdwL4mno4XgzoqUd25X
          source_id: s_xc2BwCwKTey2TNjZ11h9xu
          stance: supports
          locator: CBDB:37831
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

# 王稷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稷 | accepted |
| bio.summary | 王稷，宋人物。入仕進士，曾任殿中省尚乘奉御、太常寺博士、通判。（中国历代人物传记资料库 CBDB 37831） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王稷（CBDB 37831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37831&o=json)
