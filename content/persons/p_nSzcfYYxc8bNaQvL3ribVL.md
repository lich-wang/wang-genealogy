---
schema: wang-person/v1
id: p_nSzcfYYxc8bNaQvL3ribVL
status: active
merged_into: null
display_name: 王祖蔭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m1UueG1tUmnbJH4QAPmfcu
        subject_person_id: p_nSzcfYYxc8bNaQvL3ribVL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖蔭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7BKSCbJSKzggrFNp4hZCk9
          claim_id: c_m1UueG1tUmnbJH4QAPmfcu
          source_id: s_bGApXvyJi5dL1zLLrTc3zE
          stance: supports
          locator: CBDB:71924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71924）
          source: &a1
            id: s_bGApXvyJi5dL1zLLrTc3zE
            source_type: api_record
            title: 中国历代人物传记资料库：王祖蔭（CBDB 71924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71924&o=json
            external_identifier: CBDB:71924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4v8vEvJNMJsfztm1NbdXN4
        subject_person_id: p_nSzcfYYxc8bNaQvL3ribVL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1858年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nQMjh8fnFaCMWGhaQQt6Ns
          claim_id: c_4v8vEvJNMJsfztm1NbdXN4
          source_id: s_bGApXvyJi5dL1zLLrTc3zE
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
        id: c_wyyQQF1QuoAiK8Acj95Jvz
        subject_person_id: p_nSzcfYYxc8bNaQvL3ribVL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1918年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PC15zNmBi7dK7yZUv8rH4C
          claim_id: c_wyyQQF1QuoAiK8Acj95Jvz
          source_id: s_bGApXvyJi5dL1zLLrTc3zE
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
        id: c_aWPFv7FfqyVWzZhyYXfDuQ
        subject_person_id: p_nSzcfYYxc8bNaQvL3ribVL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖蔭（1858年—1918年），中華民國人物。籍贯吳江。（中国历代人物传记资料库 CBDB 71924）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aCiyLhFIhTbMyjA7g1zTRa
          claim_id: c_aWPFv7FfqyVWzZhyYXfDuQ
          source_id: s_bGApXvyJi5dL1zLLrTc3zE
          stance: supports
          locator: CBDB:71924
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

# 王祖蔭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖蔭 | accepted |
| birth.date | 1858年 | accepted |
| death.date | 1918年 | accepted |
| bio.summary | 王祖蔭（1858年—1918年），中華民國人物。籍贯吳江。（中国历代人物传记资料库 CBDB 71924） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖蔭（CBDB 71924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71924&o=json)
