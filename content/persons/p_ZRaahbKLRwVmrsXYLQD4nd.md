---
schema: wang-person/v1
id: p_ZRaahbKLRwVmrsXYLQD4nd
status: active
merged_into: null
display_name: 王素行
cbdb_id: 440781
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LG9Q87bhVkW9kzNg2KGYwZ
        subject_person_id: p_ZRaahbKLRwVmrsXYLQD4nd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素行，清人物。籍贯秀水，入仕邑庠生。（中国历代人物传记资料库 CBDB 440781）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_BshDmZGVQspswqHW0c4lDs
          claim_id: c_LG9Q87bhVkW9kzNg2KGYwZ
          source_id: s_5b1koosG91zB6XFDEA82Zz
          stance: supports
          locator: CBDB:440781
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5b1koosG91zB6XFDEA82Zz
            source_type: api_record
            title: 中国历代人物传记资料库：王素行（CBDB 440781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=440781&o=json
            external_identifier: CBDB:440781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:12.805Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_E74TYuDihtvDgGxHYkANsM
        subject_person_id: p_ZRaahbKLRwVmrsXYLQD4nd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FELVY8wz9F3vQZDAVb31L5
          claim_id: c_E74TYuDihtvDgGxHYkANsM
          source_id: s_5b1koosG91zB6XFDEA82Zz
          stance: supports
          locator: CBDB:440781
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6501-6600）｜历史性依据：CBDB 朝代 = 清
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

# 王素行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王素行，清人物。籍贯秀水，入仕邑庠生。（中国历代人物传记资料库 CBDB 440781） | accepted |
| name.primary | 王素行 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王素行（CBDB 440781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=440781&o=json)
