---
schema: wang-person/v1
id: p_CiWGsWbwNL3a6sTsPbVUBB
status: active
merged_into: null
display_name: 王英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wynnuWeyFRn8yW1QMRVBo9
        subject_person_id: p_CiWGsWbwNL3a6sTsPbVUBB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JbzPjGtY8tW3yk9X8Qq6mj
          claim_id: c_wynnuWeyFRn8yW1QMRVBo9
          source_id: s_n5j9GN7qxnWk8SpusWDAqi
          stance: supports
          locator: CBDB:66846
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66846）
          source: &a1
            id: s_n5j9GN7qxnWk8SpusWDAqi
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 66846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66846&o=json
            external_identifier: CBDB:66846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QCF4B4BHRPh7Q3KFT562bN
        subject_person_id: p_CiWGsWbwNL3a6sTsPbVUBB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1405年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mj1mbcN6qbAyVBUzWQ543C
          claim_id: c_QCF4B4BHRPh7Q3KFT562bN
          source_id: s_n5j9GN7qxnWk8SpusWDAqi
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
        id: c_nh8fg6srPxKgdbiFCZc3jH
        subject_person_id: p_CiWGsWbwNL3a6sTsPbVUBB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英（卒于1405年），明人物。籍贯合肥，曾任都司、後軍都督僉事。（中国历代人物传记资料库 CBDB 66846）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mSBXnSIciHu1oB9WRCW4Fc
          claim_id: c_nh8fg6srPxKgdbiFCZc3jH
          source_id: s_n5j9GN7qxnWk8SpusWDAqi
          stance: supports
          locator: CBDB:66846
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

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| death.date | 1405年 | accepted |
| bio.summary | 王英（卒于1405年），明人物。籍贯合肥，曾任都司、後軍都督僉事。（中国历代人物传记资料库 CBDB 66846） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 66846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66846&o=json)
