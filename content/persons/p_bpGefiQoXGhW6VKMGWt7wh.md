---
schema: wang-person/v1
id: p_bpGefiQoXGhW6VKMGWt7wh
status: merged
merged_into: p_kSaLSFJv26CRusQkp6QMsj
display_name: 王恂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8uDzS9iNi3zGLg73QwsJpB
        subject_person_id: p_bpGefiQoXGhW6VKMGWt7wh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eBN3FHfwjRLFV99ty3h4Ls
          claim_id: c_8uDzS9iNi3zGLg73QwsJpB
          source_id: s_Zb4mRab4NepU97jjB7NMFH
          stance: supports
          locator: CBDB:100722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100722）
          source: &a1
            id: s_Zb4mRab4NepU97jjB7NMFH
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 100722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100722&o=json
            external_identifier: CBDB:100722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.393Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wxzq6usziedRYGtkrpUFSd
        subject_person_id: p_bpGefiQoXGhW6VKMGWt7wh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1235年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uER3CzqW54tgYtY3qiMY2M
          claim_id: c_wxzq6usziedRYGtkrpUFSd
          source_id: s_Zb4mRab4NepU97jjB7NMFH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9HKZ2SyVfGoJd9ZvxZoFmQ
        subject_person_id: p_bpGefiQoXGhW6VKMGWt7wh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1281年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jqLmFx1LwgpG4ASy3rEJpG
          claim_id: c_9HKZ2SyVfGoJd9ZvxZoFmQ
          source_id: s_Zb4mRab4NepU97jjB7NMFH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uQyTic2SBYabpqiGMSh3eo
        subject_person_id: p_bpGefiQoXGhW6VKMGWt7wh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂（1235年—1281年），元人物。籍贯唐縣，身份为曆算家，曾任太史令、太子贊善。（中国历代人物传记资料库 CBDB 100722）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TYVvTLShNRDl0e6F9djFny
          claim_id: c_uQyTic2SBYabpqiGMSh3eo
          source_id: s_Zb4mRab4NepU97jjB7NMFH
          stance: supports
          locator: CBDB:100722
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

# 王恂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恂 | accepted |
| birth.date | 1235年 | accepted |
| death.date | 1281年 | accepted |
| bio.summary | 王恂（1235年—1281年），元人物。籍贯唐縣，身份为曆算家，曾任太史令、太子贊善。（中国历代人物传记资料库 CBDB 100722） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恂（CBDB 100722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100722&o=json)
