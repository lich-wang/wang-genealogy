---
schema: wang-person/v1
id: p_PaPStxdqVLv5zrUMnxydax
status: active
merged_into: null
display_name: 王賡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mzKM5LgYnc4GCJUo8TLrp6
        subject_person_id: p_PaPStxdqVLv5zrUMnxydax
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W4huj3NMo5oeduhwtB14Mm
          claim_id: c_mzKM5LgYnc4GCJUo8TLrp6
          source_id: s_o2HXurShFEkzC67cFJtkAx
          stance: supports
          locator: CBDB:541948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（541948）
          source: &a1
            id: s_o2HXurShFEkzC67cFJtkAx
            source_type: api_record
            title: 中国历代人物传记资料库：王賡（CBDB 541948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541948&o=json
            external_identifier: CBDB:541948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.463Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d5zU6pPUHw52qDnJoR48FK
        subject_person_id: p_PaPStxdqVLv5zrUMnxydax
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡，宋人物。籍贯長興，入仕進士。（中国历代人物传记资料库 CBDB 541948）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SSnH7WgY-hwbzTzi4KSs0y
          claim_id: c_d5zU6pPUHw52qDnJoR48FK
          source_id: s_o2HXurShFEkzC67cFJtkAx
          stance: supports
          locator: CBDB:541948
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

# 王賡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賡 | accepted |
| bio.summary | 王賡，宋人物。籍贯長興，入仕進士。（中国历代人物传记资料库 CBDB 541948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賡（CBDB 541948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541948&o=json)
