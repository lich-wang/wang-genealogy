---
schema: wang-person/v1
id: p_QMUkR4EMZEbMv85nyYBo5R
status: active
merged_into: null
display_name: 王者民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vxwJj25p3esbKz8g6sguf8
        subject_person_id: p_QMUkR4EMZEbMv85nyYBo5R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2gzLFr44MAb7zkgFERFP6e
          claim_id: c_vxwJj25p3esbKz8g6sguf8
          source_id: s_XNKMC4aA2ELb2xCLo2zeRK
          stance: supports
          locator: CBDB:701392
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701392）
          source: &a1
            id: s_XNKMC4aA2ELb2xCLo2zeRK
            source_type: api_record
            title: 中国历代人物传记资料库：王者民（CBDB 701392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701392&o=json
            external_identifier: CBDB:701392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1fc77DF1Pq28VKK633Qi6D
        subject_person_id: p_QMUkR4EMZEbMv85nyYBo5R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者民，清人物。籍贯平陰，身份为鄉里長者、為善鄉里。（中国历代人物传记资料库 CBDB 701392）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3JEE0G5ZgTcVze_ZZrzm9i
          claim_id: c_1fc77DF1Pq28VKK633Qi6D
          source_id: s_XNKMC4aA2ELb2xCLo2zeRK
          stance: supports
          locator: CBDB:701392
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

# 王者民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王者民 | accepted |
| bio.summary | 王者民，清人物。籍贯平陰，身份为鄉里長者、為善鄉里。（中国历代人物传记资料库 CBDB 701392） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王者民（CBDB 701392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701392&o=json)
