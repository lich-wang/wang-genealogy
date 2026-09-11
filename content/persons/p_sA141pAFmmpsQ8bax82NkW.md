---
schema: wang-person/v1
id: p_sA141pAFmmpsQ8bax82NkW
status: active
merged_into: null
display_name: 王續曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mup7x3Xsox34f71pkmXtow
        subject_person_id: p_sA141pAFmmpsQ8bax82NkW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王續曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zufnCMa2P7eKgaG25RUyfN
          claim_id: c_mup7x3Xsox34f71pkmXtow
          source_id: s_ZyRSjWBhxrLXv5HtF2bu6H
          stance: supports
          locator: CBDB:639883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639883）
          source: &a1
            id: s_ZyRSjWBhxrLXv5HtF2bu6H
            source_type: api_record
            title: 中国历代人物传记资料库：王續曾（CBDB 639883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639883&o=json
            external_identifier: CBDB:639883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FEeQmJXYvGDcTj29F5THYz
        subject_person_id: p_sA141pAFmmpsQ8bax82NkW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王續曾，清人物。籍贯海陽，曾任訓導。（中国历代人物传记资料库 CBDB 639883）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k2hpsfXZKuTbLD6QjwXPSX
          claim_id: c_FEeQmJXYvGDcTj29F5THYz
          source_id: s_ZyRSjWBhxrLXv5HtF2bu6H
          stance: supports
          locator: CBDB:639883
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

# 王續曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王續曾 | accepted |
| bio.summary | 王續曾，清人物。籍贯海陽，曾任訓導。（中国历代人物传记资料库 CBDB 639883） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王續曾（CBDB 639883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639883&o=json)
