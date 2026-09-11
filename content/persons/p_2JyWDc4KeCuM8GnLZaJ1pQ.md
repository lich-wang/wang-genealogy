---
schema: wang-person/v1
id: p_2JyWDc4KeCuM8GnLZaJ1pQ
status: active
merged_into: null
display_name: 王雲卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X4o3DVZD4U16zMGXSgcPpG
        subject_person_id: p_2JyWDc4KeCuM8GnLZaJ1pQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AR1wb5NEeBLMweaVcspK44
          claim_id: c_X4o3DVZD4U16zMGXSgcPpG
          source_id: s_4H3BrrHa6QwDd49MvfwtQx
          stance: supports
          locator: CBDB:640803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640803）
          source: &a1
            id: s_4H3BrrHa6QwDd49MvfwtQx
            source_type: api_record
            title: 中国历代人物传记资料库：王雲卿（CBDB 640803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640803&o=json
            external_identifier: CBDB:640803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7N8Zu8EAHqUPwfj3c787H7
        subject_person_id: p_2JyWDc4KeCuM8GnLZaJ1pQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲卿，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640803）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PcnejMHXs6KJcVQ0hw6fC7
          claim_id: c_7N8Zu8EAHqUPwfj3c787H7
          source_id: s_4H3BrrHa6QwDd49MvfwtQx
          stance: supports
          locator: CBDB:640803
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

# 王雲卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲卿 | accepted |
| bio.summary | 王雲卿，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640803） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲卿（CBDB 640803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640803&o=json)
