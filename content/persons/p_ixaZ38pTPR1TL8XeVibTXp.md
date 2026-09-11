---
schema: wang-person/v1
id: p_ixaZ38pTPR1TL8XeVibTXp
status: active
merged_into: null
display_name: 王琛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gusNbzh6U5QEXQ7vX4rFwe
        subject_person_id: p_ixaZ38pTPR1TL8XeVibTXp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bw5hHzsaVLFL5cTHmQuCQs
          claim_id: c_gusNbzh6U5QEXQ7vX4rFwe
          source_id: s_xBhXa7KPDNSWW5wEGL2YuW
          stance: supports
          locator: CBDB:342034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342034）
          source: &a1
            id: s_xBhXa7KPDNSWW5wEGL2YuW
            source_type: api_record
            title: 中国历代人物传记资料库：王琛（CBDB 342034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342034&o=json
            external_identifier: CBDB:342034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_weF3YKyJvmAmuGzBujDeTk
        subject_person_id: p_ixaZ38pTPR1TL8XeVibTXp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛，清人物。明清進士進士，籍贯鹿邑，入仕進士。（中国历代人物传记资料库 CBDB 342034）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_03FbejdmQzuakGaa5MNcPs
          claim_id: c_weF3YKyJvmAmuGzBujDeTk
          source_id: s_xBhXa7KPDNSWW5wEGL2YuW
          stance: supports
          locator: CBDB:342034
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

# 王琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琛 | accepted |
| bio.summary | 王琛，清人物。明清進士進士，籍贯鹿邑，入仕進士。（中国历代人物传记资料库 CBDB 342034） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琛（CBDB 342034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342034&o=json)
