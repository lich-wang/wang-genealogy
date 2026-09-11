---
schema: wang-person/v1
id: p_6GPibSWqSadcVPqqgedzDJ
status: active
merged_into: null
display_name: 王肇濂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wHNdByaMA4gvwhEEQwEW65
        subject_person_id: p_6GPibSWqSadcVPqqgedzDJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇濂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QahF5nfwFR93Jn9adwen3G
          claim_id: c_wHNdByaMA4gvwhEEQwEW65
          source_id: s_R7pGfMHWjt6FotNUVpVcBs
          stance: supports
          locator: CBDB:639978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639978）
          source: &a1
            id: s_R7pGfMHWjt6FotNUVpVcBs
            source_type: api_record
            title: 中国历代人物传记资料库：王肇濂（CBDB 639978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639978&o=json
            external_identifier: CBDB:639978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.109Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CMWC6pwPimReAez2t9onrX
        subject_person_id: p_6GPibSWqSadcVPqqgedzDJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇濂，清人物。籍贯定州直隸州直轄地方，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 639978）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zqqWz5siXnYyWXzJ8gKKFV
          claim_id: c_CMWC6pwPimReAez2t9onrX
          source_id: s_R7pGfMHWjt6FotNUVpVcBs
          stance: supports
          locator: CBDB:639978
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

# 王肇濂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇濂 | accepted |
| bio.summary | 王肇濂，清人物。籍贯定州直隸州直轄地方，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 639978） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肇濂（CBDB 639978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639978&o=json)
