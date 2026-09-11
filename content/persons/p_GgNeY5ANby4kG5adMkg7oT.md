---
schema: wang-person/v1
id: p_GgNeY5ANby4kG5adMkg7oT
status: active
merged_into: null
display_name: 王舉易
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VnA6Y4aNHjkE5HhbLwQbXK
        subject_person_id: p_GgNeY5ANby4kG5adMkg7oT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉易
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FWJX49683HvnBz6mCKfmHW
          claim_id: c_VnA6Y4aNHjkE5HhbLwQbXK
          source_id: s_dowiocKzoMiCh1Pg89khmr
          stance: supports
          locator: CBDB:640044
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640044）
          source: &a1
            id: s_dowiocKzoMiCh1Pg89khmr
            source_type: api_record
            title: 中国历代人物传记资料库：王舉易（CBDB 640044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640044&o=json
            external_identifier: CBDB:640044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JX9TjBpYsGiv5nm7MLBLaA
        subject_person_id: p_GgNeY5ANby4kG5adMkg7oT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉易，清人物。籍贯揚州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640044）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LOv_zybV2oKUvR7jOTtWs9
          claim_id: c_JX9TjBpYsGiv5nm7MLBLaA
          source_id: s_dowiocKzoMiCh1Pg89khmr
          stance: supports
          locator: CBDB:640044
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

# 王舉易

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉易 | accepted |
| bio.summary | 王舉易，清人物。籍贯揚州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640044） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舉易（CBDB 640044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640044&o=json)
