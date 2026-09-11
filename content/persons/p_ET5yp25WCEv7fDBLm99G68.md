---
schema: wang-person/v1
id: p_ET5yp25WCEv7fDBLm99G68
status: active
merged_into: null
display_name: 王孝義
revision: 2
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
          text: 王孝義（596年—661年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 139265）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I3d86N7S5s437-O1KpIPJ-
          claim_id: c_PEkNBM3gCzCzD1EaNsCagX
          source_id: s_SXaLQRSvAqkEr74eXseoni
          stance: supports
          locator: CBDB:139265
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WVYU7SJ6HvoNQwzAn_Tngm
        subject_person_id: p_DzgTTQ58YXxHHaXQiyE27g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ET5yp25WCEv7fDBLm99G68
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZClM_QHKHas7a-p9Qrhxbu
          claim_id: c_WVYU7SJ6HvoNQwzAn_Tngm
          source_id: s_DkBQGhSXfs1AZ9ZMtQK4yr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 28：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DkBQGhSXfs1AZ9ZMtQK4yr
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 147766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147766&o=json
            external_identifier: CBDB:147766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DzgTTQ58YXxHHaXQiyE27g
        status: active
        display_name: 王相
        merged_into_person_id: null
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
| bio.summary | 王孝義（596年—661年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 139265） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DzgTTQ58YXxHHaXQiyE27g | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 147766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147766&o=json)
- [中国历代人物传记资料库：王孝義（CBDB 139265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139265&o=json)
