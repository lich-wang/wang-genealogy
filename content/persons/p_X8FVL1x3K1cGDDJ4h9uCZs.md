---
schema: wang-person/v1
id: p_X8FVL1x3K1cGDDJ4h9uCZs
status: active
merged_into: null
display_name: 王湖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cb2nX7Po8tdpiT33YCdA2S
        subject_person_id: p_X8FVL1x3K1cGDDJ4h9uCZs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ey2R2tdw7MLAUfc3GqXR13
          claim_id: c_Cb2nX7Po8tdpiT33YCdA2S
          source_id: s_8F3WQTM2hLmq2A5JNmat3z
          stance: supports
          locator: CBDB:265673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265673）
          source: &a1
            id: s_8F3WQTM2hLmq2A5JNmat3z
            source_type: api_record
            title: 中国历代人物传记资料库：王湖（CBDB 265673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265673&o=json
            external_identifier: CBDB:265673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fH8ZMWoPVhX77Z3ndET1FG
        subject_person_id: p_X8FVL1x3K1cGDDJ4h9uCZs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湖，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265673）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mK0AuBiySyYYHWHJaR7Tas
          claim_id: c_fH8ZMWoPVhX77Z3ndET1FG
          source_id: s_8F3WQTM2hLmq2A5JNmat3z
          stance: supports
          locator: CBDB:265673
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

# 王湖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湖 | accepted |
| bio.summary | 王湖，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265673） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王湖（CBDB 265673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265673&o=json)
