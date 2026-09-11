---
schema: wang-person/v1
id: p_34cS2Kr834iH2AeExpmt6V
status: active
merged_into: null
display_name: 王立道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pprzgtf74M9GdUuFJP91RQ
        subject_person_id: p_34cS2Kr834iH2AeExpmt6V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yB8z44agHdzAtgSA3ZXeD6
          claim_id: c_pprzgtf74M9GdUuFJP91RQ
          source_id: s_EL1wYAHtgSge3BAFCDBjzM
          stance: supports
          locator: CBDB:270436
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270436）
          source: &a1
            id: s_EL1wYAHtgSge3BAFCDBjzM
            source_type: api_record
            title: 中国历代人物传记资料库：王立道（CBDB 270436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270436&o=json
            external_identifier: CBDB:270436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uuMDSz1jGeFKCH8Vj7N49S
        subject_person_id: p_34cS2Kr834iH2AeExpmt6V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立道，明人物。弘治十五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 270436）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UATriFYkaHEBw4l6SgQhwn
          claim_id: c_uuMDSz1jGeFKCH8Vj7N49S
          source_id: s_EL1wYAHtgSge3BAFCDBjzM
          stance: supports
          locator: CBDB:270436
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

# 王立道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立道 | accepted |
| bio.summary | 王立道，明人物。弘治十五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 270436） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立道（CBDB 270436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270436&o=json)
