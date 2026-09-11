---
schema: wang-person/v1
id: p_QFUAghivUtX778ECWyBA61
status: active
merged_into: null
display_name: 王立德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MvJH1wo6EKe235uVdeHdLu
        subject_person_id: p_QFUAghivUtX778ECWyBA61
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VD9PAkFvmHEjAzfP2c9Dmg
          claim_id: c_MvJH1wo6EKe235uVdeHdLu
          source_id: s_1APpfj3N1obRBQMGnnHnKx
          stance: supports
          locator: CBDB:639691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639691）
          source: &a1
            id: s_1APpfj3N1obRBQMGnnHnKx
            source_type: api_record
            title: 中国历代人物传记资料库：王立德（CBDB 639691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639691&o=json
            external_identifier: CBDB:639691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FYEBF6kQKaZX7PnJ3Phz4N
        subject_person_id: p_QFUAghivUtX778ECWyBA61
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立德，清人物。籍贯宜城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639691）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__OUcxt23fm_IVYtIb3lNE3
          claim_id: c_FYEBF6kQKaZX7PnJ3Phz4N
          source_id: s_1APpfj3N1obRBQMGnnHnKx
          stance: supports
          locator: CBDB:639691
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

# 王立德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立德 | accepted |
| bio.summary | 王立德，清人物。籍贯宜城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639691） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立德（CBDB 639691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639691&o=json)
