---
schema: wang-person/v1
id: p_ET5yp25WCEv7fDBLm99G68
status: active
merged_into: null
display_name: 王孝義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KueeAKCQxyiMJ3X5ojNDgy
        subject_person_id: p_ET5yp25WCEv7fDBLm99G68
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mawLZBPQujsg2ykhkHPPnD
          claim_id: c_KueeAKCQxyiMJ3X5ojNDgy
          source_id: s_SXaLQRSvAqkEr74eXseoni
          stance: supports
          locator: CBDB:139265
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139265）
          source: &a1
            id: s_SXaLQRSvAqkEr74eXseoni
            source_type: api_record
            title: 中国历代人物传记资料库：王孝義（CBDB 139265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139265&o=json
            external_identifier: CBDB:139265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.400Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_x1SVKHyr58FM53GLTgCVE4
        subject_person_id: p_ET5yp25WCEv7fDBLm99G68
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 596年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TQFHS1Xx9fJHwfPPp3jWV7
          claim_id: c_x1SVKHyr58FM53GLTgCVE4
          source_id: s_SXaLQRSvAqkEr74eXseoni
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
        id: c_XXD9tEbpXP2Ls4pr1aYWHG
        subject_person_id: p_ET5yp25WCEv7fDBLm99G68
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 661年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kUA62MauN6R7oEGb2bFmyv
          claim_id: c_XXD9tEbpXP2Ls4pr1aYWHG
          source_id: s_SXaLQRSvAqkEr74eXseoni
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
        id: c_PEkNBM3gCzCzD1EaNsCagX
        subject_person_id: p_ET5yp25WCEv7fDBLm99G68
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6H4vxr5JT9mTcvDGJ65YqX
          claim_id: c_PEkNBM3gCzCzD1EaNsCagX
          source_id: s_SXaLQRSvAqkEr74eXseoni
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

# 王孝義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝義 | accepted |
| birth.date | 596年 | accepted |
| death.date | 661年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孝義（CBDB 139265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139265&o=json)
