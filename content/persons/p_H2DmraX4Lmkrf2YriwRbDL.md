---
schema: wang-person/v1
id: p_H2DmraX4Lmkrf2YriwRbDL
status: active
merged_into: null
display_name: 王瑢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WTVyU6MGTD2jdfAPsPHHVc
        subject_person_id: p_H2DmraX4Lmkrf2YriwRbDL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GfA1YuQT3diUzsM94pSEWm
          claim_id: c_WTVyU6MGTD2jdfAPsPHHVc
          source_id: s_5x5hffMqjocZNxkSD6gcL7
          stance: supports
          locator: CBDB:639444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639444）
          source: &a1
            id: s_5x5hffMqjocZNxkSD6gcL7
            source_type: api_record
            title: 中国历代人物传记资料库：王瑢（CBDB 639444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639444&o=json
            external_identifier: CBDB:639444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h8kiFMSyp1cbFQf9ZTx85Y
        subject_person_id: p_H2DmraX4Lmkrf2YriwRbDL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑢，清人物。籍贯山東省，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 639444）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-p3EPw71A8HmqmYtd_pDgc
          claim_id: c_h8kiFMSyp1cbFQf9ZTx85Y
          source_id: s_5x5hffMqjocZNxkSD6gcL7
          stance: supports
          locator: CBDB:639444
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

# 王瑢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑢 | accepted |
| bio.summary | 王瑢，清人物。籍贯山東省，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 639444） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑢（CBDB 639444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639444&o=json)
