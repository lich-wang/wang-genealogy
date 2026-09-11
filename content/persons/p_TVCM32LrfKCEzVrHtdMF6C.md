---
schema: wang-person/v1
id: p_TVCM32LrfKCEzVrHtdMF6C
status: active
merged_into: null
display_name: 王秉怡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jgCCpHnXfXXyGxfVPP22L9
        subject_person_id: p_TVCM32LrfKCEzVrHtdMF6C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉怡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a1pmFHNV5Pha78txg5bSSB
          claim_id: c_jgCCpHnXfXXyGxfVPP22L9
          source_id: s_ewNLVMtyrmLF5Ez6CcSna1
          stance: supports
          locator: CBDB:639648
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639648）
          source: &a1
            id: s_ewNLVMtyrmLF5Ez6CcSna1
            source_type: api_record
            title: 中国历代人物传记资料库：王秉怡（CBDB 639648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639648&o=json
            external_identifier: CBDB:639648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7rFdcHW1A6wzEcJceTUFCX
        subject_person_id: p_TVCM32LrfKCEzVrHtdMF6C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王秉怡，清人物。籍贯天津，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639648）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vxkyTUvk22T35yZOGQFTn6
          claim_id: c_7rFdcHW1A6wzEcJceTUFCX
          source_id: s_ewNLVMtyrmLF5Ez6CcSna1
          stance: supports
          locator: CBDB:639648
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

# 王秉怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉怡 | accepted |
| bio.summary | 王秉怡，清人物。籍贯天津，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639648） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉怡（CBDB 639648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639648&o=json)
