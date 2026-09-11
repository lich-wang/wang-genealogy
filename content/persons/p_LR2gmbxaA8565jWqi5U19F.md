---
schema: wang-person/v1
id: p_LR2gmbxaA8565jWqi5U19F
status: active
merged_into: null
display_name: 王至諴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rxi8NPtszVmj5CuUDcgeVk
        subject_person_id: p_LR2gmbxaA8565jWqi5U19F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至諴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FzVKPNL8ngNwqhW3wWdnHx
          claim_id: c_Rxi8NPtszVmj5CuUDcgeVk
          source_id: s_EtUWDmAYd17FXPCR3F7Lg3
          stance: supports
          locator: CBDB:561563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561563）
          source: &a1
            id: s_EtUWDmAYd17FXPCR3F7Lg3
            source_type: api_record
            title: 中国历代人物传记资料库：王至諴（CBDB 561563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561563&o=json
            external_identifier: CBDB:561563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oDFXxoBHKs9PPpyGKbeQGF
        subject_person_id: p_LR2gmbxaA8565jWqi5U19F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王至諴，清人物。入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 561563）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zHgg-ZKkWy3K4M6xg1BIqI
          claim_id: c_oDFXxoBHKs9PPpyGKbeQGF
          source_id: s_EtUWDmAYd17FXPCR3F7Lg3
          stance: supports
          locator: CBDB:561563
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

# 王至諴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王至諴 | accepted |
| bio.summary | 王至諴，清人物。入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 561563） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王至諴（CBDB 561563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561563&o=json)
