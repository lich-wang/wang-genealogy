---
schema: wang-person/v1
id: p_gNfAE8WixauYiSZxBGB5Y9
status: active
merged_into: null
display_name: 王癸初
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q8URc2u9ZeCK3BDu2EC5gV
        subject_person_id: p_gNfAE8WixauYiSZxBGB5Y9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王癸初
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gSJv8LvQQVUMqPYoN8uK3i
          claim_id: c_q8URc2u9ZeCK3BDu2EC5gV
          source_id: s_YigQdaeYpr7sPfaAjPBvWm
          stance: supports
          locator: CBDB:639494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639494）
          source: &a1
            id: s_YigQdaeYpr7sPfaAjPBvWm
            source_type: api_record
            title: 中国历代人物传记资料库：王癸初（CBDB 639494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639494&o=json
            external_identifier: CBDB:639494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TKE7HPx4xkdQiiFKG16eNP
        subject_person_id: p_gNfAE8WixauYiSZxBGB5Y9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王癸初，清人物。籍贯清河，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任商虞通判。（中国历代人物传记资料库 CBDB 639494）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3V70_Kb1dK2OPmLeMU53Wn
          claim_id: c_TKE7HPx4xkdQiiFKG16eNP
          source_id: s_YigQdaeYpr7sPfaAjPBvWm
          stance: supports
          locator: CBDB:639494
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

# 王癸初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王癸初 | accepted |
| bio.summary | 王癸初，清人物。籍贯清河，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任商虞通判。（中国历代人物传记资料库 CBDB 639494） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王癸初（CBDB 639494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639494&o=json)
